import React, { useState } from 'react';
import { Shield, Sparkles, BookOpen, Menu, X, Users, Gamepad2, FileText, PhoneCall, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onOpenHowIMadeThis: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHowIMadeThis, activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'rules', label: '4 Golden Rules', icon: Shield },
    { id: 'game', label: 'Safety Simulator', icon: Gamepad2 },
    { id: 'sorter', label: 'Privacy Sorter', icon: Sparkles },
    { id: 'agreement', label: 'Family Agreement', icon: FileText },
    { id: 'parents', label: 'Parent Guide', icon: Users },
    { id: 'help', label: 'Get Help', icon: PhoneCall },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD5] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <div 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('home');
          }}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-11 h-11 rounded-xl bg-[#2E5642] flex items-center justify-center text-[#FAF7F2] shadow-sm group-hover:bg-[#254636] transition-colors">
            <Shield className="w-6 h-6 text-[#A3C9A8]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-xl tracking-tight text-[#2B2620]">
                Safe<span className="text-[#C65337]">Sprout</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#E4EDE6] text-[#2E5642]">
                Kids & Families
              </span>
            </div>
            <p className="text-xs text-[#7A6F62] hidden sm:block">Digital safety made friendly, clear & safe</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#2E5642] text-[#FAF7F2] shadow-xs'
                    : 'text-[#4A4237] hover:text-[#2B2620] hover:bg-[#EFE8DE]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#FAF7F2]' : 'text-[#7A6F62]'}`} />
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Presentation Explainer Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenHowIMadeThis}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#C65337] hover:bg-[#B3452B] text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-98"
            title="Click to view talking points and how this project was designed"
          >
            <BookOpen className="w-4 h-4" />
            <span>How I Made This</span>
            <span className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] bg-white/20 rounded font-normal">
              Explainer
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#4A4237] hover:bg-[#EFE8DE] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD5] px-4 pt-2 pb-5 shadow-lg space-y-1">
          <p className="text-xs font-bold text-[#7A6F62] uppercase tracking-wider px-3 py-1">Quick Navigation</p>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#2E5642] text-[#FAF7F2]'
                    : 'text-[#4A4237] hover:bg-[#EFE8DE]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#A3C9A8]' : 'text-[#7A6F62]'}`} />
                {link.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#E8DFD5]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHowIMadeThis();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#C65337] text-white text-sm font-semibold"
            >
              <BookOpen className="w-4 h-4" />
              <span>How I Made This (Presentation Mode)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
