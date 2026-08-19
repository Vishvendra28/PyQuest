import { useState, useCallback, useRef } from 'react'
import { supabase } from '../lib/supabase.js'

const DAILY_LIMIT = 10

export function usePixelAI() {
  const [messages,   setMessages]  = useState([])
  const [isThinking, setIsThinking] = useState(false)
  const [aiError,    setAiError]    = useState(null)
  const [remaining,  setRemaining]  = useState(DAILY_LIMIT)
  const historyRef = useRef([])

  const askPixel = useCallback(async (question, code, error) => {
    setIsThinking(true)
    setAiError(null)

    setMessages(prev => [...prev, { role: 'user', text: question }])

    try {
      const { data: { session } } = await supabase.auth.getSession()

      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/pixel-ai`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY,
            ...(session?.access_token ? { 'Authorization': `Bearer ${session.access_token}` } : {}),
          },
          body: JSON.stringify({
            question,
            code: code?.slice(0, 600) ?? '',
            error: error ?? '',
            history: historyRef.current,
          }),
        }
      )

      const data = await res.json()

      if (!res.ok) {
        if (data.error === 'rate_limit' || res.status === 429) throw new Error('rate_limit')
        throw new Error(`api_error:${res.status}`)
      }

      const text = data.text ?? ''
      if (!text) throw new Error('empty')

      historyRef.current = [
        ...historyRef.current,
        { role: 'user',  parts: [{ text: question }] },
        { role: 'model', parts: [{ text }] },
      ].slice(-6)

      if (typeof data.remaining === 'number') setRemaining(data.remaining)
      setMessages(prev => [...prev, { role: 'pixel', text: text.trim() }])
    } catch (err) {
      const msg = err.message
      if (msg === 'rate_limit') setAiError('rate_limit')
      else if (msg.startsWith('api_error:')) setAiError('api_error')
      else setAiError('network')
    } finally {
      setIsThinking(false)
    }
  }, [])

  const reset = useCallback(() => {
    setMessages([])
    setAiError(null)
    setIsThinking(false)
    historyRef.current = []
  }, [])

  return { askPixel, messages, isThinking, aiError, hasKey: true, reset, remaining }
}
