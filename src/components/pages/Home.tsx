import { Link } from 'react-router';

const work = [
  {
    slug: 'ray-ban-meta',
    title: 'Ray-Ban Meta',
    description: 'The core AI experience for smart glasses — 2M+ units sold.',
  },
  {
    slug: 'voice-platforms',
    title: 'Voice & Conversational AI Platforms',
    description: 'Wit.ai, Voice SDK, and Assistant Studio — Meta’s developer tooling for voice.',
  },
  {
    slug: 'portal-quest-assistant',
    title: 'Assistant UX for Portal & Quest',
    description: 'Foundational voice interaction patterns for consumer AI hardware.',
  },
  {
    slug: 'whisperer',
    title: 'Whisperer',
    description: 'Open-source voice-driven VR demo for Quest, built with BUCK.',
  },
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
          Leif Haven Martinson
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
          Product designer working on AI — assistants, voice, and multimodal wearables at Meta Reality Labs. Founder of Hidden Layer, an independent research practice in AI interpretability and model behavior design.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '18px',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
          }}
        >
          Writer, as <Link to="/writing" style={{ borderBottom: '1px solid var(--border)' }} className="hover:opacity-60 transition-opacity duration-200">Leif Haven</Link>.
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

      {/* Writing */}
      <section style={{ marginBottom: 'var(--space-xl)' }}>
        <SectionLabel>Writing</SectionLabel>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '58ch', marginBottom: '16px' }}>
          <em style={{ fontFamily: 'var(--font-serif)' }}>Arcane Rituals from the Future</em> (1913 Press) won the
          1913 Prize for First Books, selected by Claudia Rankine. Poems and
          prose have appeared under the name Leif Haven.
        </p>
        <Link
          to="/writing"
          className="hover:opacity-60 transition-opacity duration-200"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}
        >
          All writing →
        </Link>
      </section>

      {/* Patents */}
      <section style={{ marginBottom: 'var(--space-xl)' }}>
        <SectionLabel>Patents</SectionLabel>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '58ch', marginBottom: '16px' }}>
          Eight invention families in assistant systems, including four
          granted patents — active listening, context-aware rendering,
          multi-device mediation, and proactive assistance.
        </p>
        <Link
          to="/patents"
          className="hover:opacity-60 transition-opacity duration-200"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}
        >
          All patents →
        </Link>
      </section>

      {/* Contact */}
      <section>
        <SectionLabel>Contact</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '15px', lineHeight: 1.7 }}>
          <a href="mailto:leif.haven@gmail.com" className="hover:opacity-60 transition-opacity duration-200" style={{ color: 'var(--text-secondary)' }}>
            leif.haven@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/leifhavenmartinson" className="hover:opacity-60 transition-opacity duration-200" style={{ color: 'var(--text-secondary)' }}>
            linkedin.com/in/leifhavenmartinson
          </a>
          <a href="https://github.com/lfhvn" className="hover:opacity-60 transition-opacity duration-200" style={{ color: 'var(--text-secondary)' }}>
            github.com/lfhvn
          </a>
        </div>
      </section>
    </div>
  );
}
