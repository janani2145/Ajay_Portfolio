"use client";

import { Mail, MessageSquare, ArrowUpRight, Terminal } from "lucide-react";

function LinkedInIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Contact() {
  const CONTACT_LINKS = {
    email: "mailto:security.ajaykumar@gmail.com",
    whatsapp: "https://wa.me/916379215356",
    linkedin: "https://in.linkedin.com/in/ajay-kumar-9539b0191",
  };

  const CONTACT_METHODS = [
    {
      id: "email",
      title: "Email",
      subtitle: "Send a direct message via email client",
      value: "security.ajaykumar@gmail.com",
      href: CONTACT_LINKS.email,
      icon: Mail,
      actionText: "Send Email",
      isExternal: false,
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      subtitle: "Instant messaging & quick discussion",
      value: "+91 6379215356",
      href: CONTACT_LINKS.whatsapp,
      icon: MessageSquare,
      actionText: "Chat on WhatsApp",
      isExternal: true,
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      subtitle: "Professional network & career updates",
      value: "linkedin.com/in/ajay-kumar-9539b0191",
      href: CONTACT_LINKS.linkedin,
      icon: LinkedInIcon,
      actionText: "Connect on LinkedIn",
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="py-24 relative bg-transparent overflow-hidden cyber-grid border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-300 text-xs font-mono">
            <Mail className="w-3.5 h-3.5 text-red-400" />
            <span>DIRECT CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get In <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-300 bg-clip-text text-transparent glow-text-red">Touch</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Select your preferred communication channel to directly initiate contact with Ajay Kumar for security engagements, VAPT inquiries, or AI threat consultation.
          </p>
        </div>

        {/* Tactical Info Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-2xl glass-panel-red border border-red-500/30 text-center flex items-center justify-center gap-3">
          <Terminal className="w-5 h-5 text-red-400 shrink-0" />
          <span className="text-xs text-zinc-300 font-mono">
            Direct communication links for Email, WhatsApp, and LinkedIn. Click any card to connect immediately.
          </span>
        </div>

        {/* Direct Action Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {CONTACT_METHODS.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.id}
                href={method.href}
                target={method.isExternal ? "_blank" : undefined}
                rel={method.isExternal ? "noopener noreferrer" : undefined}
                className="glass-panel-interactive p-7 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6 group hover:border-red-500/50 hover:bg-white/[0.03] cursor-pointer shadow-[0_0_20px_rgba(255,30,68,0.06)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3.5 rounded-2xl bg-red-950/60 border border-red-500/30 text-red-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(255,30,68,0.4)] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-red-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                      {method.subtitle}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-red-300 truncate">
                    {method.value}
                  </div>
                  
                  <div className="pt-1 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                    <span>{method.actionText}</span>
                    <span className="text-red-400 font-bold">&rarr;</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
