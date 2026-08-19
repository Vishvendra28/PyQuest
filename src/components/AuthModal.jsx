import { useState } from 'react'

export function AuthModal({ onClose, auth }) {
  const [tab,      setTab]      = useState('signin')
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState(null)
  const [success,  setSuccess]  = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    if (tab === 'signup') {
      if (!username.trim()) { setError('Username is required'); setLoading(false); return }
      const result = await auth.signUp(email, password, username.trim())
      if (result.error) setError(result.error)
      else setSuccess('Account created! Check your email to confirm, then sign in.')
    } else {
      const result = await auth.signIn(email, password)
      if (result.error) setError(result.error)
      else onClose()
    }
    setLoading(false)
  }

  const handleGoogle = async () => {
    setLoading(true)
    const result = await auth.signInWithGoogle()
    if (result.error) { setError(result.error); setLoading(false) }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose}>✕</button>

        <div className="auth-logo">🐍</div>
        <h2 className="auth-title">
          {tab === 'signin' ? 'Welcome back!' : 'Join PyQuest'}
        </h2>
        <p className="auth-sub">
          {tab === 'signin'
            ? 'Sign in to sync your progress across devices'
            : 'Create an account to save your progress and compete globally'}
        </p>

        <div className="auth-tabs">
          <button className={`auth-tab ${tab === 'signin' ? 'active' : ''}`} onClick={() => { setTab('signin'); setError(null); setSuccess(null) }}>Sign In</button>
          <button className={`auth-tab ${tab === 'signup' ? 'active' : ''}`} onClick={() => { setTab('signup'); setError(null); setSuccess(null) }}>Sign Up</button>
        </div>

        {success ? (
          <div className="auth-success">{success}</div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            {tab === 'signup' && (
              <div className="auth-field">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="PythonNinja42"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  maxLength={20}
                  required
                />
              </div>
            )}
            <div className="auth-field">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="auth-field">
              <label>Password</label>
              <input
                type="password"
                placeholder={tab === 'signup' ? 'At least 6 characters' : '••••••••'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>

            {error && <div className="auth-error">{error}</div>}

            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? '⏳ Please wait…' : tab === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        )}

        <div className="auth-divider"><span>or</span></div>

        <button className="auth-google" onClick={handleGoogle} disabled={loading}>
          <span className="auth-google-icon">G</span>
          Continue with Google
        </button>

        <p className="auth-privacy">Your progress is always saved locally too. Auth is optional.</p>
      </div>
    </div>
  )
}

export function UserMenu({ user, profile, onSignOut, onProfile }) {
  const [open, setOpen] = useState(false)
  const initial = profile?.username?.[0]?.toUpperCase() ?? user?.email?.[0]?.toUpperCase() ?? '?'

  return (
    <div className="user-menu-wrap">
      <button className="user-avatar-btn" onClick={() => setOpen((o) => !o)} title="Account">
        {initial}
      </button>
      {open && (
        <div className="user-dropdown">
          <div className="user-dropdown-name">{profile?.username ?? user?.email}</div>
          <div className="user-dropdown-email">{profile?.username ? user?.email : ''}</div>
          <hr className="user-dropdown-divider" />
          <button className="user-dropdown-item" onClick={() => { onProfile(); setOpen(false) }}>⚙️ Profile</button>
          <button className="user-dropdown-item danger" onClick={() => { onSignOut(); setOpen(false) }}>← Sign Out</button>
        </div>
      )}
    </div>
  )
}

export function ProfileModal({ user, profile, auth, onClose }) {
  const [username, setUsername] = useState(profile?.username ?? '')
  const [loading,  setLoading]  = useState(false)
  const [saved,    setSaved]    = useState(false)
  const [error,    setError]    = useState(null)

  const handleSave = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const result = await auth.updateUsername(username.trim())
    setLoading(false)
    if (result?.error) setError(result.error)
    else { setSaved(true); setTimeout(() => setSaved(false), 2000) }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="auth-close" onClick={onClose}>✕</button>
        <div className="auth-logo">⚙️</div>
        <h2 className="auth-title">Profile</h2>
        <p className="auth-sub">{user?.email}</p>

        <form className="auth-form" onSubmit={handleSave}>
          <div className="auth-field">
            <label>Username (shown on leaderboard)</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength={20}
              required
            />
          </div>
          {error  && <div className="auth-error">{error}</div>}
          {saved  && <div className="auth-success">✓ Saved!</div>}
          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? '⏳ Saving…' : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  )
}
