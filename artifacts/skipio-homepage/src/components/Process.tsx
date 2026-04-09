import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Cog, LineChart } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Rocket,
      title: "1. Rapid Deployment",
      desc: "Connect your systems and train your AI employee on your brand guidelines in under 24 hours."
    },
    {
      icon: Cog,
      title: "2. Seamless Operations",
      desc: "Your AI agent takes over frontline communications, handling inquiries, booking, and routing intelligently."
    },
    {
      icon: LineChart,
      title: "3. Continuous Improvement",
      desc: "The system learns from every interaction, optimizing responses and providing you with deep operational insights."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Launch Quickly. Improve Daily.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Skip the painful implementation cycles. We handle the technical heavy lifting so you can focus on growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-border -z-10"></div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-muted flex items-center justify-center mb-6 shadow-sm shadow-primary/10 relative">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
