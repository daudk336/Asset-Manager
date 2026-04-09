import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Logos from '@/components/Logos';
import Efficiency from '@/components/Efficiency';
import Network from '@/components/Network';
import Stats from '@/components/Stats';
import Comparison from '@/components/Comparison';
import Process from '@/components/Process';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Efficiency />
        <Network />
        <Logos />
        <Stats />
        <Comparison />
        <Process />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
