import React from "react";
import { Heading, SectionTitle, ProjectTitle, Body, Meta, Card, CodeBlock, MetaBox, Divider, Badge } from "./Shared";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import portalImage from "figma:asset/bffbe3604eda291cb7186f41e8d6883d27fddfb7.png";

export function Work() {
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="mb-16">
        <Heading>Selected Work</Heading>
        <Body className="text-[16px] md:text-[17px]">
          Designing the future of human-AI interaction through wearable computing, voice interfaces, 
          and mixed reality experiences.
        </Body>
      </div>

      {/* Project 001 */}
      <section className="mb-20">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Meta>001</Meta>
            <div className="h-px flex-1 bg-[#0d2818]/10"></div>
          </div>
          <ProjectTitle>Ray-Ban Meta Smart Glasses</ProjectTitle>
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge>2023–Present</Badge>
            <Badge>Principal Product Designer</Badge>
            <Badge>Multimodal AI</Badge>
          </div>
        </div>

        <Body className="mb-4 font-medium text-[#0d2818]">
          Second-generation smart glasses integrating computer vision and conversational LLM. 
          "Hey Meta" voice activation for real-time visual question answering.
        </Body>

        <Body className="mb-6">
          Led design for LLM integration, including prompting, safety guardrails, and voice architecture. 
          The challenge was to integrate a powerful visual assistant into a screenless, voice-first wearable 
          without compromising the iconic Ray-Ban style.
        </Body>

        <MetaBox className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div><span className="text-[#00ff41]">&gt;</span> Industry first multimodal generative AI on face</div>
            <div><span className="text-[#00ff41]">&gt;</span> "Best Seller" market status</div>
            <div><span className="text-[#00ff41]">&gt;</span> iF Gold (2024), Red Dot (2024)</div>
            <div><span className="text-[#00ff41]">&gt;</span> Voice-first, screenless, hands-free</div>
          </div>
        </MetaBox>

        <div className="border border-[#0d2818]/10 p-3 bg-white rounded-sm">
          <div className="aspect-video relative overflow-hidden bg-gray-100 mb-2">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1651321224514-d3f3b25d15f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXktYmFuJTIwbWV0YSUyMHNtYXJ0JTIwZ2xhc3NlcyUyQyUyMHZyJTIwcHV6emxlJTIwZ2FtZSUyQyUyMG1peGVkJTIwcmVhbGl0eSUyMGhlYWRzZXQlMkMlMjBzdW5nbGFzc2VzJTIwd29tYW58ZW58MXx8fHwxNzY2MTEyMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Ray-Ban Meta Smart Glasses"
              className="w-full h-full object-cover"
            />
          </div>
          <Meta>Fig. 1 — Ray-Ban Meta Smart Glasses (2023)</Meta>
        </div>
      </section>

      <Divider />

      {/* Project 002 */}
      <section className="mb-20">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Meta>002</Meta>
            <div className="h-px flex-1 bg-[#0d2818]/10"></div>
          </div>
          <ProjectTitle>Whisperer VR</ProjectTitle>
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge>2022</Badge>
            <Badge>Design Lead</Badge>
            <Badge>Voice SDK</Badge>
          </div>
        </div>

        <Body className="mb-4 font-medium text-[#0d2818]">
          Voice-only VR puzzle game demonstrating natural language as core interaction. 
          Built to showcase Voice SDK capabilities.
        </Body>

        <Body className="mb-6">
          Players help an elderly gardener through spoken commands while embodying a ghost character. 
          Pioneered "ghost hands" targeting system combining gesture and voice.
        </Body>

        <CodeBlock>
{`// Technical Performance
latency: <250ms voice-to-action
intents: 12 reusable patterns from 80+ commands
adoption: 10k+ installs in 6 months
open_source: 70+ GitHub stars, 20+ forks`}
        </CodeBlock>

        <div className="border border-[#0d2818]/10 p-3 bg-white rounded-sm">
          <div className="aspect-video relative overflow-hidden bg-gray-100 mb-2">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1622979136013-fcbffb84789c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY3VsdXMlMjBxdWVzdCUyMDIlMjBoZWFkc2V0fGVufDF8fHx8MTc2NjAwODg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="VR Headset"
              className="w-full h-full object-cover"
            />
          </div>
          <Meta>Fig. 2 — Whisperer Voice Interaction Model</Meta>
        </div>
      </section>

      <Divider />

      {/* Project 003 */}
      <section className="mb-20">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Meta>003</Meta>
            <div className="h-px flex-1 bg-[#0d2818]/10"></div>
          </div>
          <ProjectTitle>The World Beyond</ProjectTitle>
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge>2021</Badge>
            <Badge>Design Manager</Badge>
            <Badge>Mixed Reality</Badge>
          </div>
        </div>

        <Body className="mb-4 font-medium text-[#0d2818]">
          Flagship Mixed Reality demo for Meta's Presence Platform. 
          Seamless blending of physical and digital spaces.
        </Body>

        <MetaBox className="mb-6">
          <div className="space-y-2">
            <div><span className="text-[#00ff41]">&gt;</span> Passthrough API: Real-time physical world video</div>
            <div><span className="text-[#00ff41]">&gt;</span> Scene Understanding: Room scanning & occlusion</div>
            <div><span className="text-[#00ff41]">&gt;</span> Voice AI: Gaze-based activation (no wake word)</div>
            <div><span className="text-[#00ff41]">&gt;</span> Spatial Anchors: Persistent content placement</div>
          </div>
        </MetaBox>

        <div className="border border-[#0d2818]/10 p-3 bg-white rounded-sm">
          <div className="aspect-video relative overflow-hidden bg-gray-100 mb-2">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1676630592998-f47b798a7c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGdsYXNzZXMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjEwMjM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mixed Reality"
              className="w-full h-full object-cover"
            />
          </div>
          <Meta>Fig. 3 — Mixed Reality Passthrough Demo</Meta>
        </div>
      </section>

      <Divider />

      {/* Project 004 */}
      <section className="mb-20">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Meta>004</Meta>
            <div className="h-px flex-1 bg-[#0d2818]/10"></div>
          </div>
          <ProjectTitle>Portal Devices</ProjectTitle>
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge>2018–2020</Badge>
            <Badge>Senior Product Designer</Badge>
            <Badge>Smart Home</Badge>
          </div>
        </div>

        <Body className="mb-4 font-medium text-[#0d2818]">
          Family of smart video calling devices featuring AI-powered smart camera and voice controls.
        </Body>
        
        <Body className="mb-6">
          Designed the "Hey Portal" voice experience and visual feedback systems. 
          Facilitated millions of hours of video calls during global lockdowns.
        </Body>

        <div className="border border-[#0d2818]/10 p-3 bg-white rounded-sm">
          <div className="aspect-video relative overflow-hidden bg-gray-100 mb-2">
            <ImageWithFallback 
              src={portalImage}
              alt="Facebook Portal"
              className="w-full h-full object-cover"
            />
          </div>
          <Meta>Fig. 4 — Portal Family</Meta>
        </div>
      </section>

      {/* End marker */}
      <div className="text-center pt-8">
        <Meta className="flex items-center justify-center gap-2">
          <span className="text-[#00ff41]">━━━</span>
          <span>End of Work Log</span>
          <span className="text-[#00ff41]">━━━</span>
        </Meta>
      </div>
    </div>
  );
}