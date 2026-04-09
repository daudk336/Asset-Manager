import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Radio } from 'lucide-react';

const tabs = [
  {
    label: 'Full Coverage',
    headline: 'Every Call. Every Location. Every Hour.',
    sub: 'Skip ensures every customer interaction is captured, routed, and resolved across all locations without relying on local staffing.',
    bullets: [
      '24/7 call coverage across every location',
      'Overflow handling during peak hours',
      'Smart routing to the correct location or department',
      'Consistent brand voice across all locations',
      'Zero missed calls due to staffing gaps',
      'Instant AI response to every inbound inquiry',
    ],
  },
  {
    label: 'Continuous Optimization',
    headline: 'Better Every Single Day.',
    sub: 'Skip learns from every conversation, refining scripts and routing logic to improve performance continuously.',
    bullets: [
      'Weekly performance reviews with your team',
      'Automatic script tuning based on outcomes',
      'A/B testing for conversation flows',
      'Real-time quality scoring per interaction',
      'Human-in-the-loop feedback loops',
      'Continuous model improvements from Skipio',
    ],
  },
  {
    label: 'Structured Data',
    headline: 'Every Conversation Becomes Insight.',
    sub: 'Skip captures structured data from every call, automatically populating your CRM with clean, actionable records.',
    bullets: [
      'Automatic CRM record creation after every call',
      'Caller intent detection and tagging',
      'Outcome classification per conversation',
      'Sentiment scoring at scale',
      'Custom fields mapped to your CRM schema',
      'Real-time reporting dashboard',
    ],
  },
];

function WorldMapDots() {
  return (
    <div className="relative w-full h-48 mt-4">
      <svg viewBox="0 0 400 180" className="w-full h-full opacity-20">
        {/* Simplified world-map dot grid */}
        {Array.from({ length: 12 }).map((_, row) =>
          Array.from({ length: 24 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={col * 17 + 8} cy={row * 15 + 8} r="1.5" fill="white" opacity="0.6" />
          ))
        )}
      </svg>
      {/* Location pins */}
      {[
        { x: '20%', y: '40%' }, { x: '38%', y: '30%' }, { x: '48%', y: '55%' },
        { x: '62%', y: '45%' }, { x: '80%', y: '35%' },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-[#1E3A5F] border border-[#38BDF8]/40"
          style={{ left: pos.x, top: pos.y, transform: 'translate(-50%,-50%)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="#38BDF8" strokeWidth="2"/>
            <path d="M7 7h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z" fill="#38BDF8" opacity="0.5"/>
          </svg>
        </div>
      ))}
      {/* Center Skipio pin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#2563EB] border-2 border-[#60A5FA] flex items-center justify-center z-10 shadow-lg shadow-blue-500/50">
        <svg width="16" height="16" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="14" r="6" fill="white"/><path d="M16 20 C10 20 7 25 7 28 L25 28 C25 25 22 20 16 20Z" fill="white"/></svg>
      </div>
      {/* Waveform lines */}
      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 opacity-60">
        <Radio className="w-5 h-5 text-[#38BDF8]" />
      </div>
      <div className="absolute right-[20%] top-1/2 -translate-y-1/2 opacity-60">
        <Radio className="w-5 h-5 text-[#38BDF8]" />
      </div>
    </div>
  );
}

export default function Network() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section className="py-24 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F2A4A 50%, #0A3060 100%)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.15),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
            Why Multi-Location Brands Replace Missed Calls<br className="hidden md:block" /> with Managed AI Employees
          </h2>
          <p className="text-white/60 italic text-lg">Voicemail is lost revenue. Hold time is churn.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col md:flex-row gap-4 md:gap-8"
        >
          {/* Left tabs */}
          <div className="flex md:flex-col gap-2 md:gap-3 md:w-48 flex-shrink-0">
            {tabs.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`text-left px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeTab === i
                    ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-500/30'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Main content card */}
          <div className="flex-1 rounded-2xl border border-white/10 bg-[#0D1B2E]/80 backdrop-blur-sm p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-2">{tab.headline}</h3>
            <p className="text-white/60 text-sm mb-6">{tab.sub}</p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {tab.bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/80">{b}</span>
                </div>
              ))}
            </div>

            <WorldMapDots />
          </div>
        </motion.div>

        {/* Bottom tagline + CTAs */}
        <div className="mt-10 text-center">
          <p className="text-white/60 italic mb-6">From conversation to operational insight instantly.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              See Skipi In Action →
            </a>
            <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              How It Works →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
