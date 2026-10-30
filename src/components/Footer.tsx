import React, { useState } from 'react';
import { Shield, Heart, Sparkles, BookOpen, Mail, Copy, Check } from 'lucide-react';

interface FooterProps {
  onOpenHowIMadeThis: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHowIMadeThis }) => {
  const [copied, setCopied] = useState(false);
  const email = 'junaidk7506@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#241F1A] text-[#FAF7F2] pt-14 pb-12 border-t border-[#3B332B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Mission */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#2E5642] flex items-center justify-center text-[#A3C9A8]">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-[#FAF7F2]">
                Safe<span className="text-[#C65337]">Sprout</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A89D8F] leading-relaxed max-w-sm">
              Empowering kids to explore the digital universe with confidence, curiosity, and kindness, while giving parents actionable tools for open communication.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenHowIMadeThis}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#332B24] hover:bg-[#423930] text-[#D4C7B8] text-xs font-semibold border border-[#4D4238] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#C65337]" />
                <span>How This Website Was Made (Explainer Guide)</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A89D8F]">
              Pillars & Activities
            </h4>
            <ul className="space-y-2 text-xs text-[#D4C7B8]">
              <li>
                <a href="#rules" className="hover:text-white transition-colors">4 Golden Rules of the Web</a>
              </li>
              <li>
                <a href="#game" className="hover:text-white transition-colors">"What Would You Do?" Challenge</a>
              </li>
              <li>
                <a href="#sorter" className="hover:text-white transition-colors">Safe to Share vs Secret Vault</a>
              </li>
              <li>
                <a href="#agreement" className="hover:text-white transition-colors">Family Agreement Pact Builder</a>
              </li>
              <li>
                <a href="#parents" className="hover:text-white transition-colors">Parents & Educators Playbook</a>
              </li>
              <li>
                <a href="#help" className="hover:text-white transition-colors">Emergency & Hotlines</a>
              </li>
            </ul>
          </div>

          {/* Contact & Creator Box */}
          <div className="md:col-span-5 p-5 rounded-2xl bg-[#2D2620] border border-[#3D342C] space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-[#A3C9A8] uppercase tracking-wider block">
                Creator & Contact
              </span>
              <span className="text-[10px] bg-[#3E342B] text-[#D4C7B8] px-2 py-0.5 rounded font-mono">
                Direct Inquiries
              </span>
            </div>

            <p className="text-xs text-[#D4C7B8] leading-relaxed">
              Have questions, feedback, or would like to use this project for your school or community? Get in touch directly:
            </p>

            {/* Email card with direct mailto and copy button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#241F1A] hover:bg-[#1E1A16] border border-[#4A3F35] text-[#FAF7F2] text-xs font-semibold transition-all group flex-1"
              >
                <Mail className="w-4 h-4 text-[#C65337] group-hover:scale-110 transition-transform" />
                <span className="truncate">{email}</span>
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#3B3229] hover:bg-[#4A3F35] text-xs font-medium text-[#FAF7F2] transition-colors shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#A3C9A8]" />
                    <span className="text-[#A3C9A8] font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#A89D8F]" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-[#8C8072] italic">
              "Building a kinder, safer digital neighborhood for the next generation."
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#383028] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8072]">
          <p>
            © {new Date().getFullYear()} SafeSprout • Developed by Junaid (<a href={`mailto:${email}`} className="text-[#A3C9A8] hover:underline">{email}</a>).
          </p>
          <div className="flex items-center gap-2">
            <span>Clean non-blue design palette</span>
            <span>•</span>
            <span>Zero cookies / tracking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
