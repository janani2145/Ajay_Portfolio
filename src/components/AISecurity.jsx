"use client";

import { Cpu, ShieldAlert, Bot, Database, Zap, Lock, Terminal, AlertCircle } from "lucide-react";

export default function AISecurity() {
  const AI_DOMAINS = [
    {
      title: "Prompt Injection",
      desc: "Analyzing direct & indirect prompt injection vectors, jailbreak payloads, and context window manipulation defense mechanisms.",
      icon: Zap,
      badge: "Vulnerability Analysis",
      threatLevel: "High Risk Vector",
      isCritical: true,
    },
    {
      title: "AI Red Teaming",
      desc: "Adversarial testing of Large Language Models (LLMs), evaluating guardrail bypasses, safety alignment, and response leakage.",
      icon: ShieldAlert,
      badge: "Adversarial Testing",
      threatLevel: "Adversarial Surface",
      isCritical: false,
    },
    {
      title: "Agent Security",
      desc: "Securing autonomous AI agents, tool-use execution sandboxes, privilege escalation control, and multi-agent communications.",
      icon: Bot,
      badge: "Agent Architecture",
      threatLevel: "Execution Control",
      isCritical: false,
    },
    {
      title: "RAG Security",
      desc: "Protecting Retrieval-Augmented Generation systems against vector database poisoning, embedding manipulation, and data exposure.",
      icon: Database,
      badge: "Data & Vector Store",
      threatLevel: "Data Integrity",
      isCritical: false,
    },
    {
      title: "Emerging AI/LLM Threats",
      desc: "Investigating model inversion, shadow AI deployment risks, data extraction attacks, and supply chain threats in AI pipelines.",
      icon: Lock,
      badge: "Threat Intelligence",
      threatLevel: "Emerging Surface",
      isCritical: false,
    },
  ];

  return (
    <section id="ai-security" className="py-24 relative bg-transparent overflow-hidden cyber-grid-dense">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-mono shadow-[0_0_15px_rgba(255,30,68,0.15)]">
            <Cpu className="w-4 h-4 text-red-400" />
            <span>SPECIALIZED RESEARCH & DEFENSE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            AI & LLM <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 bg-clip-text text-transparent glow-text-red">Security</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Active research and development of offensive use cases focused on artificial intelligence threat modeling, red teaming, agent safety, and RAG architecture fortification.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {AI_DOMAINS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-panel-interactive p-7 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-[0_0_20px_rgba(255,30,68,0.06)]"
              >
                {/* Top red hover gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-rose-600 opacity-40 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-red-950/60 border border-red-500/30 text-red-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    {item.isCritical ? (
                      <span className="px-2.5 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-red-300 text-[10px] font-mono flex items-center gap-1 font-bold">
                        <AlertCircle className="w-3 h-3 text-red-400" />
                        {item.threatLevel}
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 text-[10px] font-mono border border-white/10">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1.5 text-red-400">
                    <Terminal className="w-3.5 h-3.5" />
                    USE CASE RESEARCH
                  </span>
                  <span className="text-zinc-500">SEC-AI-0{idx + 1}</span>
                </div>
              </div>
            );
          })}

          {/* AI Security Banner Card */}
          <div className="glass-panel p-7 rounded-3xl border border-red-500/30 lg:col-span-1 md:col-span-2 flex flex-col justify-between space-y-4 bg-gradient-to-br from-red-950/40 via-[#0f1017] to-rose-950/40 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                ENTERPRISE R&D FOCUS
              </div>
              <h3 className="text-lg font-bold text-white">
                Next-Gen Threat Surface Mitigation
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Evaluating emerging LLM risks across enterprise workflows, securing context retrieval layers, and hardening agent tool execution pipelines against adversarial manipulation.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-black/70 border border-white/10 font-mono text-[11px] text-red-300">
              {"// STACK: Prompt Hardening • RAG Guardrails • LLM Red Teaming"}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
