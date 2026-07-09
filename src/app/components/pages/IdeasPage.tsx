import { Link } from 'react-router';

const ideas = [
  {
    slug: 'agents-as-cognitive-prosthetics',
    title: 'Agents as Cognitive Prosthetics',
    subtitle: 'How AI systems extend human reasoning.',
  },
  {
    slug: 'the-interface-layer-of-alignment',
    title: 'The Interface Layer of Alignment',
    subtitle: 'Design as a layer of AI alignment strategy.',
  },
  {
    slug: 'designing-interaction-for-llm-systems',
    title: 'Designing Interaction for LLM Systems',
    subtitle: 'Patterns for human-AI interaction design.',
  },
];

export function IdeasPage() {
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
        Ideas
      </h1>

      <div>
        {ideas.map((idea) => (
          <Link
            key={idea.slug}
            to={`/ideas/${idea.slug}`}
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
                {idea.title}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                {idea.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
