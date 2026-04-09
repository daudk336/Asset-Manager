import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  'Anytime Fitness',
  'Service Titan',
  'Freshdesk',
  'Yext',
  'Jobber',
  'Podium',
];

export default function Logos() {
  return (
    <section className="py-12 border-b border-border bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          Trusted by multi-location operators nationwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="text-muted-foreground hover:text-foreground transition-colors font-bold text-lg tracking-tight select-none"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
