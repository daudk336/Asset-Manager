import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="flex items-center gap-8">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-xl">S</div>
          <span className="font-bold text-xl tracking-tight text-foreground">Skipio</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#product" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Product</a>
          <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Resources</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#company" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Company</a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="hidden sm:inline-flex rounded-full text-foreground hover:text-foreground hover:bg-muted">Log In</Button>
        <Button className="rounded-full bg-primary text-white hover:bg-primary/90 shadow-sm">Get Started</Button>
      </div>
    </motion.header>
  );
}
