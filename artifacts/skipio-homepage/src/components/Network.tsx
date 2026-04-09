import React from 'react';
import { motion } from 'framer-motion';
import networkDiagram from '@/assets/images/network-diagram.png';

export default function Network() {
  return (
    <section className="py-32 bg-[#0B0E2C] relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-[#0B0E2C] to-[#0B0E2C] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Why Multi-Location Brands Replace Missed Calls with Managed AI Employees
          </h2>
          <p className="text-lg text-white/70">
            Scale your frontline operations instantly. No hiring delays, no training periods, no downtime. Just perfect coverage across your entire network.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm aspect-[16/9] flex items-center justify-center"
        >
          <img 
            src={networkDiagram} 
            alt="Network Nodes Diagram" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E2C] via-transparent to-transparent" />
          
          <div className="relative z-20 flex flex-col md:flex-row gap-8 md:gap-16 w-full justify-center px-8">
            <div className="bg-[#0B0E2C]/80 border border-primary/30 p-6 rounded-2xl backdrop-blur-md flex-1 max-w-[280px] text-center">
              <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Coverage</h3>
              <p className="text-2xl font-bold">Every Call</p>
            </div>
            <div className="bg-[#0B0E2C]/80 border border-primary/30 p-6 rounded-2xl backdrop-blur-md flex-1 max-w-[280px] text-center">
              <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Scale</h3>
              <p className="text-2xl font-bold">Every Location</p>
            </div>
            <div className="bg-[#0B0E2C]/80 border border-primary/30 p-6 rounded-2xl backdrop-blur-md flex-1 max-w-[280px] text-center">
              <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Availability</h3>
              <p className="text-2xl font-bold">Every Hour</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
