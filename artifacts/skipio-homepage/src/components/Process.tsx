import React from 'react';
import { motion } from 'framer-motion';
import { Settings, DollarSign, Brain, BarChart2, TrendingUp } from 'lucide-react';

function Week1Visual() {
  const icons = [
    { Icon: Settings, x: 50, y: 10 },
    { Icon: BarChart2, x: 10, y: 50 },
    { Icon: DollarSign, x: 90, y: 50 },
    { Icon: Brain, x: 50, y: 88 },
  ];
  return (
    <div className="relative w-full h-40 flex items-center justify-center">
      <div className="relative w-40 h-40">
        {/* Dashed ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E2E8F0]" />
        {/* Outer icons */}
        {icons.map(({ Icon, x, y }, i) => (
          <div
            key={i}
            className="absolute w-9 h-9 rounded-full bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
          >
            <Icon className="w-4 h-4 text-[#6B7280]" />
          </div>
        ))}
        {/* Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#2563EB] shadow-lg shadow-blue-300/40 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="14" r="6" fill="white"/><path d="M16 20 C10 20 7 25 7 28 L25 28 C25 25 22 20 16 20Z" fill="white"/></svg>
        </div>
      </div>
    </div>
  );
}

function Week2Visual() {
  const logos = [
    { label: 'S', color: '#4A154B', bg: '#E8D5FF', x: 20, y: 20 },
    { label: '⬡', color: '#00A1E0', bg: '#E0F4FF', x: 80, y: 20 },
    { label: 'in', color: '#0A66C2', bg: '#DBEAFE', x: 15, y: 65 },
    { label: '♩', color: '#010101', bg: '#F3F4F6', x: 78, y: 68 },
    { label: 'f', color: '#1877F2', bg: '#DBEAFE', x: 48, y: 82 },
  ];
  return (
    <div className="relative w-full h-40 flex items-center justify-center">
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#E2E8F0]" />
        {logos.map((logo, i) => (
          <div
            key={i}
            className="absolute w-9 h-9 rounded-full border border-[#E2E8F0] shadow-sm flex items-center justify-center font-bold text-sm"
            style={{ left: `${logo.x}%`, top: `${logo.y}%`, transform: 'translate(-50%,-50%)', background: logo.bg, color: logo.color }}
          >
            {logo.label}
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#2563EB] shadow-lg shadow-blue-300/40 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="14" r="6" fill="white"/><path d="M16 20 C10 20 7 25 7 28 L25 28 C25 25 22 20 16 20Z" fill="white"/></svg>
        </div>
      </div>
    </div>
  );
}

function Week3Visual() {
  return (
    <div className="relative w-full h-40 flex items-center justify-center">
      <div className="relative bg-white border border-[#E2E8F0] rounded-2xl shadow-sm p-3 w-44">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-semibold text-[#374151]">Revenue</span>
          <span className="text-[9px] bg-[#D1FAE5] text-[#059669] font-bold px-1.5 py-0.5 rounded-full">this month +12%</span>
        </div>
        <div className="flex gap-4 mb-2">
          {['Week 1','Week 2','Week 3','Month 4'].map(l => (
            <span key={l} className="text-[8px] text-[#9CA3AF]">{l}</span>
          ))}
        </div>
        {/* Chart line */}
        <svg viewBox="0 0 140 50" className="w-full h-10 mb-1">
          <polyline points="0,45 30,38 60,30 90,20 120,10 140,5" fill="none" stroke="#DBEAFE" strokeWidth="1.5"/>
          <polyline points="0,45 30,38 60,30 90,20 120,10 140,5" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="none"/>
          <circle cx="120" cy="10" r="4" fill="#2563EB"/>
          <rect x="100" y="0" width="36" height="12" rx="4" fill="#2563EB"/>
          <text x="118" y="9" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">+12%</text>
        </svg>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-[#CCFBF1] flex items-center justify-center">
            <DollarSign className="w-3 h-3 text-[#0D9488]" />
          </div>
          <span className="text-[10px] text-[#6B7280]">Revenue growing</span>
        </div>
      </div>
    </div>
  );
}

const steps = [
  { week: 'Week 1', title: 'Identify Goals, Generate Scripts, Define Rules', Visual: Week1Visual },
  { week: 'Week 2', title: 'Build & QA, Test Edge Cases, Go Live (Beta)', Visual: Week2Visual },
  { week: 'Wekk 3+', title: 'Expand Coverage, Tune Prompts, Add Additional Goals', Visual: Week3Visual },
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">Launch Quickly. Improve Daily.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {steps.map(({ week, title, Visual }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm"
            >
              <Visual />
              <div className="mt-4">
                <p className="text-sm font-semibold text-[#0D9488] mb-1">{week}</p>
                <h3 className="text-base font-bold text-[#0F172A] leading-snug">{title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full text-sm hover:bg-[#1D4ED8] transition-colors">
            See Skip in Action →
          </a>
          <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-[#D1D5DB] text-[#0F172A] font-semibold rounded-full text-sm hover:bg-[#F9FAFB] transition-colors">
            How It Works →
          </a>
        </div>
      </div>
    </section>
  );
}
