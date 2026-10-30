import React, { useState } from 'react';
import { Users, MessageSquareQuote, CheckSquare, Sparkles, ChevronRight, ShieldAlert, Heart } from 'lucide-react';
import { AGE_GUIDES } from '../data/safetyContent';

export const ParentGuide: React.FC = () => {
  const [selectedAgeIndex, setSelectedAgeIndex] = useState(1); // default to 9-12

  const currentAge = AGE_GUIDES[selectedAgeIndex];

  const deviceTips = [
    {
      title: 'Enable Google SafeSearch & YouTube Restricted Mode',
      desc: 'Filters out explicit images and mature videos from regular search results on home browsers.'
    },
    {
      title: 'Lock In-App Purchases with a Password/Biometrics',
      desc: 'Prevents accidental $99 game coin buys by requiring adult authorization for any payment.'
    },
    {
      title: 'Designate a Central "Charging Station"',
      desc: 'Keep devices charging overnight in the kitchen or hallway to prevent late-night sleep disruption.'
    },
    {
      title: 'Audit In-Game Privacy (Roblox, Minecraft, Fortnite)',
      desc: 'Change default settings so only approved friends can send private whispers or trade requests.'
    }
  ];

  return (
    <section id="parents" className="py-14 sm:py-18 bg-[#FFFFFF] border-y border-[#E8DFD5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-[#2E5642] bg-[#E7EFE9] px-3 py-1 rounded-full border border-[#C5DBCB]">
            Parents & Educators Playbook
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#241F1A] tracking-tight">
            Mentorship Over Surveillance
          </h2>
          <p className="text-sm sm:text-base text-[#61574C]">
            Spying apps break trust. Honest conversations build lifelong digital resilience. Here’s age-calibrated advice to help your kids navigate the web safely.
          </p>
        </div>

        {/* Age Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD1] gap-1">
            {AGE_GUIDES.map((guide, idx) => (
              <button
                key={guide.ageGroup}
                onClick={() => setSelectedAgeIndex(idx)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedAgeIndex === idx
                    ? 'bg-[#2E5642] text-white shadow-xs'
                    : 'text-[#665D52] hover:text-[#241F1A] hover:bg-[#EFE8DE]'
                }`}
              >
                {guide.ageGroup}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Age Group Card */}
        <div className="bg-[#FAF7F2] border-2 border-[#E5DDD1] rounded-3xl p-6 sm:p-8 mb-10 shadow-xs">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C65337]">
                  Target Development Stage
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#E4EDE6] text-[#2E5642]">
                  {currentAge.ageGroup}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#241F1A]">
                {currentAge.subtitle}
              </h3>
              <p className="text-sm text-[#554C42] mt-1 font-medium">
                {currentAge.coreFocus}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Key Risks */}
              <div className="bg-white p-5 rounded-2xl border border-[#E5DDD1] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C65337]">
                  <ShieldAlert className="w-4 h-4 text-[#C65337]" />
                  <span>Main Vulnerabilities To Watch For</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#4D453A]">
                  {currentAge.keyRisks.map((risk, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C65337] mt-2 shrink-0" />
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Action Items */}
              <div className="bg-white p-5 rounded-2xl border border-[#E5DDD1] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E5642]">
                  <CheckSquare className="w-4 h-4 text-[#2E5642]" />
                  <span>Practical House Habits</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#4D453A]">
                  {currentAge.actionItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E5642] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Conversation Starter Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FEF6E9] border border-[#F4DCB4] flex items-start gap-3">
              <MessageSquareQuote className="w-6 h-6 text-[#D9822B] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A510E] block">
                  Tonight's Dinnertime Conversation Starter:
                </span>
                <p className="text-sm sm:text-base font-bold text-[#4D2E07] mt-1 italic">
                  {currentAge.conversationStarter}
                </p>
                <p className="text-[11px] text-[#7A5016] mt-1">
                  Tip: Listen without jumping to take their device away. Reassure them that they can ask for help anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Practical Device Habits */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#241F1A]">
            Quick Technical Checklist (5-Minute Fixes)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deviceTips.map((tip, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD1] flex items-start gap-3">
                <span className="w-6 h-6 rounded-lg bg-[#2E5642] text-white flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#241F1A]">{tip.title}</h4>
                  <p className="text-xs text-[#665D52] mt-0.5 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
