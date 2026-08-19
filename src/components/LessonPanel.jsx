import { useState, useEffect } from 'react'

function getPartialHint(hint) {
  if (!hint) return ''
  const lines = hint.split('\n')
  return lines.slice(0, Math.ceil(lines.length / 2)).join('\n')
}

function ThreeLevelHint({ lesson }) {
  const [level, setLevel] = useState(0)

  if (!lesson.hint && !lesson.nudge) return null

  const defaultNudge = 'Look at the Learn tab example again. Can you spot the pattern and apply it to the challenge?'
  const nudgeText = lesson.nudge || defaultNudge

  return (
    <div className="hint-section">
      {level === 0 && (
        <button className="hint-btn" onClick={() => setLevel(1)}>💡 Need a hint?</button>
      )}
      {level >= 1 && (
        <div className="hint-block hint-nudge">
          <div className="hint-level-label">💬 Nudge</div>
          <p className="hint-nudge-text">{nudgeText}</p>
          {level === 1 && lesson.hint && (
            <button className="hint-more-btn" onClick={() => setLevel(2)}>Still stuck? Show me more →</button>
          )}
        </div>
      )}
      {level >= 2 && lesson.hint && (
        <div className="hint-block hint-partial">
          <div className="hint-level-label">🔍 Starting point</div>
          <pre className="hint-code">{getPartialHint(lesson.hint)}</pre>
          {level === 2 && (
            <button className="hint-more-btn hint-answer-btn" onClick={() => setLevel(3)}>
              ⚠️ Show full answer
            </button>
          )}
        </div>
      )}
      {level >= 3 && lesson.hint && (
        <div className="hint-block hint-full">
          <div className="hint-level-label">📖 Full answer</div>
          <pre className="hint-code">{lesson.hint}</pre>
        </div>
      )}
    </div>
  )
}

function HighlightedCode({ code, activeLines }) {
  const lines = code.split('\n')
  return (
    <pre className="step-code step-code-hl">
      {lines.map((line, i) => (
        <span key={i} className={`cl ${activeLines.includes(i) ? 'cl-active' : 'cl-dim'}`}>
          {line || ' '}{'\n'}
        </span>
      ))}
    </pre>
  )
}

function LineStepper({ code, lineHighlights, onDone }) {
  const [hlStep, setHlStep] = useState(0)
  const current = lineHighlights[hlStep]
  const isLast  = hlStep === lineHighlights.length - 1

  return (
    <div className="line-stepper">
      <HighlightedCode code={code} activeLines={current.lines} />
      <div className="line-note">
        <span className="line-note-badge">{hlStep + 1} / {lineHighlights.length}</span>
        <span className="line-note-text">{current.note}</span>
      </div>
      <div className="line-stepper-btns">
        {hlStep > 0 && (
          <button className="btn btn-secondary" onClick={() => setHlStep(h => h - 1)}>← Back</button>
        )}
        {!isLast && (
          <button className="btn btn-secondary" onClick={() => setHlStep(h => h + 1)}>Next →</button>
        )}
        <button className="btn btn-run" onClick={onDone}>
          {isLast ? 'Got it ✓' : 'Skip →'}
        </button>
      </div>
    </div>
  )
}

