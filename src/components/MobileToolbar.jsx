const KEYS = [
  { label: '⇥ Tab',   insert: '    ' },
  { label: ':',        insert: ':' },
  { label: '( )',      insert: '()',  back: 1 },
  { label: '[ ]',      insert: '[]',  back: 1 },
  { label: '{ }',      insert: '{}',  back: 1 },
  { label: '" "',      insert: '""',  back: 1 },
  { label: '=',        insert: ' = ' },
  { label: '!=',       insert: ' != ' },
  { label: '#',        insert: '# ' },
  { label: 'print()',  insert: 'print()', back: 1 },
  { label: 'if:',      insert: 'if :\n    ', back: 6 },
  { label: 'for:',     insert: 'for  in :\n    ', back: 9 },
  { label: 'def:',     insert: 'def ():\n    ', back: 8 },
  { label: 'input()',  insert: 'input()', back: 1 },
  { label: 'range()',  insert: 'range()', back: 1 },
  { label: 'len()',    insert: 'len()', back: 1 },
]

export function MobileToolbar({ onInsert }) {
  return (
    <div className="mobile-toolbar">
      {KEYS.map((k) => (
        <button
          key={k.label}
          className="toolbar-key"
          onMouseDown={(e) => {
            e.preventDefault()      // keep editor focused
            onInsert(k.insert)
          }}
        >
          {k.label}
        </button>
      ))}
    </div>
  )
}
