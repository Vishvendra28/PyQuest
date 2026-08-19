import { useState, useEffect, useRef } from 'react'

export function InputCollector({ prompts, onSubmit, onCancel }) {
  const [values, setValues] = useState(prompts.map(() => ''))
  const firstRef = useRef(null)

  useEffect(() => { firstRef.current?.focus() }, [])

  const set = (i, val) => setValues((v) => { const c = [...v]; c[i] = val; return c })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(values)
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-icon">⌨️</div>
        <div className="modal-title">Your code needs inputs</div>
        <div className="modal-sub">
          Fill these in — they'll be passed to your program in order, just like typing in a terminal.
        </div>

        <form onSubmit={handleSubmit}>
          {prompts.map((prompt, i) => (
            <div key={i} className="input-group">
              <label className="input-label">
                {prompt ? `input ${i + 1}: ${prompt}` : `Input ${i + 1}`}
              </label>
              <input
                ref={i === 0 ? firstRef : null}
                type="text"
                className="modal-input"
                placeholder={`Value for input() call ${i + 1}`}
                value={values[i]}
                onChange={(e) => set(i, e.target.value)}
              />
            </div>
          ))}

          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="btn btn-run">
              ▶ Run with inputs
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
