import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import heroMockup from '@/assets/images/hero-mockup.png';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center px-4">
      <div className="absolute top-0 inset-x-0 h-[600px] w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-sm font-medium mb-8 text-foreground">
          <span className="flex h-2 w-2 rounded-full bg-primary"></span>
          Introducing Managed AI Employees
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
          The Communication Infrastructure <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Modern Businesses</span> Run On
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Deploy managed AI employees across your entire frontline to handle customer conversations at scale, ensuring zero missed opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/90 text-white text-base h-12 px-8">
            Deploy Your AI Employee
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base h-12 px-8 bg-background">
            View Live Demo
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <span>Trusted by 2,500+ multi-location operators</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-20 max-w-5xl mx-auto w-full relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-[2.5rem] blur-2xl -z-10 opacity-50" />
        <div className="relative rounded-[2rem] border border-border/50 bg-background/50 backdrop-blur-sm p-2 shadow-2xl">
          <img 
            src={heroMockup} 
            alt="Skipio Platform Interface" 
            className="w-full h-auto rounded-[1.75rem] object-cover border border-border/30"
          />
        </div>
      </motion.div>
    </section>
  );
}
