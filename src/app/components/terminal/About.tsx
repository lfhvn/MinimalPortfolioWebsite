import React from "react";
import { Heading, SectionTitle, ProjectTitle, Body, Meta, Card, CodeBlock, MetaBox, Divider, Badge } from "./Shared";

export function About() {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="mb-16">
        <Heading>Leif Haven Martinson</Heading>
        <Body className="text-[16px] md:text-[18px] font-medium mb-6 text-[#0d2818]">
          Principal Product Designer at Meta Reality Labs, creating the operating systems for the next era of computing.
        </Body>
        <Body className="mb-4">
          My work sits at the intersection of Artificial Intelligence and Human-Computer Interaction. 
          I don't just design interfaces; I design behaviors, personalities, and the subtle social contracts between humans and machines.
        </Body>
        <Body>
          With a background in Philosophy, I approach technology with a critical lens, constantly asking not just "can we build it?" but "how will it change us?"
        </Body>
      </div>

      <Divider />

      {/* Philosophy Section */}
      <section className="mb-16">
        <SectionTitle>Design Philosophy</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <Card>
            <ProjectTitle>Embodied Cognition</ProjectTitle>
            <Body className="text-[13px] md:text-[14px]">
              The mind extends beyond the brain into the world through tools. 
              Wearable AI should feel like an extension of human cognition, not a separate entity.
            </Body>
          </Card>

          <Card>
            <ProjectTitle>Phenomenology</ProjectTitle>
            <Body className="text-[13px] md:text-[14px]">
              First-person experience shapes how we interact with technology. 
              The "feeling" of using AI is as important as its raw capability.
            </Body>
          </Card>

          <Card>
            <ProjectTitle>Privacy by Design</ProjectTitle>
            <Body className="text-[13px] md:text-[14px]">
              We must build transparency and agency into the core of AI systems.
              Users should always know when AI is watching or listening.
            </Body>
          </Card>

          <Card>
            <ProjectTitle>Calm Technology</ProjectTitle>
            <Body className="text-[13px] md:text-[14px]">
              The best technology is invisible until you need it.
              AI should inform and ennoble the human user, not distract them.
            </Body>
          </Card>
        </div>
      </section>

      <Divider />

      {/* Writing Section */}
      <section className="mb-16">
        <SectionTitle>Writing & Talks</SectionTitle>
        <Body className="mb-8">
          Selected essays and thoughts on the future of design.
        </Body>

        <div className="space-y-4">
          <a 
            href="#" 
            className="block group border border-[#0d2818]/10 p-6 hover:border-[#00ff41] hover:bg-[#00ff41]/5 transition-all duration-300 rounded-sm"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
              <ProjectTitle className="mb-0 group-hover:text-[#00ff41] transition-colors">
                Ethics in AI Design for Wearables
              </ProjectTitle>
              <Meta>2024</Meta>
            </div>
            <Body className="text-[13px] text-[#1a3d1a]/60 mb-0">
              Published in ACM Interactions. Exploring the privacy challenges of always-on cameras and microphones.
            </Body>
          </a>

          <a 
            href="#" 
            className="block group border border-[#0d2818]/10 p-6 hover:border-[#00ff41] hover:bg-[#00ff41]/5 transition-all duration-300 rounded-sm"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
              <ProjectTitle className="mb-0 group-hover:text-[#00ff41] transition-colors">
                The Future of Wearable AI
              </ProjectTitle>
              <Meta>2024</Meta>
            </div>
            <Body className="text-[13px] text-[#1a3d1a]/60 mb-0">
              Keynote at CHI. Why the next decade of computing will be screenless and proactive.
            </Body>
          </a>

          <a 
            href="#" 
            className="block group border border-[#0d2818]/10 p-6 hover:border-[#00ff41] hover:bg-[#00ff41]/5 transition-all duration-300 rounded-sm"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
              <ProjectTitle className="mb-0 group-hover:text-[#00ff41] transition-colors">
                Designing Conversational AI
              </ProjectTitle>
              <Meta>2023</Meta>
            </div>
            <Body className="text-[13px] text-[#1a3d1a]/60 mb-0">
              Moving beyond "Command and Control" to natural, fluid dialogue with machines.
            </Body>
          </a>
        </div>
      </section>

      <Divider />

      {/* Contact */}
      <section>
        <SectionTitle>Connect</SectionTitle>
        <CodeBlock>
{`// Contact Information
email: hello@leifhaven.com
linkedin: linkedin.com/in/leifhavenmartinson
location: Brooklyn, NY
status: open to interesting opportunities`}
        </CodeBlock>
      </section>

      {/* End marker */}
      <div className="text-center pt-8">
        <Meta className="flex items-center justify-center gap-2">
          <span className="text-[#00ff41]">━━━</span>
          <span>End of About</span>
          <span className="text-[#00ff41]">━━━</span>
        </Meta>
      </div>
    </div>
  );
}
