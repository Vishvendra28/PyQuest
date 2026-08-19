import { useState, useRef, useCallback, useEffect } from 'react'
import { Header }          from './components/Header.jsx'
import { Editor }          from './components/Editor.jsx'
import { OutputPanel }     from './components/OutputPanel.jsx'
import { PixelBubble }     from './components/PixelBubble.jsx'
import { MobileToolbar }   from './components/MobileToolbar.jsx'
import { LoadingScreen }   from './components/LoadingScreen.jsx'
import { InputCollector }  from './components/InputCollector.jsx'
import { Sidebar }         from './components/Sidebar.jsx'
import { LessonPanel }     from './components/LessonPanel.jsx'
import { WinOverlay }      from './components/WinOverlay.jsx'
import { ChallengesPage }  from './components/ChallengesPage.jsx'
import { DailyPage }       from './components/DailyPage.jsx'
import { ProjectsPage }    from './components/ProjectsPage.jsx'
import { LeaderboardPage } from './components/LeaderboardPage.jsx'
import { AuthModal, UserMenu, ProfileModal } from './components/AuthModal.jsx'
import { WelcomeModal }     from './components/WelcomeModal.jsx'
import { AppTour }          from './components/AppTour.jsx'
import { RetrievalQuiz }    from './components/RetrievalQuiz.jsx'
import { usePyodide }      from './hooks/usePyodide.js'
import { useProgress }     from './hooks/useProgress.js'
import { useAuth }         from './hooks/useAuth.js'
import { useSync }         from './hooks/useSync.js'
import { pullAndMergeProgress } from './hooks/useSync.js'
import { getLessonById, getNextLesson, xpToLevel } from './data/curriculum.js'
import { FALLBACK_QUIZZES } from './data/quizzes.js'
import './App.css'

