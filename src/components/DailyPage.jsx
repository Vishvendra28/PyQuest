import { useState, useRef, useCallback } from 'react'
import { getDailyChallenge } from '../data/challenges.js'
import { Editor } from './Editor.jsx'

const DIFF_LABEL = { easy: 'Easy', medium: 'Medium', hard: 'Hard' }

function buildTestCode(userCode, testCases) {
  const cases = JSON.stringify(testCases)
  return `${userCode}

import json as _json
_results = []
_test_cases = _json.loads('''${cases}''')
for _tc in _test_cases:
    try:
        _got = solution(*_tc["args"])
        _passed = _got == _tc["expected"]
        _results.append({"passed": _passed, "got": repr(_got), "expected": repr(_tc["expected"])})
    except Exception as _e:
        _results.append({"passed": False, "error": str(_e), "got": "Error", "expected": repr(_tc["expected"])})
print("__RESULTS__:" + _json.dumps(_results))
`
}

function parseResults(stdout) {
  const marker = '__RESULTS__:'
  const idx = stdout.indexOf(marker)
  if (idx === -1) return null
  try { return JSON.parse(stdout.slice(idx + marker.length)) } catch { return null }
}

function StreakCalendar({ streak }) {
  const days = []
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10)
    const isToday = i === 0
    days.push({ date: d, isToday })
  }
  const lastDate = streak.lastDate
  const streakCount = streak.streak ?? 0

  const isActive = (date) => {
    if (!lastDate) return false
    const last = new Date(lastDate)
    const target = new Date(date)
    const diff = Math.floor((last - target) / 86400000)
    return diff >= 0 && diff < streakCount
  }

  return (
    <div className="streak-calendar">
      {days.map(({ date, isToday }) => (
        <div
          key={date}
          className={`streak-day ${isActive(date) ? 'active' : ''} ${isToday ? 'today' : ''}`}
          title={date}
        >
          <div className="streak-dot" />
          <div className="streak-day-label">
            {new Date(date + 'T12:00:00').toLocaleDateString('en', { weekday: 'short' }).slice(0, 1)}
          </div>
        </div>
      ))}
    </div>
  )
}

