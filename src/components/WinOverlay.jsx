import { useEffect, useState } from 'react'

export function WinOverlay({ lesson, xpEarned, newLevel, onNext, onClose }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => { const t = requestAnimationFrame(() => setVisible(true)); return () => cancelAnimationFrame(t) }, [])

  return (
    <div className={`win-overlay ${visible ? 'visible' : ''}`} onClick={onClose}>
      <div className="win-card" onClick={(e) => e.stopPropagation()}>
        <div className="win-burst">🎉</div>
        <div className="win-heading">Challenge Complete!</div>
        <div className="win-lesson-name">{lesson.title}</div>

        <div className="win-xp-badge">+{xpEarned} XP</div>
        <div className="win-learned">
          <span className="win-learned-label">You now understand:</span>
          <span className="win-learned-text">{lesson.description}</span>
        </div>

        {newLevel && (
          <div className="win-level-up">
            ⭐ Level up! You're now <strong>Level {newLevel}</strong>!
          </div>
        )}

        <div className="win-actions">
          {onNext ? (
            <button className="btn btn-run" onClick={onNext}>Next Lesson →</button>
          ) : (
            <button className="btn btn-run" onClick={onClose}>🏆 All worlds complete!</button>
          )}
          <button className="btn btn-secondary" onClick={onClose}>Keep coding</button>
        </div>
      </div>
    </div>
  )
}
