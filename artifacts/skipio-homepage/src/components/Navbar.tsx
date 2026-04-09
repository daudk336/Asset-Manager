import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-10 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 flex-shrink-0">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#14B8A6"/>
          <circle cx="16" cy="14" r="6" fill="white"/>
          <path d="M16 20 C10 20 7 25 7 28 L25 28 C25 25 22 20 16 20Z" fill="white"/>
        </svg>
        <span className="font-bold text-xl text-[#0F172A] tracking-tight">skipio</span>
      </a>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-1">
        <a href="#" className="px-4 py-2 text-sm font-medium text-[#2563EB] hover:text-[#2563EB]/80 transition-colors">Home</a>
        <a href="#" className="px-4 py-2 text-sm font-medium text-[#374151] hover:text-[#0F172A] transition-colors">Product</a>
        <a href="#" className="px-4 py-2 text-sm font-medium text-[#374151] hover:text-[#0F172A] transition-colors flex items-center gap-1">
          Resources <ChevronDown className="w-3.5 h-3.5" />
        </a>
        <a href="#" className="px-4 py-2 text-sm font-medium text-[#374151] hover:text-[#0F172A] transition-colors">Pricing</a>
        <a href="#" className="px-4 py-2 text-sm font-medium text-[#374151] hover:text-[#0F172A] transition-colors">Talk to an Expert</a>
      </nav>

      {/* Right CTAs */}
      <div className="flex items-center gap-3">
        <a href="#" className="hidden lg:block text-sm font-medium text-[#374151] hover:text-[#0F172A] transition-colors whitespace-nowrap">
          Skipio Classic Login
        </a>
        <a
          href="#"
          className="px-5 py-2 bg-[#0F172A] text-white text-sm font-semibold rounded-full hover:bg-[#1E293B] transition-colors"
        >
          Login
        </a>
      </div>
    </motion.header>
  );
}
