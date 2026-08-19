import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { EditorView, keymap, lineNumbers, highlightActiveLineGutter, drawSelection } from '@codemirror/view'
import { EditorState, Compartment } from '@codemirror/state'
import { python } from '@codemirror/lang-python'
import { oneDark } from '@codemirror/theme-one-dark'
import { defaultKeymap, historyKeymap, history } from '@codemirror/commands'
import { bracketMatching, indentOnInput } from '@codemirror/language'
import { closeBrackets, closeBracketsKeymap } from '@codemirror/autocomplete'

const STARTER = `# 🐍 Welcome to PyQuest!
# Write Python below and press ▶ Run (or Ctrl+Enter)

name = input("What's your name? ")
print(f"Hello, {name}! Welcome to PyQuest! 🎮")

# Try some math
numbers = [10, 20, 30, 40, 50]
total = sum(numbers)
avg   = total / len(numbers)
print(f"Sum: {total}  |  Average: {avg}")

# A simple loop
print("\\nCounting up...")
for i in range(1, 6):
    print(f"  {i} 🌟")

print("\\nYou're ready to start your Python adventure!")
`

export const Editor = forwardRef(function Editor({ onRun, initialCode, storageKey }, ref) {
  const domRef  = useRef(null)
  const viewRef = useRef(null)
  const onRunRef = useRef(onRun)
  useEffect(() => { onRunRef.current = onRun }, [onRun])

  useImperativeHandle(ref, () => ({
    getCode: () => viewRef.current?.state.doc.toString() ?? '',
    setCode: (code) => {
      if (!viewRef.current) return
      viewRef.current.dispatch({
        changes: { from: 0, to: viewRef.current.state.doc.length, insert: code },
      })
    },
    insertText: (text) => {
      if (!viewRef.current) return
      const { from } = viewRef.current.state.selection.main
      viewRef.current.dispatch({
        changes:   { from, insert: text },
        selection: { anchor: from + text.length },
      })
      viewRef.current.focus()
    },
  }))

  useEffect(() => {
    if (!domRef.current || viewRef.current) return

    const saved = (storageKey ? localStorage.getItem(storageKey) : null) ?? initialCode ?? STARTER

    const view = new EditorView({
      state: EditorState.create({
        doc: saved,
        extensions: [
          history(),
          lineNumbers(),
          highlightActiveLineGutter(),
          drawSelection(),
          indentOnInput(),
          bracketMatching(),
          closeBrackets(),
          python(),
          oneDark,
          EditorView.theme({
            '&':              { height: '100%', background: '#0D0F1C' },
            '.cm-scroller':   { fontFamily: "'Cascadia Code','Fira Code','Courier New',monospace", overflow: 'auto', lineHeight: '1.75' },
            '.cm-content':    { padding: '14px 0', caretColor: '#5B8FF9' },
            '.cm-gutters':    { background: '#0D0F1C', borderRight: '1px solid #252B50', color: '#3A4060', paddingRight: '8px' },
            '.cm-activeLine': { background: 'rgba(91,143,249,.05)' },
            '.cm-activeLineGutter': { background: 'rgba(91,143,249,.07)', color: '#5B8FF9' },
            '.cm-cursor':     { borderLeftColor: '#5B8FF9', borderLeftWidth: '2px' },
            '.cm-selectionBackground': { background: 'rgba(91,143,249,.25) !important' },
          }),
          keymap.of([
            { key: 'Ctrl-Enter', mac: 'Cmd-Enter', run: () => { onRunRef.current?.(); return true } },
            ...closeBracketsKeymap,
            ...defaultKeymap,
            ...historyKeymap,
          ]),
          EditorView.updateListener.of((u) => {
            if (u.docChanged && storageKey) localStorage.setItem(storageKey, u.state.doc.toString())
          }),
          EditorView.lineWrapping,
        ],
      }),
      parent: domRef.current,
    })

    viewRef.current = view
    return () => { view.destroy(); viewRef.current = null }
  }, [])

  return (
    <div
      ref={domRef}
      style={{ height: '100%', overflow: 'hidden' }}
      spellCheck={false}
    />
  )
})
