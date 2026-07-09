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
  outcome: string;
  media?: 'youtube' | 'portal-image';
  links?: { label: string; url: string }[];
};

const projects: Record<string, Project> = {
  'ray-ban-meta': {
    title: 'Ray-Ban Meta Smart Glasses',
    role: 'Principal Product Designer',
    domain: 'AI Integration',
    year: '2023–Present',
    brief:
      'Led the design of multimodal AI for Ray-Ban Meta smart glasses — the first consumer wearable with generative AI vision capabilities. Designed system prompts and interaction patterns for Llama 3, creating a voice-first experience that enables visual question answering through a screenless form factor.',
    contribution:
      'Designed the "Look and tell me" interaction model for Llama 3, defining how the LLM interprets camera input alongside voice queries. Created the privacy architecture — capture LED behavior, bystander awareness signals, and content filtering — that established trust for camera-based AI in public spaces.',
    outcome:
      'Shipped to millions of users worldwide. The multimodal AI became the product\'s defining feature, earning an iF Design Award Gold (2024) and a Meta Connect keynote feature.',
    media: 'youtube',
  },
  'whisperer': {
    title: 'Whisperer VR',
    role: 'Design Lead',
    domain: 'Voice SDK',
    year: '2022',
    brief:
      'Designed a voice-only VR puzzle game that proved natural language could serve as a primary input method in spatial computing. Flagship demo for Meta\'s Voice SDK, built in partnership with BUCK.',
    contribution:
      'Designed intent schemas that collapsed 80+ voice commands into 12 reusable patterns using Wit.ai. Invented the "Ghost Hands" interaction paradigm — players target objects with gaze and manipulate them with voice, eliminating button presses entirely.',
    outcome:
      'Open-sourced on GitHub with 70+ stars. Became the reference implementation for voice-driven VR experiences, demonstrating sub-250ms response latency.',
    links: [
      { label: 'GitHub', url: 'https://github.com/oculus-samples/voicesdk-samples-whisperer' },
      { label: 'BUCK Case Study', url: 'https://buck.co/work/meta-reality-labs-whisperer' },
    ],
  },
  'world-beyond': {
    title: 'The World Beyond',
    role: 'Design Manager',
    domain: 'Mixed Reality',
    year: '2021',
    brief:
      'Flagship Mixed Reality demo for Meta\'s Presence Platform. Led design of voice AI and character interaction systems for "Oppy," a virtual pet that inhabits the user\'s physical space.',
    contribution:
      'Designed a gaze-based activation model that eliminated wake words — users simply look at Oppy to initiate conversation, creating a more natural social interaction. Leveraged Scene Understanding so the character could interact with real furniture and objects.',
    outcome:
      'Became the definitive showcase for Quest\'s mixed reality capabilities. Open-sourced as a reference for the Presence Platform developer ecosystem.',
  },
  'portal': {
    title: 'Portal Devices',
    role: 'Senior Product Designer',
    domain: 'Voice UI',
    year: '2018–2020',
    brief:
      'Smart display with an AI-powered camera that automatically pans and zooms during video calls. Designed the "Hey Portal" voice interface for hands-free calling and device control.',
    contribution:
      'Designed the complete voice user interface — from wake word activation through call placement, media playback, and smart home control. Defined the conversational flows that made hands-free video calling feel effortless.',
    outcome:
      'Shipped across the Portal product family. The AI camera and voice experience became critical features during the pandemic, when demand for effortless video calling surged.',
    media: 'portal-image',
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
            Fig. 1 — Multimodal AI demo
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
