import React from 'react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white font-bold text-xl">S</div>
            <span className="font-bold text-xl tracking-tight text-secondary">Skipio</span>
          </div>
          <p className="text-muted-foreground mb-6">
            Skipio is building the Managed AI Employee category for customer conversations.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-secondary mb-4">Product</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Platform Overview</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">AI Employees</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Multi-Location Management</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Integrations</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-secondary mb-4">Resources</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">API Documentation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-secondary mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact Sales</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Partner Program</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Skipio. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-secondary">Privacy Policy</a>
          <a href="#" className="hover:text-secondary">Terms of Service</a>
          <a href="#" className="hover:text-secondary">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
