import { useState } from 'react'

export function RetrievalQuiz({ quiz, onClose }) {
  const [selected, setSelected] = useState(null)
  const answered = selected !== null

  return (
    <div className="modal-backdrop">
      <div className="retrieval-card">
        <div className="retrieval-header">
          <span className="retrieval-badge">⚡ Quick Check</span>
          <span className="retrieval-sub">Reinforcing what you just learned</span>
        </div>

        <p className="retrieval-q">{quiz.q}</p>

        <div className="retrieval-options">
          {quiz.options.map((opt, i) => {
            const isCorrect = i === quiz.answer
            const isSelected = i === selected
            let cls = 'retrieval-opt'
            if (answered) {
              if (isCorrect) cls += ' correct'
              else if (isSelected) cls += ' wrong'
              else cls += ' faded'
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => !answered && setSelected(i)}
                disabled={answered}
              >
                <span className="retrieval-opt-letter">{String.fromCharCode(65 + i)}</span>
                {opt}
              </button>
            )
          })}
        </div>

        {answered && (
          <div className={`retrieval-explain ${selected === quiz.answer ? 'explain-correct' : 'explain-wrong'}`}>
            <span className="explain-icon">{selected === quiz.answer ? '✅' : '💡'}</span>
            <span>{quiz.explain}</span>
          </div>
        )}

        {answered && (
          <button className="btn btn-run retrieval-continue" onClick={onClose}>
            Continue →
          </button>
        )}
      </div>
    </div>
  )
}
