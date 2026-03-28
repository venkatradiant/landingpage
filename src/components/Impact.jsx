import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 500, suffix: 'M+', label: 'API calls per day', color: '#2997ff' },
  { value: 100, suffix: '+', label: 'Languages supported', color: '#bf5af2' },
  { value: 99.9, suffix: '%', label: 'Uptime reliability', color: '#30d158', decimals: 1 },
  { value: 10, suffix: 'x', label: 'Faster than GPT-3', color: '#ff9f0a' },
];

const logos = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix',
  'Spotify', 'Stripe', 'Shopify', 'Notion', 'Figma', 'Vercel',
];

function AnimatedNumber({ value, suffix, decimals = 0 }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Number((eased * value).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

export default function Impact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="impact" ref={sectionRef} style={{ padding: '120px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 72 }}
      >
        <span style={{
          display: 'inline-block', fontSize: 14, fontWeight: 600,
          color: '#ff9f0a', textTransform: 'uppercase', letterSpacing: '0.08em',
          marginBottom: 16,
        }}>
          Impact
        </span>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: 16,
        }}>
          Numbers that speak.
        </h2>
        <p style={{ fontSize: 18, color: '#86868b', maxWidth: 500, margin: '0 auto' }}>
          Trusted by the world's leading companies to power their AI infrastructure.
        </p>
      </motion.div>

      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 16,
        marginBottom: 80,
      }}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              textAlign: 'center',
              padding: '40px 24px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20,
            }}
          >
            <div style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: stat.color,
              marginBottom: 8,
            }}>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
            </div>
            <div style={{ fontSize: 15, color: '#86868b', fontWeight: 500 }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trusted by logos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ textAlign: 'center' }}
      >
        <p style={{ fontSize: 14, color: '#6e6e73', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 32 }}>
          Trusted by industry leaders
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 24,
        }}>
          {logos.map(logo => (
            <div
              key={logo}
              style={{
                padding: '12px 28px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 600,
                color: '#6e6e73',
                letterSpacing: '-0.01em',
              }}
            >
              {logo}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
