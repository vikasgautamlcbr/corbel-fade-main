import SGPLogo from '@/assets/SGP_Logo.svg';
import { Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-border/20 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <img src={SGPLogo} alt="Software Growth Partners" className="h-8 w-auto" />

          {/* Copyright */}
          <p className="text-secondary-foreground/60 text-sm text-center">
            © {currentYear} Software Growth Partners. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary-foreground/60 hover:text-primary hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary-foreground/60 hover:text-primary hover:bg-primary/20 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
