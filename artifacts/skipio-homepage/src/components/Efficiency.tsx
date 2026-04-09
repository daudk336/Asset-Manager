import React from 'react';
import { motion } from 'framer-motion';
import { Phone, BarChart2, MessageSquare, AlertTriangle, Users, Database } from 'lucide-react';

const features = [
  { icon: Phone, label: 'Answer 100% of inbound calls' },
  { icon: BarChart2, label: 'Capture and qualify every lead' },
  { icon: MessageSquare, label: 'Send intelligent follow-up texts' },
  { icon: AlertTriangle, label: 'Route urgent issues correctly' },
  { icon: Users, label: 'Escalate complex conversations to staff' },
  { icon: Database, label: 'Push structured data directly into your CRM' },
];

function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[6px] border-[#0F172A] bg-white shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#0F172A] rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="pt-8 pb-4 px-4 bg-[#F8FAFC] min-h-[460px]">
          {/* Skipio header */}
          <div className="flex items-center gap-1.5 mb-4 mt-1">
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#14B8A6"/><circle cx="16" cy="14" r="6" fill="white"/><path d="M16 20 C10 20 7 25 7 28 L25 28 C25 25 22 20 16 20Z" fill="white"/></svg>
            <span className="text-xs font-bold text-[#0F172A]">skipio</span>
          </div>

          {/* Sentiment Score card */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#F1F5F9] p-4 mb-3">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-semibold text-[#374151]">Sentiment Score</span>
              <span className="text-[10px] font-medium text-white bg-[#10B981] px-1.5 py-0.5 rounded-full">this month +3%</span>
            </div>
            {/* Gauge arc */}
            <div className="flex flex-col items-center mb-1">
              <svg viewBox="0 0 120 70" className="w-28 h-16">
                <path d="M15,65 A50,50 0 0,1 105,65" fill="none" stroke="#E5E7EB" strokeWidth="10" strokeLinecap="round"/>
                <path d="M15,65 A50,50 0 0,1 105,65" fill="none" stroke="#10B981" strokeWidth="10" strokeLinecap="round" strokeDasharray="157" strokeDashoffset="20"/>
                <circle cx="104" cy="65" r="5" fill="#10B981"/>
              </svg>
              <div className="-mt-6 text-center">
                <p className="text-3xl font-bold text-[#0F172A]">98%</p>
              </div>
            </div>
            <p className="text-[10px] text-center text-[#9CA3AF]">Sentiment analysis average</p>
          </div>

          {/* Actions Triggered card */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#F1F5F9] p-4 mb-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-[#374151]">Actions Triggered</span>
              <span className="text-[10px] font-medium text-white bg-[#10B981] px-1.5 py-0.5 rounded-full">this month +2%</span>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-2xl font-bold text-[#0F172A]">130,362</p>
              {/* Mini bar chart */}
              <div className="flex items-end gap-0.5 mb-1">
                {[3, 4, 5, 6, 5, 7, 6].map((h, i) => (
                  <div key={i} className="w-2 rounded-sm bg-[#2563EB]" style={{ height: `${h * 4}px`, opacity: i === 5 ? 1 : 0.4 }} />
                ))}
              </div>
            </div>
            <p className="text-[10px] text-[#9CA3AF]">Follow-ups automated</p>
          </div>

          {/* Booked Call cards */}
          {[
            { time: 'Today 09:17', appt: 'Appointment for 4:30 PM EST' },
            { time: 'Today 11:45', appt: 'Appointment for 5:30 PM EST' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white rounded-xl shadow-sm border border-[#F1F5F9] p-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
              </div>
              <div>
                <p className="text-[10px] font-semibold text-[#0F172A]">Booked Call <span className="font-normal text-[#9CA3AF]">{item.time}</span></p>
                <p className="text-[10px] text-[#6B7280]">{item.appt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Efficiency() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight mb-8">
            Meet the Most Efficient Employee You'll Ever Hire.{' '}
            <span className="text-[#374151]">Full Frontline Coverage.</span>
          </h2>

          {/* Feature card */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-2">
            <p className="font-bold text-[#0F172A] mb-1">Voice. Text. Web Chat.</p>
            <p className="text-[#6B7280] text-sm">Always on. Always consistent. Always improving.</p>

            <div className="mt-5 mb-5 border-t border-[#E2E8F0]" />

            <p className="font-bold text-[#0F172A] text-sm mb-4">Skipio AI Employees:</p>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#CCFBF1] flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-3.5 h-3.5 text-[#0D9488]" />
                  </div>
                  <span className="text-sm text-[#374151]">{f.label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 border border-[#DBEAFE] bg-[#EFF6FF] rounded-xl px-4 py-3">
              <p className="text-sm italic text-[#2563EB] font-medium">Human-tuned daily. Enterprise-ready from day one.</p>
            </div>
          </div>
        </motion.div>

        {/* Right mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
