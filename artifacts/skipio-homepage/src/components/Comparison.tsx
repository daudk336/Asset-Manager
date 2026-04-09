import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function Comparison() {
  const comparisonData = [
    { feature: "Availability", traditional: "9-5, Mon-Fri", ai: "24/7/365, instantly" },
    { feature: "Call Capacity", traditional: "1 call at a time", ai: "Unlimited concurrent calls" },
    { feature: "Data Entry", traditional: "Manual, prone to errors", ai: "Automatic CRM syncing" },
    { feature: "Training Time", traditional: "2-4 weeks", ai: "Deploy in 24 hours" },
    { feature: "Consistency", traditional: "Varies by employee mood", ai: "Perfectly on-brand every time" }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Meet Your Best Employee</h2>
          <p className="text-lg text-muted-foreground">The difference between standard operations and scaled efficiency.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-border"
        >
          <div className="grid grid-cols-3 border-b border-border bg-muted/50">
            <div className="p-6"></div>
            <div className="p-6 text-center border-l border-border">
              <h3 className="font-bold text-secondary text-lg">Traditional Setup</h3>
            </div>
            <div className="p-6 text-center bg-primary/5 border-l border-border relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-primary"></div>
              <h3 className="font-bold text-primary text-lg">Skipio AI Employee</h3>
            </div>
          </div>

          <div className="divide-y divide-border">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3">
                <div className="p-6 font-medium text-secondary flex items-center">
                  {row.feature}
                </div>
                <div className="p-6 text-muted-foreground flex items-center justify-center text-center border-l border-border gap-2">
                  <XCircle className="w-5 h-5 text-muted-foreground/50 hidden sm:block" />
                  <span>{row.traditional}</span>
                </div>
                <div className="p-6 font-medium text-secondary flex items-center justify-center text-center bg-primary/5 border-l border-border gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary hidden sm:block" />
                  <span>{row.ai}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
