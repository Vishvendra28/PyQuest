import { useState } from 'react'
import { usePixelAI } from '../hooks/usePixelAI.js'

function B({ children }) { return <strong>{children}</strong> }
function C({ children }) { return <code>{children}</code> }

const EXPLANATIONS = [
  {
    test: /NameError.*name '(.+)' is not defined/,
    emoji: '📦',
    render: (m) => <>
      Python looked for a box called <B>{m[1]}</B> but couldn't find it — like asking for a drawer that was never created.{' '}
      You need to <B>create it first</B>: write <C>{m[1]} = something</C> before the line that uses it.
    </>,
  },
  {
    test: /IndexError.*list index out of range/,
    emoji: '📋',
    render: () => <>
      You tried to grab an item that doesn't exist in your list — like asking for the 10th seat on a 3-seat bus.{' '}
      Python counts from <B>0</B>, so a list with 3 items has positions <C>0</C>, <C>1</C>, <C>2</C> only.{' '}
      Use <C>len(your_list)</C> to check how many items you actually have.
    </>,
  },
  {
    test: /IndentationError/,
    emoji: '↔️',
    render: () => <>
      Python uses spaces to know what belongs <B>inside</B> a block (if / for / def).{' '}
      Add <B>4 spaces</B> (or press Tab) before every line inside the block.{' '}
      All lines in the same block must line up exactly.
    </>,
  },
  {
    test: /TypeError.*can only concatenate str.*int/,
    emoji: '🔧',
    render: () => <>
      You tried to join text and a number directly — Python won't do that automatically.{' '}
      Wrap the number with <C>str()</C> first: <C>name + str(age)</C> or use an f-string: <C>{`f"Hello {'{name}'}, age {'{age}'}"`}</C>.
    </>,
  },
  {
    test: /TypeError/,
    emoji: '🔧',
    render: (m) => <>
      You used the wrong type of thing in an operation. <B>Check what your variables actually contain</B> —{' '}
      maybe a number where text is expected, or text where a list is expected.{' '}
      {m[0].split('\n').pop() ?? ''}
    </>,
  },
  {
    test: /SyntaxError/,
    emoji: '✏️',
    render: () => <>
      Python couldn't read your code — like a sentence with a missing word. Common causes:{' '}
      missing <C>:</C> after <C>if</C> / <C>for</C> / <C>def</C>,{' '}
      unclosed brackets <C>{'( ) [ ] { }'}</C>, or missing quotes around text.
    </>,
  },
  {
    test: /ZeroDivisionError/,
    emoji: '➗',
    render: () => <>
      You divided by zero — that's not allowed in Python (or in maths).{' '}
      Make sure the number you're dividing by can <B>never be 0</B>, or add a check: <C>if divisor != 0:</C>.
    </>,
  },
  {
    test: /KeyError/,
    emoji: '🗝️',
    render: () => <>
      You looked for a key in your dictionary that doesn't exist — like looking up a word that's not in the dictionary.{' '}
      Use <C>.get(key, default)</C> to safely get a value without crashing.
    </>,
  },
  {
    test: /AttributeError/,
    emoji: '🔍',
    render: (m) => {
      const line = m[0].split('\n').find(l => l.includes('has no attribute')) ?? ''
      return <>
        You used a feature that doesn't exist on this type — <B>{line.trim() || 'check the method name'}</B>.{' '}
        Double-check the spelling. Strings have: <C>.upper()</C> <C>.lower()</C> <C>.split()</C> <C>.strip()</C>.
      </>
    },
  },
  {
    test: /TimeoutError/,
    emoji: '⏱️',
    render: () => <>
      Your code ran for more than 8 seconds. This almost always means a <B>loop that never stops</B>.{' '}
      Check your <C>while</C> loops — the condition must become <C>False</C> at some point!
    </>,
  },
  {
    test: /ValueError/,
    emoji: '🎯',
    render: () => <>
      You passed the right <B>type</B> of value, but the <B>value itself</B> was wrong —{' '}
      like trying to convert the word "hello" into a number with <C>int("hello")</C>.{' '}
      Make sure the data matches what the function expects.
    </>,
  },
  {
    test: /RecursionError/,
    emoji: '🌀',
    render: () => <>
      Your function called itself too many times — like two mirrors facing each other going on forever.{' '}
      Make sure your recursive function has a <B>base case</B> that stops the recursion.
    </>,
  },
]

function getExplanation(error) {
  for (const entry of EXPLANATIONS) {
    const m = error.match(entry.test)
    if (m) return { emoji: entry.emoji, node: entry.render(m) }
  }
  return {
    emoji: '🤔',
    node: <>Something went wrong. Read the error message carefully — it tells you the line number and what Python expected. Try fixing that line first!</>,
  }
}

export function PixelBubble({ error, code }) {
  const [question, setQuestion] = useState('')
  const { askPixel, messages, isThinking, aiError, hasKey, reset, remaining } = usePixelAI()

  if (!error) return null
  const { emoji, node } = getExplanation(error)

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
          <div className="pixel-text">{node}</div>
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
            {aiError === 'network'    && "🌐 Couldn't reach the AI service — check your internet connection and try again."}
            {aiError === 'rate_limit' && '⏳ You have used all your questions for today — come back tomorrow!'}
            {aiError === 'api_error'  && '⚠️ AI service is temporarily unavailable — please try again in a moment.'}
            {aiError === 'limit'      && '🐍 You\'ve used all 10 questions for today — come back tomorrow!'}
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
