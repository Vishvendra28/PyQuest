import { useState } from 'react'
import { usePixelAI } from '../hooks/usePixelAI.js'

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function b(text) { return `<strong>${text}</strong>` }
function c(text) { return `<code>${esc(text)}</code>` }

const EXPLANATIONS = [
  {
    test: /NameError.*name '(.+)' is not defined/,
    emoji: '📦',
    html: (m) =>
      `Python looked for a box called ${b(esc(m[1]))} but couldn't find it — like asking for a drawer that was never created. ` +
      `You need to ${b('create it first')}: write ${c(m[1] + ' = something')} before the line that uses it.`,
  },
  {
    test: /IndexError.*list index out of range/,
    emoji: '📋',
    html: () =>
      `You tried to grab an item that doesn't exist in your list — like asking for the 10th seat on a 3-seat bus. ` +
      `Python counts from ${b('0')}, so a list with 3 items has positions ${c('0')}, ${c('1')}, ${c('2')} only. ` +
      `Use ${c('len(your_list)')} to check how many items you actually have.`,
  },
  {
    test: /IndentationError/,
    emoji: '↔️',
    html: () =>
      `Python uses spaces to know what belongs ${b('inside')} a block (if / for / def). ` +
      `Add ${b('4 spaces')} (or press Tab) before every line inside the block. ` +
      `All lines in the same block must line up exactly.`,
  },
  {
    test: /TypeError.*can only concatenate str.*int/,
    emoji: '🔧',
    html: () =>
      `You tried to join text and a number directly — Python won't do that automatically. ` +
      `Wrap the number with ${c('str()')} first: ${c('name + str(age)')} or use an f-string: ${c('f"Hello {name}, age {age}"')}.`,
  },
  {
    test: /TypeError/,
    emoji: '🔧',
    html: (m) =>
      `You used the wrong type of thing in an operation. ${b('Check what your variables actually contain')} — ` +
      `maybe a number where text is expected, or text where a list is expected. ${esc(m[0].split('\n').pop() ?? '')}`,
  },
  {
    test: /SyntaxError/,
    emoji: '✏️',
    html: () =>
      `Python couldn't read your code — like a sentence with a missing word. Common causes: ` +
      `missing ${c(':')} after ${c('if')} / ${c('for')} / ${c('def')}, ` +
      `unclosed brackets ${c('( ) [ ] { }')}, or missing quotes around text.`,
  },
  {
    test: /ZeroDivisionError/,
    emoji: '➗',
    html: () =>
      `You divided by zero — that's not allowed in Python (or in maths). ` +
      `Make sure the number you're dividing by can ${b('never be 0')}, or add a check: ${c('if divisor != 0:')}.`,
  },
  {
    test: /KeyError/,
    emoji: '🗝️',
    html: () =>
      `You looked for a key in your dictionary that doesn't exist — like looking up a word that's not in the dictionary. ` +
      `Use ${c('.get(key, default)')} to safely get a value without crashing.`,
  },
  {
    test: /AttributeError/,
    emoji: '🔍',
    html: (m) => {
      const line = m[0].split('\n').find(l => l.includes("has no attribute")) ?? ''
      return `You used a feature that doesn't exist on this type — ${b(esc(line.trim() || 'check the method name'))}. ` +
             `Double-check the spelling. Strings have: ${c('.upper()')} ${c('.lower()')} ${c('.split()')} ${c('.strip()')}.`
    },
  },
  {
    test: /TimeoutError/,
    emoji: '⏱️',
    html: () =>
      `Your code ran for more than 8 seconds. This almost always means a ${b('loop that never stops')}. ` +
      `Check your ${c('while')} loops — the condition must become ${c('False')} at some point!`,
  },
  {
    test: /ValueError/,
    emoji: '🎯',
    html: () =>
      `You passed the right ${b('type')} of value, but the ${b('value itself')} was wrong — ` +
      `like trying to convert the word "hello" into a number with ${c('int("hello")')}. ` +
      `Make sure the data matches what the function expects.`,
  },
  {
    test: /RecursionError/,
    emoji: '🌀',
    html: () =>
      `Your function called itself too many times — like two mirrors facing each other going on forever. ` +
      `Make sure your recursive function has a ${b('base case')} that stops the recursion.`,
  },
]

