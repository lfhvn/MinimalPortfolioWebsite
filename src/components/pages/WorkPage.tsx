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

export function WorkPage() {
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
        Selected Work
      </h1>

      <div>
        {work.map((item) => (
          <Link
            key={item.slug}
            to={`/work/${item.slug}`}
            className="group block"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            <div style={{ padding: '24px 0' }}>
              <div
                className="group-hover:opacity-60 transition-opacity duration-200"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '17px',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  marginBottom: '6px',
                }}
              >
                {item.title}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
