import { useState, useCallback, useRef } from 'react'

const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent'

const PIXEL_SYSTEM = `You are Pixel, a friendly Python snake companion who helps complete beginners learn Python.
Your job: explain Python errors and concepts in the simplest possible way.
Rules:
- Explain like you're talking to a curious 10-year-old
- Keep responses SHORT — 2 to 4 sentences max
- Use fun real-world analogies (cooking, games, toys)
- Be warm, encouraging, never condescending
- If showing code, show only 1-2 lines maximum
- End with one actionable tip: what to try next
- IMPORTANT: If the question is not related to Python programming, coding, or the error shown, respond ONLY with: "Hiss! I only help with Python questions! 🐍 Try asking me about your error or code instead."`

const DAILY_LIMIT = 10
const STORAGE_KEY = 'pixel_usage'

function getDailyUsage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { date: '', count: 0 }
    return JSON.parse(raw)
  } catch {
    return { date: '', count: 0 }
  }
}

function incrementDailyUsage() {
  const today = new Date().toISOString().slice(0, 10)
  const usage = getDailyUsage()
  const count = usage.date === today ? usage.count + 1 : 1
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: today, count }))
  return count
}

function getRemainingQuestions() {
  const today = new Date().toISOString().slice(0, 10)
  const usage = getDailyUsage()
  if (usage.date !== today) return DAILY_LIMIT
  return Math.max(0, DAILY_LIMIT - usage.count)
}

export function usePixelAI() {
  const [messages,   setMessages]  = useState([])   // { role: 'user'|'pixel', text }
  const [isThinking, setIsThinking] = useState(false)
  const [aiError,    setAiError]    = useState(null)
  const [remaining,  setRemaining]  = useState(() => getRemainingQuestions())
  const historyRef = useRef([])   // Gemini API format: [{role, parts}]

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY

  const askPixel = useCallback(async (question, code, error) => {
    if (!apiKey) { setAiError('no_key'); return }
    if (getRemainingQuestions() <= 0) { setAiError('limit'); return }

    setIsThinking(true)
    setAiError(null)

    const userMessage = [
      error  ? `The student got this Python error:\n${error}` : '',
      code   ? `Their code:\n\`\`\`python\n${code.slice(0, 600)}\n\`\`\`` : '',
      `Student's question: ${question}`,
    ].filter(Boolean).join('\n\n')

    // Add to UI messages
    setMessages(prev => [...prev, { role: 'user', text: question }])

    // Build history for API (keep last 6 turns to stay within token limits)
    const newEntry = { role: 'user', parts: [{ text: userMessage }] }
    const history = [...historyRef.current, newEntry].slice(-6)

    try {
      const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: PIXEL_SYSTEM }] },
          contents: history,
          generationConfig: { maxOutputTokens: 2048, temperature: 0.7 },
        }),
      })
      if (!res.ok) {
        const status = res.status
        let detail = ''
        try { const j = await res.json(); detail = j?.error?.message ?? '' } catch {}
        if (status === 401 || status === 403) throw new Error('invalid_key')
        if (status === 429) throw new Error('rate_limit')
        throw new Error(`api_error:${status}:${detail}`)
      }
      const data = await res.json()
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
      if (!text) throw new Error('Empty response')

      // Update history ref with both user + model turns
      historyRef.current = [
        ...history,
        { role: 'model', parts: [{ text }] },
      ].slice(-6)

      const newCount = incrementDailyUsage()
      setRemaining(Math.max(0, DAILY_LIMIT - newCount))
      setMessages(prev => [...prev, { role: 'pixel', text: text.trim() }])
    } catch (err) {
      const msg = err.message
      if (msg === 'invalid_key') setAiError('invalid_key')
      else if (msg === 'rate_limit') setAiError('rate_limit')
      else if (msg.startsWith('api_error:')) setAiError('api_error')
      else setAiError('network')
    } finally {
      setIsThinking(false)
    }
  }, [apiKey])

  const reset = useCallback(() => {
    setMessages([])
    setAiError(null)
    setIsThinking(false)
    historyRef.current = []
  }, [])

  return { askPixel, messages, isThinking, aiError, hasKey: !!apiKey, reset, remaining }
}