function getExplanation(error) {
  for (const entry of EXPLANATIONS) {
    const m = error.match(entry.test)
    if (m) return { emoji: entry.emoji, html: entry.html(m) }
  }
  return {
    emoji: '🤔',
    html: `Something went wrong. Read the error message carefully — it tells you the line number and what Python expected. Try fixing that line first!`,
  }
}

export function PixelBubble({ error, code }) {
  const [question, setQuestion] = useState('')
  const { askPixel, messages, isThinking, aiError, hasKey, reset, remaining } = usePixelAI()

  if (!error) return null
  const { emoji, html } = getExplanation(error)

  const handleAsk = () => {
    if (!question.trim()) return
    askPixel(question.trim(), code, error)
    setQuestion('')
  }

  return (
    <div className="pixel-section">
      {/* Pre-written ELI5 explanation */}
      <div className="pixel-bubble">
        <div className="pixel-avatar">{emoji}</div>
        <div>
          <div className="pixel-says">PIXEL SAYS</div>
          <div className="pixel-text" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>

      {/* Conversation */}
      <div className="pixel-ask">
        {/* Message history */}
        {messages.length > 0 && (
          <div className="pixel-history">
            {messages.map((msg, i) => (
              <div key={i} className={`pixel-msg pixel-msg-${msg.role}`}>
                <div className="pixel-avatar-sm">{msg.role === 'user' ? '👤' : '✨'}</div>
                <div>
                  <div className="pixel-says">{msg.role === 'user' ? 'YOU' : 'PIXEL AI'}</div>
                  <div className="pixel-ai-text">{msg.text}</div>
                </div>
              </div>
            ))}
            {messages.length > 0 && (
              <button className="pixel-clear" onClick={reset}>Clear chat</button>
            )}
          </div>
        )}

        {isThinking && (
          <div className="pixel-thinking">
            <div className="pixel-avatar-sm">🐍</div>
            <div className="pixel-dots"><span/><span/><span/></div>
            <span className="pixel-thinking-text">Pixel is thinking…</span>
          </div>
        )}

        {aiError && (
          <div className="pixel-ai-error">
            {aiError === 'no_key'      && '💡 Add VITE_GEMINI_API_KEY to your .env file to enable AI answers.'}
            {aiError === 'invalid_key' && '🔑 API key looks wrong. Check your .env file and restart the dev server.'}
            {aiError === 'network'     && "🌐 Couldn't reach Gemini — check your internet connection and try again."}
            {aiError === 'rate_limit'  && '⏳ Gemini API rate limit hit — wait a minute and try again.'}
            {(aiError === 'api_error' || aiError?.startsWith('api_error:')) && '⚠️ Gemini API error — your API key may be invalid or expired. Check VITE_GEMINI_API_KEY in .env.'}
            {aiError === 'limit'       && '🐍 You\'ve used all 10 questions for today — come back tomorrow!'}
          </div>
        )}

        {/* Input row — always visible */}
        <div className="pixel-ask-label">
          {messages.length === 0 ? 'Still confused? Ask Pixel anything 👇' : 'Follow up…'}
        </div>
        <div className="pixel-ask-row">
          <input
            className="pixel-ask-input"
            type="text"
            placeholder="e.g. Why does Python need quotes around text?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
            maxLength={200}
            disabled={remaining <= 0 || isThinking}
          />
          <button
            className="pixel-ask-btn"
            onClick={handleAsk}
            disabled={!question.trim() || !hasKey || remaining <= 0 || isThinking}
            title={!hasKey ? 'Add VITE_GEMINI_API_KEY to .env to enable AI' : ''}
          >
            Ask ✨
          </button>
        </div>
        {hasKey && remaining > 0 && (
          <div className="pixel-quota">{remaining} question{remaining !== 1 ? 's' : ''} left today</div>
        )}
        {hasKey && remaining <= 0 && (
          <div className="pixel-ai-error">🐍 You've used all 10 questions for today — come back tomorrow!</div>
        )}
        {!hasKey && (
          <div className="pixel-no-key">
            💡 To enable AI answers: add your free Gemini API key to <code>.env</code> as <code>VITE_GEMINI_API_KEY=your_key</code>
          </div>
        )}
      </div>
    </div>
  )
}
