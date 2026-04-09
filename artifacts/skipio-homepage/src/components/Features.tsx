import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Workflow, Users, ShieldCheck, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: MessageSquare, title: "Omnichannel Inbox", desc: "Manage SMS, Web Chat, and Voice all from a single unified interface designed for scale." },
    { icon: Calendar, title: "Automated Scheduling", desc: "Let AI handle calendar booking, reminders, and reschedules without human intervention." },
    { icon: Workflow, title: "Smart Routing", desc: "Instantly route complex escalations to the right human manager at the right location." },
    { icon: Users, title: "Role-Based Access", desc: "Granular permissions for regional managers, store operators, and corporate leadership." },
    { icon: ShieldCheck, title: "Enterprise Compliance", desc: "SOC2 Type II, HIPAA, and TCPA compliant infrastructure you can trust with your brand." },
    { icon: Zap, title: "CRM Sync", desc: "Native integrations push every interaction back to your system of record in real-time." }
  ];

  return (
    <section className="py-24 bg-[#0B0E2C] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Multi-Location Operators</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">Purpose-built tools that turn chaotic communications into a predictable, measurable engine.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
