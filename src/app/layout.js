import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport = {
  themeColor: "#ff1e44",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "AJAY KUMAR | Cyber Security Engineer Portfolio",
  description:
    "Portfolio of Ajay Kumar, Cyber Security Engineer with 3+ years of experience in VAPT, Security Audits, Digital Forensics, Incident Response, Security Operations, Offensive Security, and AI/LLM Security.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "Ajay Kumar",
    "Cyber Security Engineer",
    "VAPT",
    "Digital Forensics",
    "Incident Response",
    "Security Operations",
    "Offensive Security",
    "AI Security",
    "LLM Security",
  ],
  authors: [{ name: "Ajay Kumar" }],
  openGraph: {
    title: "AJAY KUMAR | Cyber Security Engineer Portfolio",
    description:
      "Cyber Security Engineer with 3+ years of experience in VAPT, Security Audits, Digital Forensics, Incident Response, and AI/LLM Security.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${jakarta.variable} antialiased bg-[#07070a] text-zinc-100 selection:bg-red-500/30 selection:text-red-200`}>
        {children}
      </body>
    </html>
  );
}