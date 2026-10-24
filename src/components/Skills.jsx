"use client";

import { useState } from "react";
import { Shield, ShieldAlert, Cpu, Terminal, Users, HardDrive, Wrench } from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const SKILL_CATEGORIES = [
    {
      id: "leadership",
      title: "Leadership",
      icon: Users,
      skills: ["Team Management", "Problem Solving"],
    },
    {
      id: "offensive",
      title: "Offensive Security",
      icon: ShieldAlert,
      skills: [
        "Vulnerability Assessment",
        "Vulnerability Management",
        "Web Application Penetration Testing",
        "Network Penetration Testing",
        "Security Gap Analysis",
      ],
    },
    {
      id: "blueteam",
      title: "Blue Team & DFIR",
      icon: Shield,
      skills: [
        "Threat Hunting",
        "Malware Analysis",
        "Digital Forensics",
        "Disk Image Analysis",
        "Data Carving",
      ],
    },
    {
      id: "infrastructure",
      title: "Infrastructure & Security",
      icon: HardDrive,
      skills: [
        "Windows & Linux",
        "Network Firewalls",
        "WAF",
        "Microsoft 365 Security",
        "OS Hardening",
      ],
    },
    {
      id: "platforms",
      title: "Security Platforms & Frameworks",
      icon: Wrench,
      skills: [
        "StellarCyber",
        "CrowdStrike",
        "Wazuh",
        "Qualys",
        "Proofpoint",
        "Netskope",
        "Cisco Umbrella",
        "Splunk",
        "MITRE ATT&CK",
      ],
    },
  ];

  const filteredCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative bg-transparent overflow-hidden cyber-grid border-t border-b border-white/5">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5 text-red-400" />
            <span>COMMAND MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 bg-clip-text text-transparent glow-text-red">Capabilities</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Comprehensive breakdown of offensive security, blue team defense, digital forensics, enterprise platforms, and security management.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-red-500/20 text-red-300 border border-red-500/50 shadow-[0_0_12px_rgba(255,30,68,0.3)]"
                  : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white"
              }`}
            >
              All Domains
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-red-500/20 text-red-300 border border-red-500/50 shadow-[0_0_12px_rgba(255,30,68,0.3)]"
                    : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6 hover:border-red-500/40 hover:bg-white/[0.03] transition-all duration-300 shadow-[0_0_20px_rgba(255,30,68,0.06)]"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-red-950/60 border border-red-500/30 text-red-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                      <span className="text-[10px] font-mono text-red-400/80">
                        {cat.skills.length} COMPETENCIES
                      </span>
                    </div>
                  </div>

                  {/* Skills List as Tactical Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-zinc-200 hover:border-red-400/50 hover:text-red-300 hover:bg-red-950/30 transition-all flex items-center gap-2 group cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-125 transition-transform" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>SECURITY DOMAIN</span>
                  <span className="text-red-400 font-bold">OPERATIONAL</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
