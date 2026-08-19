// @refresh reset
import { useState, useCallback, useMemo } from 'react'
import { ALL_LESSONS, xpToLevel, isLessonUnlocked } from '../data/curriculum.js'

const KEY = 'pyquest_progress'

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) ?? '{}')
    return {
      xp:               s.xp               ?? 0,
      completedLessons: new Set(s.completedLessons ?? []),
      currentLessonId:  s.currentLessonId  ?? ALL_LESSONS[0].id,
      solvedChallenges: new Set(s.solvedChallenges ?? []),
    }
  } catch {
    return { xp: 0, completedLessons: new Set(), currentLessonId: ALL_LESSONS[0].id, solvedChallenges: new Set() }
  }
}

function persist(state) {
  localStorage.setItem(KEY, JSON.stringify({
    xp:               state.xp,
    completedLessons: [...state.completedLessons],
    currentLessonId:  state.currentLessonId,
    solvedChallenges: [...state.solvedChallenges],
  }))
}

// ── Streak helpers ───────────────────────────────────────────────────────────
const STREAK_KEY = 'pyquest_streak'

export function loadStreak() {
  try {
    return JSON.parse(localStorage.getItem(STREAK_KEY) ?? '{}')
  } catch { return {} }
}

export function recordStreakActivity() {
  const today = new Date().toISOString().slice(0, 10)
  const s = loadStreak()
  if (s.lastDate === today) return s

  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  const streak = s.lastDate === yesterday ? (s.streak ?? 0) + 1 : 1
  const longest = Math.max(streak, s.longest ?? 0)
  const next = { lastDate: today, streak, longest }
  localStorage.setItem(STREAK_KEY, JSON.stringify(next))
  return next
}

export function useProgress() {
  const [prog, setProg] = useState(load)

  const completeLesson = useCallback((lessonId, xpEarned) => {
    setProg((prev) => {
      if (prev.completedLessons.has(lessonId)) return prev
      const completedLessons = new Set([...prev.completedLessons, lessonId])
      const xp = prev.xp + xpEarned
      const next = { ...prev, xp, completedLessons }
      persist(next)
      recordStreakActivity()
      return next
    })
  }, [])

  const solveChallenge = useCallback((challengeId, xpEarned) => {
    setProg((prev) => {
      if (prev.solvedChallenges.has(challengeId)) return prev
      const solvedChallenges = new Set([...prev.solvedChallenges, challengeId])
      const xp = prev.xp + xpEarned
      const next = { ...prev, xp, solvedChallenges }
      persist(next)
      recordStreakActivity()
      return next
    })
  }, [])

  const setCurrentLesson = useCallback((lessonId) => {
    setProg((prev) => {
      const next = { ...prev, currentLessonId: lessonId }
      persist(next)
      return next
    })
  }, [])

  const loadRemote = useCallback((remote) => {
    setProg((prev) => {
      const xp = Math.max(prev.xp, remote.xp ?? 0)
      const completedLessons = new Set([...prev.completedLessons, ...(remote.completed_lessons ?? [])])
      const solvedChallenges = new Set([...prev.solvedChallenges, ...(remote.solved_challenges ?? [])])
      const next = { ...prev, xp, completedLessons, solvedChallenges }
      persist(next)
      return next
    })
  }, [])

  const levelInfo = useMemo(() => xpToLevel(prog.xp), [prog.xp])

  const isUnlocked = useCallback(
    (lessonId) => isLessonUnlocked(lessonId, prog.completedLessons),
    [prog.completedLessons]
  )

  return {
    xp:               prog.xp,
    completedLessons: prog.completedLessons,
    currentLessonId:  prog.currentLessonId,
    solvedChallenges: prog.solvedChallenges,
    levelInfo,
    completeLesson,
    solveChallenge,
    setCurrentLesson,
    loadRemote,
    isUnlocked,
    streak:           loadStreak(),
  }
}
