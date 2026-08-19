import { WORLDS } from '../data/curriculum.js'

const DIFF_BADGE = { beginner: '🌱', intermediate: '🔨', advanced: '⚡' }

export function Sidebar({ currentLessonId, completedLessons, isUnlocked, onSelectLesson, isOpen, onClose, isBeginnerMode, onToggleMode, onReplayIntro }) {
  const totalLessons    = WORLDS.reduce((n, w) => n + w.lessons.length, 0)
  const completedCount  = completedLessons.size

  return (
    <>
      {isOpen && <div className="sidebar-backdrop" onClick={onClose} />}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">📚 Worlds</span>
          <span className="sidebar-progress">{completedCount} / {totalLessons} lessons</span>
        </div>

        <div className="sidebar-scroll">
          {WORLDS.map((world) => {
            const firstLessonId = world.lessons[0]?.id
            const worldUnlocked = !firstLessonId || isUnlocked(firstLessonId)
            const worldDone     = world.lessons.every((l) => completedLessons.has(l.id))

            return (
              <div key={world.id} className={`world-section ${!worldUnlocked ? 'world-locked' : ''}`}>
                <div className="world-heading" style={{ color: worldUnlocked ? world.color : 'var(--muted)' }}>
                  <span>{worldUnlocked ? world.emoji : '🔒'}</span>
                  <div className="world-heading-info">
                    <span className="world-name">{world.name}</span>
                    {world.subtitle && (
                      <span className="world-subtitle">{world.subtitle}</span>
                    )}
                  </div>
                  {world.difficulty && (
                    <span className="world-diff-badge" title={world.difficulty}>
                      {DIFF_BADGE[world.difficulty] ?? ''}
                    </span>
                  )}
                  {worldDone && <span className="world-done-chip">✅</span>}
                </div>

                {!worldUnlocked ? (
                  <div className="world-locked-msg">Complete the previous world to unlock</div>
                ) : (
                  world.lessons.map((lesson) => {
                    const done     = completedLessons.has(lesson.id)
                    const active   = lesson.id === currentLessonId
                    const unlocked = isUnlocked(lesson.id)

                    return (
                      <button
                        key={lesson.id}
                        className={`lesson-item ${active ? 'active' : ''} ${done ? 'done' : ''} ${!unlocked ? 'locked' : ''}`}
                        onClick={() => unlocked && onSelectLesson(lesson.id)}
                        disabled={!unlocked}
                        style={{ '--wc': world.color }}
                      >
                        <span className="lesson-icon">
                          {done ? '✅' : unlocked ? '⭕' : '🔒'}
                        </span>
                        <span className="lesson-name">{lesson.title}</span>
                        <span className="lesson-xp-tag">+{lesson.xp}</span>
                      </button>
                    )
                  })
                )}
              </div>
            )
          })}
        </div>

        <div className="sidebar-footer">
          <button className="sidebar-mode-btn" onClick={onToggleMode}>
            {isBeginnerMode ? '🌱 Beginner mode' : '⚡ Advanced mode'}
          </button>
          <button className="sidebar-replay-btn" onClick={onReplayIntro}>↺ Replay intro</button>
        </div>
      </aside>
    </>
  )
}
