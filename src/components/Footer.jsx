import { Sparkles } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'API Docs', 'Changelog', 'Status'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'Tutorials', 'Community', 'Support', 'Partners'],
  Legal: ['Privacy', 'Terms', 'Security', 'Compliance'],
};

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '64px 24px 32px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: 40,
        marginBottom: 48,
      }}>
        <div>
          <a href="#" style={{
            display: 'flex', alignItems: 'center', gap: 8,
            color: '#f5f5f7', fontWeight: 700, fontSize: 18,
            marginBottom: 16, letterSpacing: '-0.02em',
          }}>
            <Sparkles size={20} color="#2997ff" />
            Nexus AI
          </a>
          <p style={{ fontSize: 14, color: '#6e6e73', lineHeight: 1.6, maxWidth: 240 }}>
            Building the next generation of artificial intelligence for everyone.
          </p>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 style={{
              fontSize: 13, fontWeight: 600, color: '#86868b',
              textTransform: 'uppercase', letterSpacing: '0.06em',
              marginBottom: 16,
            }}>
              {category}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {links.map(link => (
                <a
                  key={link}
                  href="#"
                  style={{ fontSize: 14, color: '#6e6e73', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#f5f5f7'}
                  onMouseLeave={e => e.target.style.color = '#6e6e73'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: 24,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        <p style={{ fontSize: 13, color: '#6e6e73' }}>
          © 2026 Nexus AI. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Twitter', 'GitHub', 'LinkedIn', 'Discord'].map(social => (
            <a
              key={social}
              href="#"
              style={{ fontSize: 13, color: '#6e6e73', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#f5f5f7'}
              onMouseLeave={e => e.target.style.color = '#6e6e73'}
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
