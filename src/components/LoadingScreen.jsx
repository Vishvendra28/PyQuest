const FACTS = [
  "Python was named after Monty Python, not a snake 🎭",
  "Python is used at Google, NASA, Instagram, and Spotify 🚀",
  "Python is 34 years old — born February 20, 1991 🎂",
  "Python's creator is called the 'Benevolent Dictator For Life' 👑",
  "Python code runs on Mars — it powers the Ingenuity helicopter 🛸",
  "Over 8 million developers use Python worldwide 🌍",
]

export function LoadingScreen({ message, progress }) {
  const fact = FACTS[Math.floor(Date.now() / 6000) % FACTS.length]

  return (
    <div className="loading-screen">
      <div className="loading-snake">🐍</div>

      <div className="loading-title">
        <span className="py">Py</span><span className="quest">Quest</span>
      </div>

      <div className="loading-tagline">Learn Python. Play a Game. Level Up.</div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="loading-msg">{message}</div>
      <div className="loading-fact">{fact}</div>
    </div>
  )
}