function extractPrompts(code) {
  const re = /\binput\s*\(\s*(?:f?(["'`])(.*?)\1\s*)?\)/g
  const prompts = []
  let m
  while ((m = re.exec(code)) !== null) prompts.push(m[2] ?? '')
  return prompts
}

function checkTest(test, stdout, error) {
  if (error) return false
  if (test.contains?.length) return test.contains.every((s) => stdout.includes(s))
  return true
}

function getMissingStrings(test, stdout) {
  if (!test?.contains?.length) return []
  return test.contains.filter((s) => !stdout.includes(s))
}

export default function App() {
  const editorRef     = useRef(null)
  const bodyRef       = useRef(null)
  const mainColRef    = useRef(null)
  const editorRowRef  = useRef(null)

  const [sidebarPct, setSidebarPct] = useState(18)
  const [lessonPct,  setLessonPct]  = useState(33)
  const [editorPct,  setEditorPct]  = useState(56)

  const [activePage,   setActivePage]   = useState('learn')
  const [showAuth,     setShowAuth]     = useState(false)
  const [showProfile,  setShowProfile]  = useState(false)
  const [showWelcome,  setShowWelcome]  = useState(() => !localStorage.getItem('pyquest_onboarded'))
  const [showTour,     setShowTour]     = useState(false)
  const isFirstVisit = useRef(!localStorage.getItem('pyquest_onboarded'))
  const [output,       setOutput]       = useState('')
  const [error,        setError]        = useState(null)
  const [plots,        setPlots]        = useState([])
  const [lastRunOk,    setLastRunOk]    = useState(false)
  const [sidebarOpen,  setSidebarOpen]  = useState(true)
  const [lessonMode,   setLessonMode]   = useState('learn')
  const [winning,      setWinning]      = useState(null)

  const [inputPrompts,    setInputPrompts]  = useState([])
  const [pendingCode,     setPendingCode]   = useState('')
  const [collectingInput, setCollecting]    = useState(false)

  const [isBeginnerMode,    setIsBeginnerMode]   = useState(() => {
    const level = localStorage.getItem('pyquest_skill_level')
    return !level || level !== 'advanced'
  })
  const [pendingRetrieval,  setPendingRetrieval] = useState(null)
  const [showRetrieval,     setShowRetrieval]    = useState(false)
  const [nudgeDismissed,    setNudgeDismissed]   = useState(false)
  const [beginnerTip,       setBeginnerTip]      = useState(null)
  const [testHint,          setTestHint]         = useState(null)

  const { status, loadingMsg, loadingProgress, workerStatus, runCode, isLoading, isRunning, isReady } = usePyodide()
  const { xp, completedLessons, currentLessonId, levelInfo, solvedChallenges, streak,
          completeLesson, solveChallenge, setCurrentLesson, isUnlocked, loadRemote } = useProgress()
  const { user, profile, authLoading, signUp, signIn, signInWithGoogle, signOut, updateUsername, hasSupabase } = useAuth()

  // Auto-sync progress to Supabase when it changes
  useSync(user?.id, xp, completedLessons, solvedChallenges)

  // When user logs in, pull their remote progress and merge
  useEffect(() => {
    if (!user) return
    pullAndMergeProgress(user.id).then((remote) => {
      if (remote && remote.xp > xp) loadRemote(remote)
    })
  }, [user?.id])


  const currentLesson = getLessonById(currentLessonId)

  const handleToggleMode = useCallback(() => {
    setIsBeginnerMode(prev => {
      const next = !prev
      localStorage.setItem('pyquest_skill_level', next ? 'beginner' : 'advanced')
      return next
    })
  }, [])

  const handleReplayIntro = useCallback(() => {
    setSidebarOpen(false)
    setShowWelcome(true)
  }, [])

  const execute = useCallback(async (code, inputs = []) => {
    setOutput(''); setError(null); setPlots([]); setLastRunOk(false); setBeginnerTip(null); setTestHint(null)
    const result = await runCode(code, inputs)
    if (!result) return
    const stdout = result.stdout ?? ''
    const err    = result.error  ?? null
    setOutput(stdout); setError(err); setPlots(result.plots ?? []); setLastRunOk(!err)
    if (err && isBeginnerMode) {
      let tip = null
      if (err.includes('NameError'))       tip = "💡 NameError: Python doesn't recognise that name. Check your spelling — variable names are case-sensitive. Did you define it before using it?"
      else if (err.includes('SyntaxError'))     tip = "💡 SyntaxError: something is written incorrectly. Look for missing quotes (\"\"), colons (:), or mismatched parentheses ()."
      else if (err.includes('IndentationError')) tip = "💡 IndentationError: Python cares about indentation. Code inside if/for/def must be indented consistently (use 4 spaces)."
      else if (err.includes('TypeError'))       tip = "💡 TypeError: you're mixing types that don't work together. Trying to add text + number? Use str(number) to convert first."
      setBeginnerTip(tip)
    }

    if (currentLesson && !completedLessons.has(currentLesson.id)) {
      if (checkTest(currentLesson.test, stdout, err)) {
        const newLvl    = xpToLevel(xp + currentLesson.xp)
        const leveledUp = newLvl.level > levelInfo.level
        completeLesson(currentLesson.id, currentLesson.xp)
        setWinning({ lesson: currentLesson, xpEarned: currentLesson.xp, newLevel: leveledUp ? newLvl.level : null })
        if (isBeginnerMode && (completedLessons.size + 1) % 3 === 0) {
          const quiz = currentLesson.retrieval
            ?? FALLBACK_QUIZZES[Math.floor(completedLessons.size / 3) % FALLBACK_QUIZZES.length]
          setPendingRetrieval(quiz)
        }
      } else if (!err && currentLesson.test?.contains?.length) {
        const missing = getMissingStrings(currentLesson.test, stdout)
        if (missing.length > 0) {
          setTestHint({ missing })
        }
      }
    }
  }, [runCode, currentLesson, completedLessons, xp, levelInfo, completeLesson])

  const handleRun = useCallback(() => {
    if (!isReady) return
    const code = editorRef.current?.getCode() ?? ''
    if (!code.trim()) return
    const prompts = extractPrompts(code)
    if (prompts.length > 0) { setPendingCode(code); setInputPrompts(prompts); setCollecting(true) }
    else execute(code, [])
  }, [isReady, execute, currentLesson])

  const handleInputsSubmit = useCallback((values) => { setCollecting(false); execute(pendingCode, values) }, [pendingCode, execute])
  const handleInsert        = useCallback((text) => { editorRef.current?.insertText(text) }, [])

  const handleLoadExample = useCallback((code) => {
    editorRef.current?.setCode(code)
    setOutput(''); setError(null); setPlots([])
  }, [])

  const handleSelectLesson = useCallback((lessonId) => {
    setCurrentLesson(lessonId)
    setOutput(''); setError(null); setPlots([]); setLastRunOk(false); setBeginnerTip(null); setTestHint(null); setWinning(null)
    setLessonMode(completedLessons.has(lessonId) ? 'practice' : 'learn')
    const lesson = getLessonById(lessonId)
    const code = lesson?.tutorial?.[0]?.code ?? lesson?.starterCode ?? ''
    setTimeout(() => editorRef.current?.setCode(code), 0)
  }, [setCurrentLesson, completedLessons])

  const handleWinClose = useCallback(() => {
    setWinning(null)
    setLessonMode('practice')
    if (pendingRetrieval) {
      setShowRetrieval(pendingRetrieval)
      setPendingRetrieval(null)
    }
  }, [pendingRetrieval])

  const handleWinNext = useCallback(() => {
    if (!currentLesson) return
    const next = getNextLesson(currentLesson.id)
    setWinning(null)
    if (next) handleSelectLesson(next.id)
  }, [currentLesson, handleSelectLesson])

  if (isLoading) return <LoadingScreen message={loadingMsg} progress={loadingProgress} />

  return (
    <div className="app">
      <Header
        onRun={handleRun} onStop={() => window.location.reload()}
        isRunning={isRunning} status={status}
        xp={xp} level={levelInfo.level} levelProgress={levelInfo.progress}
        onToggleSidebar={() => setSidebarOpen((o) => !o)}
        activePage={activePage} onNavigate={setActivePage}
        user={user} profile={profile} authLoading={authLoading}
        onAuthClick={() => user ? setShowProfile(true) : setShowAuth(true)}
      />

      <div className="app-body">
        {/* ── LEARN ── */}
        {activePage === 'learn' && (
          <>
            {!user && completedLessons.size >= 3 && !nudgeDismissed && (
              <div className="signin-nudge">
                <span>🔓 <strong>Save your progress!</strong> Sign in free — sync across devices &amp; climb the leaderboard.</span>
                <button className="btn btn-run nudge-signin-btn" onClick={() => setShowAuth(true)}>Sign in free</button>
                <button className="nudge-dismiss-btn" onClick={() => setNudgeDismissed(true)}>✕</button>
              </div>
            )}
            <div className="learn-layout" ref={bodyRef}>
              {/* ── Sidebar ── */}
              <div className="learn-sidebar-col" style={sidebarOpen ? { flexBasis: `${sidebarPct}%` } : { flexBasis: 0, minWidth: 0, overflow: 'hidden' }}>
                <Sidebar
                  currentLessonId={currentLessonId} completedLessons={completedLessons}
                  isUnlocked={isUnlocked} onSelectLesson={handleSelectLesson}
                  isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}
                  isBeginnerMode={isBeginnerMode} onToggleMode={handleToggleMode}
                  onReplayIntro={handleReplayIntro}
                />
              </div>
              {sidebarOpen && <div className="resize-handle resize-handle--v" onMouseDown={(e) => {
                e.preventDefault()
                const startX = e.clientX, startPct = sidebarPct
                const total = bodyRef.current?.offsetWidth || 1
                const onMove = (e) => setSidebarPct(Math.max(10, Math.min(35, startPct + (e.clientX - startX) / total * 100)))
                const onUp   = () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp) }
                document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onUp)
              }} />}

              {/* ── Main column ── */}
              <div className="learn-main-col" ref={mainColRef}>
                {/* Lesson panel */}
                {currentLesson && (
                  <div className="learn-lesson-row" style={{ flexBasis: `${lessonPct}%` }}>
                    <LessonPanel
                      key={currentLesson.id}
                      lesson={currentLesson}
                      isCompleted={completedLessons.has(currentLesson.id)}
                      mode={lessonMode}
                      onSwitchMode={setLessonMode}
                      onLoadExample={handleLoadExample}
                      isBeginnerMode={isBeginnerMode}
                      lastRunOk={lastRunOk}
                    />
                  </div>
                )}
                {currentLesson && (
                  <div className="resize-handle resize-handle--h" onMouseDown={(e) => {
                    e.preventDefault()
                    const startY = e.clientY, startPct = lessonPct
                    const total = mainColRef.current?.offsetHeight || 1
                    const onMove = (e) => setLessonPct(Math.max(8, Math.min(65, startPct + (e.clientY - startY) / total * 100)))
                    const onUp   = () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp) }
                    document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onUp)
                  }} />
                )}

                {/* Editor + Output */}
                <div className="learn-editor-row" ref={editorRowRef}>
                  <div className={`editor-pane ${isRunning ? 'running' : ''}`} style={{ flexBasis: `${editorPct}%` }}>
                    <div className="pane-header">
                      <div className="pane-dots"><div className="pane-dot r"/><div className="pane-dot y"/><div className="pane-dot g"/></div>
                      <span className="pane-label">Python Editor</span>
                      <span style={{ marginLeft: 'auto', fontSize: '.68rem', color: 'var(--muted)' }}>Ctrl+Enter to run</span>
                    </div>
                    <div className="editor-wrap"><Editor ref={editorRef} onRun={handleRun} initialCode={currentLesson?.tutorial?.[0]?.code ?? currentLesson?.starterCode ?? ''} storageKey="pyquest_code" /></div>
                  </div>
                  <div className="resize-handle resize-handle--v" onMouseDown={(e) => {
                    e.preventDefault()
                    const startX = e.clientX, startPct = editorPct
                    const total = editorRowRef.current?.offsetWidth || 1
                    const onMove = (e) => setEditorPct(Math.max(20, Math.min(80, startPct + (e.clientX - startX) / total * 100)))
                    const onUp   = () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp) }
                    document.addEventListener('mousemove', onMove); document.addEventListener('mouseup', onUp)
                  }} />
                  <div className="output-pane">
                    <OutputPanel output={output} error={error} plots={plots} isRunning={isRunning} workerStatus={workerStatus} lastRunOk={lastRunOk} beginnerTip={beginnerTip} testHint={testHint}>
                      {error && <PixelBubble error={error} code={editorRef.current?.getCode() ?? ''} />}
                    </OutputPanel>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── CHALLENGES ── */}
        {activePage === 'challenges' && (
          <ChallengesPage
            runCode={runCode}
            isReady={isReady}
            solvedChallenges={solvedChallenges}
            onSolve={solveChallenge}
          />
        )}

        {/* ── DAILY ── */}
        {activePage === 'daily' && (
          <DailyPage
            runCode={runCode}
            isReady={isReady}
            solvedChallenges={solvedChallenges}
            onSolve={solveChallenge}
            streak={streak}
          />
        )}

        {/* ── PROJECTS ── */}
        {activePage === 'projects' && (
          <ProjectsPage
            runCode={runCode}
            isReady={isReady}
          />
        )}

        {/* ── LEADERBOARD ── */}
        {activePage === 'leaderboard' && (
          <LeaderboardPage
            xp={xp}
            level={levelInfo.level}
            streak={streak}
            solvedChallenges={solvedChallenges}
            user={user}
            profile={profile}
          />
        )}
      </div>

      <MobileToolbar onInsert={handleInsert} />

      {collectingInput && (
        <InputCollector prompts={inputPrompts} onSubmit={handleInputsSubmit} onCancel={() => setCollecting(false)} />
      )}

      {winning && (
        <WinOverlay
          lesson={winning.lesson} xpEarned={winning.xpEarned} newLevel={winning.newLevel}
          onNext={getNextLesson(winning.lesson.id) ? handleWinNext : null}
          onClose={handleWinClose}
        />
      )}

      {showRetrieval && (
        <RetrievalQuiz
          quiz={showRetrieval}
          onClose={() => setShowRetrieval(null)}
        />
      )}

      {showWelcome && (
        <WelcomeModal onClose={(skillLevel) => {
          localStorage.setItem('pyquest_onboarded', '1')
          setShowWelcome(false)
          if (skillLevel === 'advanced') {
            setIsBeginnerMode(false)
            setActivePage('challenges')
          } else {
            setIsBeginnerMode(skillLevel !== 'advanced')
            const lesson = getLessonById(currentLessonId)
            const code = lesson?.tutorial?.[0]?.code ?? lesson?.starterCode ?? ''
            setTimeout(() => editorRef.current?.setCode(code), 50)
          }
          if (isFirstVisit.current) {
            isFirstVisit.current = false
            setTimeout(() => setShowTour(true), 300)
          }
        }} />
      )}

      {showTour && <AppTour onDone={() => setShowTour(false)} />}

      {showAuth && (
        <AuthModal
          auth={{ signUp, signIn, signInWithGoogle }}
          onClose={() => setShowAuth(false)}
        />
      )}

      {showProfile && user && (
        <ProfileModal
          user={user} profile={profile}
          auth={{ updateUsername }}
          onClose={() => setShowProfile(false)}
        />
      )}

      {user && !showProfile && !showAuth && (
        <UserMenu
          user={user} profile={profile}
          onSignOut={signOut}
          onProfile={() => setShowProfile(true)}
        />
      )}
    </div>
  )
}
