import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="cta" ref={ref} style={{
      padding: '120px 24px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          position: 'relative',
          textAlign: 'center',
          padding: 'clamp(48px, 8vw, 80px) 40px',
          borderRadius: 32,
          overflow: 'hidden',
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Background gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(41,151,255,0.15) 0%, rgba(191,90,242,0.08) 50%, transparent 80%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            style={{
              width: 64, height: 64, borderRadius: 20,
              background: 'linear-gradient(135deg, #2997ff, #bf5af2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 32px',
            }}
          >
            <Sparkles size={28} color="#fff" />
          </motion.div>

          <h2 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            Ready to build with<br />the future of AI?
          </h2>
          <p style={{
            fontSize: 18, color: '#86868b', maxWidth: 480,
            margin: '0 auto 40px', lineHeight: 1.6,
          }}>
            Join thousands of developers and teams already using Nexus AI to create extraordinary experiences.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="#"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#f5f5f7', color: '#000',
                padding: '16px 32px', borderRadius: 980,
                fontSize: 17, fontWeight: 700,
                transition: 'transform 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.background = '#d1d1d6'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = '#f5f5f7'; }}
            >
              Start free trial <ArrowRight size={18} />
            </a>
            <a
              href="#"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#f5f5f7',
                padding: '16px 32px', borderRadius: 980,
                fontSize: 17, fontWeight: 600,
                transition: 'transform 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
            >
              Contact sales
            </a>
          </div>

          <p style={{ marginTop: 24, fontSize: 13, color: '#6e6e73' }}>
            No credit card required · Free for up to 1,000 requests/month
          </p>
        </div>
      </motion.div>
    </section>
  );
}
