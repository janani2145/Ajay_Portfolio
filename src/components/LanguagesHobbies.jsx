"use client";

import { Globe2, Music, Radio, Laptop, Sparkles } from "lucide-react";

export default function LanguagesHobbies() {
  const LANGUAGES = [
    { name: "English", proficiency: "Professional / Technical Proficiency", code: "ENG" },
    { name: "Hindi", proficiency: "Native / Fluent", code: "HIN" },
    { name: "Tamil", proficiency: "Conversational / Native", code: "TAM" },
  ];

  const HOBBIES = [
    { title: "Surfing Internet", desc: "Security threat research, OSINT, and emerging tech exploration", icon: Laptop },
    { title: "Playing Guitar", desc: "Acoustic & electric guitar improvisation and music composition", icon: Music },
    { title: "Listening to Music", desc: "Exploring diverse musical genres, ambient soundscapes, and synthwave", icon: Radio },
    { title: "Riding RC Car", desc: "Remote control vehicle tuning, customization, and off-road driving", icon: Sparkles },
  ];

  return (
    <section className="py-20 relative bg-transparent overflow-hidden cyber-grid border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          
          {/* Languages Column */}
          <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-[0_0_20px_rgba(255,30,68,0.06)]">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-red-950/60 border border-red-500/30 text-red-400">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Languages</h3>
                <p className="text-xs text-zinc-400 font-mono">Multilingual Communication Capabilities</p>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name}
                  className="p-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-between hover:border-red-500/30 transition-colors"
                >
                  <div className="space-y-0.5">
                    <h4 className="text-base font-bold text-white">{lang.name}</h4>
                    <p className="text-xs text-zinc-400">{lang.proficiency}</p>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-red-950/60 border border-red-500/30 text-red-300 font-mono text-xs font-semibold">
                    {lang.code}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies Column */}
          <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-white/10 space-y-6 shadow-[0_0_20px_rgba(255,30,68,0.06)]">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-red-950/60 border border-red-500/30 text-red-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Personal Hobbies</h3>
                <p className="text-xs text-zinc-400 font-mono">Interests & Creative Pursuits</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {HOBBIES.map((hobby) => {
                const Icon = hobby.icon;
                return (
                  <div
                    key={hobby.title}
                    className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2 hover:border-red-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-red-400">
                      <Icon className="w-4 h-4" />
                      <h4 className="text-sm font-bold text-white">{hobby.title}</h4>
                    </div>
                    <p className="text-xs text-zinc-400 leading-normal">{hobby.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
