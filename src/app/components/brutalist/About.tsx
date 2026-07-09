import React from "react";
import { Hero, Heading, SectionTitle, ProjectTitle, Body, Meta, Section, Divider, Grid, InfoBox } from "./Shared";

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <Section>
        <Heading>Leif Haven Martinson</Heading>
        <Body className="text-[16px] md:text-[18px] font-medium mb-6 max-w-[55ch]">
          Principal Product Designer at Meta Reality Labs, creating the operating systems for the next era of computing.
        </Body>
        <Body className="mb-4 max-w-[65ch]">
          My work sits at the intersection of Artificial Intelligence and Human-Computer Interaction. 
          I don't just design interfaces; I design behaviors, personalities, and the subtle social contracts between humans and machines.
        </Body>
        <Body className="max-w-[65ch]">
          With a background in Philosophy, I approach technology with a critical lens, constantly asking not just "can we build it?" but "how will it change us?"
        </Body>
      </Section>

      <Divider />

      {/* Philosophy */}
      <Section>
        <SectionTitle>Design Philosophy</SectionTitle>
        
        <Grid className="mt-8">
          <div>
            <ProjectTitle>Embodied Cognition</ProjectTitle>
            <Body className="text-[14px] md:text-[15px]">
              The mind extends beyond the brain into the world through tools. 
              Wearable AI should feel like an extension of human cognition, not a separate entity.
            </Body>
          </div>

          <div>
            <ProjectTitle>Phenomenology</ProjectTitle>
            <Body className="text-[14px] md:text-[15px]">
              First-person experience shapes how we interact with technology. 
              The "feeling" of using AI is as important as its raw capability.
            </Body>
          </div>

          <div>
            <ProjectTitle>Privacy by Design</ProjectTitle>
            <Body className="text-[14px] md:text-[15px]">
              We must build transparency and agency into the core of AI systems.
              Users should always know when AI is watching or listening.
            </Body>
          </div>

          <div>
            <ProjectTitle>Calm Technology</ProjectTitle>
            <Body className="text-[14px] md:text-[15px]">
              The best technology is invisible until you need it.
              AI should inform and ennoble the human user, not distract them.
            </Body>
          </div>
        </Grid>
      </Section>

      <Divider />

      {/* Writing */}
      <Section>
        <SectionTitle>Writing & Talks</SectionTitle>

        <div className="space-y-8 mt-8">
          <a 
            href="#" 
            className="block border border-black p-6 md:p-8 hover:bg-black hover:text-white transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
              <ProjectTitle className="mb-0">
                Ethics in AI Design for Wearables
              </ProjectTitle>
              <Meta className="group-hover:text-white/60">2024</Meta>
            </div>
            <Body className="text-[14px] text-black/60 mb-0 group-hover:text-white/80">
              Published in ACM Interactions. Exploring the privacy challenges of always-on cameras and microphones.
            </Body>
          </a>

          <a 
            href="#" 
            className="block border border-black p-6 md:p-8 hover:bg-black hover:text-white transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
              <ProjectTitle className="mb-0">
                The Future of Wearable AI
              </ProjectTitle>
              <Meta className="group-hover:text-white/60">2024</Meta>
            </div>
            <Body className="text-[14px] text-black/60 mb-0 group-hover:text-white/80">
              Keynote at CHI. Why the next decade of computing will be screenless and proactive.
            </Body>
          </a>

          <a 
            href="#" 
            className="block border border-black p-6 md:p-8 hover:bg-black hover:text-white transition-colors group"
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
              <ProjectTitle className="mb-0">
                Designing Conversational AI
              </ProjectTitle>
              <Meta className="group-hover:text-white/60">2023</Meta>
            </div>
            <Body className="text-[14px] text-black/60 mb-0 group-hover:text-white/80">
              Moving beyond "Command and Control" to natural, fluid dialogue with machines.
            </Body>
          </a>
        </div>
      </Section>

      <Divider />

      {/* Contact */}
      <Section>
        <SectionTitle>Connect</SectionTitle>
        <InfoBox className="max-w-[600px]">
          <div className="space-y-3 text-[14px]">
            <div>
              <div className="font-medium mb-1">Email</div>
              <a href="mailto:hello@leifhaven.com" className="text-black/60 hover:text-black transition-colors">
                hello@leifhaven.com
              </a>
            </div>
            <div>
              <div className="font-medium mb-1">LinkedIn</div>
              <a href="#" className="text-black/60 hover:text-black transition-colors">
                linkedin.com/in/leifhavenmartinson
              </a>
            </div>
            <div>
              <div className="font-medium mb-1">Location</div>
              <div className="text-black/60">Brooklyn, NY</div>
            </div>
          </div>
        </InfoBox>
      </Section>
    </div>
  );
}
