import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { value: "+258%", label: "Increase in Lead Conversion" },
    { value: "74%", label: "Reduction in Missed Calls" },
    { value: "48%", label: "Decrease in Support Costs" },
    { value: "82%", label: "Faster Resolution Time" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-secondary mb-4"
          >
            Before AI Was Trending, We Were Building It
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Real results delivered for operators who demand efficiency.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50 border border-border"
            >
              <span className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</span>
              <span className="text-sm font-medium text-secondary">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
