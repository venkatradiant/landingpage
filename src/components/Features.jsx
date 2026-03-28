import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const features = [
  {
    label: 'Multimodal',
    title: 'See, hear, read, and create.',
    description: 'Process text, images, audio, and video in a single unified model. Understand the connections between modalities — describe an image, answer questions about a document, or generate visuals from a conversation.',
    visual: (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: 40 }}>
        {[
          { label: 'Text', emoji: '📝', color: '#2997ff' },
          { label: 'Image', emoji: '🖼️', color: '#bf5af2' },
          { label: 'Audio', emoji: '🎵', color: '#ff9f0a' },
          { label: 'Video', emoji: '🎬', color: '#30d158' },
        ].map(m => (
          <div key={m.label} style={{
            background: `${m.color}10`,
            border: `1px solid ${m.color}25`,
            borderRadius: 16,
            padding: '24px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}>
            <span style={{ fontSize: 32 }}>{m.emoji}</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: m.color }}>{m.label}</span>
          </div>
        ))}
      </div>
    ),
    accent: '#2997ff',
  },
  {
    label: 'Reasoning',
    title: 'Think step by step.',
    description: 'Advanced chain-of-thought reasoning that breaks complex problems into manageable steps. From mathematical proofs to strategic planning — AI that shows its work and explains its logic.',
    visual: (
      <div style={{ padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {[
          { step: 1, text: 'Analyze the problem space', done: true },
          { step: 2, text: 'Identify key constraints', done: true },
          { step: 3, text: 'Generate candidate solutions', done: true },
          { step: 4, text: 'Evaluate and select optimal path', done: false },
        ].map(s => (
          <div key={s.step} style={{
            display: 'flex', alignItems: 'center', gap: 16,
            padding: '14px 20px',
            background: s.done ? 'rgba(48,209,88,0.06)' : 'rgba(255,159,10,0.06)',
            border: `1px solid ${s.done ? 'rgba(48,209,88,0.15)' : 'rgba(255,159,10,0.15)'}`,
            borderRadius: 12,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8,
              background: s.done ? '#30d158' : '#ff9f0a',
              color: '#000', fontSize: 13, fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              {s.done ? '✓' : s.step}
            </div>
            <span style={{ fontSize: 15, color: '#f5f5f7', fontWeight: 500 }}>{s.text}</span>
          </div>
        ))}
      </div>
    ),
    accent: '#30d158',
  },
  {
    label: 'Generation',
    title: 'Create anything from words.',
    description: 'Transform text descriptions into photorealistic images, production-ready code, polished documents, music, and more. Express your vision and let AI bring it to life with stunning quality.',
    visual: (
      <div style={{ padding: '32px 40px' }}>
        <div style={{
          background: 'rgba(191,90,242,0.06)',
          border: '1px solid rgba(191,90,242,0.15)',
          borderRadius: 16,
          padding: 24,
          marginBottom: 16,
        }}>
          <div style={{ fontSize: 13, color: '#86868b', marginBottom: 8, fontWeight: 500 }}>PROMPT</div>
          <div style={{ fontSize: 15, color: '#f5f5f7', fontStyle: 'italic', lineHeight: 1.5 }}>
            "A serene Japanese garden at sunset, cherry blossoms falling, photorealistic, 8K"
          </div>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8,
        }}>
          {['🌸', '🏯', '🌅'].map((e, i) => (
            <div key={i} style={{
              aspectRatio: '1', borderRadius: 12,
              background: `linear-gradient(135deg, rgba(191,90,242,${0.12 - i * 0.03}), rgba(41,151,255,${0.08 - i * 0.02}))`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 36,
              border: '1px solid rgba(191,90,242,0.15)',
            }}>
              {e}
            </div>
          ))}
        </div>
      </div>
    ),
    accent: '#bf5af2',
  },
];

function FeatureBlock({ feature, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px, 100%), 1fr))',
        gap: 40,
        alignItems: 'center',
        marginBottom: 100,
      }}
    >
      <div style={{ order: isReversed ? 2 : 1 }}>
        <span style={{
          display: 'inline-block', fontSize: 13, fontWeight: 700,
          color: feature.accent, textTransform: 'uppercase', letterSpacing: '0.1em',
          marginBottom: 16,
        }}>
          {feature.label}
        </span>
        <h3 style={{
          fontSize: 'clamp(28px, 4vw, 44px)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          {feature.title}
        </h3>
        <p style={{ fontSize: 17, color: '#86868b', lineHeight: 1.7, marginBottom: 24, maxWidth: 480 }}>
          {feature.description}
        </p>
        <a
          href="#cta"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            color: feature.accent, fontSize: 16, fontWeight: 600,
          }}
        >
          Learn more <ArrowUpRight size={18} />
        </a>
      </div>
      <div style={{
        order: isReversed ? 1 : 2,
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 24,
        overflow: 'hidden',
        minHeight: 340,
      }}>
        {feature.visual}
      </div>
    </motion.div>
  );
}

export default function Features() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="features" style={{
      padding: '100px 24px',
      maxWidth: 1200,
      margin: '0 auto',
    }}>
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 80 }}
      >
        <span style={{
          display: 'inline-block', fontSize: 14, fontWeight: 600,
          color: '#bf5af2', textTransform: 'uppercase', letterSpacing: '0.08em',
          marginBottom: 16,
        }}>
          Features
        </span>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
        }}>
          Built different.<br />
          <span style={{ color: '#86868b' }}>Designed to delight.</span>
        </h2>
      </motion.div>

      {features.map((feature, i) => (
        <FeatureBlock key={feature.label} feature={feature} index={i} />
      ))}
    </section>
  );
}
