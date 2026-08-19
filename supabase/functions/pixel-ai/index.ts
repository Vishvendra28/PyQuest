import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent'
const DAILY_LIMIT = 10

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS })

  try {
    const apiKey = Deno.env.get('GEMINI_API_KEY')
    if (!apiKey) return new Response('Server misconfigured', { status: 500, headers: CORS })

    // Get user from auth header (optional — anonymous users get IP-based limiting)
    const authHeader = req.headers.get('Authorization')
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    let limitKey: string
    const { data: { user } } = await supabase.auth.getUser(authHeader?.replace('Bearer ', '') ?? '')
    if (user) {
      limitKey = `user:${user.id}`
    } else {
      const ip = req.headers.get('x-forwarded-for') ?? 'unknown'
      limitKey = `ip:${ip}`
    }

    // Check and enforce server-side rate limit
    const today = new Date().toISOString().slice(0, 10)
    const { data: usage } = await supabase
      .from('pixel_usage')
      .select('count')
      .eq('key', limitKey)
      .eq('date', today)
      .single()

    const currentCount = usage?.count ?? 0
    if (currentCount >= DAILY_LIMIT) {
      return new Response(JSON.stringify({ error: 'rate_limit' }), {
        status: 429, headers: { ...CORS, 'Content-Type': 'application/json' },
      })
    }

    // Parse request body
    const { question, code, error: pyError, history } = await req.json()
    if (!question?.trim()) {
      return new Response(JSON.stringify({ error: 'bad_request' }), {
        status: 400, headers: { ...CORS, 'Content-Type': 'application/json' },
      })
    }

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

    const userMessage = [
      pyError ? `The student got this Python error:\n${pyError}` : '',
      code    ? `Their code:\n\`\`\`python\n${String(code).slice(0, 600)}\n\`\`\`` : '',
      `Student's question: ${question}`,
    ].filter(Boolean).join('\n\n')

    const safeHistory = Array.isArray(history) ? history.slice(-6) : []
    const contents = [...safeHistory, { role: 'user', parts: [{ text: userMessage }] }]

    // Call Gemini with the server-side key
    const geminiRes = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: PIXEL_SYSTEM }] },
        contents,
        generationConfig: { maxOutputTokens: 2048, temperature: 0.7 },
      }),
    })

    if (!geminiRes.ok) {
      const status = geminiRes.status
      if (status === 429) return new Response(JSON.stringify({ error: 'rate_limit' }), { status: 429, headers: { ...CORS, 'Content-Type': 'application/json' } })
      return new Response(JSON.stringify({ error: 'api_error' }), { status: 502, headers: { ...CORS, 'Content-Type': 'application/json' } })
    }

    const geminiData = await geminiRes.json()
    const text = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
    if (!text) return new Response(JSON.stringify({ error: 'empty_response' }), { status: 502, headers: { ...CORS, 'Content-Type': 'application/json' } })

    // Increment usage counter server-side
    await supabase.from('pixel_usage').upsert(
      { key: limitKey, date: today, count: currentCount + 1 },
      { onConflict: 'key,date' }
    )

    return new Response(JSON.stringify({ text, remaining: DAILY_LIMIT - currentCount - 1 }), {
      headers: { ...CORS, 'Content-Type': 'application/json' },
    })
  } catch (e) {
    return new Response(JSON.stringify({ error: 'server_error' }), {
      status: 500, headers: { ...CORS, 'Content-Type': 'application/json' },
    })
  }
})
