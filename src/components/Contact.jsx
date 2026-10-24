"use client";

import {
  Mail,
  MessageSquare,
  ExternalLink,
  ShieldCheck,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

// Inline SVG components for brand logos
function LinkedInIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  );
}

export default function Contact() {
  const CONTACT_LINKS = {
    email: "mailto:ajay.kumar@example.com",
    whatsapp: "https://wa.me/919000000000",
    linkedin: "https://www.linkedin.com/in/ajay-kumar-cyber",
    github: "https://github.com/ajaykumar-cyber",
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
      value: "https://in.linkedin.com/in/ajay-kumar-9539b0191",
      href: CONTACT_LINKS.linkedin,
      icon: LinkedInIcon,
      actionText: "Connect on LinkedIn",
      isExternal: true,
    },
    {
      id: "github",
      title: "GitHub",
      subtitle: "Security tools, research & code repositories",
      value: "github.com/ajaykumar-cyber",
      href: CONTACT_LINKS.github,
      icon: GitHubIcon,
      actionText: "View GitHub Profile",
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
            Direct communication links for Email, WhatsApp, LinkedIn, and GitHub. Click any card to connect immediately.
          </span>
        </div>

        {/* Direct Action Cards Grid (NO forms, NO APIs, 100% direct links) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
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
                    <p className="text-xs text-zinc-400 mt-1 leading-normal">
                      {method.subtitle}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-red-300 truncate">
                    {method.value}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400 font-medium">{method.actionText}</span>
                  <span className="text-red-400 font-bold">&rarr;</span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
