import { useParams, Link } from 'react-router';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Lightbox } from '../Lightbox';
import portalImage from "figma:asset/bffbe3604eda291cb7186f41e8d6883d27fddfb7.png";

type Project = {
  title: string;
  role: string;
  domain: string;
  year: string;
  brief: string;
  contribution: string;
  highlights?: string[];
  outcome: string;
  media?: 'youtube' | 'portal-image';
  links?: { label: string; url: string }[];
};

const projects: Record<string, Project> = {
  'ray-ban-meta': {
    title: 'Ray-Ban Meta',
    role: 'Principal Product Designer',
    domain: 'AI on Wearables',
    year: '2019–Present',
    brief:
      'From early smart-glasses concept work in 2019 through Ray-Ban Stories — which created the category — to Ray-Ban Meta, the first Llama-powered AI glasses. I designed the core AI experience: how multimodal assistance works on a device with no screen. The product has sold more than two million units since launch.',
    contribution:
      'Defined the interaction model for voice, attention, signaling, proactive assistance, privacy, and failure handling. When Meta decided in spring 2023 to ship Llama on Ray-Ban Meta within months, I was the single-threaded design owner of the LLM experience — working with research science, ML engineering, and linguists on model and prompt iteration, quality metrics, and evals.',
    highlights: [
      'Hardware UX for a screenless device: capacitive touch behavior, LED signaling for both wearer and bystanders, and earcons.',
      '“Experience prototyping” — remote, first-person interactive video prototypes developed when COVID-19 shut down in-person research, used to validate use cases and flows.',
      'An on-device model architecture for hands-free messaging that preserved end-to-end encryption in WhatsApp and Messenger — and unlocked offline device actions as a side effect.',
      'A lock-screen attention system and sound design solving phone-OS throttling of live voice interactions — work that became a patent (US 12,131,733).',
      'A north-star interaction framework for multimodal, conversational, proactive AI — when to get AI’s attention, what to show it, when it can act, and how it signals what it senses. This model became the foundation for Live AI.',
      'Agent strategy and design direction for Meta AI on wearables (2024–2025): core UX patterns for agentic tasks, async tasks, and deep research.',
    ],
    outcome:
      'Ray-Ban Stories created the category; Ray-Ban Meta found product-market fit, selling faster than it could be produced. Recognized with iF Gold and IDEA (2024), Red Dot (2025), and — for Ray-Ban Stories — iF Gold and Red Dot Best of the Best (2022).',
    media: 'youtube',
  },
  'model-behavior': {
    title: 'Model Behavior on AI Glasses',
    role: 'Design Lead, Model Behavior & Interaction Model',
    domain: 'AI on Wearables',
    year: '2023–Present',
    brief:
      'Shipping a vanilla chat model on a voice-first wearable didn’t work: responses were too long, formatted like text, full of unnecessary follow-up questions — and the model didn’t know it was on glasses. Research showed people tire of repeating the wake word. The hypothesis: make the interaction feel natural and conversational, and usage would follow.',
    contribution:
      'Led design for model behavior, response style, and the interaction model across wearables. The organizing idea: AI on glasses should feel like a phone call, not a command line — say the wake word once, then just talk; a data-driven listening window instead of a fixed timeout; interrupt freely, full duplex; end the conversation naturally.',
    highlights: [
      'Natural dismissal — “that’s all,” “sounds good,” “thanks” trigger a graceful close, and only positive stop intents get a response, so the AI never replies when you’re clearly done.',
      'Sidespeech and device-directed speech detection — contextual classifiers that decide whether the wearer is talking to the device, to another person, or being talked past.',
      'Response style for voice — “62 and cloudy in SF, you might want a light jacket” instead of a paragraph of weather data.',
      'Design as a test suite — “it should feel natural” is not a metric, so I built the design-side source of truth for model style and behavior, baked into metrics, evals, data generation, annotation guidelines, and an LLM judge.',
    ],
    outcome:
      'The hypothesis held: a more natural conversational experience drove double-digit growth in AI usage, with dramatic gains in measured conversationality and style match. The same work surfaced real tradeoffs — voice-optimized brevity sometimes costs correctness — which now shape the next iteration. This interaction model became the foundation for Live AI.',
  },
  'voice-platforms': {
    title: 'Voice & Conversational AI Platforms',
    role: 'Senior Product Design Manager',
    domain: 'Developer Tools',
    year: '2020–2023',
    brief:
      'Set direction for Meta’s voice and conversational AI tooling ecosystem — Wit.ai, Voice SDK, and Assistant Studio — turning complex AI capabilities into usable workflows for developers and partners.',
    contribution:
      'Led a team of thirteen designers — product designers, conversation designers, and design prototypers — setting strategy across the platform portfolio and owning creative direction for flagship demo projects.',
    highlights: [
      'Assistant Studio, the internal tool used to build, test, and debug Meta AI interactions — including a visual canvas-based editor for AI conversations.',
      'The World Beyond, a Presence Platform showcase where players talk to Oppy, a virtual alien, by voice — demoed in the Meta Connect keynote.',
      'Whisperer, an open-source voice-driven game co-developed with BUCK, shipped to Quest App Lab as a reference for voice in VR.',
    ],
    outcome:
      'Across Wit.ai, the Quest Presence Platform, Spark AR, and Assistant Studio, the team enabled more than 300,000 developers to build voice- and language-powered features.',
    links: [
      { label: 'Wit.ai', url: 'https://wit.ai' },
      { label: 'Whisperer on GitHub', url: 'https://github.com/oculus-samples/voicesdk-samples-whisperer' },
    ],
  },
  'portal-quest-assistant': {
    title: 'Assistant UX for Portal & Quest',
    role: 'Senior Product Designer',
    domain: 'Conversational AI UX',
    year: '2018–2020',
    brief:
      'First full-time design hire on the Assistant team — defining foundational voice and conversational interaction patterns for consumer AI hardware across Portal and Oculus/Quest.',
    contribution:
      'Designed end-to-end assistant behavior across activation, listening, feedback, privacy, and recovery in constrained device environments.',
    highlights: [
      'Portal’s attention system and assistant visual identity, including motion and sound design.',
      '“Hey Portal, Good Morning” — an AI-powered personalized morning routine surfacing events, friend activity, and suggestions.',
      'Privacy UX for Portal setup and voice-interaction history in Facebook’s activity center.',
      'The assistant-layer interaction model and design system for Quest — where voice addressed the form factor’s hardest problems: navigating layered settings and entering text in VR.',
    ],
    outcome:
      'Every Portal generation shipped with voice and AI features; Quest gained voice navigation. The interaction patterns established here carried forward into AI on smart glasses.',
    media: 'portal-image',
  },
  'whisperer': {
    title: 'Whisperer',
    role: 'Design Lead',
    domain: 'Voice SDK · Quest',
    year: '2022',
    brief:
      'An open-source Voice SDK demo for Quest that taught developers how to build voice interactions in VR — a voice-driven experience co-developed with the animation studio BUCK.',
    contribution:
      'Co-developed the experience with BUCK as part of setting direction for the Voice SDK — a working demonstration of natural language as an input method in spatial computing.',
    outcome:
      'Open-sourced on GitHub (79 stars, 22 forks) as a reference implementation for voice-driven VR experiences.',
    links: [
      { label: 'GitHub', url: 'https://github.com/oculus-samples/voicesdk-samples-whisperer' },
      { label: 'BUCK Case Study', url: 'https://buck.co/work/meta-reality-labs-whisperer' },
    ],
  },
};

