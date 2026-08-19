import { useState, useEffect } from 'react'
import { supabase, hasSupabase } from '../lib/supabase.js'

const MOCK = [
  { rank: 1, username: 'PythonPro',   xp: 420, streak: 7, solved: 12, badge: '🥇' },
  { rank: 2, username: 'CodeNinja',   xp: 385, streak: 5, solved: 11, badge: '🥈' },
  { rank: 3, username: 'SnakeMaster', xp: 310, streak: 4, solved: 9,  badge: '🥉' },
  { rank: 4, username: 'ByteWizard',  xp: 270, streak: 3, solved: 8,  badge: ''   },
  { rank: 5, username: 'LoopLord',    xp: 210, streak: 2, solved: 7,  badge: ''   },
]

const RANK_BADGE = ['🥇', '🥈', '🥉']

export function LeaderboardPage({ xp, level, streak, solvedChallenges, user, profile }) {
  const [players,          setPlayers]         = useState([])
  const [loading,          setLoading]         = useState(false)
  const [myRank,           setMyRank]          = useState(null)
  const [hasSeenLeaderboard, setHasSeenLeaderboard] = useState(() => !!localStorage.getItem('pyquest_seen_leaderboard'))

  useEffect(() => {
    if (!hasSupabase || !user) return
    setLoading(true)
    supabase
      .from('user_progress')
      .select('id, xp, streak, longest_streak, solved_challenges, profiles(username)')
      .order('xp', { ascending: false })
      .limit(20)
      .then(({ data }) => {
        if (!data) return
        const ranked = data.map((row, i) => ({
          rank: i + 1,
          username: row.profiles?.username ?? 'Anonymous',
          xp: row.xp,
          streak: row.streak ?? 0,
          solved: (row.solved_challenges ?? []).length,
          badge: RANK_BADGE[i] ?? '',
          isMe: row.id === user?.id,
        }))
        setPlayers(ranked)
        const me = ranked.find((p) => p.isMe)
        if (me) setMyRank(me.rank)
        setLoading(false)
      })
  }, [user?.id])

  const showReal = hasSupabase && user
  const displayPlayers = showReal ? players : MOCK

  return (
    <div className="leaderboard-page">
      <div className="lb-header">
        <h2 className="lb-title">🏆 Leaderboard</h2>
        <p className="lb-subtitle">
          {showReal ? 'Top Python learners — updated live' : 'Sign in to see global rankings'}
        </p>
      </div>

      {!hasSeenLeaderboard && (
        <div className="page-intro-banner">
          <button className="page-intro-close" onClick={() => { localStorage.setItem('pyquest_seen_leaderboard', '1'); setHasSeenLeaderboard(true) }}>✕</button>
          <strong>🏆 How to earn XP:</strong> Complete lessons (+20–50 XP each), solve challenges (+50–200 XP), and finish daily challenges to grow your 🔥 streak. Sign in to appear on the global board.
        </div>
      )}

      {/* Your stats */}
      <div className="lb-your-stats">
        <div className="lb-your-title">Your Stats {myRank ? `— Rank #${myRank}` : ''}</div>
        <div className="lb-stats-grid">
          <div className="lb-stat">
            <div className="lb-stat-val">{xp.toLocaleString()}</div>
            <div className="lb-stat-lbl">Total XP</div>
          </div>
          <div className="lb-stat">
            <div className="lb-stat-val">Lv {level}</div>
            <div className="lb-stat-lbl">Level</div>
          </div>
          <div className="lb-stat">
            <div className="lb-stat-val">{(streak.streak ?? 0)}🔥</div>
            <div className="lb-stat-lbl">Streak</div>
          </div>
          <div className="lb-stat">
            <div className="lb-stat-val">{solvedChallenges.size}</div>
            <div className="lb-stat-lbl">Challenges</div>
          </div>
        </div>
      </div>

      {/* Sign-in prompt if not authenticated */}
      {!user && hasSupabase && (
        <div className="lb-coming-soon">
          <div className="lb-lock-icon">🔒</div>
          <div className="lb-coming-title">Sign in to see global rankings</div>
          <div className="lb-coming-sub">
            Create a free account to compete with learners worldwide. Your progress syncs across all your devices.
          </div>
        </div>
      )}

      {!hasSupabase && (
        <div className="lb-coming-soon">
          <div className="lb-lock-icon">🔒</div>
          <div className="lb-coming-title">Global Rankings Coming Soon</div>
          <div className="lb-coming-sub">
            Add your Supabase credentials to <code>.env</code> to enable auth and live rankings.
          </div>
        </div>
      )}

      {/* Rankings table */}
      <div className="lb-table-wrap">
        <div className="lb-table-header">
          {showReal ? `Top ${displayPlayers.length} Players` : 'Preview — Sample Rankings'}
        </div>
        {showReal && loading ? (
          <div className="lb-loading">Loading rankings…</div>
        ) : displayPlayers.length === 0 ? (
          <div className="lb-loading">
            🌟 Be the first on the board! Complete lessons and challenges to earn XP.
          </div>
        ) : (
          <table className="lb-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>XP</th>
                <th>Streak</th>
                <th>Solved</th>
              </tr>
            </thead>
            <tbody>
              {displayPlayers.map((p, i) => (
                <tr key={i} className={`lb-row ${p.isMe ? 'lb-row-me' : ''}`}>
                  <td className="lb-rank">{p.badge || `#${p.rank}`}</td>
                  <td className="lb-name">{p.username}{p.isMe ? ' (you)' : ''}</td>
                  <td className="lb-xp">{p.xp.toLocaleString()} XP</td>
                  <td className="lb-streak">{p.streak}🔥</td>
                  <td className="lb-solved">{p.solved}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {!showReal && <div className="lb-blur-overlay" />}
      </div>
    </div>
  )
}
