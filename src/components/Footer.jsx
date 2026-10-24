"use client";

import { Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050508]/80 backdrop-blur-md border-t border-red-500/20 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-950/70 border border-red-500/40 text-red-500 flex items-center justify-center shadow-[0_0_15px_rgba(255,30,68,0.3)]">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-base font-bold text-white tracking-wider">
                AJAY KUMAR
              </span>
              <p className="text-[10px] font-mono text-red-400/90 uppercase">
                CYBER SECURITY ENGINEER • 3+ YRS EXP
              </p>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
            <a href="#about" className="hover:text-red-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-red-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-red-400 transition-colors">Skills</a>
            <a href="#ai-security" className="hover:text-red-400 transition-colors">AI Security</a>
            <a href="#certifications" className="hover:text-red-400 transition-colors">Certifications</a>
            <a href="#education" className="hover:text-red-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>SYSTEM OPERATIONAL // PORTFOLIO v2026</span>
          </div>

          <div>
            &copy; {currentYear} AJAY KUMAR. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}