export function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? projects[slug] : null;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!project) {
    return (
      <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <Link
          to="/work"
          className="hover:opacity-60 transition-opacity duration-200"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}
        >
          ← Work
        </Link>
        <p style={{ marginTop: '48px', color: 'var(--text-tertiary)' }}>Project not found.</p>
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
          {project.title}
        </h1>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.05em' }}>
          {project.role} · {project.domain} · {project.year}
        </div>
      </div>

      {/* Brief */}
      <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: '60ch', marginBottom: '72px' }}>
        {project.brief}
      </p>

      {/* Media */}
      {project.media === 'youtube' && (
        <div style={{ marginBottom: '24px' }}>
          <div className="relative aspect-video overflow-hidden bg-black" style={{ border: '1px solid var(--border)' }}>
            <iframe
              src="https://www.youtube.com/embed/-cqwXxUo_q8"
              title="Ray-Ban Meta Smart Glasses — AI Features Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              loading="lazy"
            />
          </div>
          <div style={{ marginTop: '12px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
            Fig. 1 — “Hey Meta” campaign film, Ray-Ban | Meta
          </div>
        </div>
      )}

      {project.media === 'portal-image' && (
        <div style={{ marginBottom: '24px' }}>
          <div
            className="relative overflow-hidden cursor-zoom-in group"
            style={{ border: '1px solid var(--border)' }}
            onClick={() => setLightboxOpen(true)}
          >
            <ImageWithFallback
              src={portalImage}
              alt="The Portal family of smart display devices"
              className="w-full h-auto block"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors" />
          </div>
          <div style={{ marginTop: '12px', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
            Fig. 1 — The Portal device family
          </div>
          <Lightbox
            src={portalImage}
            alt="The Portal family of smart display devices"
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
          />
        </div>
      )}

      {/* Contribution / Outcome */}
      <div style={{ marginTop: '72px', display: 'flex', flexDirection: 'column', gap: '56px' }}>
        <div>
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
            Contribution
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: '60ch' }}>
            {project.contribution}
          </p>
        </div>

        {project.highlights && (
          <div>
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
              Highlights
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '60ch' }}>
              {project.highlights.map((item) => (
                <li key={item} style={{ display: 'flex', gap: '14px' }}>
                  <span aria-hidden="true" style={{ color: 'var(--text-tertiary)', flexShrink: 0 }}>—</span>
                  <span style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
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
            Outcome
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--text-secondary)', maxWidth: '60ch' }}>
            {project.outcome}
          </p>
        </div>
      </div>

      {/* Links */}
      {project.links && (
        <div style={{ marginTop: '48px', display: 'flex', gap: '24px' }}>
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition-opacity duration-200"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}
            >
              → {link.label}
            </a>
          ))}
        </div>
      )}

      {/* Back */}
      <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
        <Link
          to="/work"
          className="hover:opacity-60 transition-opacity duration-200"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}
        >
          ← Work
        </Link>
      </div>
    </div>
  );
}
