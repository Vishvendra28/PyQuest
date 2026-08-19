import { useState, useEffect } from 'react'

const STEPS = [
  {
    selector: '.lesson-panel',
    title: '📖 Learn Panel',
    text: 'This is where each lesson lives. The Learn tab shows guided examples — read it first, then press ▶ Load to try the code. The Practice tab gives you the coding challenge.',
    pos: 'right',
  },
  {
    selector: '.pane-header',
    title: '▶ Run Your Code',
    text: 'Click the green Run button (or press Ctrl+Enter) to execute your Python. Don\'t worry — you can\'t break anything. Just run it!',
    pos: 'bottom',
  },
  {
    selector: '.output-pane',
    title: '📤 Output & Pixel',
    text: 'Your results appear here. Get an error? Pixel 🐍 pops up right below to explain it in plain English. Just ask and they\'ll help!',
    pos: 'top',
  },
]

const PAD = 8

function getTipStyle(rect, pos) {
  if (!rect) return { top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }
  const TIPW = 270
  if (pos === 'right')  return { top: rect.top, left: Math.min(rect.left + rect.width + PAD + 12, window.innerWidth - TIPW - 8) }
  if (pos === 'bottom') return { top: rect.top + rect.height + PAD + 12, left: Math.max(8, Math.min(rect.left, window.innerWidth - TIPW - 8)) }
  if (pos === 'top')    return { bottom: window.innerHeight - rect.top + PAD + 12, left: Math.max(8, Math.min(rect.left, window.innerWidth - TIPW - 8)) }
  return { top: rect.top, left: rect.left + rect.width + PAD + 12 }
}

export function AppTour({ onDone }) {
  const [step, setStep] = useState(0)
  const [rect, setRect] = useState(null)

  useEffect(() => {
    const el = document.querySelector(STEPS[step].selector)
    if (el) {
      const r = el.getBoundingClientRect()
      setRect({ top: r.top, left: r.left, width: r.width, height: r.height })
    } else {
      setRect(null)
    }
  }, [step])

  const cur    = STEPS[step]
  const isLast = step === STEPS.length - 1

  const spotStyle = rect ? {
    top:    rect.top    - PAD,
    left:   rect.left   - PAD,
    width:  rect.width  + PAD * 2,
    height: rect.height + PAD * 2,
  } : null

  const tipStyle = getTipStyle(rect, cur.pos)

  return (
    <>
      <div className="tour-backdrop" onClick={onDone} />
      {spotStyle && <div className="tour-spotlight" style={spotStyle} />}
      <div className="tour-tip" style={{ position: 'fixed', ...tipStyle }}>
        <div className="tour-tip-meta">
          <span className="tour-step-badge">{step + 1} / {STEPS.length}</span>
        </div>
        <div className="tour-tip-title">{cur.title}</div>
        <p className="tour-tip-text">{cur.text}</p>
        <div className="tour-tip-btns">
          <button className="tour-skip-btn" onClick={onDone}>Skip</button>
          <button className="tour-next-btn" onClick={() => isLast ? onDone() : setStep(s => s + 1)}>
            {isLast ? 'Done ✓' : 'Next →'}
          </button>
        </div>
      </div>
    </>
  )
}
