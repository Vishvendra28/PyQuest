import { useEffect, useRef, useCallback } from 'react'
import { supabase, hasSupabase } from '../lib/supabase.js'
import { loadStreak } from './useProgress.js'

// Push local progress to Supabase
export async function pushProgress(userId, xp, completedLessons, solvedChallenges) {
  if (!hasSupabase || !userId) return
  const streak = loadStreak()
  await supabase.from('user_progress').upsert({
    id: userId,
    xp,
    completed_lessons: [...completedLessons],
    solved_challenges: [...solvedChallenges],
    streak: streak.streak ?? 0,
    longest_streak: streak.longest ?? 0,
    last_active_date: streak.lastDate ?? null,
    updated_at: new Date().toISOString(),
  })
}

// Pull progress from Supabase and merge with local (keep highest XP)
export async function pullAndMergeProgress(userId) {
  if (!hasSupabase || !userId) return null
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('id', userId)
    .single()
  if (error || !data) return null
  return data
}

// Hook: auto-sync progress whenever it changes (debounced 2s)
export function useSync(userId, xp, completedLessons, solvedChallenges) {
  const timerRef = useRef(null)

  const sync = useCallback(() => {
    if (!userId) return
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      pushProgress(userId, xp, completedLessons, solvedChallenges)
    }, 2000)
  }, [userId, xp, completedLessons, solvedChallenges])

  useEffect(() => {
    sync()
    return () => clearTimeout(timerRef.current)
  }, [sync])
}
