const notes = [
  {
    number: '017',
    text: 'Persistent memory changes the interaction model of AI agents.',
  },
  {
    number: '016',
    text: 'Prompting is interface design for probabilistic systems.',
  },
  {
    number: '015',
    text: 'Users attribute intent when system boundaries are unclear.',
  },
  {
    number: '014',
    text: 'Voice interaction reveals trust architecture faster than screen-based UI.',
  },
  {
    number: '013',
    text: 'Multi-agent debate helps factual tasks, hurts creative ones.',
  },
  {
    number: '012',
    text: 'Calibrated uncertainty matters more than honest uncertainty.',
  },
  {
    number: '011',
    text: 'Gaze direction as a proxy for user intent in screenless computing.',
  },
  {
    number: '010',
    text: 'The privacy architecture of always-on AI is a design problem, not a policy problem.',
  },
];

export function NotesPage() {
  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '36px',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          marginBottom: '64px',
          color: 'var(--text-primary)',
        }}
      >
        Field Notes
      </h1>

      <div>
        {notes.map((note) => (
          <div
            key={note.number}
            style={{
              display: 'flex',
              gap: '20px',
              padding: '16px 0',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-tertiary)',
                letterSpacing: '0.04em',
                flexShrink: 0,
                paddingTop: '3px',
              }}
            >
              {note.number}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
              }}
            >
              {note.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
