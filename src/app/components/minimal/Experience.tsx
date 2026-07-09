import React from "react";
import { HeadingText, SubHeading, BodyText, MonoText, AsciiBox, SectionDivider, StarburstSigil } from "./Shared";

export function Experience() {
  return (
    <div className="flex flex-col gap-16 pb-20 fade-in">
        {/* Intro */}
        <div className="relative py-12">
            <StarburstSigil className="mb-6" />
            <HeadingText text="Experience Log" />
        </div>

        {/* Meta Reality Labs */}
        <section className="relative">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <SubHeading text="Meta Reality Labs" className="mb-0" />
                <MonoText>2018 — Present</MonoText>
            </div>
            <MonoText className="mb-6 text-[#555]/80">Menlo Park, CA (Hybrid)</MonoText>

            <div className="flex flex-col gap-8 border-l border-[#0a0a0a]/10 pl-6 ml-1">
                <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border border-[#555] bg-[#f9f9f7]"></div>
                    <h4 className="font-['Inter'] font-bold text-[16px] mb-1">Principal Product Designer, AI Integration</h4>
                    <MonoText className="mb-2">2021 — Present</MonoText>
                    <BodyText className="mb-2">
                        Leading design for multimodal AI on smart glasses. Defining how users interact with LLMs without screens.
                    </BodyText>
                    <ul className="list-disc pl-4 font-['Inter'] text-[14px] text-[#374151] space-y-1">
                        <li>Ray-Ban Meta Smart Glasses (AI Architecture)</li>
                        <li>Llama 3 System Prompt Design</li>
                        <li>Privacy & Trust Frameworks for Wearable AI</li>
                    </ul>
                </div>

                <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border border-[#555] bg-[#f9f9f7]"></div>
                    <h4 className="font-['Inter'] font-bold text-[16px] mb-1">Product Design Manager, AI Infrastructure</h4>
                    <MonoText className="mb-2">2020 — 2021</MonoText>
                    <BodyText className="mb-2">
                        Managed a 13-person design team building developer platforms for Voice SDK and Wit.ai.
                    </BodyText>
                </div>

                <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border border-[#555] bg-[#f9f9f7]"></div>
                    <h4 className="font-['Inter'] font-bold text-[16px] mb-1">Senior Product Designer</h4>
                    <MonoText className="mb-2">2018 — 2020</MonoText>
                    <BodyText className="mb-2">
                        Designed voice interactions for Portal and Quest.
                    </BodyText>
                </div>
            </div>
        </section>

        <SectionDivider />

        {/* Wells Fargo */}
        <section className="relative">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <SubHeading text="Wells Fargo" className="mb-0" />
                <MonoText>2018</MonoText>
            </div>
             <MonoText className="mb-6 text-[#555]/80">San Francisco, CA</MonoText>

            <div className="flex flex-col gap-8 border-l border-[#0a0a0a]/10 pl-6 ml-1">
                <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border border-[#555] bg-[#f9f9f7]"></div>
                    <h4 className="font-['Inter'] font-bold text-[16px] mb-1">Lead UX Designer</h4>
                    <BodyText>
                        Digital banking transformation and mobile app redesigns.
                    </BodyText>
                </div>
            </div>
        </section>

        <SectionDivider />

        <AsciiBox>
            {`┌─ Technical Stack ────────────────────────────────────────┐
│ Design: Figma, Principle, Unity, Blender                 │
│ Prototyping: React, Python, Arduino, C#                  │
│ AI: Prompt Engineering, Fine-tuning, LangChain           │
│ Method: Systems Thinking, Rapid Prototyping              │
└──────────────────────────────────────────────────────────┘`}
        </AsciiBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
             <div>
                <SubHeading text="Patents" />
                <ul className="space-y-4 mt-4">
                    <li>
                        <BodyText className="font-medium">Audio-Visual Feedback for Wearable AI</BodyText>
                        <MonoText>US Patent 11,234,567 • Issued 2023</MonoText>
                    </li>
                    <li>
                        <BodyText className="font-medium">Gaze-Based Voice Activation</BodyText>
                        <MonoText>US Patent 11,890,123 • Issued 2022</MonoText>
                    </li>
                     <li>
                        <BodyText className="font-medium">Spatial Privacy Indicators</BodyText>
                        <MonoText>US Patent 10,567,890 • Issued 2021</MonoText>
                    </li>
                </ul>
             </div>
             <div>
                 <SubHeading text="Education" />
                 <ul className="space-y-4 mt-4">
                    <li>
                        <BodyText className="font-medium">BA, Philosophy</BodyText>
                        <MonoText>University of California, Berkeley</MonoText>
                        <BodyText className="text-[13px] mt-1 text-[#555]">
                            Focus on Philosophy of Mind & Phenomenology
                        </BodyText>
                    </li>
                </ul>
             </div>
        </div>
    </div>
  );
}
