import { Link } from 'react-router';

const work = [
  {
    slug: 'ray-ban-meta',
    title: 'Ray-Ban Meta',
    description: 'AI-powered smart glasses and multimodal capture.',
  },
  {
    slug: 'portal',
    title: 'Facebook Portal',
    description: 'Conversational AI in the home.',
  },
  {
    slug: 'oculus-voice',
    title: 'Oculus Voice',
    description: 'Voice interaction systems for immersive computing.',
  },
  {
    slug: 'ai-assistant-systems',
    title: 'AI Assistant Systems',
    description: 'Tools and platforms for building AI-driven experiences.',
  },
];

const timeline = [
  { year: '2022–', text: 'AI wearables and multimodal systems' },
  { year: '2019–2022', text: 'Conversational AI for home computing' },
  { year: '2016–2019', text: 'Voice interaction systems for immersive computing' },
];

const ideas = [
  { slug: 'agents-as-cognitive-prosthetics', title: 'Agents as Cognitive Prosthetics' },
  { slug: 'the-interface-layer-of-alignment', title: 'The Interface Layer of Alignment' },
  { slug: 'designing-interaction-for-llm-systems', title: 'Designing Interaction for LLM Systems' },
];

const notes = [
  { number: '017', text: 'Persistent memory changes the interaction model of AI agents.' },
  { number: '016', text: 'Prompting is interface design for probabilistic systems.' },
  { number: '015', text: 'Users attribute intent when system boundaries are unclear.' },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: '0.08em',
        color: 'var(--text-tertiary)',
        textTransform: 'uppercase',
        marginBottom: '24px',
      }}
    >
      {children}
    </div>
  );
}

export function Home() {
  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>

      {/* Hero */}
      <div style={{ marginBottom: '120px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '42px',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            marginBottom: '28px',
            color: 'var(--text-primary)',
          }}
        >
          Leif Martinson
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '8px',
          }}
        >
          Designing interfaces for AI systems, agents,<br />
          and multimodal computing.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
          }}
        >
          Work across conversational AI, wearables,<br />
          and voice interaction systems.
        </p>
      </div>

      {/* Selected Work */}
      <section style={{ marginBottom: 'var(--space-xl)' }}>
        <SectionLabel>Selected Work</SectionLabel>
        <div>
          {work.map((item) => (
            <Link
              key={item.slug}
              to={`/work/${item.slug}`}
              className="group block"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              <div style={{ padding: '20px 0' }}>
                <div
                  className="group-hover:opacity-60 transition-opacity duration-200"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '16px',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: 'var(--text-tertiary)',
                  }}
                >
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ marginBottom: 'var(--space-xl)' }}>
        <SectionLabel>Timeline</SectionLabel>
        <div>
          {timeline.map((item) => (
            <div key={item.year} style={{ display: 'flex', padding: '10px 0' }}>
              <div
                style={{
                  width: '120px',
                  flexShrink: 0,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--text-primary)',
                  letterSpacing: '0.02em',
                }}
              >
                {item.year}
              </div>
              <div
                style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ideas */}
      <section style={{ marginBottom: 'var(--space-xl)' }}>
        <SectionLabel>Ideas</SectionLabel>
        <div>
          {ideas.map((item) => (
            <Link
              key={item.slug}
              to={`/ideas/${item.slug}`}
              className="group block"
            >
              <div style={{ padding: '12px 0' }}>
                <span
                  className="group-hover:opacity-60 transition-opacity duration-200"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '16px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Field Notes */}
      <section style={{ marginBottom: 'var(--space-xl)' }}>
        <SectionLabel>Field Notes</SectionLabel>
        <div>
          {notes.map((note) => (
            <div key={note.number} style={{ padding: '10px 0', display: 'flex', gap: '16px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-tertiary)',
                  letterSpacing: '0.04em',
                  flexShrink: 0,
                  paddingTop: '2px',
                }}
              >
                {note.number}
              </span>
              <span
                style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}
              >
                {note.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section>
        <SectionLabel>About</SectionLabel>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '12px', maxWidth: '55ch' }}>
          Leif Martinson is a product designer working on AI systems,
          multimodal interfaces, and human-AI interaction.
        </p>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '55ch' }}>
          His work spans conversational AI, wearables, and voice systems,
          including products used by millions of people.
        </p>
      </section>
    </div>
  );
}
