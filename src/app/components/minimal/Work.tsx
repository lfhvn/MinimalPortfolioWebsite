import React from "react";
import { HeadingText, SubHeading, BodyText, MonoText, AsciiBox, SectionDivider, StarburstSigil } from "./Shared";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import portalImage from "figma:asset/bffbe3604eda291cb7186f41e8d6883d27fddfb7.png";
import voiceSdkImage from "figma:asset/50fb68ed00edd86b94c5cb59fcbd17a7a6c1afb8.png";

export function Work() {
  return (
    <div className="flex flex-col gap-24 pb-20 fade-in">
        {/* Intro */}
        <div className="relative py-12">
            <StarburstSigil className="mb-6" />
            <HeadingText text="Selected Works" />
            <BodyText className="text-[18px]">
                Focusing on the intersection of multimodal AI, wearable computing, and human-computer interaction. 
                Currently exploring how AI can augment perception without replacing it.
            </BodyText>
        </div>

        <SectionDivider />

        {/* Project 001: Ray-Ban Meta */}
        <section className="relative">
            <SubHeading text="Project 001 — Ray-Ban Meta Smart Glasses" />
            
            <div className="flex flex-wrap gap-4 md:gap-6 my-4 border-b border-[#0a0a0a]/10 pb-4">
                <MonoText>2023–Present</MonoText>
                <MonoText>Principal Product Designer</MonoText>
                <MonoText>AI Integration</MonoText>
            </div>

            <BodyText className="font-medium text-[18px] mb-6">
                Second-generation smart glasses integrating computer vision and conversational LLM. 
                "Hey Meta" voice activation for real-time visual question answering.
            </BodyText>

            <BodyText className="mb-8">
                Led design for LLM integration, including prompting, safety guardrails, and voice architecture. 
                The challenge was to integrate a powerful visual assistant into a screenless, voice-first wearable 
                without compromising the iconic style.
            </BodyText>

            <AsciiBox>
                {`┌─ Key Outcomes ───────────────────────────────────────────┐
│ Industry First: Multimodal generative AI on face         │
│ Market Success: "Best Seller" status                     │
│ Awards: iF Gold (2024), Red Dot (2024)                   │
│ Interaction: Voice-first, screenless, hands-free         │
└──────────────────────────────────────────────────────────┘`}
            </AsciiBox>

            <div className="mt-8 border border-[#0a0a0a]/10 bg-white p-2">
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                    {/* Placeholder for video or main image */}
                    <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1651321224514-d3f3b25d15f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXktYmFuJTIwbWV0YSUyMHNtYXJ0JTIwZ2xhc3NlcyUyQyUyMHZyJTIwcHV6emxlJTIwZ2FtZSUyQyUyMG1peGVkJTIwcmVhbGl0eSUyMGhlYWRzZXQlMkMlMjBzdW5nbGFzc2VzJTIwd29tYW58ZW58MXx8fHwxNzY2MTEyMTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                        alt="Ray-Ban Meta Smart Glasses"
                        className="w-full h-full object-cover"
                    />
                </div>
                <MonoText className="mt-2">Fig. 1 — Ray-Ban Meta Smart Glasses (2023)</MonoText>
            </div>
        </section>

        <SectionDivider />

        {/* Project 002: Whisperer */}
        <section className="relative">
            <SubHeading text="Project 002 — Whisperer VR" />
            
            <div className="flex flex-wrap gap-4 md:gap-6 my-4 border-b border-[#0a0a0a]/10 pb-4">
                <MonoText>2022</MonoText>
                <MonoText>Design Lead</MonoText>
                <MonoText>Voice SDK</MonoText>
            </div>

            <BodyText className="font-medium text-[18px] mb-6">
                Voice-only VR puzzle game demonstrating natural language as core interaction. 
                Built to showcase Voice SDK capabilities.
            </BodyText>

            <BodyText className="mb-8">
                Players help an elderly gardener through spoken commands while embodying a ghost character. 
                Pioneered "ghost hands" targeting system combining gesture and voice.
            </BodyText>

            <AsciiBox>
                {`┌─ Technical Stats ──────────────────────────────────────┐
│ Latency: <250ms voice-to-action                        │
│ Intents: 12 reusable patterns from 80+ commands        │
│ Adoption: 10k+ installs in 6 months                    │
│ Open Source: 70+ GitHub stars, 20+ forks               │
└────────────────────────────────────────────────────────┘`}
            </AsciiBox>

            <div className="mt-8 border border-[#0a0a0a]/10 bg-white p-2">
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                     <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1622979136013-fcbffb84789c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY3VsdXMlMjBxdWVzdCUyMDIlMjBoZWFkc2V0fGVufDF8fHx8MTc2NjAwODg2Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="VR Headset"
                        className="w-full h-full object-cover"
                    />
                </div>
                <MonoText className="mt-2">Fig. 2 — Whisperer Voice Interaction Model</MonoText>
            </div>
        </section>

        <SectionDivider />

        {/* Project 003: The World Beyond */}
        <section className="relative">
            <SubHeading text="Project 003 — The World Beyond" />
            
            <div className="flex flex-wrap gap-4 md:gap-6 my-4 border-b border-[#0a0a0a]/10 pb-4">
                <MonoText>2021</MonoText>
                <MonoText>Design Manager</MonoText>
                <MonoText>Mixed Reality</MonoText>
            </div>

            <BodyText className="font-medium text-[18px] mb-6">
                Flagship Mixed Reality demo for Meta's Presence Platform. 
                Seamless blending of physical and digital spaces.
            </BodyText>

             <AsciiBox>
                {`┌─ Components ───────────────────────────────────────────┐
│ Passthrough API: Real-time physical world video        │
│ Scene Understanding: Room scanning & occlusion         │
│ Voice AI: Gaze-based activation (no wake word)         │
│ Spatial Anchors: Persistent content placement          │
└────────────────────────────────────────────────────────┘`}
            </AsciiBox>

            <div className="mt-8 border border-[#0a0a0a]/10 bg-white p-2">
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                    <ImageWithFallback 
                        src="https://images.unsplash.com/photo-1676630592998-f47b798a7c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGdsYXNzZXMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NjEwMjM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Mixed Reality"
                        className="w-full h-full object-cover"
                    />
                </div>
                <MonoText className="mt-2">Fig. 3 — Mixed Reality Passthrough Demo</MonoText>
            </div>
        </section>

         <SectionDivider />

         {/* Project 004: Portal */}
        <section className="relative">
            <SubHeading text="Project 004 — Portal Devices" />
            
            <div className="flex flex-wrap gap-4 md:gap-6 my-4 border-b border-[#0a0a0a]/10 pb-4">
                <MonoText>2018–2020</MonoText>
                <MonoText>Senior Product Designer</MonoText>
                <MonoText>Smart Home</MonoText>
            </div>

            <BodyText className="font-medium text-[18px] mb-6">
                 Family of smart video calling devices featuring AI-powered smart camera and voice controls.
            </BodyText>
            
            <BodyText className="mb-4">
                Designed the "Hey Portal" voice experience and visual feedback systems. 
                Facilitated millions of hours of video calls during global lockdowns.
            </BodyText>

             <div className="mt-8 border border-[#0a0a0a]/10 bg-white p-2">
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                     <ImageWithFallback 
                        src={portalImage}
                        alt="Facebook Portal"
                        className="w-full h-full object-cover"
                    />
                </div>
                <MonoText className="mt-2">Fig. 4 — Portal Family</MonoText>
            </div>
        </section>

        <div className="flex justify-center mt-12 mb-4">
            <MonoText>End of Work Section</MonoText>
        </div>
    </div>
  );
}