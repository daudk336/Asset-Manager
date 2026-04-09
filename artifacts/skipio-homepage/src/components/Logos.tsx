import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Elase', style: 'font-light tracking-widest uppercase text-base' },
  { name: 'the domani', style: 'font-light italic text-base' },
  { name: '9ROUND', style: 'font-black tracking-tight text-base text-[#E53E3E]' },
  { name: 'Krista Mashore\nCOACHING', style: 'font-bold text-xs text-[#2563EB] leading-tight text-center' },
  { name: 'EVOFIT', style: 'font-black tracking-widest text-base' },
  { name: 'MARY KAY', style: 'font-bold tracking-wide text-sm text-[#D63384]' },
  { name: 'CleanStart', style: 'font-bold text-base text-[#059669]' },
  { name: 'Tutor Doctor', style: 'font-semibold text-sm' },
];

export default function Logos() {
  return (
    <section className="py-10 border-b border-[#F1F5F9] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`text-[#9CA3AF] hover:text-[#374151] transition-colors duration-300 select-none whitespace-pre-line ${brand.style}`}
            >
              {brand.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
