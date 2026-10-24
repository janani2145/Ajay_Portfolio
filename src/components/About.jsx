"use client";

import Image from "next/image";
import {
  Shield,
  Eye,
  Cpu,
  Users,
  Search,
  AlertTriangle,
  FileCheck,
  Layers,
  Terminal,
} from "lucide-react";

export default function About() {
  const HIGHLIGHTS = [
    {
      title: "3+ Years Experience",
      desc: "Delivering end-to-end cyber security engagements, VAPT, security audits, and threat mitigation for enterprise organizations.",
      icon: Shield,
    },
    {
      title: "VAPT & Security Audits",
      desc: "Specialized in web, network, and system penetration testing, security gap analysis, and remediation planning.",
      icon: Search,
    },
    {
      title: "Digital Forensics & DFIR",
      desc: "Conducting artifact recovery, malware analysis, disk image carving, and formal forensic reports for legal and incident investigation.",
      icon: AlertTriangle,
    },
    {
      title: "Security Operations (SOC)",
      desc: "Proactive threat monitoring and detection across enterprise platforms including StellarCyber, CrowdStrike, Wazuh, Qualys, and Splunk.",
      icon: Eye,
    },
    {
      title: "Offensive Security",
      desc: "Developing custom Windows and Linux offensive security use cases and delivering technical awareness training.",
      icon: Layers,
    },
    {
      title: "AI / LLM Security Research",
      desc: "Researching and developing security frameworks for prompt injection, AI red teaming, agent security, RAG security, and emerging LLM threats.",
      icon: Cpu,
    },
    {
      title: "Leadership & Mentoring",
      desc: "Leading and mentoring teams of Cyber Security Analysts, overseeing task allocation, technical guidance, and project delivery.",
      icon: Users,
    },
    {
      title: "Law Enforcement Collaboration",
      desc: "Delivering training programs and cyber awareness sessions for government and law enforcement agencies.",
      icon: FileCheck,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative bg-transparent overflow-hidden cyber-grid border-t border-b border-white/5"
    >
      {/* Glow shapes - Crimson & Ruby */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            <span>EXECUTIVE OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About{" "}
            <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 bg-clip-text text-transparent glow-text-red">
              AJAY KUMAR
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            A dedicated Cyber Security Engineer with a proven track record in
            offensive security assessments, digital forensics investigations,
            enterprise SOC monitoring, and AI/LLM threat research.
          </p>
        </div>

        {/* Offensive Operations Showcase (Hooded Hacker) + Narrative Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 text-left">
          {/* Hooded Hacker in Red Neon Control Room Visual */}
          <div className="lg:col-span-6 relative">
            <div className="w-full relative glass-panel p-2.5 rounded-3xl border border-red-500/35 shadow-[0_0_40px_rgba(255,30,68,0.22)] overflow-hidden group">
              {/* Corner accent decorations */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-red-400 z-20 pointer-events-none" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-red-400 z-20 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-red-400 z-20 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-red-400 z-20 pointer-events-none" />

              {/* Live HUD status pill */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-red-500/40 text-[10px] font-mono text-red-300 flex items-center gap-1.5 shadow-lg whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                <span>OFFENSIVE OPS // THREAT SIMULATION</span>
              </div>

              {/* Crisp Hooded Image Container */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-black/60">
                <Image
                  src="/images/Hooded Hacker in Red Neon Control Room.png"
                  alt="Offensive Security Lab - Red Team Simulation & Control Room"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Bottom Metadata Bar */}
              <div className="mt-2.5 px-3 py-2 rounded-xl bg-black/60 border border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-red-400 font-bold">OPERATION:</span>
                  <span>RED TEAM & VAPT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-rose-400 font-bold">POSTURE:</span>
                  <span className="text-emerald-400">HARDENED</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Narrative Box */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 sm:p-7 rounded-3xl glass-panel-red border border-red-500/25 space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs">
                <Terminal className="w-4 h-4" />
                <span>SECURITY ARCHITECTURE & THREAT MODELING</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Building Resilient Defense Frameworks Across Enterprise Ecosystems
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                With over 3 years of hands-on experience across full-lifecycle
                penetration testing, digital forensics, and SOC operations, Ajay
                Kumar delivers enterprise-grade vulnerability assessments,
                security gap remediations, and advanced threat intelligence.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-xs">
                  <div className="font-bold text-red-300">Offensive Security</div>
                  <div className="text-[11px] text-zinc-400">
                    VAPT & Gap Analysis
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-xs">
                  <div className="font-bold text-rose-300">DFIR & SOC</div>
                  <div className="text-[11px] text-zinc-400">
                    Forensics & Detection
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-panel-interactive p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4 group hover:border-red-500/40 shadow-[0_0_20px_rgba(255,30,68,0.06)]"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,30,68,0.4)] transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-red-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>CAPABILITY</span>
                  <span className="text-red-400 font-bold">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
