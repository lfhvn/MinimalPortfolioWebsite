import React from "react";
import clsx from "clsx";
import svgPaths from "./svg-paths";

// --- Sigils ---

export function StarburstSigil({ className = "" }: { className?: string }) {
  return (
    <div className={clsx("opacity-60 relative shrink-0 size-[40px]", className)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter',sans-serif] font-normal inset-[38%_45.5%_47%_47%] leading-[normal] not-italic text-[#555] text-[4.8px] text-center text-nowrap">*</p>
        
        {/* Vectors */}
        <div className="absolute left-[58%] right-[5%] bottom-1/2 top-1/2">
             <div className="absolute inset-[-0.1px_0]"><svg className="block size-full" fill="none" viewBox="0 0 14.8 0.2"><path d="M0 0.1H14.8" stroke="currentColor" strokeDasharray="0.8 0.8" strokeWidth="0.2" /></svg></div>
        </div>
        
        <div className="absolute inset-[55.66%_18.18%_18.18%_55.66%]">
            <div className="absolute inset-[-0.68%]"><svg className="block size-full" fill="none" viewBox="0 0 10.6066 10.6066"><path d={svgPaths.p40d4200} stroke="currentColor" strokeDasharray="0.8 0.8" strokeWidth="0.2" /></svg></div>
        </div>

        <div className="absolute left-1/2 right-1/2 bottom-[5%] top-[58%]">
             <div className="absolute inset-[0_-0.1px]"><svg className="block size-full" fill="none" viewBox="0 0 0.2 14.8"><path d="M0.1 0V14.8" stroke="currentColor" strokeDasharray="0.8 0.8" strokeWidth="0.2" /></svg></div>
        </div>

        <div className="absolute inset-[55.66%_55.66%_18.18%_18.18%]">
            <div className="absolute inset-[-0.68%]"><svg className="block size-full" fill="none" viewBox="0 0 10.6066 10.6066"><path d={svgPaths.pdb8b3e8} stroke="currentColor" strokeDasharray="0.8 0.8" strokeWidth="0.2" /></svg></div>
        </div>

        <div className="absolute left-[5%] right-[58%] bottom-1/2 top-1/2">
             <div className="absolute inset-[-0.1px_0]"><svg className="block size-full" fill="none" viewBox="0 0 14.8 0.2"><path d="M0 0.1H14.8" stroke="currentColor" strokeDasharray="0.8 0.8" strokeWidth="0.2" /></svg></div>
        </div>

        <div className="absolute inset-[18.18%_55.66%_55.66%_18.18%]">
            <div className="absolute inset-[-0.68%]"><svg className="block size-full" fill="none" viewBox="0 0 10.6066 10.6066"><path d={svgPaths.p23f57a00} stroke="currentColor" strokeDasharray="0.8 0.8" strokeWidth="0.2" /></svg></div>
        </div>

        <div className="absolute left-1/2 right-1/2 bottom-[58%] top-[5%]">
             <div className="absolute inset-[0_-0.1px]"><svg className="block size-full" fill="none" viewBox="0 0 0.2 14.8"><path d="M0.1 0V14.8" stroke="currentColor" strokeDasharray="0.8 0.8" strokeWidth="0.2" /></svg></div>
        </div>

        <div className="absolute inset-[18.18%_18.18%_55.66%_55.66%]">
            <div className="absolute inset-[-0.68%]"><svg className="block size-full" fill="none" viewBox="0 0 10.6066 10.6066"><path d={svgPaths.p12ea8200} stroke="currentColor" strokeDasharray="0.8 0.8" strokeWidth="0.2" /></svg></div>
        </div>
      </div>
    </div>
  );
}

export function LargeStarburstSigil({ className = "" }: { className?: string }) {
  return (
    <div className={clsx("h-[200px] w-[200px] opacity-60 overflow-clip relative shrink-0", className)}>
        <p className="absolute font-['Inter',sans-serif] font-normal inset-[38%_47%_47.5%_47%] leading-[normal] not-italic text-[#333] text-[24px] text-center text-nowrap">*</p>
        
        {/* Vectors - simplified for React */}
        <div className="absolute left-[58%] right-[5%] bottom-1/2 top-1/2 border-t border-dashed border-[#444]"></div>
        <div className="absolute left-[5%] right-[58%] bottom-1/2 top-1/2 border-t border-dashed border-[#444]"></div>
        <div className="absolute top-[58%] bottom-[5%] left-1/2 right-1/2 border-l border-dashed border-[#444]"></div>
        <div className="absolute top-[5%] bottom-[58%] left-1/2 right-1/2 border-l border-dashed border-[#444]"></div>
        
        {/* Diagonals using rotation */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] border-t border-dashed border-[#444] rotate-45"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[80%] border-t border-dashed border-[#444] -rotate-45"></div>
        </div>
    </div>
  );
}

// --- Typography ---

export function HeadingText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <h2 className={clsx("font-['Inter',sans-serif] font-normal text-[#111] text-[32px] leading-[1.2] tracking-tight mb-6", className)}>
      {text}
    </h2>
  );
}

export function SubHeading({ text, className = "" }: { text: string; className?: string }) {
    return (
        <h3 className={clsx("font-['Inter',sans-serif] font-semibold text-[#111] text-[18px] tracking-wide uppercase mb-3", className)}>
            {text}
        </h3>
    )
}

export function MonoText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("font-['IBM_Plex_Mono',monospace] text-[#444] text-[13px] leading-[1.6]", className)}>
      {children}
    </div>
  );
}

export function BodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("font-['Inter',sans-serif] text-[#222] text-[16px] leading-[1.7] max-w-[65ch] break-words", className)}>
      {children}
    </p>
  );
}

// --- Layout Components ---

export function AsciiBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("font-['IBM_Plex_Mono',monospace] text-[#333] text-[11px] md:text-[13px] whitespace-pre overflow-x-auto p-6 md:p-8 border border-[#e5e5e5] bg-[#f5f5f5] my-8 rounded-sm break-words", className)}>
      {children}
    </div>
  );
}

export function SectionDivider() {
    return <div aria-hidden="true" className="border-[#0a0a0a]/30 border-[0.5px_0px_0px] border-solid w-full my-10" />;
}