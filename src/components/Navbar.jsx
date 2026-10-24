"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Menu, X, Download, FileText, CheckCircle } from "lucide-react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "AI Security", href: "#ai-security" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 220;
      let current = "";

      for (const item of NAV_ITEMS) {
        const id = item.href.substring(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#07070a]/90 backdrop-blur-xl border-b border-red-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.9)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3.5 group focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-red-950/70 border border-red-500/40 text-red-500 group-hover:border-red-400 group-hover:shadow-[0_0_20px_rgba(255,30,68,0.5)] transition-all">
                <Shield className="w-5 h-5 text-red-500 fill-red-500/20 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-base sm:text-lg tracking-wider text-white group-hover:text-red-400 transition-colors">
                  AJAY KUMAR
                </span>
                <span className="text-[10px] tracking-widest text-red-400/90 font-mono uppercase">
                  CYBER SECURITY ENGINEER
                </span>
              </div>
            </a>

            {/* Desktop Navigation - Smooth Sliding Red Border with Framer Motion */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#101117]/85 backdrop-blur-xl border border-red-500/25 px-3 py-1.5 rounded-full shadow-inner shadow-black/50">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 outline-none focus:outline-none focus:ring-0 ${
                      isActive
                        ? "text-red-200"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {/* Smooth sliding glowing red border pill */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="absolute inset-0 rounded-full border border-red-500/70 bg-gradient-to-r from-red-600/25 via-rose-600/20 to-red-600/25 shadow-[0_0_15px_rgba(255,30,68,0.45)]"
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setShowResumeModal(true)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-[0_0_20px_rgba(255,30,68,0.4)] hover:shadow-[0_0_30px_rgba(255,30,68,0.65)] hover:scale-[1.03] active:scale-95 transition-all duration-200 cursor-pointer border border-red-400/40"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume / CV</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#14151e] border border-red-500/30 text-red-400 hover:text-white focus:outline-none shadow-[0_0_12px_rgba(255,30,68,0.2)]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Overlay Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07070a]/98 border-b border-red-500/25 backdrop-blur-2xl px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all flex items-center justify-between border-l-2 ${
                      isActive
                        ? "border-red-500 bg-red-950/40 text-red-200 shadow-[inset_4px_0_12px_rgba(255,30,68,0.2)]"
                        : "border-transparent text-zinc-300 hover:text-red-400 hover:bg-red-950/20"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-red-500/50">#</span>
                  </a>
                );
              })}
            </div>
            <div className="pt-3 border-t border-red-500/20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowResumeModal(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-[0_0_20px_rgba(255,30,68,0.4)] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume / CV</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg p-6 sm:p-8 bg-[#0f1017] border border-red-500/40 rounded-3xl shadow-[0_0_60px_rgba(255,30,68,0.3)] text-gray-100 text-left">
            <button
              onClick={() => setShowResumeModal(false)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1.5 rounded-xl bg-red-950/40 hover:bg-red-950/70 border border-red-500/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="p-3.5 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-400 shadow-[0_0_15px_rgba(255,30,68,0.2)]">
                <FileText className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AJAY KUMAR - Resume / CV</h3>
                <p className="text-xs text-red-400 font-mono">Cyber Security Engineer • 3+ Years Exp</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-red-500/20 text-xs text-zinc-300 space-y-2 mb-6">
              <div className="flex items-center gap-2 text-red-300 font-semibold font-mono">
                <CheckCircle className="w-4 h-4 text-red-400" />
                <span>Verified Resume Content Summary</span>
              </div>
              <p className="leading-relaxed">
                Includes detailed history of VAPT, Security Audits, Digital Forensics, Incident Response, SOC Operations at Tevel Cyber Corps, and AI/LLM Security research.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/images/Resume_Ajay.PDF"
                download="Ajay_Kumar_Cyber_Security_Engineer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowResumeModal(false)}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold text-sm hover:brightness-110 shadow-[0_0_20px_rgba(255,30,68,0.4)] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-300 font-semibold text-sm transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}