import { Outlet, Link, useLocation } from 'react-router';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  const location = useLocation();

  const navLinks = [
    { to: '/work', label: 'Work' },
    { to: '/ideas', label: 'Ideas' },
    { to: '/notes', label: 'Notes' },
    { to: '/about', label: 'About' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text-primary)' }}>
      <ScrollToTop />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-3 focus:py-1.5 text-sm"
      >
        Skip to content
      </a>

      {/* Nav */}
      <header className="sticky top-0 z-50" style={{ background: 'rgba(250, 250, 248, 0.92)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 'var(--content-width)' }} className="mx-auto px-6">
          <nav
            aria-label="Main"
            className="flex items-baseline py-5"
            style={{ fontFamily: 'var(--font-mono)', borderBottom: '1px solid var(--border)' }}
          >
            <Link
              to="/"
              className="text-[13px] tracking-[0.05em] transition-colors"
              style={{ color: 'var(--text-primary)', letterSpacing: '0.05em' }}
            >
              lhm
            </Link>

            <div className="flex items-baseline gap-7 ml-auto">
              {navLinks.map((link) => {
                const isActive = location.pathname.startsWith(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-[13px] tracking-[0.05em] transition-colors duration-200"
                    style={{
                      color: isActive ? 'var(--text-primary)' : 'var(--text-tertiary)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) (e.target as HTMLElement).style.color = 'var(--text-tertiary)';
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main id="main" style={{ maxWidth: 'var(--content-width)' }} className="mx-auto px-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ marginTop: '160px' }}>
        <div style={{ maxWidth: 'var(--content-width)', borderTop: '1px solid var(--border)' }} className="mx-auto px-6 py-10">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.05em' }}>
            © 2026 Leif Martinson
          </div>
        </div>
      </footer>
    </div>
  );
}
