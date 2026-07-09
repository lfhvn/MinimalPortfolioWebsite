import React, { useState } from 'react';
import { StarburstSigil } from './Icons';

interface LayoutProps {
  children: React.ReactNode;
  activeSection: 'work' | 'experience' | 'about';
  onNavigate: (section: 'work' | 'experience' | 'about') => void;
}

export function Layout({ children, activeSection, onNavigate }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f9f7] text-[#0a0a0a] flex flex-col font-sans selection:bg-[#0a0a0a] selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9f7]/90 backdrop-blur-sm lab-border-b h-[72px] flex items-center justify-between px-6 md:px-12">
        {/* Logo Area */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('work')}>
           <div className="flex flex-col leading-none uppercase tracking-widest font-sans text-xl md:text-2xl font-normal">
             <span>Leif Haven</span>
             <span className="ml-8 text-[#555]">Martinson</span>
           </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onNavigate('work')}
            className={`text-sm uppercase tracking-widest hover:underline ${activeSection === 'work' ? 'font-bold' : 'text-[#555]'}`}
          >
            Work
          </button>
          <button 
            onClick={() => onNavigate('experience')}
            className={`text-sm uppercase tracking-widest hover:underline ${activeSection === 'experience' ? 'font-bold' : 'text-[#555]'}`}
          >
            Experience
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className={`text-sm uppercase tracking-widest hover:underline ${activeSection === 'about' ? 'font-bold' : 'text-[#555]'}`}
          >
            About
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-2xl p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '×' : '≡'}
        </button>

        {/* Meta Info (Fig 0) */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 text-right">
          <div className="font-mono text-xs text-[#0a0a0a]">Fig. 0 — Overview</div>
          <div className="font-mono text-xs text-[#0a0a0a]">lhm.portfolio.build</div>
          <div className="font-mono text-xs text-[#0a0a0a]">rev. 2025-01-24</div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#f9f9f7] pt-[100px] px-6 md:hidden flex flex-col gap-8">
           <button onClick={() => { onNavigate('work'); setIsMenuOpen(false); }} className="text-4xl font-light uppercase border-b border-black pb-4 text-left">Work</button>
           <button onClick={() => { onNavigate('experience'); setIsMenuOpen(false); }} className="text-4xl font-light uppercase border-b border-black pb-4 text-left">Experience</button>
           <button onClick={() => { onNavigate('about'); setIsMenuOpen(false); }} className="text-4xl font-light uppercase border-b border-black pb-4 text-left">About</button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-[72px] relative">
        <div className="max-w-4xl mx-auto border-l border-r border-[#0a0a0a]/10 min-h-screen bg-white/50 relative">
           {/* Decorative Grid Lines */}
           <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
           {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="lab-border-t bg-[#f9f9f7] py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
           <div className="font-mono text-xs text-[#0a0a0a]">
             © 2025 Leif Haven Martinson · All rights reserved.
           </div>
           <div className="flex items-center gap-4">
             <StarburstSigil />
             <span className="font-mono text-xs text-[#555]">End of Transmission</span>
             <StarburstSigil />
           </div>
           <div className="font-mono text-xs text-[#555]">
             Brooklyn, NY / Distributed
           </div>
        </div>
      </footer>
    </div>
  );
}
