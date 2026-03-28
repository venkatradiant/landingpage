import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'Impact', href: '#impact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 24px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: scrolled ? 'rgba(0,0,0,0.72)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        transition: 'background 0.3s, border-bottom 0.3s, backdrop-filter 0.3s',
      }}
    >
      <div style={{
        maxWidth: 1200,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#f5f5f7', fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>
          <Sparkles size={22} color="#2997ff" />
          Nexus AI
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-links-desktop">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{ color: '#86868b', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#f5f5f7'}
              onMouseLeave={e => e.target.style.color = '#86868b'}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            style={{
              background: '#f5f5f7',
              color: '#000',
              padding: '8px 20px',
              borderRadius: 980,
              fontSize: 14,
              fontWeight: 600,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = '#d1d1d6'}
            onMouseLeave={e => e.target.style.background = '#f5f5f7'}
          >
            Get Started
          </a>
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', background: 'none', color: '#f5f5f7', padding: 4 }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute',
              top: 64,
              left: 0,
              right: 0,
              background: 'rgba(0,0,0,0.95)',
              backdropFilter: 'blur(20px)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ color: '#f5f5f7', fontSize: 18, fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              style={{
                background: '#f5f5f7',
                color: '#000',
                padding: '12px 24px',
                borderRadius: 980,
                fontSize: 16,
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
