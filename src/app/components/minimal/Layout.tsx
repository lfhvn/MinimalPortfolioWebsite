import React from "react";
import { Link } from "react-router-dom"; // Assuming standard router if needed, but for now we might use state in App
import clsx from "clsx";

interface LayoutProps {
  children: React.ReactNode;
  activeView: string;
  onNavigate: (view: string) => void;
}

export function Layout({ children, activeView, onNavigate }: LayoutProps) {
  return (
    <div className="bg-[#fcfcfc] min-h-screen w-full relative text-[#111] font-['Inter',sans-serif] selection:bg-[#000] selection:text-[#fff]">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcfcfc]/95 backdrop-blur-md border-b border-[#000]/10 h-[72px] flex items-center justify-center">
        <div className="w-full max-w-[900px] px-8 md:px-16 lg:px-20 flex justify-between items-center">
            <div className="flex flex-col">
                <h1 className="text-[18px] font-medium leading-tight tracking-tight text-[#000]">
                    <span className="block">Leif Haven</span>
                    <span className="block text-[#444]">Martinson</span>
                </h1>
            </div>
            
            <div className="flex flex-col items-end gap-0.5">
                <div className="font-['IBM_Plex_Mono',monospace] text-[10px] text-[#555] uppercase tracking-wider mb-1">
                    Fig. 0 — Index
                </div>
                <nav className="flex gap-6 font-['IBM_Plex_Mono',monospace] text-[13px]">
                    <button 
                        onClick={() => onNavigate('work')}
                        className={clsx("hover:text-black uppercase transition-all duration-200", activeView === 'work' ? "text-black font-semibold" : "text-[#666]")}
                    >
                        Work
                    </button>
                    <button 
                        onClick={() => onNavigate('experience')}
                        className={clsx("hover:text-black uppercase transition-all duration-200", activeView === 'experience' ? "text-black font-semibold" : "text-[#666]")}
                    >
                        Exp
                    </button>
                    <button 
                        onClick={() => onNavigate('about')}
                        className={clsx("hover:text-black uppercase transition-all duration-200", activeView === 'about' ? "text-black font-semibold" : "text-[#666]")}
                    >
                        About
                    </button>
                </nav>
            </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="w-full max-w-[900px] mx-auto pt-[120px] pb-32 px-8 md:px-16 lg:px-20 min-h-screen">
        <div className="border-l border-[#000]/10 pl-8 md:pl-16 py-2">
            {children}
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-[#000]/10 flex flex-col md:flex-row justify-between gap-6 font-['IBM_Plex_Mono',monospace] text-[11px] text-[#666]">
             <div>© 2025 LHM · Brooklyn, NY</div>
             <div className="text-right">Experimental layout.</div>
        </footer>
      </main>
    </div>
  );
}