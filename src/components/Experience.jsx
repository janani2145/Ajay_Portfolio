"use client";

import { useState } from "react";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ChevronRight, ShieldCheck, Terminal } from "lucide-react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("all");

  const EXPERIENCES = [
    {
      type: "fulltime",
      company: "Tevel Cyber Corps",
      location: "On-site",
      payroll: "Payroll managed by Stuvanta Tech LLP until Sep 2025",
      period: "Feb 2023 - Present",
      roles: [
        {
          title: "Cyber Security Engineer",
          note: "Promoted from Senior Cyber Security Analyst",
          date: "Oct 2025 - Present",
          badge: "Current Role",
          badgeColor: "bg-red-500/20 text-red-300 border-red-500/40",
          points: [
            "Lead and mentor a team of Cyber Security Analysts, overseeing task allocation, technical guidance, performance, and enterprise project delivery.",
            "Deliver end-to-end security engagements, including VAPT, Security Audits, Network Security Gap Assessments, and remediation planning for enterprise clients.",
            "Conduct digital forensics investigations, recover and analyze digital artifacts, and prepare forensic reports to support incident response and legal investigations.",
            "Develop offensive security use cases for Windows and Linux environments while delivering Cyber Security awareness and technical training for government and law enforcement agencies.",
            "Research and develop AI/LLM security use cases, focusing on prompt injection mitigation, AI red teaming, agent safety sandboxing, RAG security, and emerging threats.",
          ],
        },
        {
          title: "Senior Cyber Security Analyst",
          note: "Promoted from Cyber Security Analyst",
          date: "Feb 2023 - Sep 2025",
          badge: "Promoted",
          badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40",
          points: [
            "Delivered Web, Network, and System VAPT engagements, Security Audits, and Network Security Gap Assessments for enterprise clients.",
            "Performed SOC monitoring and threat detection using StellarCyber, CrowdStrike Falcon, Wazuh, Qualys, Proofpoint, Netskope, Cisco Umbrella, and other security platforms.",
            "Developed offensive security use cases and conducted digital forensics investigations supporting incident response and law enforcement.",
            "Researched IoT, OT, and LLM security while providing technical assistance for Cyber Security learning programs.",
          ],
        },
      ],
    },
  ];

  const INTERNSHIPS = [
    {
      type: "internship",
      company: "Virtually Testing Foundation",
      title: "Cyber Security Engineer Internship",
      location: "Remote",
      date: "May 2022 - Jun 2022",
      points: [
        "Hands-on training in penetration testing, MITRE ATT&CK tactical mapping, Splunk, digital forensics, and Cyber Security Best Practices.",
      ],
    },
    {
      type: "internship",
      company: "Cyber Secured India",
      title: "Cyber Security & Digital Forensics Internship",
      location: "Remote",
      date: "Jan 2022 - Mar 2022",
      points: [
        "Hands-on experience in digital forensics investigations and industry-standard forensic tools.",
      ],
    },
    {
      type: "internship",
      company: "Virtually Testing Foundation",
      title: "Penetration Testing Internship",
      location: "Remote",
      date: "Sep 2021 - Dec 2021",
      points: [
        "Web application penetration testing, vulnerability assessment, technical reporting, and practical lab exploits.",
      ],
    },
    {
      type: "internship",
      company: "Haryana Police India",
      title: "GURUGRAM Police Cyber Security Summer Internship",
      location: "Remote",
      date: "Jan 2021 - Jul 2021",
      points: [
        "Cyber Security laws, cybercrime awareness, law enforcement investigative practices, and mentorship sessions with Gurugram Police officers.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-transparent overflow-hidden cyber-grid">
      {/* Background ambient red glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5 text-red-400" />
            <span>CAREER TRAJECTORY & FIELD ROLES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Security <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 bg-clip-text text-transparent glow-text-red">Experience</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            3+ years of progressive security engineering leadership, enterprise VAPT, SOC threat operations, and forensic investigations.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-xs font-mono rounded-xl transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-red-500/20 text-red-300 border border-red-500/50 shadow-[0_0_15px_rgba(255,30,68,0.3)]"
                  : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white"
              }`}
            >
              All Roles ({EXPERIENCES.length * 2 + INTERNSHIPS.length})
            </button>
            <button
              onClick={() => setActiveTab("fulltime")}
              className={`px-4 py-2 text-xs font-mono rounded-xl transition-all cursor-pointer ${
                activeTab === "fulltime"
                  ? "bg-red-500/20 text-red-300 border border-red-500/50 shadow-[0_0_15px_rgba(255,30,68,0.3)]"
                  : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white"
              }`}
            >
              Full-Time Roles
            </button>
            <button
              onClick={() => setActiveTab("internship")}
              className={`px-4 py-2 text-xs font-mono rounded-xl transition-all cursor-pointer ${
                activeTab === "internship"
                  ? "bg-red-500/20 text-red-300 border border-red-500/50 shadow-[0_0_15px_rgba(255,30,68,0.3)]"
                  : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white"
              }`}
            >
              Internships ({INTERNSHIPS.length})
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="space-y-12 text-left">
          
          {/* Full-Time Roles */}
          {(activeTab === "all" || activeTab === "fulltime") && (
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-red-500/20 pb-3">
                <ShieldCheck className="w-5 h-5 text-red-400" />
                <h3 className="text-xl font-bold text-white font-mono tracking-wide">
                  ENTERPRISE ROLES & LEADERSHIP
                </h3>
              </div>

              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.company}
                  className="glass-panel p-6 sm:p-8 rounded-3xl border border-red-500/25 relative space-y-8 shadow-[0_0_30px_rgba(255,30,68,0.1)]"
                >
                  {/* Company Info Banner */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="text-2xl font-bold text-white">{exp.company}</h4>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-300 text-xs font-mono border border-white/10 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-red-400" />
                          {exp.location}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1 font-mono">{exp.payroll}</p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-red-400 bg-red-950/60 px-3.5 py-1.5 rounded-xl border border-red-500/30 w-fit">
                      <Calendar className="w-4 h-4 text-red-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Roles Inside Company */}
                  <div className="space-y-8">
                    {exp.roles.map((role) => (
                      <div
                        key={role.title}
                        className="relative pl-6 sm:pl-8 border-l-2 border-red-500/40 space-y-4"
                      >
                        {/* Timeline Node */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#07070a] border-2 border-red-500 flex items-center justify-center shadow-[0_0_8px_#ff1e44]" />

                        {/* Role Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-3 flex-wrap">
                              <h5 className="text-lg font-bold text-white">{role.title}</h5>
                              <span
                                className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${role.badgeColor}`}
                              >
                                {role.badge}
                              </span>
                            </div>
                            <p className="text-xs text-red-400 font-mono mt-0.5">{role.note}</p>
                          </div>
                          <span className="text-xs font-mono text-zinc-400">{role.date}</span>
                        </div>

                        {/* Bullet Points */}
                        <ul className="space-y-2 pt-1">
                          {role.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                              <ChevronRight className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Internships */}
          {(activeTab === "all" || activeTab === "internship") && (
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-3 border-b border-red-500/20 pb-3">
                <Terminal className="w-5 h-5 text-red-400" />
                <h3 className="text-xl font-bold text-white font-mono tracking-wide">
                  SPECIALIZED INTERNSHIPS & LAB TRAINING
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {INTERNSHIPS.map((item, idx) => (
                  <div
                    key={idx}
                    className="glass-panel-interactive p-6 rounded-2xl border border-white/10 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-mono text-red-400">{item.company}</span>
                        <h4 className="text-base font-bold text-white mt-0.5">{item.title}</h4>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-400">
                        {item.date}
                      </span>
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <span className="text-red-400 font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