export function DailyPage({ runCode, isReady, solvedChallenges, onSolve, streak }) {
  const challenge = getDailyChallenge()
  const today = new Date().toISOString().slice(0, 10)
  const dailyKey = `daily-${today}-${challenge.id}`
  const alreadySolved = solvedChallenges.has(dailyKey)

  const [testResults,  setTestResults]  = useState(null)
  const [running,      setRunning]      = useState(false)
  const [solvedAnim,   setSolvedAnim]   = useState(false)
  const [hasSeenDaily, setHasSeenDaily] = useState(() => !!localStorage.getItem('pyquest_seen_daily'))
  const editorRef = useRef(null)

  // Set starter code on mount
  const initCode = useCallback((node) => {
    if (node) setTimeout(() => editorRef.current?.setCode(challenge.starterCode), 50)
  }, [challenge.starterCode])

  const handleRun = useCallback(async () => {
    if (!isReady) return
    const code = editorRef.current?.getCode() ?? ''
    setRunning(true)
    setTestResults(null)
    const testCode = buildTestCode(code, challenge.testCases)
    const result = await runCode(testCode, [])
    setRunning(false)
    if (!result) return

    if (result.error && !result.stdout?.includes('__RESULTS__:')) {
      setTestResults({ error: result.error })
      return
    }

    const parsed = parseResults(result.stdout ?? '')
    if (!parsed) { setTestResults({ error: 'Could not parse test output.' }); return }

    setTestResults({ cases: parsed })
    const allPassed = parsed.every((r) => r.passed)
    if (allPassed && !alreadySolved) {
      setSolvedAnim(true)
      onSolve(dailyKey, challenge.xp)
    }
  }, [challenge, isReady, runCode, alreadySolved, dailyKey, onSolve])

  const streakCount = streak.streak ?? 0
  const longestStreak = streak.longest ?? 0

  return (
    <div className="daily-page">
      {/* ── Streak Header ── */}
      <div className="daily-streak-bar">
        <div className="streak-stats">
          <div className="streak-stat">
            <span className="streak-fire">🔥</span>
            <span className="streak-num">{streakCount}</span>
            <span className="streak-lbl">day streak</span>
          </div>
          <div className="streak-stat">
            <span className="streak-fire">🏆</span>
            <span className="streak-num">{longestStreak}</span>
            <span className="streak-lbl">best streak</span>
          </div>
        </div>
        <StreakCalendar streak={streak} />
        <div className="streak-caption">Complete a challenge every day to grow your streak 🔥</div>
        <div className="daily-date">
          {new Date().toLocaleDateString('en', { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
      </div>

      {!hasSeenDaily && (
        <div className="page-intro-banner">
          <button className="page-intro-close" onClick={() => { localStorage.setItem('pyquest_seen_daily', '1'); setHasSeenDaily(true) }}>✕</button>
          <strong>🗓️ How Daily Challenges work:</strong> A new challenge drops every day at midnight. Solve it to extend your 🔥 streak. Write a <code>solution()</code> function and click <strong>Run Tests</strong>.
        </div>
      )}

      {/* ── Challenge ── */}
      <div className="daily-content">
        <div className="daily-left">
          <div className="daily-badge-row">
            <span className="daily-tag">🗓️ Daily Challenge</span>
            <span className={`ch-badge diff-${challenge.difficulty}`}>{DIFF_LABEL[challenge.difficulty]}</span>
            <span className="ch-detail-xp">+{challenge.xp} XP</span>
            {alreadySolved && <span className="ch-solved-tag">✓ Solved today!</span>}
          </div>

          <h2 className="daily-title">{challenge.title}</h2>
          {alreadySolved && (
            <div className="daily-come-back">
              ✅ You already solved today's challenge! Come back tomorrow for a new one. 🎉
            </div>
          )}
          <p className="daily-desc">{challenge.description}</p>

          <div className="ch-examples">
            <div className="ch-section-label">Examples</div>
            {challenge.examples.map((ex, i) => (
              <div key={i} className="ch-example">
                <span className="ch-ex-in">Input: <code>{ex.input}</code></span>
                <span className="ch-ex-arrow">→</span>
                <span className="ch-ex-out">Output: <code>{ex.output}</code></span>
              </div>
            ))}
          </div>

          {testResults && (
            <div className="ch-results">
              <div className="ch-section-label">Test Results</div>
              {testResults.error ? (
                <div className="ch-result-error">
                  <span className="ch-result-icon">✗</span>
                  <pre className="ch-err-pre">{testResults.error}</pre>
                </div>
              ) : (
                <>
                  {solvedAnim && (
                    <div className="ch-all-pass">
                      🎉 Daily challenge solved! Streak extended! 🔥
                    </div>
                  )}
                  {testResults.cases.map((r, i) => (
                    <div key={i} className={`ch-result-row ${r.passed ? 'pass' : 'fail'}`}>
                      <span className="ch-result-icon">{r.passed ? '✓' : '✗'}</span>
                      <span className="ch-result-label">Test {i + 1}</span>
                      {!r.passed && (
                        <span className="ch-result-detail">
                          got <code>{r.got}</code>, expected <code>{r.expected}</code>
                        </span>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>

        <div className="daily-right" ref={initCode}>
          <div className="pane-header">
            <div className="pane-dots">
              <div className="pane-dot r"/><div className="pane-dot y"/><div className="pane-dot g"/>
            </div>
            <span className="pane-label">Python Editor</span>
            <button
              className={`btn btn-run ch-run-btn ${running ? 'running' : ''}`}
              onClick={handleRun}
              disabled={!isReady || running}
            >
              {running ? '⏳ Running…' : '▶ Run Tests'}
            </button>
          </div>
          <div className="editor-wrap ch-editor-wrap">
            <Editor ref={editorRef} onRun={handleRun} />
          </div>
        </div>
      </div>
    </div>
  )
}
