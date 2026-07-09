import React, { useState } from "react";
import { Glasses, Box, Gamepad2, Camera, Headphones, Monitor, Layers, ArrowLeft, Play, ExternalLink, Maximize2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Lightbox } from "./Lightbox";
import portalImage from "figma:asset/bffbe3604eda291cb7186f41e8d6883d27fddfb7.png";
import voiceSdkImage from "figma:asset/50fb68ed00edd86b94c5cb59fcbd17a7a6c1afb8.png";

interface CaseStudiesProps {
  study?: string;
  onBack?: () => void;
}

// --- Components ---

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 font-mono ${className}`}>
    {children}
  </span>
);

const Section = ({ title, children, className = "" }: { title?: string, children: React.ReactNode, className?: string }) => (
  <div className={`mb-12 ${className}`}>
    {title && (
      <h3 className="text-sm font-bold tracking-wider text-gray-500 dark:text-gray-400 mb-4 font-mono uppercase">
        {title}
      </h3>
    )}
    <div className="prose dark:prose-invert max-w-none">
      {children}
    </div>
  </div>
);

const Hero = ({ 
  title, 
  subtitle, 
  tags, 
  icon: Icon 
}: { 
  title: string, 
  subtitle: string, 
  tags: string[], 
  icon: any 
}) => (
  <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
    </div>
    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-tight flex items-start gap-4">
      {Icon && <Icon className="w-10 h-10 md:w-12 md:h-12 text-[var(--accent)] shrink-0 mt-1" />}
      <span className="glitch-hover" data-text={title}>{title}</span>
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-sans font-light leading-relaxed">
      {subtitle}
    </p>
  </div>
);

const StatsGrid = ({ stats }: { stats: { label: string, value: string }[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    {stats.map((stat, index) => (
      <div key={index} className="p-4 bg-[var(--hover)] rounded-lg border border-[var(--border)]">
        <div className="text-2xl font-bold font-mono text-[var(--accent)] mb-1">{stat.value}</div>
        <div className="text-xs text-[var(--muted)] font-mono uppercase">{stat.label}</div>
      </div>
    ))}
  </div>
);

const VideoEmbed = ({ videoId, videoUrl, title, description }: { videoId?: string, videoUrl?: string, title: string, description?: string }) => (
  <div className="mb-8 group">
    <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-[var(--border)] shadow-lg">
      {videoUrl ? (
        <video
          src={videoUrl}
          title={title}
          controls
          className="absolute top-0 left-0 w-full h-full"
        />
      ) : videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      ) : null}
    </div>
    {description && (
      <div className="mt-3 text-sm text-[var(--muted)] font-mono text-center flex items-center justify-center gap-2">
        <Play size={12} /> {description}
      </div>
    )}
  </div>
);

const ImageDisplay = ({ src, alt, description }: { src: string, alt: string, description?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mb-8 group cursor-zoom-in" onClick={() => setIsOpen(true)}>
        <div className="relative rounded-xl overflow-hidden bg-[var(--hover)] border border-[var(--border)] shadow-lg transition-transform hover:scale-[1.01] duration-300">
          <ImageWithFallback 
            src={src} 
            alt={alt}
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-mono backdrop-blur-md flex items-center gap-2">
              <Maximize2 size={12} /> View Fullscreen
            </span>
          </div>
        </div>
        {description && (
          <div className="mt-3 text-sm text-[var(--muted)] font-mono text-center">
            {description}
          </div>
        )}
      </div>
      <Lightbox src={src} alt={alt} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

// --- Main Component ---

export function CaseStudies({ study, onBack }: CaseStudiesProps) {
  if (!study) return null;

  const BackButton = () => (
    <button
      onClick={onBack}
      className="group flex items-center gap-2 text-sm font-mono text-[var(--muted)] hover:text-[var(--text)] mb-8 transition-colors"
    >
      <div className="p-1 rounded-full border border-[var(--border)] group-hover:border-[var(--text)] transition-colors">
        <ArrowLeft size={14} />
      </div>
      <span className="glitch-hover" data-text="back to projects">back to projects</span>
    </button>
  );

  const renderContent = () => {
    switch (study) {
      case "smart-glasses":
        return (
          <>
            <Hero 
              title="Ray-Ban Meta"
              subtitle="The first consumer smart glasses with multimodal generative AI, blending iconic fashion with cutting-edge vision capabilities."
              tags={["2023–Present", "AI Wearable", "Principal Designer", "Multimodal"]}
              icon={Glasses}
            />

            <VideoEmbed 
              videoId="-cqwXxUo_q8"
              title="Ray-Ban Meta Smart Glasses - AI Features Demo"
              description="Demonstration of multimodal AI capabilities: 'Hey Meta, look and tell me...'"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Section title="Overview">
                  <p className="text-lg leading-relaxed mb-6">
                    As Principal Product Designer for AI Integration, I led the design of the multimodal LLM experience for the second-generation Ray-Ban Meta smart glasses. 
                    The challenge was to integrate a powerful visual assistant into a screenless, voice-first wearable without compromising the iconic style of Ray-Ban frames.
                  </p>
                  <p className="text-lg leading-relaxed">
                    The result is "Hey Meta" — an always-available assistant that can see what you see and hear what you hear, enabling real-time visual question answering, 
                    translation, and contextual assistance while keeping users present in the moment.
                  </p>
                </Section>

                <Section title="Key Contributions">
                  <div className="space-y-8">
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                      <h4 className="text-lg font-bold mb-2 font-sans">LLM Integration & Prompt Design</h4>
                      <p className="text-[var(--text-body)]">Designed system prompts and fine-tuning strategies for Llama 3 to ensure the AI's personality was helpful, concise, and safe for a wearable context. Created frameworks for "Look and tell me" interactions.</p>
                    </div>
                    
                    <div className="border-l-2 border-[var(--accent)] pl-6">
                      <h4 className="text-lg font-bold mb-2 font-sans">Screenless Interaction Model</h4>
                      <p className="text-[var(--text-body)]">Developed a voice-first UX that relies on audio cues and LED feedback rather than screens. Balanced responsiveness with battery life and privacy, ensuring the user always knows when the AI is active.</p>
                    </div>

                    <div className="border-l-2 border-[var(--accent)] pl-6">
                      <h4 className="text-lg font-bold mb-2 font-sans">Privacy & Trust Architecture</h4>
                      <p className="text-[var(--text-body)]">Designed the "Capture LED" behavior and bystander awareness signals. Built robust content filtering systems to prevent misuse of the camera-based AI features in public spaces.</p>
                    </div>
                  </div>
                </Section>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <div className="p-6 bg-[var(--window-bg)] border border-[var(--border)] rounded-xl shadow-sm">
                    <h4 className="font-mono text-xs uppercase text-[var(--muted)] mb-4">Project Stats</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-bold">Role</div>
                        <div className="text-sm text-[var(--text-body)]">Principal Product Designer</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold">Team</div>
                        <div className="text-sm text-[var(--text-body)]">Reality Labs AI</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold">Timeline</div>
                        <div className="text-sm text-[var(--text-body)]">2023 – Present</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-[var(--window-bg)] border border-[var(--border)] rounded-xl shadow-sm">
                    <h4 className="font-mono text-xs uppercase text-[var(--muted)] mb-4">Recognition</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-2">
                        <span className="text-[var(--accent)]">★</span> 
                        <span>iF Design Award 2024 (Gold)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[var(--accent)]">★</span> 
                        <span>Red Dot Design Award 2024</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[var(--accent)]">★</span> 
                        <span>Meta Connect Keynote Feature</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Section title="Impact" className="mt-12">
               <StatsGrid stats={[
                 { label: "Market Status", value: "Best Seller" },
                 { label: "Interaction", value: "Multimodal" },
                 { label: "Category", value: "Smart Glasses" },
                 { label: "Reception", value: "4.8/5 Stars" }
               ]} />
            </Section>
          </>
        );

      case "whisperer":
        return (
          <>
            <Hero 
              title="Whisperer VR"
              subtitle="A voice-driven VR puzzle game demonstrating natural language as a core gameplay mechanic."
              tags={["2022", "VR Game", "Design Lead", "Voice SDK"]}
              icon={Gamepad2}
            />

            <VideoEmbed 
              videoUrl="https://scontent-sjc3-1.oculuscdn.com/v/t64.7195-25/38982516_544113057317278_3328695477699888462_n.mp4?_nc_cat=110&ccb=1-7&_nc_sid=b20b63&_nc_ohc=EZZ8RUkYp1cQ7kNvwGGuPtZ&_nc_oc=AdlDQLuD6d8CS7aLUb1wwMq-IKzKlNIQum1UqqIP0sPizjXWbLiY5eK4BN2G8O4sfnAnsNQ3nYVtzNJdrjiofXhh&_nc_zt=28&_nc_ht=scontent-sjc3-1.oculuscdn.com&_nc_gid=hQJtub629Mf4DXqyZB2A1w&oh=00_AfVnZq1B8SzSk1LUBhKLpshKfPQ9h10SD9B_UHspjqabjw&oe=68A13497"
              title="Whisperer VR Gameplay"
              description="Players use voice commands to control the environment and solve puzzles."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Section title="Overview">
                  <p className="text-lg leading-relaxed mb-6">
                    Whisperer is a voice-only VR puzzle game developed in partnership with BUCK. It serves as the flagship demonstration for Meta's Voice SDK. 
                    Unlike traditional VR games that rely on controllers, Whisperer requires players to use their voice to interact with a virtual garden spirit, proving that natural language can be a primary input method in spatial computing.
                  </p>
                </Section>

                <Section title="Process & Innovation">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-[var(--hover)] rounded-xl border border-[var(--border)]">
                      <h4 className="font-bold mb-2">Intent Schema Design</h4>
                      <p className="text-sm">Collapsed 80+ specific commands into 12 reusable intent patterns using Wit.ai, creating a scalable framework for voice interaction.</p>
                    </div>
                    <div className="p-6 bg-[var(--hover)] rounded-xl border border-[var(--border)]">
                      <h4 className="font-bold mb-2">"Ghost Hands" UI</h4>
                      <p className="text-sm">Invented a new interaction paradigm where players target objects with gaze/pointing and manipulate them with voice, removing the need for button presses.</p>
                    </div>
                  </div>
                </Section>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <div className="p-6 bg-[var(--window-bg)] border border-[var(--border)] rounded-xl shadow-sm">
                    <h4 className="font-mono text-xs uppercase text-[var(--muted)] mb-4">Links</h4>
                    <a href="https://github.com/oculus-samples/voicesdk-samples-whisperer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--accent)] hover:underline mb-2">
                      <ExternalLink size={14} /> GitHub Repository
                    </a>
                    <a href="https://buck.co/work/meta-reality-labs-whisperer" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[var(--accent)] hover:underline">
                      <ExternalLink size={14} /> BUCK Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Section title="Outcome" className="mt-12">
               <StatsGrid stats={[
                 { label: "Downloads", value: "10k+" },
                 { label: "GitHub Stars", value: "70+" },
                 { label: "Latency", value: "<250ms" },
                 { label: "Rating", value: "4.9/5" }
               ]} />
            </Section>
          </>
        );

      case "world-beyond":
        return (
          <>
            <Hero 
              title="The World Beyond"
              subtitle="A flagship Mixed Reality demo showcasing Meta's Presence Platform and voice-driven virtual characters."
              tags={["2021", "Mixed Reality", "Design Manager", "Presence Platform"]}
              icon={Box}
            />

            <VideoEmbed 
              videoUrl="https://scontent-sjc3-1.oculuscdn.com/v/t64.7195-25/38982685_244224361214605_2721446112388331850_n.mp4?_nc_cat=110&ccb=1-7&_nc_sid=b20b63&_nc_ohc=elDIAzjxQuYQ7kNvwF171pf&_nc_oc=AdnyUNybgMeJ19p3igHWzyJ2ut0wicwnUkIfH1r8gQ7zD1V_qcu36i43dfacegYtb0c&_nc_zt=28&_nc_ht=scontent-sjc3-1.oculuscdn.com&_nc_gid=Zk2hbt4nxOikGFTOWLN4zA&oh=00_AfTXJGMh4zlhYp7m9UK7B7v2tdgNz_SDx8DvxN8T-SN1Gg&oe=689047D8"
              title="The World Beyond Demo"
              description="Interacting with Oppy the virtual pet in a physical living room using Passthrough."
            />

            <Section title="Overview">
              <p className="text-lg leading-relaxed">
                The World Beyond was the first major demonstration of Meta's Mixed Reality capabilities on Quest. It allows users to turn their physical room into a magical forest and interact with "Oppy," a virtual pet. 
                My role focused on the Voice AI and character interaction systems, ensuring users could speak naturally to Oppy to guide her, feed her, and play games.
              </p>
            </Section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
               <div className="p-6 border border-[var(--border)] rounded-xl">
                 <h4 className="font-bold text-lg mb-4">Voice & Gaze</h4>
                 <p className="text-[var(--text-body)]">Implemented a gaze-based activation system where the user simply looks at the character to speak, eliminating wake words ("Hey Oppy") for a more natural social interaction.</p>
               </div>
               <div className="p-6 border border-[var(--border)] rounded-xl">
                 <h4 className="font-bold text-lg mb-4">Spatial Awareness</h4>
                 <p className="text-[var(--text-body)]">Leveraged Scene Understanding to allow Oppy to jump on physical furniture and hide behind real-world objects, grounding the AI character in the user's physical reality.</p>
               </div>
            </div>
          </>
        );

      case "ray-ban-stories":
        return (
          <>
            <Hero 
              title="Ray-Ban Stories"
              subtitle="The first generation of smart glasses that look and feel like classic Ray-Bans."
              tags={["2021", "Wearables", "Senior Designer", "Voice UI"]}
              icon={Camera}
            />

            <VideoEmbed 
              videoId="fYMq-5fQD3Q"
              title="Ray-Ban Stories Launch"
              description="The first mainstream smart glasses with camera and voice features."
            />

            <Section title="Overview">
              <p className="text-lg leading-relaxed">
                Before AI, there was Capture. Ray-Ban Stories introduced the world to the idea of a camera on your face that didn't look like a cyborg attachment. 
                I led the design of the Voice User Interface (VUI), defining how users control capture ("Hey Facebook, take a photo") and media playback without touching the frames.
              </p>
            </Section>

            <Section title="Key Features">
              <ul className="list-disc pl-6 space-y-2 text-[var(--text-body)]">
                 <li>Hands-free voice capture for instant moments</li>
                 <li>Discrete LED recording indicator for privacy</li>
                 <li>Touch-sensitive temple for audio controls</li>
                 <li>Seamless companion app pairing</li>
              </ul>
            </Section>
          </>
        );

      case "ai-ecosystem":
        return (
          <>
            <Hero 
              title="Meta AI Ecosystem"
              subtitle="Building the platforms and tools that power the next generation of voice experiences."
              tags={["2020-2023", "Platform", "Design Manager", "Developer Tools"]}
              icon={Layers}
            />

            <ImageDisplay 
              src={voiceSdkImage}
              alt="Voice SDK Architecture"
              description="Visualizing the interaction between Voice SDK, Wit.ai, and Unity."
            />

            <Section title="Overview">
               <p className="text-lg leading-relaxed">
                 Behind every great AI experience is a great developer platform. I led the design team responsible for Meta's Voice SDK and the Wit.ai NLP platform. 
                 We democratized access to enterprise-grade speech recognition and natural language understanding, allowing thousands of developers to add voice magic to their Quest apps.
               </p>
            </Section>

            <Section title="Impact">
               <StatsGrid stats={[
                 { label: "Developers", value: "100k+" },
                 { label: "Quest Apps", value: "500+" },
                 { label: "Setup Time", value: "30 mins" },
                 { label: "Reliability", value: "99.9%" }
               ]} />
            </Section>
          </>
        );

      case "quest-ai":
        return (
          <>
            <Hero 
              title="Quest AI Features"
              subtitle="System-level voice commands and spatial understanding for VR."
              tags={["2020-2022", "VR OS", "Senior Designer", "System UI"]}
              icon={Headphones}
            />

            <ImageDisplay 
              src="https://images.unsplash.com/photo-1622979136013-fcbffb84789c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY3VsdXMlMjBxdWVzdCUyMDIlMjBoZWFkc2V0fGVufDF8fHx8MTc2NjAwODg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Meta Quest 2"
              description="Meta Quest 2 Headset"
            />

            <Section title="Overview">
              <p className="text-lg leading-relaxed">
                Bringing voice control to the operating system of the Quest headset. I designed the global "Hey Facebook" command system, allowing users to launch apps, search for friends, and control settings without putting down their controllers.
              </p>
            </Section>

            <Section title="Key Metrics">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="p-4 bg-[var(--hover)] rounded text-center">
                   <div className="text-3xl font-bold text-[var(--accent)] mb-2">40%</div>
                   <div className="text-sm">Faster Task Completion</div>
                 </div>
                 <div className="p-4 bg-[var(--hover)] rounded text-center">
                   <div className="text-3xl font-bold text-[var(--accent)] mb-2">2x</div>
                   <div className="text-sm">Daily Usage Growth</div>
                 </div>
                 <div className="p-4 bg-[var(--hover)] rounded text-center">
                   <div className="text-3xl font-bold text-[var(--accent)] mb-2">A11y</div>
                   <div className="text-sm">Critical Accessibility Tool</div>
                 </div>
              </div>
            </Section>
          </>
        );

      case "portal-devices":
        return (
          <>
            <Hero 
              title="Portal Devices"
              subtitle="Redefining video calling with AI-powered smart camera and voice."
              tags={["2018-2020", "Smart Home", "Senior Designer", "VUI"]}
              icon={Monitor}
            />

            <ImageDisplay 
              src={portalImage}
              alt="Facebook Portal Family"
              description="The Portal family of devices."
            />

            <Section title="Overview">
              <p className="text-lg leading-relaxed">
                Portal was the first smart display to feature an AI camera that automatically panned and zoomed to keep everyone in the room in view. 
                I designed the "Hey Portal" voice experience, enabling hands-free calling that felt magical during the height of the pandemic when connection was most needed.
              </p>
            </Section>
          </>
        );

      default:
        return <div>Case study not found.</div>;
    }
  };

  return (
    <div className="min-h-full pb-20 fade-in">
      <BackButton />
      {renderContent()}
    </div>
  );
}