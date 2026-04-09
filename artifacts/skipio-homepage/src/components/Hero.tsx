import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col items-center text-center px-4 bg-white">
      {/* Soft blue bleed at left/right edges */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#DBEAFE] rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#CFFAFE] rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        {/* Announcement pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E2E8F0] bg-white text-sm font-medium text-[#374151] mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
          Trusted by multi-location brands across automotive, fitness, healthcare, and service industries
          <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] leading-[1.1] tracking-tight mb-6">
          The Communication Infrastructure<br />
          Modern Businesses Run On
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-[#6B7280] mb-8">
          Meet Skip, your Managed AI Employee that{' '}
          <strong className="text-[#0F172A] font-semibold">answers every call…</strong>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-[#1D4ED8] transition-colors text-sm">
            See Skip in Action <span className="text-base">→</span>
          </a>
          <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white border border-[#D1D5DB] text-[#0F172A] font-semibold rounded-full hover:bg-[#F9FAFB] transition-colors text-sm">
            How It Works <span className="text-base">→</span>
          </a>
        </div>

        {/* Stars */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
              </svg>
            ))}
          </div>
          <p className="text-sm text-[#6B7280]">Trusted by multi-location brands across automotive, fitness, healthcare, and service industries.</p>
        </div>
      </motion.div>

      {/* Video / hero media placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-12 w-full max-w-3xl mx-auto relative z-10"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0]" style={{ aspectRatio: '16/9' }}>
          {/* Blue/teal gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#BFDBFE] via-[#93C5FD] to-[#0EA5E9]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#7DD3FA]/60 via-[#38BDF8]/40 to-[#0369A1]/80" />

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            {/* Skipio logo text */}
            <div className="flex items-center gap-2">
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="white" fillOpacity="0.2"/>
                <circle cx="16" cy="14" r="6" fill="white"/>
                <path d="M16 20 C10 20 7 25 7 28 L25 28 C25 25 22 20 16 20Z" fill="white"/>
              </svg>
              <span className="text-white font-bold text-3xl tracking-tight">skipio</span>
            </div>

            {/* Play button */}
            <button className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-colors">
              <Play className="w-6 h-6 text-white fill-white ml-0.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
