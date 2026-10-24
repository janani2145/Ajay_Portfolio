"use client";

import { useState } from "react";
import { Award, ExternalLink, CheckCircle, ShieldCheck, X, FileBadge } from "lucide-react";

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);
  const [showExternalNotice, setShowExternalNotice] = useState(false);

  const CERTS = [
    {
      title: "Certified Social Engineering Defense Practitioner (CSEDP)",
      issuer: "Cyber Security Certification",
      category: "Specialized Defense",
    },
    {
      title: "BelkaGPT - DFIR",
      issuer: "Belkasoft / DFIR Intelligence",
      category: "Digital Forensics & AI",
    },
    {
      title: "SOCRadar - Mastering GenAI",
      issuer: "SOCRadar Cyber Intelligence",
      category: "AI Security & Threat Intel",
    },
    {
      title: "Penetration Testing internship certificate",
      issuer: "Virtually Testing Foundation",
      category: "Offensive Security",
    },
    {
      title: "Active Directory Attack",
      issuer: "Cyber Security Lab",
      category: "Infrastructure & AD Security",
    },
    {
      title: "CodeRed Digital Forensics Essential",
      issuer: "EC-Council CodeRed",
      category: "Digital Forensics",
    },
    {
      title: "Fortinet NSE-1",
      issuer: "Fortinet Network Security Expert",
      category: "Network & Perimeter Security",
    },
    {
      title: "Cisco Cyber Security Essentials",
      issuer: "Cisco Networking Academy",
      category: "Cyber Security Fundamentals",
    },
    {
      title: "Cisco NDG LINUX Series",
      issuer: "Cisco / Network Defense Group",
      category: "Operating System Hardening",
    },
    {
      title: "Cyber Security Engineer Internship",
      issuer: "Virtually Testing Foundation",
      category: "Engineering Internship",
    },
    {
      title: "Cyber Security & Digital Forensics Internship",
      issuer: "Cyber Secured India",
      category: "Forensics Internship",
    },
    {
      title: "GURUGRAM Police Internship",
      issuer: "Haryana Police India",
      category: "Law Enforcement Internship",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative bg-transparent overflow-hidden cyber-grid border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-mono">
            <Award className="w-3.5 h-3.5 text-red-400" />
            <span>CREDENTIAL VERIFICATION & ACCREDITATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Certifications & <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 bg-clip-text text-transparent glow-text-red">Credentials</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Verified industry credentials across offensive penetration testing, digital forensics investigations, SIEM architecture, and AI threat modeling.
          </p>
        </div>

        {/* Certifications Cards Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {CERTS.map((cert, idx) => (
            <div
              key={idx}
              onClick={() => setActiveCert(cert)}
              className="glass-panel-interactive p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4 cursor-pointer group shadow-[0_0_20px_rgba(255,30,68,0.06)]"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,30,68,0.4)] transition-all">
                    <FileBadge className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-red-400 bg-red-950/40 px-2.5 py-0.5 rounded-full border border-red-500/20">
                    SEC-CERT-0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-red-300 transition-colors leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs text-zinc-400 font-mono">
                  Issuer: {cert.issuer}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-500">{cert.category}</span>
                <span className="text-red-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                  Inspect <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* External Certificate Link Action */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowExternalNotice(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-red-950/60 hover:bg-red-900/60 text-red-300 border border-red-500/40 font-mono text-xs shadow-[0_0_20px_rgba(255,30,68,0.2)] hover:shadow-[0_0_30px_rgba(255,30,68,0.4)] transition-all cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-red-400" />
            <span>Click here - Link to additional security credentials repository</span>
          </button>
        </div>

        {/* Modal: Cert Details */}
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg p-6 sm:p-8 bg-[#0f1017] border border-red-500/40 rounded-3xl shadow-[0_0_60px_rgba(255,30,68,0.3)] text-gray-100 text-left">
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1.5 rounded-xl bg-white/5 hover:bg-red-950/60 border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-3.5 rounded-2xl bg-red-950/60 border border-red-500/40 text-red-400">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest">
                    VERIFIED ACCREDITATION
                  </span>
                  <h3 className="text-xl font-bold text-white">{activeCert.title}</h3>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-xs text-zinc-300 space-y-2.5 mb-6">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-zinc-500">ISSUING AUTHORITY</span>
                  <span className="text-white font-bold">{activeCert.issuer}</span>
                </div>
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-zinc-500">DOMAIN CATEGORY</span>
                  <span className="text-red-400 font-bold">{activeCert.category}</span>
                </div>
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-zinc-500">STATUS</span>
                  <span className="text-emerald-400 font-bold">Active & Verified</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveCert(null)}
                  className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close Accreditation
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: External Link Notice */}
        {showExternalNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-md p-6 bg-[#0f1017] border border-red-500/40 rounded-3xl shadow-[0_0_50px_rgba(255,30,68,0.3)] text-gray-100 text-left">
              <button
                onClick={() => setShowExternalNotice(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-xl bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/30 text-red-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">External Credentials Repository</h3>
                  <p className="text-xs text-zinc-400 font-mono">Ajay Kumar Security Portfolio</p>
                </div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                All external certification badges and institutional credential links can be updated directly with your public Credly, LinkedIn, or Google Drive certificate folder URL.
              </p>

              <button
                onClick={() => setShowExternalNotice(false)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold text-xs cursor-pointer shadow-[0_0_15px_rgba(255,30,68,0.4)]"
              >
                Got It
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
