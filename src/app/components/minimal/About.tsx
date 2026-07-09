import React from "react";
import { HeadingText, SubHeading, BodyText, MonoText, AsciiBox, SectionDivider, StarburstSigil, LargeStarburstSigil } from "./Shared";

export function About() {
  return (
    <div className="flex flex-col gap-16 pb-20 fade-in">
        <div className="relative py-12 flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
                <StarburstSigil className="mb-6" />
                <HeadingText text="Leif Haven Martinson" />
                <BodyText className="text-[20px] font-medium leading-relaxed mb-6">
                    I'm a Principal Product Designer at Meta Reality Labs, creating the operating systems for the next era of computing.
                </BodyText>
                <BodyText className="mb-6">
                    My work sits at the intersection of Artificial Intelligence and Human-Computer Interaction. 
                    I don't just design interfaces; I design behaviors, personalities, and the subtle social contracts between humans and machines.
                </BodyText>
                <BodyText>
                    With a background in Philosophy, I approach technology with a critical lens, constantly asking not just "can we build it?" but "how will it change us?"
                </BodyText>
            </div>
            <div className="hidden md:block">
                <LargeStarburstSigil />
            </div>
        </div>

        <SectionDivider />

        <section>
            <SubHeading text="Philosophy" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                <div>
                    <h4 className="font-['IBM_Plex_Mono'] font-bold mb-2">Embodied Cognition</h4>
                    <BodyText className="text-[14px]">
                        The mind extends beyond the brain into the world through tools. 
                        Wearable AI should feel like an extension of human cognition, not a separate entity.
                    </BodyText>
                </div>
                <div>
                    <h4 className="font-['IBM_Plex_Mono'] font-bold mb-2">Phenomenology</h4>
                    <BodyText className="text-[14px]">
                        First-person experience shapes how we interact with technology. 
                        The "feeling" of using AI is as important as its raw capability.
                    </BodyText>
                </div>
                 <div>
                    <h4 className="font-['IBM_Plex_Mono'] font-bold mb-2">Privacy by Design</h4>
                    <BodyText className="text-[14px]">
                        We must build transparency and agency into the core of AI systems.
                        Users should always know when AI is watching or listening.
                    </BodyText>
                </div>
                <div>
                    <h4 className="font-['IBM_Plex_Mono'] font-bold mb-2">Calm Technology</h4>
                    <BodyText className="text-[14px]">
                        The best technology is invisible until you need it.
                        AI should inform and ennoble the human user, not distract them.
                    </BodyText>
                </div>
            </div>
        </section>

        <SectionDivider />

        <section>
            <SubHeading text="Writing" />
            <BodyText className="mb-6">
                Selected essays and thoughts on the future of design.
            </BodyText>

            <div className="flex flex-col gap-6">
                <a href="#" className="group block border border-[#0a0a0a]/10 p-6 hover:bg-white hover:border-[#0a0a0a]/30 transition-all">
                    <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-['Inter'] font-bold text-[18px] group-hover:underline decoration-1 underline-offset-4">Ethics in AI Design for Wearables</h4>
                        <MonoText>2024</MonoText>
                    </div>
                    <BodyText className="text-[14px] text-[#555]">
                        Published in ACM Interactions. Exploring the privacy challenges of always-on cameras and microphones.
                    </BodyText>
                </a>

                <a href="#" className="group block border border-[#0a0a0a]/10 p-6 hover:bg-white hover:border-[#0a0a0a]/30 transition-all">
                    <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-['Inter'] font-bold text-[18px] group-hover:underline decoration-1 underline-offset-4">The Future of Wearable AI</h4>
                        <MonoText>2024</MonoText>
                    </div>
                    <BodyText className="text-[14px] text-[#555]">
                        Keynote at CHI. Why the next decade of computing will be screenless and proactive.
                    </BodyText>
                </a>

                <a href="#" className="group block border border-[#0a0a0a]/10 p-6 hover:bg-white hover:border-[#0a0a0a]/30 transition-all">
                    <div className="flex justify-between items-baseline mb-2">
                        <h4 className="font-['Inter'] font-bold text-[18px] group-hover:underline decoration-1 underline-offset-4">Designing Conversational AI</h4>
                        <MonoText>2023</MonoText>
                    </div>
                    <BodyText className="text-[14px] text-[#555]">
                         Moving beyond "Command and Control" to natural, fluid dialogue with machines.
                    </BodyText>
                </a>
            </div>
        </section>
        
        <AsciiBox className="mt-8">
            {`Connect:
Email: hello@leifhaven.com
LinkedIn: linkedin.com/in/leifhavenmartinson
Location: Brooklyn, NY`}
        </AsciiBox>
    </div>
  );
}
