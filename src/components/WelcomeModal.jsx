import { useState } from 'react'

const INFO_STEPS = [
  {
    icon: '🐍',
    title: 'Welcome to PyQuest!',
    desc: 'Learn Python by doing — write real code, earn XP, level up. No setup needed, everything runs right in your browser.',
  },
  {
    icon: '⚔️',
    title: 'Learn, Challenge & Build',
    desc: 'Follow guided lessons, solve daily challenges to build your streak, and tackle projects when you feel ready.',
  },
  {
    icon: '🏆',
    title: 'Sync & compete',
    desc: 'Earn XP for every lesson and challenge. Sign in to sync progress across devices and climb the global leaderboard.',
  },
]

export function WelcomeModal({ onClose }) {
  const [step, setStep] = useState(0) // 0-2 = info slides, 3 = skill selection

  const handleSkill = (level) => {
    localStorage.setItem('pyquest_skill_level', level)
    onClose(level)
  }

  // ── Info slides ──
  if (step < INFO_STEPS.length) {
    const s      = INFO_STEPS[step]
    const isLast = step === INFO_STEPS.length - 1
    return (
      <div className="modal-backdrop">
        <div className="welcome-modal">
          <div className="welcome-icon">{s.icon}</div>
          <div className="welcome-step-dots">
            {INFO_STEPS.map((_, i) => (
              <div key={i} className={`welcome-dot ${i === step ? 'active' : ''}`} />
            ))}
          </div>
          <h2 className="welcome-title">{s.title}</h2>
          <p className="welcome-desc">{s.desc}</p>
          <div className="welcome-actions">
            {step > 0 && (
              <button className="welcome-back" onClick={() => setStep(step - 1)}>← Back</button>
            )}
            <button
              className="welcome-next"
              onClick={() => isLast ? setStep(INFO_STEPS.length) : setStep(step + 1)}
            >
              {isLast ? "Let's start! 🚀" : 'Next →'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Skill selection ──
  return (
    <div className="modal-backdrop">
      <div className="welcome-modal">
        <div className="welcome-icon">🐍</div>
        <h2 className="welcome-title">Have you coded before?</h2>
        <p className="welcome-desc">This helps us set the right pace for you.</p>
        <div className="skill-level-btns">
          <button className="skill-level-btn skill-beginner" onClick={() => handleSkill('beginner')}>
            <span className="skill-btn-icon">🌱</span>
            <span className="skill-btn-label">Never coded</span>
            <span className="skill-btn-sub">Start from absolute zero</span>
          </button>
          <button className="skill-level-btn skill-some" onClick={() => handleSkill('some')}>
            <span className="skill-btn-icon">🔨</span>
            <span className="skill-btn-label">A little</span>
            <span className="skill-btn-sub">I know some basics</span>
          </button>
          <button className="skill-level-btn skill-advanced" onClick={() => handleSkill('advanced')}>
            <span className="skill-btn-icon">⚡</span>
            <span className="skill-btn-label">Yes, I know Python</span>
            <span className="skill-btn-sub">Skip intro, go to challenges</span>
          </button>
        </div>
        <button className="welcome-back skill-back-btn" onClick={() => setStep(INFO_STEPS.length - 1)}>
          ← Back
        </button>
      </div>
    </div>
  )
}
