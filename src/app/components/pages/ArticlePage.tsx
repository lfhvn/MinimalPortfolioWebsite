import { useParams, Link } from 'react-router';

type Article = {
  title: string;
  subtitle: string;
  date: string;
  sections: {
    heading?: string;
    paragraphs: string[];
    asciiBox?: string[];
    figCaption?: string;
  }[];
  references: string[];
};

const articles: Record<string, Article> = {
  'agents-as-cognitive-prosthetics': {
    title: 'Agents as Cognitive Prosthetics',
    subtitle: 'How AI systems extend human reasoning.',
    date: '2026',
    sections: [
      {
        paragraphs: [
          'The framing of AI as a tool misses something important. Tools extend physical capability — a hammer extends the arm, a telescope extends the eye. But AI agents extend cognition itself. They don\'t just help us do things faster; they change how we think.',
          'This distinction matters for design. When we design a tool, we optimize for efficiency. When we design a cognitive prosthetic, we need to optimize for understanding — the user\'s understanding of the system, and the system\'s understanding of the user.',
          'I\'ve been exploring this framing through the lens of three design principles that emerged from shipping multimodal AI on smart glasses: transparency of reasoning, calibrated confidence, and graceful degradation of autonomy.',
        ],
      },
      {
        heading: 'Transparency of Reasoning',
        paragraphs: [
          'When a model answers a question, the user needs to understand not just what it said, but how it arrived there. On a screenless device like smart glasses, this is especially challenging — you can\'t show a chain-of-thought trace in audio.',
          'We developed what I call "reasoning seams" — brief verbal indicators that expose the model\'s process without overwhelming the interaction. Phrases like "Based on what I can see..." or "I\'m not certain, but..." give the user a mental model of the system\'s confidence and input sources.',
        ],
        asciiBox: [
          '┌─ Design Principle ────────────────────────────────┐',
          '│ Show the seams of reasoning, not the full trace   │',
          '│ Calibrate verbal confidence to actual uncertainty  │',
          '│ Let users probe deeper when they want to          │',
          '└──────────────────────────────────────────────────────┘',
        ],
      },
      {
        heading: 'Calibrated Confidence',
        paragraphs: [
          'One of the hardest problems in voice AI design is confidence calibration. A model that sounds certain when it\'s wrong is dangerous. A model that hedges everything is useless.',
          'We mapped model confidence scores to vocal delivery patterns — pacing, hedge words, and offer-to-verify prompts. The result: users developed accurate mental models of when to trust the system and when to double-check, without being told explicitly.',
        ],
      },
      {
        heading: 'Graceful Degradation',
        paragraphs: [
          'The most important design decision in any AI system is what happens when it fails. Cognitive prosthetics fail differently than tools — when a hammer breaks, the nail just doesn\'t go in. When a cognitive prosthetic fails, the user\'s entire reasoning process can be disrupted.',
          'Our approach: design for progressive autonomy reduction. When the model is confident, it acts. When uncertain, it suggests. When lost, it asks. The user always retains agency, and the system never pretends to know more than it does.',
        ],
      },
    ],
    references: [
      'Clark, A. & Chalmers, D. "The Extended Mind" — Analysis, 1998',
      'Norman, D. "Things That Make Us Smart" — Perseus Books, 1993',
      'Suchman, L. "Human-Machine Reconfigurations" — Cambridge University Press, 2007',
    ],
  },
  'steering-without-breaking': {
    title: 'Steering Without Breaking',
    subtitle: 'How do we control model behavior without degrading capabilities?',
    date: '2025',
    sections: [
      {
        paragraphs: [
          'Early results from steerability experiments. How do we control model behavior without degrading capabilities? The tradeoff space is more complex than it initially appears.',
          'We extracted steering vectors from concept pairs (honest/deceptive, cautious/bold) and applied them at inference time. Models steered successfully but often lost fluency or coherence.',
        ],
        asciiBox: [
          '┌─ Key Findings ─────────────────────────────────────┐',
          '│ Steering strength threshold: ~0.3-0.7 optimal       │',
          '│ Layer selection matters: middle layers > early/late  │',
          '│ Capability preservation: 15-25% degradation typical  │',
          '│ Future: Adaptive steering based on adherence metrics │',
          '└──────────────────────────────────────────────────────┘',
        ],
      },
      {
        heading: 'The Tradeoff Space',
        paragraphs: [
          'The core tension is between control and capability. Stronger steering vectors produce more reliable behavioral change but degrade the model\'s general competence. This isn\'t a bug — it\'s a fundamental property of how representations are organized.',
          'Middle layers proved most effective for intervention. Early layers contain too much low-level feature information; late layers are too committed to specific outputs. The sweet spot is where concepts are represented abstractly enough to manipulate but concretely enough to affect downstream behavior.',
        ],
      },
      {
        heading: 'Implications for Design',
        paragraphs: [
          'For product designers working with steered models, the key insight is that behavioral guarantees are probabilistic, not absolute. Design patterns need to account for the occasional failure of steering — the model that was told to be cautious but occasionally isn\'t.',
          'This maps directly to the voice AI work on smart glasses: we can\'t guarantee the model will always hedge when uncertain, so the interaction design needs fallback patterns for when it doesn\'t.',
        ],
      },
    ],
    references: [
      'Representation Engineering: A Top-Down Approach to AI Transparency — Zou et al., 2023',
      'Inference-Time Intervention: Eliciting Truthful Answers from a Language Model — Li et al., 2023',
      'Activation Addition: Steering Language Models Without Optimization — Turner et al., 2023',
    ],
  },
  'can-models-know-what-they-dont-know': {
    title: "Can Models Know What They Don't Know?",
    subtitle: 'Introspection experiments inspired by interpretability research.',
    date: '2025',
    sections: [
      {
        paragraphs: [
          'Introspection experiments inspired by Anthropic\'s interpretability work. We asked models to report their internal states and compared against ground truth from sparse autoencoders.',
          'The results are complicated. Models can sometimes accurately report active concepts, but often confabulate or rationalize. Self-knowledge is not the same as self-reporting.',
        ],
        asciiBox: [
          '┌────────────────────────────────────────────────────────┐',
          '│ Accuracy: 62% for high-activation features             │',
          '│ False positives: 31% claim inactive concepts           │',
          '│ Calibration: Poor — high confidence on wrong answers   │',
          '│ Implication: Introspection ≠ reliable alignment signal │',
          '└────────────────────────────────────────────────────────┘',
        ],
      },
      {
        heading: 'Why This Matters for Product',
        paragraphs: [
          'If we can\'t trust models to accurately report their own uncertainty, we can\'t rely on self-reported confidence for UX decisions. This has direct implications for how we design confidence indicators in voice AI — we need external calibration, not self-assessment.',
          'The smart glasses work taught me this empirically before I saw it in the research: users don\'t trust a system that claims to be uncertain 40% of the time. They trust a system that\'s uncertain at the right times. Calibration matters more than honesty.',
        ],
      },
    ],
    references: [
      'Towards Monosemanticity: Decomposing Language Models With Dictionary Learning — Anthropic, 2023',
      'Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet — Anthropic, 2024',
      'Language Models (Mostly) Know What They Know — Kadavath et al., 2022',
    ],
  },
};

