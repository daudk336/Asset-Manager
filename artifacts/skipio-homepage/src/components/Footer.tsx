import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Pre-footer CTA section */}
      <section className="py-16 bg-white border-t border-[#F1F5F9]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Skipio logo */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#14B8A6"/>
              <circle cx="16" cy="14" r="6" fill="white"/>
              <path d="M16 20 C10 20 7 25 7 28 L25 28 C25 25 22 20 16 20Z" fill="white"/>
            </svg>
            <span className="font-bold text-lg text-[#0F172A] tracking-tight">skipio</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3">
            Skipio is building the Managed AI Employee category for<br className="hidden md:block" /> customer conversations.
          </h2>
          <p className="text-[#6B7280] mb-8">
            We are the communication infrastructure modern multi-location businesses run on.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-semibold rounded-full text-sm hover:bg-[#1D4ED8] transition-colors">
              See Skip in Action →
            </a>
            <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-[#D1D5DB] text-[#0F172A] font-semibold rounded-full text-sm hover:bg-[#F9FAFB] transition-colors">
              How It Works →
            </a>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] py-5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-[#9CA3AF]">© 2026 Skipio. All Right Reserved</p>
        </div>
      </footer>
    </>
  );
}
