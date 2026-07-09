import React from "react";
import { Hero, Heading, SectionTitle, ProjectTitle, Body, Meta, Section, Divider, Grid, InfoBox } from "./Shared";

export function Experience() {
  return (
    <div>
      {/* Hero Section */}
      <Section>
        <Heading>Experience</Heading>
      </Section>

      <Divider />

      {/* Experience */}
      <Section>
        <div className="space-y-16">
          {/* Meta Reality Labs */}
          <div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-8 gap-2">
              <SectionTitle className="mb-0">Meta Reality Labs</SectionTitle>
              <Meta>2018 — Present</Meta>
            </div>
            <Meta className="mb-8">Menlo Park, CA</Meta>

            <div className="space-y-8 pl-6 border-l border-black">
              <div>
                <ProjectTitle>Principal Product Designer, AI Integration</ProjectTitle>
                <Meta className="mb-3">2021 — Present</Meta>
                <Body className="mb-3">
                  Leading design for multimodal AI on smart glasses. Defining how users interact with LLMs without screens.
                </Body>
                <ul className="space-y-2 text-[14px] md:text-[15px] text-black/70">
                  <li>Ray-Ban Meta Smart Glasses (AI Architecture)</li>
                  <li>Llama 3 System Prompt Design</li>
                  <li>Privacy & Trust Frameworks for Wearable AI</li>
                </ul>
              </div>

              <div>
                <ProjectTitle>Product Design Manager, AI Infrastructure</ProjectTitle>
                <Meta className="mb-3">2020 — 2021</Meta>
                <Body>
                  Managed a 13-person design team building developer platforms for Voice SDK and Wit.ai.
                </Body>
              </div>

              <div>
                <ProjectTitle>Senior Product Designer</ProjectTitle>
                <Meta className="mb-3">2018 — 2020</Meta>
                <Body>
                  Designed voice interactions for Portal and Quest.
                </Body>
              </div>
            </div>
          </div>

          {/* Wells Fargo */}
          <div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-8 gap-2">
              <SectionTitle className="mb-0">Wells Fargo</SectionTitle>
              <Meta>2018</Meta>
            </div>
            <Meta className="mb-8">San Francisco, CA</Meta>

            <div className="pl-6 border-l border-black">
              <div>
                <ProjectTitle>Lead UX Designer</ProjectTitle>
                <Body>
                  Digital banking transformation and mobile app redesigns.
                </Body>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Skills & Education */}
      <Section>
        <Grid>
          {/* Technical Stack */}
          <div>
            <SectionTitle>Technical Stack</SectionTitle>
            <InfoBox>
              <div className="space-y-3 text-[14px]">
                <div>
                  <div className="font-medium mb-1">Design</div>
                  <div className="text-black/60">Figma, Principle, Unity, Blender</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Prototyping</div>
                  <div className="text-black/60">React, Python, Arduino, C#</div>
                </div>
                <div>
                  <div className="font-medium mb-1">AI</div>
                  <div className="text-black/60">Prompt Engineering, Fine-tuning, LangChain</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Method</div>
                  <div className="text-black/60">Systems Thinking, Rapid Prototyping</div>
                </div>
              </div>
            </InfoBox>
          </div>

          {/* Education */}
          <div>
            <SectionTitle>Education</SectionTitle>
            <div>
              <ProjectTitle>BA, Philosophy</ProjectTitle>
              <Meta className="mb-2">University of California, Berkeley</Meta>
              <Body className="text-[14px] text-black/60">
                Focus on Philosophy of Mind & Phenomenology
              </Body>
            </div>
          </div>
        </Grid>
      </Section>

      <Divider />

      {/* Patents */}
      <Section>
        <SectionTitle>Patents</SectionTitle>
        <div className="space-y-6 max-w-[800px]">
          <div>
            <Body className="font-medium mb-1">
              Audio-Visual Feedback for Wearable AI
            </Body>
            <Meta>US Patent 11,234,567 • Issued 2023</Meta>
          </div>
          <div>
            <Body className="font-medium mb-1">
              Gaze-Based Voice Activation
            </Body>
            <Meta>US Patent 11,890,123 • Issued 2022</Meta>
          </div>
          <div>
            <Body className="font-medium mb-1">
              Spatial Privacy Indicators
            </Body>
            <Meta>US Patent 10,567,890 • Issued 2021</Meta>
          </div>
        </div>
      </Section>
    </div>
  );
}
