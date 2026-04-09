import React from 'react';
import { motion } from 'framer-motion';
import { Car, Dumbbell, Home, HeartPulse, Bone, Building2, ShieldCheck, Users } from 'lucide-react';

const industries = [
  { Icon: Car, label: 'Auto Service Locations' },
  { Icon: Bone, label: 'Chiropractic Networks' },
  { Icon: Dumbbell, label: 'Fitness Brands' },
  { Icon: Home, label: 'Home Services' },
  { Icon: HeartPulse, label: 'Healthcare Clinics' },
];

const trustStats = [
  { Icon: Building2, text: '38,000 businesses served since 2016', pos: 'top-[15%] left-[2%]' },
  { Icon: Users, text: 'Millions of customer conversations handled daily', pos: 'top-[15%] right-[2%]' },
  { Icon: Building2, text: 'Built for multi-location operations', pos: 'bottom-[18%] left-[2%]' },
  { Icon: ShieldCheck, text: 'Secure, scalable communication architecture', pos: 'bottom-[18%] right-[2%]' },
];

export default function Features() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
            Built for Multi-Location Operators Who Rely on<br className="hidden md:block" /> Inbound Conversations
          </h2>

          {/* Industry pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map(({ Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-full text-sm font-medium text-[#374151] shadow-sm hover:border-[#2563EB]/30 hover:text-[#2563EB] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#CCFBF1] flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-[#0D9488]" />
                </div>
                {label}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust infrastructure card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden mt-10"
          style={{ background: 'linear-gradient(135deg, #0A1628 0%, #0F2A4A 40%, #0A3060 70%, #0369A1 100%)' }}
        >
          {/* Decorative rings */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#38BDF8]/15" />
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-[#38BDF8]/20" />
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25" />

          <div className="relative z-10 px-8 py-14">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Trusted Infrastructure For Customer Communication
            </h3>

            <div className="relative" style={{ minHeight: '200px' }}>
              {/* Center icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#2563EB] shadow-xl shadow-blue-500/40 flex items-center justify-center z-10">
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="14" r="6" fill="white"/>
                  <path d="M16 20 C10 20 7 25 7 28 L25 28 C25 25 22 20 16 20Z" fill="white"/>
                </svg>
              </div>

              {/* Dashed lines to corners */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="50" y1="50" x2="8" y2="15" stroke="white" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="3 3"/>
                <line x1="50" y1="50" x2="92" y2="15" stroke="white" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="3 3"/>
                <line x1="50" y1="50" x2="8" y2="85" stroke="white" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="3 3"/>
                <line x1="50" y1="50" x2="92" y2="85" stroke="white" strokeOpacity="0.15" strokeWidth="0.5" strokeDasharray="3 3"/>
              </svg>

              {/* Stat bubbles */}
              {trustStats.map(({ Icon, text, pos }, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} max-w-[200px] bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#2563EB]" />
                  </div>
                  <p className="text-xs font-medium text-[#0F172A] leading-snug"
                    dangerouslySetInnerHTML={{ __html: text.replace(/(\d[\d,]+|multi-location|Secure|Millions)/g, '<strong>$1</strong>') }}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
