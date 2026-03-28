import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 24px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Gradient orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 800,
        height: 800,
        background: 'radial-gradient(circle, rgba(41,151,255,0.12) 0%, rgba(191,90,242,0.08) 40%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(41,151,255,0.1)',
          border: '1px solid rgba(41,151,255,0.2)',
          borderRadius: 980,
          padding: '6px 16px 6px 12px',
          marginBottom: 32,
          fontSize: 14,
          fontWeight: 500,
          color: '#2997ff',
        }}
      >
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: '#30d158',
          boxShadow: '0 0 8px rgba(48,209,88,0.6)',
        }} />
        Now available — Next-gen AI platform
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          fontSize: 'clamp(40px, 7vw, 80px)',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          maxWidth: 900,
          marginBottom: 24,
          background: 'linear-gradient(135deg, #f5f5f7 0%, #86868b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Intelligence that understands your world.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          fontSize: 'clamp(17px, 2vw, 21px)',
          color: '#86868b',
          maxWidth: 620,
          lineHeight: 1.6,
          marginBottom: 48,
          fontWeight: 400,
        }}
      >
        From understanding natural language to generating stunning visuals, our AI platform brings the most advanced capabilities to your fingertips.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <a
          href="#cta"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#2997ff',
            color: '#fff',
            padding: '14px 28px',
            borderRadius: 980,
            fontSize: 16,
            fontWeight: 600,
            transition: 'background 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#0077ed'; e.currentTarget.style.transform = 'scale(1.03)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#2997ff'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Start building <ArrowRight size={18} />
        </a>
        <a
          href="#demo"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: '#f5f5f7',
            padding: '14px 28px',
            borderRadius: 980,
            fontSize: 16,
            fontWeight: 600,
            transition: 'background 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          <Play size={16} fill="#f5f5f7" /> Watch demo
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontSize: 12, color: '#6e6e73', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          style={{
            width: 24, height: 40, borderRadius: 12,
            border: '2px solid rgba(255,255,255,0.15)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            paddingTop: 8,
          }}
        >
          <div style={{ width: 3, height: 8, borderRadius: 2, background: 'rgba(255,255,255,0.4)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