export function ArticlePage() {
  const { slug } = useParams();
  const article = slug ? articles[slug] : null;

  if (!article) {
    return (
      <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <Link
          to="/ideas"
          className="hover:opacity-60 transition-opacity duration-200"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}
        >
          ← Ideas
        </Link>
        <p style={{ marginTop: '48px', color: 'var(--text-tertiary)' }}>Article not found.</p>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>

      {/* Header */}
      <div style={{ marginBottom: '72px' }}>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '34px',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '16px',
            color: 'var(--text-primary)',
          }}
        >
          {article.title}
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '17px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            marginBottom: '20px',
          }}
        >
          {article.subtitle}
        </p>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.05em' }}>
          Leif Martinson · {article.date}
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
        {article.sections.map((section, i) => (
          <div key={i}>
            {section.heading && (
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
                {section.heading}
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {section.paragraphs.map((p, j) => (
                <p
                  key={j}
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.8,
                    color: 'var(--text-secondary)',
                    maxWidth: '60ch',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {section.asciiBox && (
              <div
                style={{
                  marginTop: '36px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  lineHeight: 1.65,
                  color: 'var(--text-tertiary)',
                  whiteSpace: 'pre',
                  overflowX: 'auto',
                }}
              >
                {section.asciiBox.map((line, k) => (
                  <div key={k}>{line}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* References */}
      <div style={{ marginTop: '96px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.08em',
            color: 'var(--text-tertiary)',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          References
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {article.references.map((ref, i) => (
            <div
              key={i}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-tertiary)',
                lineHeight: 1.5,
              }}
            >
              {ref}
            </div>
          ))}
        </div>
      </div>

      {/* Back */}
      <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
        <Link
          to="/ideas"
          className="hover:opacity-60 transition-opacity duration-200"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}
        >
          ← Ideas
        </Link>
      </div>
    </div>
  );
}
