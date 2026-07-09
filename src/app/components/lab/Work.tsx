import React from 'react';
import { LargeStarburst, StarburstSigil } from './Icons';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// Reusing content from previous CaseStudies.tsx but refactoring for new design
// Images
import portalImage from "figma:asset/bffbe3604eda291cb7186f41e8d6883d27fddfb7.png";
import voiceSdkImage from "figma:asset/50fb68ed00edd86b94c5cb59fcbd17a7a6c1afb8.png";

const WORK_ITEMS = [
  {
    id: "001",
    slug: "ray-ban-meta",
    date: "2023.09.27",
    readTime: "Principal Designer",
    title: "Ray-Ban Meta Smart Glasses",
    subtitle: "Multimodal AI in a form factor people actually want to wear.",
    description: "Second-generation smart glasses integrating computer vision and conversational LLM. Features \"Hey Meta\" voice activation for real-time visual question answering. Combines fashion-forward design with multimodal AI capabilities in Ray-Ban frames.",
    details: "I led design for LLM integration, including prompting strategies, safety guardrails, and the voice-first interaction model.",
    stats: [
        "┌─ Key Outcome ──────────────────────────────────────┐",
        "│ Industry First: Multimodal generative AI on face   │",
        "│ Recognition: iF Gold & Red Dot Design Awards       │",
        "│ Market: Best-selling smart glasses in history      │",
        "│ Role: Principal Product Designer, AI Integration   │",
        "└────────────────────────────────────────────────────┘"
    ],
    image: "https://images.unsplash.com/photo-1651321224514-d3f3b25d15f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXktYmFuJTIwbWV0YSUyMHNtYXJ0JTIwZ2xhc3NlcyUyQyUyMHZyJTIwcHV6emxlJTIwZ2FtZSUyQyUyMG1peGVkJTIwcmVhbGl0eSUyMGhlYWRzZXQlMkMlMjBzdW5nbGFzc2VzJTIwd29tYW58ZW58MXx8fHwxNzY2MTEyMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    figCaption: "Fig. 1 — Ray-Ban Meta Smart Glasses",
    metadata: {
        path: "/work/ray-ban-meta",
        updated: "2023-Present",
        commit: "shipped"
    },
    references: [
        "Meta Connect 2023 Keynote",
        "Llama 2 & 3 Integration",
        "Multimodal Interaction Design"
    ]
  },
  {
    id: "002",
    slug: "whisperer",
    date: "2022.04.15",
    readTime: "Design Lead",
    title: "Whisperer VR",
    subtitle: "Voice-driven puzzle game demonstrating natural language as gameplay.",
    description: "A voice-only VR puzzle game where players interact with a garden spirit using natural language. Built to demonstrate the capabilities of the Meta Voice SDK.",
    details: "I led the creative direction and voice UX architecture, designing a intent schema that collapsed 80+ commands into 12 reusable patterns.",
    stats: [
        "┌─ Key Outcome ──────────────────────────────────────┐",
        "│ Innovation: \"Ghost Hands\" voice-gaze interaction   │",
        "│ Adoption: 10k+ installs, 70+ GitHub stars          │",
        "│ Impact: Standardized Voice SDK intent patterns     │",
        "│ Role: Creative & Design Lead                       │",
        "└────────────────────────────────────────────────────┘"
    ],
    image: "https://images.unsplash.com/photo-1622979136013-fcbffb84789c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY3VsdXMlMjBxdWVzdCUyMDIlMjBoZWFkc2V0fGVufDF8fHx8MTc2NjAwODg2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    figCaption: "Fig. 2 — Whisperer VR Gameplay Environment",
    metadata: {
        path: "/work/whisperer",
        updated: "2022",
        commit: "shipped"
    },
    references: [
        "Meta Voice SDK",
        "Wit.ai NLP Platform",
        "Unity Integration"
    ]
  },
  {
    id: "003",
    slug: "world-beyond",
    date: "2021.10.28",
    readTime: "Design Manager",
    title: "The World Beyond",
    subtitle: "Flagship Mixed Reality demo for Meta's Presence Platform.",
    description: "An interactive mixed reality experience where users interact with a virtual pet ('Oppy') in their physical room using Passthrough and voice.",
    details: "Led the voice and AI features, implementing gaze-based activation to eliminate wake words for a more natural social interaction.",
    stats: [
        "┌─ Key Outcome ──────────────────────────────────────┐",
        "│ Platform: Presence Platform Showcase App           │",
        "│ Tech: Passthrough + Scene Understanding + Voice    │",
        "│ Community: Open Sourced for developers             │",
        "│ Role: Senior Product Design Manager                │",
        "└────────────────────────────────────────────────────┘"
    ],
    image: portalImage, 
    // Using portal image as placeholder if no better match, or I can search for a generic MR image. 
    // Actually let's just use the portal image for the Portal section and find a new one here or reuse the headset one.
    // I'll stick to text description if image fails, but ImageWithFallback handles it.
    // Let's use a tech abstract image.
    figCaption: "Fig. 3 — Mixed Reality Passthrough Interaction",
    metadata: {
        path: "/work/world-beyond",
        updated: "2021-2022",
        commit: "shipped"
    },
    references: [
        "Scene Understanding API",
        "Spatial Anchors",
        "Voice SDK"
    ]
  },
  {
    id: "004",
    slug: "ai-ecosystem",
    date: "2020.01.01",
    readTime: "Design Manager",
    title: "Meta AI Ecosystem",
    subtitle: "Developer tools for the next generation of voice experiences.",
    description: "Led the design team building Meta's AR/VR AI platforms, including Voice SDK and Wit.ai. Democratized access to enterprise-grade NLP.",
    details: "We reduced the time-to-hello-world for voice integrations from 3 days to 30 minutes.",
    stats: [
        "┌─ Key Outcome ──────────────────────────────────────┐",
        "│ Scale: 100k+ active developers                     │",
        "│ Reach: Powering 500+ Quest Store apps              │",
        "│ Products: Voice SDK, Wit.ai, Voice Studio          │",
        "│ Role: Product Design Manager, AI Infrastructure    │",
        "└────────────────────────────────────────────────────┘"
    ],
    image: voiceSdkImage,
    figCaption: "Fig. 4 — Voice SDK Architecture",
    metadata: {
        path: "/work/ai-ecosystem",
        updated: "2020-2023",
        commit: "shipped"
    },
    references: [
        "Developer Experience (DX)",
        "API Design",
        "Visual Programming Tools"
    ]
  }
];

