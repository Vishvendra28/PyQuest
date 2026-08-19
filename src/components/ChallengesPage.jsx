import { useState, useRef, useCallback } from 'react'
import { CHALLENGES, getChallengeById } from '../data/challenges.js'
import { Editor } from './Editor.jsx'

const DIFF_COLOR = { easy: 'green', medium: 'yellow', hard: 'red' }
const DIFF_LABEL = { easy: 'Easy', medium: 'Medium', hard: 'Hard' }

function buildTestCode(userCode, testCases) {
  const cases = btoa(JSON.stringify(testCases))
  return `${userCode}

import json as _json, base64 as _b64
_results = []
_test_cases = _json.loads(_b64.b64decode('${cases}').decode())
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

export function ChallengesPage({ runCode, isReady, solvedChallenges, onSolve }) {
  const [selected,         setSelected]         = useState(null)
  const [filter,           setFilter]           = useState('easy')
  const [testResults,      setTestResults]      = useState(null)
  const [running,          setRunning]          = useState(false)
  const [solvedAnim,       setSolvedAnim]       = useState(false)
  const [hasSeenChallenges, setHasSeenChallenges] = useState(() => !!localStorage.getItem('pyquest_seen_challenges'))
  const editorRef = useRef(null)

  const challenge = selected ? getChallengeById(selected) : null

  const handleSelect = useCallback((id) => {
    setSelected(id)
    setTestResults(null)
    setSolvedAnim(false)
    if (!localStorage.getItem('pyquest_seen_challenges')) {
      localStorage.setItem('pyquest_seen_challenges', '1')
      setHasSeenChallenges(true)
    }
    const ch = getChallengeById(id)
    setTimeout(() => editorRef.current?.setCode(ch?.starterCode ?? ''), 0)
  }, [])

  const handleRun = useCallback(async () => {
    if (!challenge || !isReady) return
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
    if (allPassed && !solvedChallenges.has(challenge.id)) {
      setSolvedAnim(true)
      onSolve(challenge.id, challenge.xp)
    }
  }, [challenge, isReady, runCode, solvedChallenges, onSolve])

  const filtered = filter === 'all'
    ? CHALLENGES
    : CHALLENGES.filter((c) => c.difficulty === filter)

  return (
    <div className="challenges-page">
      {/* ── Left: challenge list ── */}
      <aside className="ch-list">
        <div className="ch-list-header">
          <h2 className="ch-list-title">⚔️ Challenges</h2>
          <div className="ch-filters">
            {['all', 'easy', 'medium', 'hard'].map((d) => (
              <button
                key={d}
                className={`ch-filter-btn ${filter === d ? 'active' : ''} ${d !== 'all' ? `diff-${d}` : ''}`}
                onClick={() => setFilter(d)}
              >
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="ch-items">
          {filtered.map((ch) => {
            const solved = solvedChallenges.has(ch.id)
            return (
              <button
                key={ch.id}
                className={`ch-item ${selected === ch.id ? 'active' : ''} ${solved ? 'solved' : ''}`}
                onClick={() => handleSelect(ch.id)}
              >
                <span className={`ch-status-dot ${solved ? 'done' : ''}`}>{solved ? '✓' : '○'}</span>
                <div className="ch-item-info">
                  <span className="ch-item-title">{ch.title}</span>
                  <span className={`ch-badge diff-${ch.difficulty}`}>{DIFF_LABEL[ch.difficulty]}</span>
                </div>
                <span className="ch-item-xp">+{ch.xp} XP</span>
              </button>
            )
          })}
        </div>

        <div className="ch-list-footer">
          {solvedChallenges.size} / {CHALLENGES.length} solved
        </div>
      </aside>

      {/* ── Right: challenge detail ── */}
      <div className="ch-detail">
        {!challenge ? (
          <div className="ch-empty">
            <div className="ch-empty-icon">⚔️</div>
            <div className="ch-empty-title">Pick a challenge</div>
            <div className="ch-empty-sub">Select one from the list to start coding</div>
            {!hasSeenChallenges && (
              <div className="page-intro-box">
                <div className="page-intro-box-title">How challenges work</div>
                <ul className="page-intro-box-list">
                  <li>Write a <code>solution()</code> function that passes all test cases</li>
                  <li>Click <strong>Run Tests</strong> — your code is graded automatically</li>
                  <li>Pass all tests to earn XP</li>
                  <li>Start with Easy, work your way up to Hard 💪</li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="ch-detail-header">
              <div>
                <h2 className="ch-detail-title">{challenge.title}</h2>
                <div className="ch-detail-meta">
                  <span className={`ch-badge diff-${challenge.difficulty}`}>{DIFF_LABEL[challenge.difficulty]}</span>
                  <span className="ch-detail-xp">+{challenge.xp} XP</span>
                  {solvedChallenges.has(challenge.id) && <span className="ch-solved-tag">✓ Solved</span>}
                </div>
              </div>
            </div>

            <div className="ch-detail-body">
              {/* Description */}
              <div className="ch-desc-panel">
                <div className="ch-desc-text">{challenge.description}</div>

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

                {/* Test results */}
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
                            🎉 All tests passed! +{challenge.xp} XP earned!
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

              {/* Editor */}
              <div className="ch-editor-panel">
                <div className="pane-header">
                  <div className="pane-dots">
                    <div className="pane-dot r"/><div className="pane-dot y"/><div className="pane-dot g"/>
                  </div>
                  <span className="pane-label">Python Editor</span>
                  <span className="ch-solution-note">⚠️ Your function must be named <code>solution</code></span>
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
          </>
        )}
      </div>
    </div>
  )
}
