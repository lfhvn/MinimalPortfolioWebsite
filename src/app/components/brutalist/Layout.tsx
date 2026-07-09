import React from "react";
import clsx from "clsx";

interface LayoutProps {
  children: React.ReactNode;
  activeView: string;
  onNavigate: (view: string) => void;
}

export function Layout({ children, activeView, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white text-black antialiased">
      {/* Top Navigation */}
      <header className="border-b border-black">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 py-6 flex items-center justify-between">
          {/* Logo */}
          <div className="text-[18px] md:text-[20px] font-medium tracking-tight">
            LHM
          </div>

          {/* Navigation */}
          <nav className="flex gap-8 md:gap-12 text-[15px] md:text-[16px]">
            <button
              onClick={() => onNavigate('work')}
              className={clsx(
                "transition-opacity hover:opacity-60",
                activeView === 'work' ? "font-medium" : "font-normal"
              )}
            >
              Work
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className={clsx(
                "transition-opacity hover:opacity-60",
                activeView === 'experience' ? "font-medium" : "font-normal"
              )}
            >
              Experience
            </button>
            <button
              onClick={() => onNavigate('about')}
              className={clsx(
                "transition-opacity hover:opacity-60",
                activeView === 'about' ? "font-medium" : "font-normal"
              )}
            >
              About
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-black mt-32">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[14px]">
            <div>© 2025 Leif Haven Martinson</div>
            <div>Brooklyn, NY</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