export function Work() {
  return (
    <div className="flex flex-col relative w-full">
      {/* Hero Section */}
      <div className="h-[400px] md:h-[600px] w-full flex items-center justify-center border-b border-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
           <div className="w-full h-full bg-[repeating-linear-gradient(45deg,#000_0px,#000_1px,transparent_1px,transparent_10px)]"></div>
        </div>
        <LargeStarburst />
      </div>

      {/* Dispatches / Work Items */}
      <div className="flex flex-col">
        {WORK_ITEMS.map((item, index) => (
          <article key={item.id} className="relative border-b border-[#0a0a0a] group">
            <div className="p-6 md:p-12 max-w-3xl mx-auto">
                {/* Header */}
                <header className="mb-8 relative">
                   <div className="absolute -left-16 top-0 hidden md:block opacity-30 font-mono text-xs rotate-90 origin-top-right translate-y-8">
                      ISSUE {item.id}
                   </div>
                   
                   <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 border-b border-[#0a0a0a] pb-2">
                      <h2 className="text-xl md:text-2xl font-sans uppercase tracking-widest font-normal">
                        {item.title}
                      </h2>
                      <div className="font-mono text-xs text-[#555] mt-2 md:mt-0">
                         {item.date} — {item.readTime}
                      </div>
                   </div>
                   
                   <div className="text-lg md:text-xl font-light text-[#0a0a0a] leading-relaxed max-w-2xl">
                      {item.subtitle}
                   </div>
                </header>

                {/* Body */}
                <div className="mb-8 text-[#555] leading-relaxed max-w-2xl">
                   <p className="mb-4">{item.description}</p>
                   <p className="text-sm font-mono border-l-2 border-[#0a0a0a] pl-4 py-2 my-6">
                      {item.details}
                   </p>
                </div>

                {/* ASCII Stats */}
                <div className="mb-12 overflow-x-auto">
                   <pre className="text-[10px] md:text-xs font-mono text-[#555] leading-tight">
                      {item.stats.join('\n')}
                   </pre>
                </div>

                {/* Image/Figure */}
                <figure className="mb-12 border border-[#0a0a0a] p-2 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]">
                   <div className="relative aspect-video overflow-hidden bg-gray-100">
                     <ImageWithFallback 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                     />
                   </div>
                   <figcaption className="mt-2 font-mono text-xs text-[#555] border-t border-[#0a0a0a]/20 pt-1">
                      {item.figCaption}
                   </figcaption>
                </figure>

                {/* Metadata Footer */}
                <footer className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#0a0a0a]/20">
                   <div>
                      <h4 className="font-sans text-xs uppercase tracking-widest mb-4">Metadata</h4>
                      <div className="font-mono text-xs text-[#555] flex flex-col gap-1">
                         <div>Path: {item.metadata.path}</div>
                         <div>Updated: {item.metadata.updated}</div>
                         <div>Commit: {item.metadata.commit}</div>
                      </div>
                   </div>
                   <div>
                      <h4 className="font-sans text-xs uppercase tracking-widest mb-4">References</h4>
                      <div className="font-mono text-xs text-[#555] flex flex-col gap-1">
                         {item.references.map((ref, i) => (
                             <div key={i}>{ref}</div>
                         ))}
                      </div>
                   </div>
                   <div>
                      <h4 className="font-sans text-xs uppercase tracking-widest mb-4">Next</h4>
                      <div className="font-mono text-xs text-[#555] flex flex-col gap-1">
                         <button className="text-left hover:text-black">→ View Case Study</button>
                         <button className="text-left hover:text-black">→ Related Work</button>
                      </div>
                   </div>
                </footer>
            </div>
            
            {/* Decorative End Marker */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center gap-2 bg-[#f9f9f7] px-4 z-10">
               <StarburstSigil className="w-4 h-4" />
            </div>
          </article>
        ))}
        
        <div className="h-32 flex items-center justify-center">
            <div className="font-mono text-xs text-[#555] uppercase tracking-widest">End of Dispatches</div>
        </div>
      </div>
    </div>
  );
}
