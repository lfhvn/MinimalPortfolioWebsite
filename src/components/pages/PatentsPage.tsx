type Doc = {
  number: string;
  status: string;
  url: string;
};

type Invention = {
  title: string;
  summary: string;
  docs: Doc[];
};

const inventions: Invention[] = [
  {
    title: 'Active Listening for Assistant Systems',
    summary:
      'While a voice assistant is in listening mode, it plays continuous, subtle audio or haptic feedback so the user knows it is still listening. First-named inventor.',
    docs: [
      { number: 'US 12,131,733 B2', status: 'Granted 2024', url: 'https://patents.google.com/patent/US12131733B2/en' },
      { number: 'EP 4327199 B1', status: 'Granted 2026', url: 'https://patents.google.com/patent/EP4327199B1/en' },
    ],
  },
  {
    title: 'Context-Aware Rendering of Media Contents for Assistant Systems',
    summary:
      'Delivers notifications at an intensity — voice, light, sound, or nothing — chosen by weighing the content’s priority against the user’s current context.',
    docs: [
      { number: 'US 11,563,706 B2', status: 'Granted 2023', url: 'https://patents.google.com/patent/US11563706B2/en' },
      { number: 'US 2023/0164106 A1', status: 'Published 2023', url: 'https://patents.google.com/patent/US20230164106A1/en' },
    ],
  },
  {
    title: 'Conversational Interactions with an AI Assistant',
    summary:
      'Invoking an AI assistant on smart glasses without an explicit query — the assistant uses camera data to proactively offer help with what the wearer is looking at.',
    docs: [
      { number: 'US 2026/0087801 A1', status: 'Pending', url: 'https://patents.google.com/patent/US20260087801A1/en' },
      { number: 'WO 2026/072784 A1', status: 'Published 2026', url: 'https://patents.google.com/patent/WO2026072784A1/en' },
    ],
  },
  {
    title: 'Auto-Capture of Interesting Moments by Assistant Systems',
    summary:
      'A smart-glasses assistant uses cascading sensor policies and machine learning to detect contextually interesting moments and capture them automatically.',
    docs: [
      { number: 'EP 4327200 B1', status: 'Granted 2026', url: 'https://patents.google.com/patent/EP4327200B1/en' },
    ],
  },
  {
    title: 'Multi-Device Mediation for Assistant Systems',
    summary:
      'When several assistant devices hear the same wake word, the system decides which device the user actually intended to activate.',
    docs: [
      { number: 'WO 2022/226244 A1', status: 'Published 2022', url: 'https://patents.google.com/patent/WO2022226244A1/en' },
      { number: 'EP 4327198 A1', status: 'Published 2024', url: 'https://patents.google.com/patent/EP4327198A1/en' },
    ],
  },
  {
    title: 'Task Execution Based on Real-World Text Detection',
    summary:
      'The assistant reads text in the physical world through device cameras and executes tasks based on what it sees.',
    docs: [
      { number: 'WO 2022/225729 A1', status: 'Published 2022', url: 'https://patents.google.com/patent/WO2022225729A1/en' },
      { number: 'EP 4327197 A1', status: 'Published 2024', url: 'https://patents.google.com/patent/EP4327197A1/en' },
    ],
  },
  {
    title: 'Readout of Non-Latin or Non-Parsable Content',
    summary:
      'Rules for how a voice assistant reads messages aloud when they contain emoji or other content that doesn’t parse to speech.',
    docs: [
      { number: 'WO 2022/178066 A1', status: 'Published 2022', url: 'https://patents.google.com/patent/WO2022178066A1/en' },
      { number: 'US 2022/0269870 A1', status: 'Published 2022', url: 'https://patents.google.com/patent/US20220269870A1/en' },
    ],
  },
  {
    title: 'User Experiences on Smart Assistant Systems',
    summary:
      'An end-to-end smart-assistant architecture — speech recognition, language understanding, dialog management, agents, and response delivery across devices.',
    docs: [
      { number: 'US 2022/0199079 A1', status: 'Published 2022', url: 'https://patents.google.com/patent/US20220199079A1/en' },
    ],
  },
];

export function PatentsPage() {
  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '36px',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          marginBottom: '24px',
          color: 'var(--text-primary)',
        }}
      >
        Patents
      </h1>

      <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: '58ch', marginBottom: '64px' }}>
        Eight invention families in assistant systems, filed during my work on
        conversational AI and wearables at Meta — four granted patents, plus
        published and pending applications.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {inventions.map((inv) => (
          <div key={inv.title} style={{ borderBottom: '1px solid var(--border)', paddingBottom: '40px' }}>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '18px',
                color: 'var(--text-primary)',
                lineHeight: 1.4,
                marginBottom: '10px',
              }}
            >
              {inv.title}
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)', maxWidth: '58ch', marginBottom: '14px' }}>
              {inv.summary}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px' }}>
              {inv.docs.map((doc) => (
                <a
                  key={doc.number}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity duration-200"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-tertiary)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {doc.number} · {doc.status}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
