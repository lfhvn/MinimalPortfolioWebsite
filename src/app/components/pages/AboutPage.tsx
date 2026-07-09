export function AboutPage() {
  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '36px',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          marginBottom: '48px',
          color: 'var(--text-primary)',
        }}
      >
        About
      </h1>

      <div style={{ marginBottom: '80px' }}>
        <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--text-secondary)', maxWidth: '55ch', marginBottom: '18px' }}>
          I'm a Principal Product Designer at Meta Reality Labs, working on
          multimodal AI for consumer wearables. I design the interactions between
          humans and large language models — how people talk to AI, how AI sees
          the world, and the trust architecture that makes it work.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--text-secondary)', maxWidth: '55ch', marginBottom: '18px' }}>
          My work sits at the intersection of artificial intelligence and
          human-computer interaction. I design behaviors, personalities, and the
          subtle social contracts between humans and machines.
        </p>
        <p style={{ fontSize: '15px', lineHeight: 1.85, color: 'var(--text-secondary)', maxWidth: '55ch' }}>
          Before smart glasses, I led design for Portal's voice interface, managed
          a 13-person team building developer platforms for Voice SDK and Wit.ai,
          and designed mixed reality experiences for Quest. I hold 8 patents in
          voice AI and assistant systems.
        </p>
      </div>

      {/* Education */}
      <div style={{ marginBottom: '80px' }}>
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
          Education
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--text-primary)' }}>
              MFA, Creative Writing
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em', marginTop: '4px' }}>
              Columbia College
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--text-primary)' }}>
              BA, Philosophy
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em', marginTop: '4px' }}>
              University of Wisconsin-Madison
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)', letterSpacing: '0.04em', marginTop: '8px' }}>
              Philosophy of Mind · Epistemology · Language · Ethics
            </div>
          </div>
        </div>
      </div>

      {/* Connect */}
      <div>
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
          Connect
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <a
            href="mailto:hello@leifhaven.com"
            className="group"
            style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', maxWidth: '400px' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
              Email
            </span>
            <span className="group-hover:opacity-70 transition-opacity duration-200" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              hello@leifhaven.com
            </span>
          </a>
          <a
            href="https://linkedin.com/in/leifhavenmartinson"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', maxWidth: '400px' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
              LinkedIn
            </span>
            <span className="group-hover:opacity-70 transition-opacity duration-200" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              linkedin.com/in/leifhavenmartinson
            </span>
          </a>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', maxWidth: '400px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
              Location
            </span>
            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              Brooklyn, NY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
