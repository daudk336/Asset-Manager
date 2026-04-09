import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';

const traditionalItems = [
  'Limited to scheduled hours',
  'Missed calls during breaks, lunch, and after-hours',
  'Inconsistent answers and training gaps',
  'Turnover, sick days, and management overhead',
  'Manual note taking and incomplete data',
  'Requires hiring, onboarding, and supervision',
];

const skipioItems = [
  '100% call coverage, day and night',
  'Instant responses to every caller',
  'Brand-consistent conversations every time',
  'Smart escalation to the right team member',
  'Structured, CRM-ready conversation data',
  'No hiring, no turnover, no supervision',
];

export default function Comparison() {
  return (
    <section className="py-20 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F2A4A 40%, #0A3060 70%, #0D4880 100%)' }}>
      {/* Decorative circles */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full border border-[#2563EB]/10 translate-x-1/3 translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full border border-[#2563EB]/15 translate-x-1/4 translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#38BDF8]/8 translate-x-1/4 translate-y-1/4" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold">Meet Your Best Employee</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 gap-4"
        >
          {/* Traditional hire card */}
          <div className="rounded-2xl bg-[#0D1B2E]/80 border border-white/10 p-6">
            <div className="text-center mb-4">
              <h3 className="font-bold text-white text-lg">Traditional Hire</h3>
              <div className="mt-2 bg-[#1E2D3D] rounded-xl py-2 px-4 inline-block">
                <p className="text-sm text-white/70">Estimated Cost: <strong className="text-white">$45,000–$65,000 / year</strong></p>
              </div>
            </div>
            <div className="h-px bg-white/10 mb-4" />
            <ul className="space-y-3">
              {traditionalItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FEE2E2]/10 border border-[#EF4444]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <XCircle className="w-3.5 h-3.5 text-[#EF4444]" />
                  </div>
                  <span className="text-sm text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skip AI Employee card */}
          <div className="rounded-2xl bg-[#1E3A5F]/60 border border-[#2563EB]/30 p-6 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#38BDF8] via-[#2563EB] to-[#7C3AED]" />
            <div className="text-center mb-4">
              <div className="inline-block bg-gradient-to-r from-[#2563EB] to-[#38BDF8] rounded-xl py-2 px-6 mb-2">
                <h3 className="font-bold text-white text-lg">Skip — Your AI Employee</h3>
              </div>
              <div className="bg-[#DBEAFE]/10 rounded-xl py-2 px-4 inline-block">
                <p className="text-sm text-white/80">Starting at <strong className="text-white">$599 / month</strong></p>
              </div>
            </div>
            <div className="h-px bg-white/10 mb-4" />
            <ul className="space-y-3">
              {skipioItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#DBEAFE]/10 border border-[#2563EB]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#60A5FA]" />
                  </div>
                  <span className="text-sm text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-white/60 italic mb-6">Hire your most reliable employee for less than the cost of a single shift.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              See Skip In Action →
            </a>
            <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/30 bg-[#1E2D3D] text-white font-semibold text-sm hover:bg-white/10 transition-colors">
              How It Works →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
