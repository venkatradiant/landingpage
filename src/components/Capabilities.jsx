import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MessageSquare, Image, Code2, Brain, Shield, Zap,
  Globe, Music, Video, BarChart3, Mic, Eye
} from 'lucide-react';

const capabilities = [
  {
    icon: MessageSquare,
    title: 'Natural Language Understanding',
    description: 'Comprehends context, nuance, and intent across 100+ languages with human-level accuracy.',
    color: '#2997ff',
    gradient: 'linear-gradient(135deg, rgba(41,151,255,0.15), rgba(41,151,255,0.03))',
  },
  {
    icon: Image,
    title: 'Image Generation & Editing',
    description: 'Creates photorealistic images, art, and designs from text descriptions in seconds.',
    color: '#bf5af2',
    gradient: 'linear-gradient(135deg, rgba(191,90,242,0.15), rgba(191,90,242,0.03))',
  },
  {
    icon: Code2,
    title: 'Code Generation',
    description: 'Writes, reviews, and debugs code across 50+ programming languages with full context awareness.',
    color: '#30d158',
    gradient: 'linear-gradient(135deg, rgba(48,209,88,0.15), rgba(48,209,88,0.03))',
  },
  {
    icon: Brain,
    title: 'Advanced Reasoning',
    description: 'Solves complex multi-step problems with chain-of-thought reasoning and logical deduction.',
    color: '#ff9f0a',
    gradient: 'linear-gradient(135deg, rgba(255,159,10,0.15), rgba(255,159,10,0.03))',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Analyzes images and video for object detection, scene understanding, and visual Q&A.',
    color: '#ff375f',
    gradient: 'linear-gradient(135deg, rgba(255,55,95,0.15), rgba(255,55,95,0.03))',
  },
  {
    icon: Mic,
    title: 'Speech Recognition',
    description: 'Real-time transcription with speaker identification, emotion detection, and accent handling.',
    color: '#64d2ff',
    gradient: 'linear-gradient(135deg, rgba(100,210,255,0.15), rgba(100,210,255,0.03))',
  },
  {
    icon: Video,
    title: 'Video Understanding',
    description: 'Processes and summarizes video content, detects scenes, and generates captions automatically.',
    color: '#bf5af2',
    gradient: 'linear-gradient(135deg, rgba(191,90,242,0.15), rgba(191,90,242,0.03))',
  },
  {
    icon: Globe,
    title: 'Real-Time Translation',
    description: 'Instant translation preserving tone and cultural context across 100+ language pairs.',
    color: '#2997ff',
    gradient: 'linear-gradient(135deg, rgba(41,151,255,0.15), rgba(41,151,255,0.03))',
  },
  {
    icon: Music,
    title: 'Audio Generation',
    description: 'Creates music, sound effects, and voice synthesis with studio-quality output.',
    color: '#ff9f0a',
    gradient: 'linear-gradient(135deg, rgba(255,159,10,0.15), rgba(255,159,10,0.03))',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Forecasts trends and patterns using advanced statistical models and time-series analysis.',
    color: '#30d158',
    gradient: 'linear-gradient(135deg, rgba(48,209,88,0.15), rgba(48,209,88,0.03))',
  },
  {
    icon: Shield,
    title: 'AI Safety & Alignment',
    description: 'Built-in guardrails, content filtering, and bias detection to ensure responsible AI use.',
    color: '#ff375f',
    gradient: 'linear-gradient(135deg, rgba(255,55,95,0.15), rgba(255,55,95,0.03))',
  },
  {
    icon: Zap,
    title: 'Agentic Workflows',
    description: 'Autonomous task execution with tool use, web browsing, and multi-step planning.',
    color: '#64d2ff',
    gradient: 'linear-gradient(135deg, rgba(100,210,255,0.15), rgba(100,210,255,0.03))',
  },
];

function CapabilityCard({ cap, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = cap.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: cap.gradient,
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 20,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        cursor: 'default',
        transition: 'border-color 0.3s, transform 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${cap.color}33`;
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: `${cap.color}15`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={24} color={cap.color} strokeWidth={1.8} />
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em', color: '#f5f5f7' }}>
        {cap.title}
      </h3>
      <p style={{ fontSize: 15, color: '#86868b', lineHeight: 1.6 }}>
        {cap.description}
      </p>
    </motion.div>
  );
}

export default function Capabilities() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="capabilities" style={{ padding: '120px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 72 }}
      >
        <span style={{
          display: 'inline-block', fontSize: 14, fontWeight: 600,
          color: '#2997ff', textTransform: 'uppercase', letterSpacing: '0.08em',
          marginBottom: 16,
        }}>
          Capabilities
        </span>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          Everything AI can do.<br />
          <span style={{ color: '#86868b' }}>All in one place.</span>
        </h2>
        <p style={{ fontSize: 18, color: '#86868b', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
          Twelve powerful capabilities designed to transform the way you work, create, and think.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 16,
      }}>
        {capabilities.map((cap, i) => (
          <CapabilityCard key={cap.title} cap={cap} index={i} />
        ))}
      </div>
    </section>
  );
}
