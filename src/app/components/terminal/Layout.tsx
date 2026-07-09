import React from "react";
import clsx from "clsx";

interface LayoutProps {
  children: React.ReactNode;
  activeView: string;
  onNavigate: (view: string) => void;
}

export function Layout({ children, activeView, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#fafaf5] text-[#0d2818] font-['IBM_Plex_Mono',monospace] antialiased">
      {/* Terminal Header */}
      <header className="border-b border-[#0d2818]/10 sticky top-0 bg-[#fafaf5]/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-6">
          {/* Prompt Line */}
          <div className="flex items-center gap-3 mb-4 text-[13px] md:text-[14px]">
            <span className="text-[#00ff41]">➜</span>
            <span className="text-[#1a3d1a]">leif@portfolio</span>
            <span className="text-[#1a3d1a]/40">~</span>
            <span className="text-[#00ff41]">$</span>
            <span className="text-[#1a3d1a]/60">cat portfolio.md</span>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex gap-4 md:gap-6 text-[12px] md:text-[13px] flex-wrap">
            <button
              onClick={() => onNavigate('work')}
              className={clsx(
                "px-3 py-1.5 rounded transition-all duration-200",
                activeView === 'work'
                  ? "bg-[#00ff41] text-[#0d2818] font-semibold"
                  : "text-[#1a3d1a]/60 hover:text-[#1a3d1a] hover:bg-[#0d2818]/5"
              )}
            >
              work.md
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className={clsx(
                "px-3 py-1.5 rounded transition-all duration-200",
                activeView === 'experience'
                  ? "bg-[#00ff41] text-[#0d2818] font-semibold"
                  : "text-[#1a3d1a]/60 hover:text-[#1a3d1a] hover:bg-[#0d2818]/5"
              )}
            >
              experience.md
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={clsx(
                "px-3 py-1.5 rounded transition-all duration-200",
                activeView === 'about'
                  ? "bg-[#00ff41] text-[#0d2818] font-semibold"
                  : "text-[#1a3d1a]/60 hover:text-[#1a3d1a] hover:bg-[#0d2818]/5"
              )}
            >
              about.md
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#0d2818]/10 mt-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] md:text-[12px] text-[#1a3d1a]/50">
            <div>© 2025 Leif Haven Martinson</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse"></span>
              <span>Brooklyn, NY</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
