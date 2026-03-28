import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';

const presetConversations = [
  { role: 'user', text: 'Can you explain quantum computing in simple terms?' },
  { role: 'ai', text: 'Think of a regular computer as a light switch — it\'s either on or off (1 or 0). A quantum computer is like a dimmer switch that can be anywhere in between, or even on and off at the same time. This superposition lets it explore many solutions simultaneously, making it incredibly powerful for certain types of problems like cryptography, drug discovery, and optimization.' },
  { role: 'user', text: 'What real-world problems can it solve today?' },
  { role: 'ai', text: 'Right now, quantum computers are making real impact in three key areas:\n\n• Drug discovery — simulating molecular interactions to find new medicines faster\n• Financial modeling — optimizing portfolios and risk analysis\n• Supply chain — solving complex logistics and routing problems\n\nWe\'re still in the early stages, but the progress is accelerating rapidly.' },
];

function TypingIndicator() {
  return (
    <div style={{ display: 'flex', gap: 4, padding: '4px 0' }}>
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
          style={{ width: 6, height: 6, borderRadius: '50%', background: '#86868b' }}
        />
      ))}
    </div>
  );
}

export default function Demo() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [started, setStarted] = useState(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const simulateConversation = async () => {
    setStarted(true);
    for (const msg of presetConversations) {
      setIsTyping(true);
      await new Promise(r => setTimeout(r, msg.role === 'user' ? 600 : 1200));
      setIsTyping(false);
      setMessages(prev => [...prev, msg]);
      await new Promise(r => setTimeout(r, 300));
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: inputValue }]);
    setInputValue('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        role: 'ai',
        text: "That's a great question! I can help you explore that further. This demo showcases the conversational capabilities of modern AI — natural, contextual, and always learning from the conversation flow."
      }]);
    }, 1500);
  };

  return (
    <section id="demo" ref={sectionRef} style={{
      padding: '120px 24px',
      maxWidth: 800,
      margin: '0 auto',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 48 }}
      >
        <span style={{
          display: 'inline-block', fontSize: 14, fontWeight: 600,
          color: '#30d158', textTransform: 'uppercase', letterSpacing: '0.08em',
          marginBottom: 16,
        }}>
          Live Demo
        </span>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: 16,
        }}>
          Have a conversation.
        </h2>
        <p style={{ fontSize: 18, color: '#86868b', lineHeight: 1.6 }}>
          Experience the natural flow of AI dialogue — contextual, intelligent, and remarkably human.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 24,
          overflow: 'hidden',
        }}
      >
        {/* Chat header */}
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #2997ff, #bf5af2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Sparkles size={18} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#f5f5f7' }}>Nexus AI Assistant</div>
            <div style={{ fontSize: 12, color: '#30d158', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%', background: '#30d158',
                display: 'inline-block',
              }} />
              Online
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <div ref={containerRef} style={{
          height: 420,
          overflowY: 'auto',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {!started && (
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
            }}>
              <div style={{ fontSize: 48 }}>💬</div>
              <p style={{ color: '#86868b', fontSize: 15, textAlign: 'center' }}>
                Click the button below to see AI in action
              </p>
              <button
                onClick={simulateConversation}
                style={{
                  background: '#2997ff',
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: 980,
                  fontSize: 15,
                  fontWeight: 600,
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.target.style.background = '#0077ed'}
                onMouseLeave={e => e.target.style.background = '#2997ff'}
              >
                Start demo conversation
              </button>
            </div>
          )}

          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                  flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: msg.role === 'user' ? 'rgba(255,255,255,0.08)' : 'linear-gradient(135deg, #2997ff, #bf5af2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {msg.role === 'user' ? <User size={16} color="#86868b" /> : <Bot size={16} color="#fff" />}
                </div>
                <div style={{
                  maxWidth: '80%',
                  padding: '12px 16px',
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.role === 'user' ? '#2997ff' : 'rgba(255,255,255,0.06)',
                  color: msg.role === 'user' ? '#fff' : '#f5f5f7',
                  fontSize: 15,
                  lineHeight: 1.6,
                  whiteSpace: 'pre-wrap',
                }}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: 'linear-gradient(135deg, #2997ff, #bf5af2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Bot size={16} color="#fff" />
              </div>
              <div style={{
                padding: '12px 16px', borderRadius: '16px 16px 16px 4px',
                background: 'rgba(255,255,255,0.06)',
              }}>
                <TypingIndicator />
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          gap: 12,
        }}>
          <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
              padding: '12px 16px',
              color: '#f5f5f7',
              fontSize: 15,
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => e.target.style.borderColor = 'rgba(41,151,255,0.4)'}
            onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
          />
          <button
            onClick={handleSend}
            style={{
              width: 44, height: 44, borderRadius: 12,
              background: '#2997ff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#0077ed'}
            onMouseLeave={e => e.currentTarget.style.background = '#2997ff'}
          >
            <Send size={18} color="#fff" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
