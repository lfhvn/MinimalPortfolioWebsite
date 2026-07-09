import React from "react";
import clsx from "clsx";

// Typography Components

export function Hero({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={clsx("text-[42px] md:text-[64px] lg:text-[80px] leading-[1.1] tracking-tight font-normal max-w-[20ch] mb-12 md:mb-16", className)}>
      {children}
    </h1>
  );
}

export function Heading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={clsx("text-[28px] md:text-[36px] lg:text-[42px] leading-tight tracking-tight font-normal mb-8", className)}>
      {children}
    </h2>
  );
}

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={clsx("text-[18px] md:text-[20px] font-normal mb-6", className)}>
      {children}
    </h3>
  );
}

export function ProjectTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h4 className={clsx("text-[16px] md:text-[18px] font-medium mb-2", className)}>
      {children}
    </h4>
  );
}

export function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx("text-[15px] md:text-[16px] leading-relaxed max-w-[65ch] mb-4", className)}>
      {children}
    </p>
  );
}

export function Meta({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("text-[13px] md:text-[14px] text-black/50", className)}>
      {children}
    </div>
  );
}

// Layout Components

export function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={clsx("py-16 md:py-24", className)}>
      {children}
    </section>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={clsx("h-px bg-black w-full my-12 md:my-16", className)}></div>
  );
}

export function Grid({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12", className)}>
      {children}
    </div>
  );
}

export function ProjectCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("group cursor-pointer", className)}>
      {children}
    </div>
  );
}

export function ImageContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("border border-black bg-gray-50 overflow-hidden mb-4", className)}>
      {children}
    </div>
  );
}

export function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={clsx("inline-block text-[12px] md:text-[13px] text-black/60", className)}>
      {children}
    </span>
  );
}

export function InfoBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("border border-black p-6 md:p-8 bg-gray-50", className)}>
      {children}
    </div>
  );
}
