"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  ShieldAlert,
  ArrowRight,
  Mail,
  Download,
  ShieldCheck,
  Terminal,
  Cpu,
  Lock,
} from "lucide-react";

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Desktop subtle mouse parallax tilt
  const handleMouseMove = (e) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateY = (mouseX / (rect.width / 2)) * 3.5;
    const rotateX = -(mouseY / (rect.height / 2)) * 3.5;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col justify-center cyber-grid bg-transparent">
      {/* Background ambient crimson & ruby light blooms */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-red-600/15 via-rose-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Cyber Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-mono shadow-[0_0_20px_rgba(255,30,68,0.25)] backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="font-semibold tracking-wide text-red-200">CYBER SECURITY ENGINEER</span>
              <span className="text-red-500/60">|</span>
              <span className="text-zinc-300 font-sans">3+ Years Experience</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                AJAY KUMAR
              </h1>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 bg-clip-text text-transparent glow-text-red">
                Cyber Security Engineer & Technical Lead
              </p>
            </div>

            {/* Quote / Summary Statement */}
            <div className="relative p-5 rounded-2xl glass-panel-red border-l-4 border-l-red-500 text-zinc-200">
              <div className="flex items-start gap-3">
                <Terminal className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
                  &ldquo;Cyber Security Engineer with 3+ years of experience in VAPT, Security Audits, Digital Forensics, Incident Response, and Security Operations. Experienced in leading security teams and delivering enterprise Cyber Security engagements, with a strong interest in Offensive Security and AI/LLM Security.&rdquo;
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-semibold text-sm shadow-[0_0_25px_rgba(255,30,68,0.4)] hover:shadow-[0_0_35px_rgba(255,30,68,0.65)] hover:scale-[1.02] active:scale-95 transition-all cursor-pointer border border-red-400/40"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#12131b]/90 hover:bg-[#181a24] text-zinc-200 border border-white/15 font-semibold text-sm transition-all hover:border-red-500/50 hover:text-white cursor-pointer"
              >
                <Mail className="w-4 h-4 text-red-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-red-950/40 hover:bg-red-950/70 text-red-300 border border-red-500/30 font-mono text-xs transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Key Capability Chips */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-[#0f1017]/80 border border-white/10 hover:border-red-500/30 flex items-center gap-2.5 transition-colors">
                <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">VAPT & Audits</div>
                  <div className="text-[10px] text-zinc-400">Enterprise Scale</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0f1017]/80 border border-white/10 hover:border-red-500/30 flex items-center gap-2.5 transition-colors">
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">DFIR & SOC</div>
                  <div className="text-[10px] text-zinc-400">Incident Response</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0f1017]/80 border border-white/10 hover:border-red-500/30 flex items-center gap-2.5 transition-colors">
                <Cpu className="w-4 h-4 text-red-400 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">AI/LLM Security</div>
                  <div className="text-[10px] text-zinc-400">Red Teaming</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0f1017]/80 border border-white/10 hover:border-red-500/30 flex items-center gap-2.5 transition-colors">
                <Lock className="w-4 h-4 text-rose-400 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-semibold text-white">Team Lead</div>
                  <div className="text-[10px] text-zinc-400">Cyber Analysts</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clear, High-Definition Cyber Security Analyst Portrait */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center mt-8 lg:mt-0">
            
            {/* Soft ambient crimson glow behind frame */}
            <div className="absolute w-[360px] sm:w-[440px] h-[480px] sm:h-[540px] rounded-full bg-gradient-to-tr from-red-600/30 via-rose-600/20 to-transparent blur-[90px] pointer-events-none" />

            {/* Interactive 3D Frame Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition:
                  tilt.x === 0 && tilt.y === 0
                    ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                    : "transform 0.15s ease-out",
              }}
              className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden glass-panel border border-red-500/40 p-2.5 shadow-[0_0_50px_rgba(255,30,68,0.25)] animate-subtle-float cursor-default"
            >
              
              {/* High-tech Corner Brackets */}
              <div className="absolute top-3.5 left-3.5 w-4 h-4 border-t-2 border-l-2 border-red-400 z-20 pointer-events-none" />
              <div className="absolute top-3.5 right-3.5 w-4 h-4 border-t-2 border-r-2 border-red-400 z-20 pointer-events-none" />
              <div className="absolute bottom-3.5 left-3.5 w-4 h-4 border-b-2 border-l-2 border-red-400 z-20 pointer-events-none" />
              <div className="absolute bottom-3.5 right-3.5 w-4 h-4 border-b-2 border-r-2 border-red-400 z-20 pointer-events-none" />

              {/* Status HUD Header Tag */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-red-500/30 text-[10px] font-mono text-red-300 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>SOC ANALYST // VERIFIED IDENTITY</span>
              </div>

              {/* Crystal Clear Portrait - NO Shadows or Dark Overlays on Top */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/40">
                <Image
                  src="/images/Cybersecurity Analyst1.png"
                  alt="Ajay Kumar - Cyber Security Engineer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Clear Identity Badge at Bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-red-500/40 shadow-[0_0_20px_rgba(255,30,68,0.4)] flex items-center gap-2.5 whitespace-nowrap">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-xs font-bold text-white tracking-wider">AJAY KUMAR</span>
                <span className="text-red-500/60 font-mono">|</span>
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-semibold">
                  CYBER SECURITY ENGINEER
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}