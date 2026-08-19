import { useState, useRef, useCallback } from 'react'
import { PROJECTS, getProjectById } from '../data/projects.js'
import { Editor } from './Editor.jsx'

const DIFF_COLOR = { beginner: 'green', intermediate: 'yellow' }
const storageKey = (id) => `pyquest_project_${id}`

export function ProjectsPage({ runCode, isReady }) {
  const [selected,      setSelected]      = useState(null)
  const [output,        setOutput]        = useState('')
  const [error,         setError]         = useState(null)
  const [running,       setRunning]       = useState(false)
  const [saved,         setSaved]         = useState(false)
  const [hasSeenProjects, setHasSeenProjects] = useState(() => !!localStorage.getItem('pyquest_seen_projects'))
  const editorRef = useRef(null)

  const project = selected ? getProjectById(selected) : null

  const handleSelect = useCallback((id) => {
    setSelected(id)
    setOutput('')
    setError(null)
    setSaved(false)
    if (!localStorage.getItem('pyquest_seen_projects')) {
      localStorage.setItem('pyquest_seen_projects', '1')
      setHasSeenProjects(true)
    }
    const p = getProjectById(id)
    const savedCode = localStorage.getItem(storageKey(id))
    setTimeout(() => editorRef.current?.setCode(savedCode ?? p?.starterCode ?? ''), 0)
  }, [])

  const handleSave = useCallback(() => {
    if (!selected) return
    const code = editorRef.current?.getCode() ?? ''
    localStorage.setItem(storageKey(selected), code)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }, [selected])

  const handleRun = useCallback(async () => {
    if (!project || !isReady) return
    const code = editorRef.current?.getCode() ?? ''
    setRunning(true)
    setOutput('')
    setError(null)
    const result = await runCode(code, [])
    setRunning(false)
    if (!result) return
    setOutput(result.stdout ?? '')
    setError(result.error ?? null)
  }, [project, isReady, runCode])

  return (
    <div className="projects-page">
      {/* ── Left: project list ── */}
      <aside className="proj-list">
        <div className="ch-list-header">
          <h2 className="ch-list-title">🏗️ Projects</h2>
          <p className="proj-list-sub">Build real things with Python</p>
        </div>

        <div className="ch-items">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              className={`ch-item ${selected === p.id ? 'active' : ''}`}
              onClick={() => handleSelect(p.id)}
            >
              <span className="proj-emoji">{p.emoji}</span>
              <div className="ch-item-info">
                <span className="ch-item-title">{p.title}</span>
                <div className="proj-meta-row">
                  <span className={`ch-badge diff-${p.difficulty === 'beginner' ? 'easy' : 'medium'}`}>
                    {p.difficulty.charAt(0).toUpperCase() + p.difficulty.slice(1)}
                  </span>
                  <span className="proj-time">⏱ {p.time}</span>
                </div>
              </div>
              <span className="ch-item-xp proj-item-practice">Practice</span>
            </button>
          ))}
        </div>
      </aside>

      {/* ── Right: project detail ── */}
      <div className="ch-detail">
        {!project ? (
          <div className="ch-empty">
            <div className="ch-empty-icon">🏗️</div>
            <div className="ch-empty-title">Choose a project</div>
            <div className="ch-empty-sub">Build something real with Python</div>
            {!hasSeenProjects && (
              <div className="page-intro-box">
                <div className="page-intro-box-title">About Projects</div>
                <ul className="page-intro-box-list">
                  <li>Projects are open-ended — no auto-grading, just free coding</li>
                  <li>Your code is saved per-project in your browser</li>
                  <li>Great for applying what you've learned in lessons</li>
                  <li>Build at your own pace — no time limit</li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="ch-detail-header">
              <div>
                <h2 className="ch-detail-title">{project.emoji} {project.title}</h2>
                <div className="ch-detail-meta">
                  <span className={`ch-badge diff-${project.difficulty === 'beginner' ? 'easy' : 'medium'}`}>
                    {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
                  </span>
                  <span className="proj-time">⏱ {project.time}</span>
                  <span className="ch-detail-xp proj-no-grade">🔧 Practice project — no auto-grading</span>
                </div>
              </div>
            </div>

            <div className="ch-detail-body">
              <div className="ch-desc-panel">
                <div className="proj-skills-needed">
                  📚 Skills needed:{' '}
                  {project.difficulty === 'beginner'
                    ? 'variables, conditions, loops (Worlds 1–4)'
                    : 'variables, loops, lists, functions, strings (Worlds 1–10)'}
                </div>
                <p className="ch-desc-text">{project.description}</p>

                <div className="proj-features">
                  <div className="ch-section-label">What to build</div>
                  <ul className="proj-feature-list">
                    {project.features.map((f, i) => (
                      <li key={i} className="proj-feature-item">
                        <span className="proj-feature-dot">▸</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="proj-hint">
                  <span className="proj-hint-icon">💡</span>
                  <span>{project.testHint}</span>
                </div>

                {/* Output panel */}
                {(output || error) && (
                  <div className="proj-output">
                    <div className="ch-section-label">Output</div>
                    {error && <pre className="proj-error">{error}</pre>}
                    {output && <pre className="proj-stdout">{output}</pre>}
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
                  <button
                    className="btn btn-save"
                    onClick={handleSave}
                    title="Save code (Ctrl+S)"
                  >
                    {saved ? '✓ Saved' : '💾 Save'}
                  </button>
                  <button
                    className={`btn btn-run ch-run-btn ${running ? 'running' : ''}`}
                    onClick={handleRun}
                    disabled={!isReady || running}
                  >
                    {running ? '⏳ Running…' : '▶ Run'}
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
