import React from "react";
import clsx from "clsx";

// Typography Components

export function Heading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={clsx("text-[28px] md:text-[36px] leading-tight tracking-tight text-[#0d2818] mb-6 font-medium", className)}>
      {children}
    </h1>
  );
}

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={clsx("text-[18px] md:text-[20px] text-[#1a3d1a] mb-4 font-medium flex items-center gap-2", className)}>
      <span className="text-[#00ff41]">▸</span>
      {children}
    </h2>
  );
}

export function ProjectTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={clsx("text-[16px] md:text-[18px] text-[#0d2818] font-semibold mb-3", className)}>
      {children}
    </h3>
  );
}

export function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("text-[14px] md:text-[15px] leading-relaxed text-[#1a3d1a]/80 max-w-[75ch] mb-4", className)}>
      {children}
    </p>
  );
}

export function Meta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("text-[11px] md:text-[12px] text-[#1a3d1a]/50 tracking-wide", className)}>
      {children}
    </div>
  );
}

// Layout Components

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("border border-[#0d2818]/10 bg-white/40 p-6 md:p-8 rounded-sm hover:border-[#00ff41]/30 transition-all duration-300", className)}>
      {children}
    </div>
  );
}

export function CodeBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("bg-[#0d2818] text-[#00ff41] p-6 md:p-8 rounded-sm text-[12px] md:text-[13px] leading-relaxed overflow-x-auto my-6", className)}>
      <pre className="whitespace-pre-wrap break-words">{children}</pre>
    </div>
  );
}

export function MetaBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("border-l-2 border-[#00ff41] pl-4 md:pl-6 py-2 bg-[#00ff41]/5 text-[12px] md:text-[13px] leading-relaxed", className)}>
      {children}
    </div>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={clsx("my-12 md:my-16 flex items-center gap-3", className)}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0d2818]/10 to-transparent"></div>
      <div className="w-1 h-1 rounded-full bg-[#00ff41]"></div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#0d2818]/10 to-transparent"></div>
    </div>
  );
}

export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={clsx("inline-block px-2 py-1 bg-[#00ff41]/10 text-[#1a3d1a] text-[11px] rounded border border-[#00ff41]/20", className)}>
      {children}
    </span>
  );
}

export function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[13px] md:text-[14px] mb-6">
      <span className="text-[#00ff41]">$</span>
      <span className="text-[#1a3d1a]">{children}</span>
      <span className="inline-block w-2 h-4 bg-[#00ff41] animate-pulse ml-1"></span>
    </div>
  );
}
