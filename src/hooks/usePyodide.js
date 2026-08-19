import { useState, useEffect, useRef, useCallback } from 'react'

export function usePyodide() {
  const [status, setStatus] = useState('loading')   // loading | ready | running | error
  const [loadingMsg, setLoadingMsg] = useState('Starting…')
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [workerStatus, setWorkerStatus] = useState('')  // e.g. "Loading numpy…"

  const workerRef = useRef(null)
  const runIdRef = useRef(0)
  const callbacksRef = useRef({})
  const timeoutRef = useRef(null)

  const createWorker = useCallback(() => {
    const worker = new Worker('/pyworker.js', { type: 'classic' })
    workerRef.current = worker

    worker.onmessage = (e) => {
      const msg = e.data
      switch (msg.type) {
        case 'loading':
          setLoadingProgress(msg.progress)
          setLoadingMsg(msg.message)
          break
        case 'ready':
          setLoadingProgress(100)
          setStatus('ready')
          break
        case 'init_error':
          setStatus('error')
          break
        case 'status':
          setWorkerStatus(msg.message)
          break
        case 'result': {
          clearTimeout(timeoutRef.current)
          setStatus('ready')
          setWorkerStatus('')
          const cb = callbacksRef.current[msg.id]
          if (cb) { cb(msg); delete callbacksRef.current[msg.id] }
          break
        }
      }
    }

    worker.onerror = () => setStatus('error')
    worker.postMessage({ type: 'init' })
    return worker
  }, [])

  useEffect(() => {
    createWorker()
    return () => { workerRef.current?.terminate() }
  }, [createWorker])

  const runCode = useCallback((code, inputs = []) => {
    if (status !== 'ready') return Promise.resolve(null)
    const id = ++runIdRef.current
    setStatus('running')

    return new Promise((resolve) => {
      callbacksRef.current[id] = resolve

      // Kill after 8 seconds (catches infinite loops)
      timeoutRef.current = setTimeout(() => {
        workerRef.current?.terminate()
        delete callbacksRef.current[id]
        setStatus('loading')
        setWorkerStatus('')
        resolve({
          stdout: '',
          error: 'TimeoutError: Your code ran for more than 8 seconds.\nDid you write a loop that never stops? Check your while loops!',
          plots: [],
        })
        createWorker()
      }, 8000)

      workerRef.current.postMessage({ type: 'run', code, inputs, id })
    })
  }, [status, createWorker])

  return {
    status,
    loadingMsg,
    loadingProgress,
    workerStatus,
    runCode,
    isLoading:  status === 'loading',
    isRunning:  status === 'running',
    isReady:    status === 'ready',
    isError:    status === 'error',
  }
}
