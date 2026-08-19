export function OutputPanel({ output, error, plots, isRunning, workerStatus, lastRunOk, beginnerTip, testHint, children }) {
  const hasContent = output || error || plots.length > 0

  return (
    <>
      <div className="pane-header">
        <div className="pane-dots">
          <div className="pane-dot r" />
          <div className="pane-dot y" />
          <div className="pane-dot g" />
        </div>
        <span className="pane-label">Output</span>
        {workerStatus && (
          <span style={{ marginLeft: 8, fontSize: '.7rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="spinner" style={{ width: 10, height: 10, borderWidth: 1.5 }} />
            {workerStatus}
          </span>
        )}
      </div>

      <div className="output-scroll">
        {isRunning && !workerStatus && (
          <div className="output-running">
            <div className="spinner" />
            Running your code…
          </div>
        )}

        {!isRunning && !hasContent && (
          <div className="output-empty">
            Press ▶ Run (or Ctrl+Enter) to execute your code
          </div>
        )}

        {lastRunOk && !isRunning && output && (
          <div className="success-flash">✓ Ran successfully</div>
        )}

        {output && (
          <div className="output-stdout">{output}</div>
        )}

        {plots.map((b64, i) => (
          <img
            key={i}
            src={`data:image/png;base64,${b64}`}
            alt={`Chart ${i + 1}`}
            className="output-plot"
          />
        ))}

        {error && (
          <div className="output-error">{error}</div>
        )}

        {beginnerTip && (
          <div className="beginner-tip">{beginnerTip}</div>
        )}

        {testHint && (
          <div className="test-hint">
            <div className="test-hint-title">🎯 Almost there! Your output is missing:</div>
            {testHint.missing.map((s, i) => (
              <div key={i} className="test-hint-item">→ <code>{s}</code></div>
            ))}
            <div className="test-hint-sub">Check your spelling, spaces, and punctuation exactly.</div>
          </div>
        )}

        {children}
      </div>
    </>
  )
}
