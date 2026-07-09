import React from "react";
import { Heading, SectionTitle, ProjectTitle, Body, Meta, Card, CodeBlock, MetaBox, Divider, Badge } from "./Shared";

export function Experience() {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="mb-16">
        <Heading>Experience Log</Heading>
        <Body className="text-[16px] md:text-[17px]">
          Building the operating systems for the next era of computing.
        </Body>
      </div>

      {/* Meta Reality Labs */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6 gap-2">
          <SectionTitle className="mb-0">Meta Reality Labs</SectionTitle>
          <Meta>2018 — Present</Meta>
        </div>
        <Meta className="mb-8">Menlo Park, CA (Hybrid)</Meta>

        <div className="space-y-8 border-l-2 border-[#00ff41]/20 pl-6 md:pl-8">
          {/* Role 1 */}
          <div className="relative">
            <div className="absolute -left-[27px] md:-left-[35px] top-2 w-3 h-3 rounded-full bg-[#00ff41] border-2 border-[#fafaf5]"></div>
            <ProjectTitle>Principal Product Designer, AI Integration</ProjectTitle>
            <Meta className="mb-3">2021 — Present</Meta>
            <Body className="mb-3">
              Leading design for multimodal AI on smart glasses. Defining how users interact with LLMs without screens.
            </Body>
            <ul className="space-y-2 text-[13px] md:text-[14px] text-[#1a3d1a]/70 pl-4">
              <li className="flex items-start gap-2">
                <span className="text-[#00ff41] mt-1">•</span>
                <span>Ray-Ban Meta Smart Glasses (AI Architecture)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ff41] mt-1">•</span>
                <span>Llama 3 System Prompt Design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00ff41] mt-1">•</span>
                <span>Privacy & Trust Frameworks for Wearable AI</span>
              </li>
            </ul>
          </div>

          {/* Role 2 */}
          <div className="relative">
            <div className="absolute -left-[27px] md:-left-[35px] top-2 w-3 h-3 rounded-full border-2 border-[#00ff41] bg-[#fafaf5]"></div>
            <ProjectTitle>Product Design Manager, AI Infrastructure</ProjectTitle>
            <Meta className="mb-3">2020 — 2021</Meta>
            <Body>
              Managed a 13-person design team building developer platforms for Voice SDK and Wit.ai.
            </Body>
          </div>

          {/* Role 3 */}
          <div className="relative">
            <div className="absolute -left-[27px] md:-left-[35px] top-2 w-3 h-3 rounded-full border-2 border-[#00ff41] bg-[#fafaf5]"></div>
            <ProjectTitle>Senior Product Designer</ProjectTitle>
            <Meta className="mb-3">2018 — 2020</Meta>
            <Body>
              Designed voice interactions for Portal and Quest.
            </Body>
          </div>
        </div>
      </section>

      <Divider />

      {/* Wells Fargo */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6 gap-2">
          <SectionTitle className="mb-0">Wells Fargo</SectionTitle>
          <Meta>2018</Meta>
        </div>
        <Meta className="mb-8">San Francisco, CA</Meta>

        <div className="space-y-8 border-l-2 border-[#00ff41]/20 pl-6 md:pl-8">
          <div className="relative">
            <div className="absolute -left-[27px] md:-left-[35px] top-2 w-3 h-3 rounded-full border-2 border-[#00ff41] bg-[#fafaf5]"></div>
            <ProjectTitle>Lead UX Designer</ProjectTitle>
            <Body>
              Digital banking transformation and mobile app redesigns.
            </Body>
          </div>
        </div>
      </section>

      <Divider />

      {/* Technical Stack */}
      <CodeBlock className="mb-12">
{`// Technical Stack
design: Figma, Principle, Unity, Blender
prototyping: React, Python, Arduino, C#
ai: Prompt Engineering, Fine-tuning, LangChain
method: Systems Thinking, Rapid Prototyping`}
      </CodeBlock>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Patents */}
        <div>
          <SectionTitle>Patents</SectionTitle>
          <div className="space-y-6">
            <div>
              <Body className="font-medium mb-1 text-[#0d2818]">
                Audio-Visual Feedback for Wearable AI
              </Body>
              <Meta>US Patent 11,234,567 • Issued 2023</Meta>
            </div>
            <div>
              <Body className="font-medium mb-1 text-[#0d2818]">
                Gaze-Based Voice Activation
              </Body>
              <Meta>US Patent 11,890,123 • Issued 2022</Meta>
            </div>
            <div>
              <Body className="font-medium mb-1 text-[#0d2818]">
                Spatial Privacy Indicators
              </Body>
              <Meta>US Patent 10,567,890 • Issued 2021</Meta>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <SectionTitle>Education</SectionTitle>
          <div>
            <Body className="font-medium mb-1 text-[#0d2818]">
              BA, Philosophy
            </Body>
            <Meta className="mb-2">University of California, Berkeley</Meta>
            <Body className="text-[13px] text-[#1a3d1a]/60">
              Focus on Philosophy of Mind & Phenomenology
            </Body>
          </div>
        </div>
      </div>

      {/* End marker */}
      <div className="text-center pt-12">
        <Meta className="flex items-center justify-center gap-2">
          <span className="text-[#00ff41]">━━━</span>
          <span>End of Experience Log</span>
          <span className="text-[#00ff41]">━━━</span>
        </Meta>
      </div>
    </div>
  );
}
