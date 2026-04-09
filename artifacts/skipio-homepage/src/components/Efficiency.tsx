import React from 'react';
import { motion } from 'framer-motion';
import efficiencyMockup from '@/assets/images/efficiency-mockup.png';

export default function Efficiency() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary mb-6 leading-tight">
            Meet the Most Efficient Employee You'll Ever Hire. <br/>
            <span className="text-muted-foreground">Full Frontline Coverage.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Stop losing revenue to missed calls. Your managed AI employee handles scheduling, inquiries, and follow-ups with 98% efficiency — allowing your human team to focus on the guests right in front of them.
          </p>
          
          <ul className="space-y-4">
            {[
              "Instant response to every incoming call",
              "Seamless integration with existing scheduling tools",
              "Automated follow-ups to unengaged leads",
              "Detailed conversational analytics per location"
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="font-medium text-secondary">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-[3rem] transform rotate-3 scale-105 -z-10" />
          <img 
            src={efficiencyMockup} 
            alt="Efficiency Dashboard" 
            className="w-full h-auto object-contain rounded-3xl shadow-xl border border-border/50 bg-white"
          />
        </motion.div>
      </div>
    </section>
  );
}
