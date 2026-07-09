import React from 'react';
import { StarburstSigil } from './Icons';

export function Experience() {
  return (
    <div className="flex flex-col relative w-full min-h-screen">
       <div className="p-6 md:p-12 max-w-3xl mx-auto w-full pt-24">
          <header className="mb-16 border-b border-[#0a0a0a] pb-8">
             <h1 className="text-4xl md:text-6xl font-sans font-light uppercase tracking-tight mb-4">
               Experience
             </h1>
             <div className="font-mono text-sm text-[#555]">
               Processing professional history...
             </div>
          </header>

          <div className="space-y-16">
             {/* Role 1 */}
             <div className="relative pl-8 md:pl-0">
                <div className="absolute left-0 top-0 md:hidden">
                   <StarburstSigil className="w-6 h-6" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8">
                   <div className="font-mono text-xs text-[#555] pt-2">
                      2023 — Present
                   </div>
                   <div>
                      <h3 className="text-xl font-sans font-normal uppercase tracking-wide mb-1">Principal Product Designer</h3>
                      <div className="font-mono text-xs text-[#555] mb-6">Meta Reality Labs · AI Integration</div>
                      <p className="text-[#0a0a0a] leading-relaxed mb-4 max-w-xl">
                        Leading design for multimodal LLM integration on Ray-Ban Meta smart glasses. 
                        Defining the interaction model for "Look and tell me" features, prompt engineering strategies, 
                        and safety guardrails for always-on AI wearables.
                      </p>
                      <ul className="list-disc list-inside font-mono text-xs text-[#555] space-y-1">
                        <li>System Prompt Design</li>
                        <li>Voice UI Architecture</li>
                        <li>Privacy & Trust Patterns</li>
                      </ul>
                   </div>
                </div>
             </div>

             {/* Role 2 */}
             <div className="relative pl-8 md:pl-0">
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8">
                   <div className="font-mono text-xs text-[#555] pt-2">
                      2019 — 2023
                   </div>
                   <div>
                      <h3 className="text-xl font-sans font-normal uppercase tracking-wide mb-1">Product Design Manager</h3>
                      <div className="font-mono text-xs text-[#555] mb-6">Meta Reality Labs · AI Infrastructure</div>
                      <p className="text-[#0a0a0a] leading-relaxed mb-4 max-w-xl">
                        Managed a 13-person design team building the Meta Voice SDK, Wit.ai NLP platform, 
                        and developer tools for AR/VR. Enabled 100k+ developers to integrate voice into their Quest applications.
                      </p>
                      <ul className="list-disc list-inside font-mono text-xs text-[#555] space-y-1">
                        <li>Developer Experience (DX)</li>
                        <li>Platform Strategy</li>
                        <li>Team Leadership</li>
                      </ul>
                   </div>
                </div>
             </div>

             {/* Role 3 */}
             <div className="relative pl-8 md:pl-0">
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8">
                   <div className="font-mono text-xs text-[#555] pt-2">
                      2018 — 2019
                   </div>
                   <div>
                      <h3 className="text-xl font-sans font-normal uppercase tracking-wide mb-1">Senior Product Designer</h3>
                      <div className="font-mono text-xs text-[#555] mb-6">Meta (Facebook) · Portal</div>
                      <p className="text-[#0a0a0a] leading-relaxed mb-4 max-w-xl">
                        Designed the "Hey Portal" voice experience and smart camera behaviors for the Portal device family.
                        Created hands-free calling flows that became essential during the 2020 pandemic.
                      </p>
                      <ul className="list-disc list-inside font-mono text-xs text-[#555] space-y-1">
                        <li>VUI Design</li>
                        <li>Smart Camera AI</li>
                        <li>Hardware Integration</li>
                      </ul>
                   </div>
                </div>
             </div>
             
             {/* Education */}
             <div className="pt-16 border-t border-[#0a0a0a]/20">
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8">
                   <div className="font-mono text-xs text-[#555] pt-2">
                      Education
                   </div>
                   <div>
                      <h3 className="text-lg font-sans font-normal uppercase tracking-wide mb-1">BA Philosophy</h3>
                      <div className="font-mono text-xs text-[#555]">University of Washington</div>
                      <p className="text-[#0a0a0a] text-sm mt-4 max-w-xl">
                         Focus on Philosophy of Mind and Phenomenology. This background informs my approach to AI design, 
                         centering human consciousness and agency in the age of automation.
                      </p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
