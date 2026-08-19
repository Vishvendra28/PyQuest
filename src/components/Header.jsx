export function Header({
  onRun, onStop, isRunning, status,
  xp = 0, level = 1, levelProgress = 0,
  onToggleSidebar,
  activePage, onNavigate,
  user, profile, authLoading, onAuthClick,
}) {
  const statusMap = {
    ready:   { label: 'Ready',    dot: 'green' },
    running: { label: 'Running…', dot: 'blue'  },
    error:   { label: 'Error',    dot: ''      },
  }
  const st = statusMap[status] ?? statusMap.ready
  const xpPct = Math.round(levelProgress * 100)

  const NAV = [
    { id: 'learn',       label: '📚 Learn'      },
    { id: 'challenges',  label: '⚔️ Challenges' },
    { id: 'daily',       label: '🔥 Daily'      },
    { id: 'projects',    label: '🏗️ Projects'   },
    { id: 'leaderboard', label: '🏆 Ranks'       },
  ]

  return (
    <header className="header-wrap">
      <div className="header">
        {activePage === 'learn' && (
          <button className="sidebar-toggle" onClick={onToggleSidebar} title="Toggle lessons">
            ☰
          </button>
        )}

        <div className="logo">
          <span className="logo-icon">🐍</span>
          <span className="logo-text">Py<span className="quest">Quest</span></span>
        </div>

        {/* Nav tabs */}
        <nav className="header-nav">
          {NAV.map((n) => (
            <button
              key={n.id}
              className={`nav-tab ${activePage === n.id ? 'active' : ''}`}
              onClick={() => onNavigate(n.id)}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="header-spacer" />

        <div className="level-badge">
          <span className="level-label">Lv</span>
          <span className="level-num">{level}</span>
          <div className="xp-mini">
            <div className="xp-mini-fill" style={{ width: `${xpPct}%` }} />
          </div>
          <span className="level-label">{xp} xp</span>
        </div>

        <div className="status-pill">
          <span className={`s-dot ${st.dot}`} />
          {st.label}
        </div>

        {activePage === 'learn' && (
          isRunning ? (
            <button className="btn btn-stop" onClick={onStop}>⏹ Stop</button>
          ) : (
            <button className="btn btn-run" onClick={onRun} title="Ctrl+Enter">
              ▶ Run
            </button>
          )
        )}

        <button className="auth-header-btn" onClick={onAuthClick} title={user ? 'Account' : 'Sign in'}>
          {authLoading ? '…' : user
            ? (profile?.username?.[0] ?? user.email[0]).toUpperCase()
            : '👤'}
        </button>
      </div>
    </header>
  )
}
