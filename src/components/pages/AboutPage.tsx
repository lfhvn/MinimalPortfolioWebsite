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

const experience = [
  {
    years: '2023–',
    role: 'Principal Product Designer, AI on Wearables',
    org: 'Meta Reality Labs',
    detail:
      'Designed the core AI experience for Ray-Ban Meta smart glasses — voice, attention, proactive assistance, privacy, and failure handling on a device with no screen.',
  },
  {
    years: '2020–2023',
    role: 'Senior Product Design Manager, AI & AR/VR Platforms',
    org: 'Meta Reality Labs',
    detail:
      'Set direction for Meta’s voice and conversational AI tooling — Wit.ai, Voice SDK, and Assistant Studio — and led a multidisciplinary design team.',
  },
  {
    years: '2018–2020',
    role: 'Senior Product Designer, Conversational AI UX',
    org: 'Meta Reality Labs',
    detail:
      'First design hire for assistant experiences across Portal and Oculus/Quest; defined foundational voice interaction patterns for consumer AI hardware.',
  },
];

const earlier = [
  { years: '2018', role: 'Lead Designer', org: 'Wells Fargo Innovation Lab' },
  { years: '2016–2018', role: 'Lead Designer', org: 'Botanic Technologies' },
  { years: '2017', role: 'UX Designer', org: 'City of Oakland Innovation Fellowship' },
  { years: '2015–2017', role: 'UX Designer', org: 'Field Day Lab, UW–Madison' },
];

const recognition = [
  'iF Gold 2024 — Ray-Ban Meta',
  'IDEA 2024 — Ray-Ban Meta',
  'iF Gold 2022 — Ray-Ban Stories',
  'Red Dot Best of the Best 2022 — Ray-Ban Stories',
];

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
        <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--text-secondary)', maxWidth: '58ch', marginBottom: '18px' }}>
          I’m a product designer with 10+ years building AI-native products —
          assistants, developer tools, consumer hardware, and multimodal
          wearables. I currently work at Meta Reality Labs, where I designed
          the core AI experience for Ray-Ban Meta smart glasses.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--text-secondary)', maxWidth: '58ch', marginBottom: '18px' }}>
          I’m strongest at defining product behavior while model capabilities
          are still evolving: prototyping in code, writing and testing prompts,
          building evaluation criteria, and shipping in close partnership with
          engineering and research.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--text-secondary)', maxWidth: '58ch', marginBottom: '18px' }}>
          Through Hidden Layer, my independent research practice, I work on the
          questions I care most about: how AI systems should reason,
          communicate, and act in real deployment contexts — model behavior
          design, interpretability and what it means for product design, and
          how humans stay meaningfully in control of agentic systems.
        </p>
        <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--text-secondary)', maxWidth: '58ch' }}>
          Before design, I studied poetry — I hold an MFA in creative writing
          and publish as Leif Haven. I live in Berkeley, California.
        </p>
      </div>

      {/* Experience */}
      <div style={{ marginBottom: '80px' }}>
        <SectionLabel>Experience</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experience.map((item) => (
            <div key={item.years} style={{ display: 'flex', gap: '24px' }}>
              <div
                style={{
                  width: '96px',
                  flexShrink: 0,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-tertiary)',
                  letterSpacing: '0.02em',
                  paddingTop: '4px',
                }}
              >
                {item.years}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--text-primary)' }}>
                  {item.role}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em', marginTop: '4px' }}>
                  {item.org}
                </div>
                <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', marginTop: '8px', maxWidth: '52ch' }}>
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Earlier */}
      <div style={{ marginBottom: '80px' }}>
        <SectionLabel>Earlier</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {earlier.map((item) => (
            <div key={item.org} style={{ display: 'flex', gap: '24px' }}>
              <div
                style={{
                  width: '96px',
                  flexShrink: 0,
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-tertiary)',
                  letterSpacing: '0.02em',
                  paddingTop: '2px',
                }}
              >
                {item.years}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.role} · {item.org}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div style={{ marginBottom: '80px' }}>
        <SectionLabel>Education</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--text-primary)' }}>
              MFA, Creative Writing (Poetry)
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em', marginTop: '4px' }}>
              Columbia College Chicago, 2012
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: 'var(--text-primary)' }}>
              BA, English and Philosophy
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em', marginTop: '4px' }}>
              University of Wisconsin–Madison, 2008
            </div>
          </div>
        </div>
      </div>

      {/* Recognition */}
      <div style={{ marginBottom: '80px' }}>
        <SectionLabel>Recognition</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {recognition.map((item) => (
            <div key={item} style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Connect */}
      <div>
        <SectionLabel>Connect</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <a
            href="mailto:leif.haven@gmail.com"
            className="group"
            style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', maxWidth: '400px' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
              Email
            </span>
            <span className="group-hover:opacity-70 transition-opacity duration-200" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              leif.haven@gmail.com
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/leifhavenmartinson"
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
          <a
            href="https://github.com/lfhvn"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', maxWidth: '400px' }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
              GitHub
            </span>
            <span className="group-hover:opacity-70 transition-opacity duration-200" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              github.com/lfhvn
            </span>
          </a>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', maxWidth: '400px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
              Location
            </span>
            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              Berkeley, CA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