export function LessonPanel({ lesson, isCompleted, mode, onSwitchMode, onLoadExample, isBeginnerMode, lastRunOk }) {
  const [step,        setStep]        = useState(0)
  const [stepperDone, setStepperDone] = useState(false)
  const [hasRunOnce,  setHasRunOnce]  = useState(false)

  // Latch: once run successfully, remember it for this lesson session
  useEffect(() => {
    if (lastRunOk) setHasRunOnce(true)
  }, [lastRunOk])

  const steps = lesson.tutorial ?? []
  const cur   = steps[step] ?? steps[0]

  const hasLineHighlights = (cur.lineHighlights?.length ?? 0) > 0

  // Beginner mode with line highlights — run first, THEN explain
  const showRunFirst = isBeginnerMode && hasLineHighlights && !hasRunOnce && !stepperDone
  const showStepper  = isBeginnerMode && hasLineHighlights && hasRunOnce  && !stepperDone
  const showNormal   = !showRunFirst && !showStepper && !stepperDone

  const handleStepperDone = () => {
    setStepperDone(true)
    // Code is already in editor from initial load — no need to reload
  }

  const goToTutorialStep = (i) => {
    setStep(i)
    setStepperDone(false)
  }

  return (
    <div className={`lesson-panel ${mode}`} style={{ '--wc': lesson.worldColor }}>

      {/* ── Tab bar ── */}
      <div className="lesson-tabs">
        <button className={`lesson-tab ${mode === 'learn' ? 'active' : ''}`} onClick={() => onSwitchMode('learn')}>
          📖 Learn
        </button>
        <button className={`lesson-tab ${mode === 'practice' ? 'active' : ''}`} onClick={() => onSwitchMode('practice')}>
          🎯 Practice
        </button>
        <div className="lesson-tab-meta">
          <span className="lesson-world-badge">{lesson.worldEmoji} {lesson.worldName}</span>
          <span className="lesson-title-sm"> · {lesson.title}</span>
          {isCompleted && <span className="done-chip">✅</span>}
        </div>
      </div>

      {/* ── Learn tab ── */}
      {mode === 'learn' && cur && (
        <div className="learn-body">
          {steps.length > 1 && (
            <div className="step-nav">
              {steps.map((_, i) => (
                <button key={i} className={`step-pip ${i === step ? 'active' : ''}`} onClick={() => goToTutorialStep(i)} />
              ))}
              <span className="step-count">Step {step + 1} / {steps.length}</span>
            </div>
          )}

          <h3 className="step-heading">{cur.heading}</h3>
          <p className="step-text">{cur.text}</p>

          {/* Beginner mode, run first prompt */}
          {showRunFirst && (
            <div className="run-first-prompt">
              <div className="run-first-icon">▶</div>
              <div className="run-first-text">
                <strong>Press ▶ Run in the header</strong> — just see what happens. We'll explain it right after.
              </div>
            </div>
          )}

          {/* Stepper — appears after first successful run */}
          {showStepper && (
            <>
              <div className="stepper-intro">✅ Nice! You ran it. Now let's break down what happened:</div>
              <LineStepper
                code={cur.code}
                lineHighlights={cur.lineHighlights}
                onDone={handleStepperDone}
              />
            </>
          )}

          {/* Normal code example (non-beginner or no line highlights) */}
          {showNormal && (
            <>
              <div className="step-example">
                <div className="step-example-top">
                  <span className="example-label">📄 Example — click to load &amp; run it</span>
                  <button className="load-btn" onClick={() => onLoadExample(cur.code)}>▶ Load</button>
                </div>
                <pre className="step-code">{cur.code}</pre>
              </div>

              {cur.modifyPrompt && (
                <div className="modify-step">
                  <span className="modify-icon">✏️</span>
                  <div>
                    <div className="modify-label">Now try modifying it:</div>
                    <div className="modify-text">{cur.modifyPrompt}</div>
                  </div>
                </div>
              )}

              <div className="learn-footer">
                {step < steps.length - 1 ? (
                  <button className="btn btn-secondary" onClick={() => goToTutorialStep(step + 1)}>
                    Next →
                  </button>
                ) : (
                  <button className="btn btn-run practice-cta" onClick={() => onSwitchMode('practice')}>
                    Ready? Try the challenge →
                  </button>
                )}
              </div>
            </>
          )}

          {/* After stepper: modify prompt + CTA */}
          {stepperDone && (
            <div className="learn-footer" style={{ marginTop: '1rem' }}>
              {cur.modifyPrompt && (
                <div className="modify-step">
                  <span className="modify-icon">✏️</span>
                  <div>
                    <div className="modify-label">Now try modifying it:</div>
                    <div className="modify-text">{cur.modifyPrompt}</div>
                  </div>
                </div>
              )}
              <button className="btn btn-run practice-cta" onClick={() => onSwitchMode('practice')}>
                Ready? Try the challenge →
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── Practice tab ── */}
      {mode === 'practice' && (
        <div className="practice-body">
          <p className="lesson-desc">{lesson.description}</p>
          <div className="lesson-challenge-box">
            <span className="challenge-label">🎯 Challenge</span>
            <p className="challenge-text">{lesson.challenge}</p>
          </div>
          <ThreeLevelHint lesson={lesson} />
          <button className="btn btn-secondary back-to-learn-btn" onClick={() => onSwitchMode('learn')}>
            ← Back to lesson
          </button>
        </div>
      )}
    </div>
  )
}
