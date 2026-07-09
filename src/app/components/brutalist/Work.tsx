import React from "react";
import { Hero, Heading, SectionTitle, ProjectTitle, Body, Meta, Section, Divider, Grid, ProjectCard, ImageContainer, Badge, InfoBox } from "./Shared";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import portalImage from "figma:asset/bffbe3604eda291cb7186f41e8d6883d27fddfb7.png";

export function Work() {
  return (
    <div>
      {/* Hero Section */}
      <Section>
        <Hero>
          Designing the future of human-AI interaction through wearable computing and voice interfaces.
        </Hero>
      </Section>

      <Divider />

      {/* Work Grid */}
      <Section>
        <SectionTitle>Selected Work</SectionTitle>

        <div className="space-y-24">
          {/* Project 001 */}
          <div>
            <div className="mb-6">
              <div className="flex items-baseline gap-4 mb-3">
                <Meta>001</Meta>
                <Meta>2023–Present</Meta>
              </div>
              <ProjectTitle>Ray-Ban Meta Smart Glasses</ProjectTitle>
              <div className="flex flex-wrap gap-4 text-[13px] md:text-[14px] text-black/60 mb-6">
                <span>Principal Product Designer</span>
                <span>•</span>
                <span>Multimodal AI</span>
              </div>
            </div>

            <Body className="font-medium mb-4">
              Second-generation smart glasses integrating computer vision and conversational LLM. 
              "Hey Meta" voice activation for real-time visual question answering.
            </Body>

            <Body className="mb-8">
              Led design for LLM integration, including prompting, safety guardrails, and voice architecture. 
              The challenge was to integrate a powerful visual assistant into a screenless, voice-first wearable 
              without compromising the iconic Ray-Ban style.
            </Body>

            <InfoBox className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[14px]">
                <div>Industry first multimodal generative AI on face</div>
                <div>"Best Seller" market status</div>
                <div>iF Gold (2024), Red Dot (2024)</div>
                <div>Voice-first, screenless, hands-free</div>
              </div>
            </InfoBox>

            <ImageContainer>
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1651321224514-d3f3b25d15f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXktYmFuJTIwbWV0YSUyMHNtYXJ0JTIwZ2xhc3NlcyUyQyUyMHZyJTIwcHV6emxlJTIwZ2FtZSUyQyUyMG1peGVkJTIwcmVhbGl0eSUyMGhlYWRzZXQlMkMlMjBzdW5nbGFzc2VzJTIwd29tYW58ZW58MXx8fHwxNzY2MTEyMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="Ray-Ban Meta Smart Glasses"
                  className="w-full h-full object-cover"
                />
              </div>
            </ImageContainer>
          </div>

          {/* Project 002 */}
          <div>
            <div className="mb-6">
              <div className="flex items-baseline gap-4 mb-3">
                <Meta>002</Meta>
                <Meta>2022</Meta>
              </div>
              <ProjectTitle>Whisperer VR</ProjectTitle>
              <div className="flex flex-wrap gap-4 text-[13px] md:text-[14px] text-black/60 mb-6">
                <span>Design Lead</span>
                <span>•</span>
                <span>Voice SDK</span>
              </div>
            </div>

            <Body className="font-medium mb-4">
              Voice-only VR puzzle game demonstrating natural language as core interaction. 
              Built to showcase Voice SDK capabilities.
            </Body>

            <Body className="mb-8">
              Players help an elderly gardener through spoken commands while embodying a ghost character. 
              Pioneered "ghost hands" targeting system combining gesture and voice.
            </Body>

            <InfoBox className="mb-8">
              <div className="space-y-2 text-[14px] font-mono">
                <div>Latency: &lt;250ms voice-to-action</div>
                <div>Intents: 12 reusable patterns from 80+ commands</div>
                <div>Adoption: 10k+ installs in 6 months</div>
                <div>Open Source: 70+ GitHub stars, 20+ forks</div>
              </div>
            </InfoBox>

            <ImageContainer>
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1622979136013-fcbffb84789c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY3VsdXMlMjBxdWVzdCUyMDIlMjBoZWFkc2V0fGVufDF8fHx8MTc2NjAwODg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="VR Headset"
                  className="w-full h-full object-cover"
                />
              </div>
            </ImageContainer>
          </div>

          {/* Project 003 */}
          <div>
            <div className="mb-6">
              <div className="flex items-baseline gap-4 mb-3">
                <Meta>003</Meta>
                <Meta>2021</Meta>
              </div>
              <ProjectTitle>The World Beyond</ProjectTitle>
              <div className="flex flex-wrap gap-4 text-[13px] md:text-[14px] text-black/60 mb-6">
                <span>Design Manager</span>
                <span>•</span>
                <span>Mixed Reality</span>
              </div>
            </div>

            <Body className="font-medium mb-4">
              Flagship Mixed Reality demo for Meta's Presence Platform. 
              Seamless blending of physical and digital spaces.
            </Body>

            <InfoBox className="mb-8">
              <div className="space-y-2 text-[14px]">
                <div>Passthrough API: Real-time physical world video</div>
                <div>Scene Understanding: Room scanning & occlusion</div>
                <div>Voice AI: Gaze-based activation (no wake word)</div>
                <div>Spatial Anchors: Persistent content placement</div>
              </div>
            </InfoBox>

            <ImageContainer>
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1676630592998-f47b798a7c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGdsYXNzZXMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjEwMjM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mixed Reality"
                  className="w-full h-full object-cover"
                />
              </div>
            </ImageContainer>
          </div>

          {/* Project 004 */}
          <div>
            <div className="mb-6">
              <div className="flex items-baseline gap-4 mb-3">
                <Meta>004</Meta>
                <Meta>2018–2020</Meta>
              </div>
              <ProjectTitle>Portal Devices</ProjectTitle>
              <div className="flex flex-wrap gap-4 text-[13px] md:text-[14px] text-black/60 mb-6">
                <span>Senior Product Designer</span>
                <span>•</span>
                <span>Smart Home</span>
              </div>
            </div>

            <Body className="font-medium mb-4">
              Family of smart video calling devices featuring AI-powered smart camera and voice controls.
            </Body>
            
            <Body className="mb-8">
              Designed the "Hey Portal" voice experience and visual feedback systems. 
              Facilitated millions of hours of video calls during global lockdowns.
            </Body>

            <ImageContainer>
              <div className="aspect-video relative overflow-hidden bg-gray-100">
                <ImageWithFallback 
                  src={portalImage}
                  alt="Facebook Portal"
                  className="w-full h-full object-cover"
                />
              </div>
            </ImageContainer>
          </div>
        </div>
      </Section>
    </div>
  );
}
