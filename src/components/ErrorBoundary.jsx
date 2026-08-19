import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-icon">🐍</div>
          <h2 className="error-boundary-title">Something went wrong</h2>
          <p className="error-boundary-msg">{this.state.error.message}</p>
          <button className="btn btn-run" onClick={() => window.location.reload()}>
            Reload PyQuest
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
