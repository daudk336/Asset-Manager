import React from 'react';
import { motion } from 'framer-motion';
import { Phone, PhoneMissed, Zap, ArrowLeftRight, Users } from 'lucide-react';

const stats = [
  { value: '+258%', label: 'Increase in Answered Calls', Icon: Phone },
  { value: '74%', label: 'Reduction in Missed Opportunities', Icon: PhoneMissed },
  { value: '48%', label: 'Faster Resolution Times', Icon: Zap },
  { value: '82%', label: 'Fewer Unnecessary Transfers', Icon: ArrowLeftRight },
];

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: stat cards 2x2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-3xl md:text-4xl font-bold text-[#0F172A]">{s.value}</span>
                  <div className="w-8 h-8 rounded-lg bg-[#CCFBF1] flex items-center justify-center flex-shrink-0">
                    <s.Icon className="w-4 h-4 text-[#0D9488]" />
                  </div>
                </div>
                <p className="text-xs text-[#6B7280] leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: trust + headline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="#F59E0B" strokeWidth="1.5" viewBox="0 0 24 24">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                </svg>
              ))}
            </div>

            {/* Trust line */}
            <div className="flex items-center gap-2 mb-5">
              <Users className="w-4 h-4 text-[#0D9488]" />
              <span className="text-sm font-medium text-[#0D9488]">Trusted By 100+ Companies Nationwide</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight mb-4">
              Before AI Was Trending, We Were Building It
            </h2>
            <p className="text-[#6B7280] text-base leading-relaxed">
              From automotive and fitness to healthcare and service industries, more than 38,000 businesses rely on Skipio to capture opportunities, reduce missed calls, and scale communication with confidence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
