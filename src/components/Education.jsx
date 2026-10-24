"use client";

import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export default function Education() {
  const EDUCATION_LIST = [
    {
      degree: "M.Sc. Cyber Forensics & Information Security",
      institution: "University of Madras",
      location: "Chennai, India",
      period: "Jun 2021 - Apr 2023",
      level: "Master's Degree",
      highlights: [
        "Specialized in digital forensics investigations, malware analysis, network security architectures, and cryptography.",
        "Advanced academic research in information security frameworks, incident response protocols, and cyber law.",
      ],
    },
    {
      degree: "B.Com. Computer Application",
      institution: "Agurchand Manmull Jain College",
      location: "Meenambakkam, Chennai, India",
      period: "Jun 2018 - Apr 2021",
      level: "Bachelor's Degree",
      highlights: [
        "Foundational studies in computer applications, programming logic, data structures, and enterprise business technology.",
      ],
    },
  ];

  return (
    <section id="education" className="py-24 relative bg-transparent overflow-hidden cyber-grid border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5 text-red-400" />
            <span>ACADEMIC FOUNDATION & DEGREES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Academic <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 bg-clip-text text-transparent glow-text-red">Education</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Formal postgraduate and undergraduate degree qualifications in Cyber Forensics and Computer Applications.
          </p>
        </div>

        {/* Academic Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative space-y-6 hover:border-red-500/40 hover:bg-white/[0.03] transition-all duration-300 shadow-[0_0_30px_rgba(255,30,68,0.08)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{edu.degree}</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-mono">
                      {edu.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300 text-sm">
                    <BookOpen className="w-4 h-4 text-red-400" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <div className="space-y-1 sm:text-right font-mono text-xs">
                  <div className="flex items-center sm:justify-end gap-1.5 text-red-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5 text-zinc-500 text-[11px]">
                    <MapPin className="w-3 h-3" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Academic Focus & Key Takeaways:
                </div>
                <ul className="space-y-2">
                  {edu.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="text-red-400 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
