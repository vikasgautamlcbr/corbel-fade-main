import SGPLogo from '@/assets/SGP_Logo_New.png';
import { Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6 relative">
        <div className="absolute inset-x-0 -top-4 h-16 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          {/* Logo */}
          <img src={SGPLogo} alt="Software Growth Partners" className="h-8 w-auto" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Software Growth Partners. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/software-growth-partners/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-black hover:bg-[#00FFFF] hover:border-[#00FFFF] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
