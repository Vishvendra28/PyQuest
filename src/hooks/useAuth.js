import { useState, useEffect, useCallback } from 'react'
import { supabase, hasSupabase } from '../lib/supabase.js'

export function useAuth() {
  const [user,        setUser]        = useState(null)
  const [profile,     setProfile]     = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  // Load session on mount
  useEffect(() => {
    if (!hasSupabase) { setAuthLoading(false); return }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
      else setAuthLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
      else { setProfile(null); setAuthLoading(false) }
    })

    return () => subscription.unsubscribe()
  }, [])

  const fetchProfile = async (userId) => {
    const { data } = await supabase.from('profiles').select('id, username, created_at').eq('id', userId).single()
    setProfile(data)
    setAuthLoading(false)
  }

  const signUp = useCallback(async (email, password, username) => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) return { error: error.message }
    if (data.user) {
      await supabase.from('profiles').insert({ id: data.user.id, username })
    }
    return { ok: true }
  }, [])

  const signIn = useCallback(async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return { error: error.message }
    return { ok: true }
  }, [])

  const signInWithGoogle = useCallback(async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    })
    if (error) return { error: error.message }
    return { ok: true }
  }, [])

  const signOut = useCallback(async () => {
    await supabase.auth.signOut()
  }, [])

  const updateUsername = useCallback(async (username) => {
    if (!user) return
    const { error } = await supabase.from('profiles').upsert({ id: user.id, username })
    if (!error) setProfile((p) => ({ ...p, username }))
    return error ? { error: error.message } : { ok: true }
  }, [user])

  return { user, profile, authLoading, signUp, signIn, signInWithGoogle, signOut, updateUsername, hasSupabase }
}
