import React, { useState } from 'react';
import { LockKeyhole, HeartHandshake, ShieldAlert, Sparkles, Check, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { GOLDEN_RULES } from '../data/safetyContent';

export const GoldenRules: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('rule-vault');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LockKeyhole':
        return <LockKeyhole className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="rules" className="py-14 sm:py-18 bg-[#FFFFFF] border-y border-[#E8DFD5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-[#C65337] bg-[#FDF1ED] px-3 py-1 rounded-full border border-[#F2D2C7]">
            Core Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#241F1A] tracking-tight">
            The 4 Golden Rules of the Internet
          </h2>
          <p className="text-sm sm:text-base text-[#61574C]">
            Simple, memorable guidelines that every child can keep in their mental pocket before clicking any link or sending a message.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GOLDEN_RULES.map((rule) => {
            const isExpanded = expandedId === rule.id;
            return (
              <div
                key={rule.id}
                className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'border-[#2E5642] bg-[#FAF7F2] shadow-sm'
                    : 'border-[#E5DDD1] bg-white hover:border-[#C3D9C9]'
                }`}
              >
                {/* Card Header clickable */}
                <div
                  onClick={() => setExpandedId(isExpanded ? '' : rule.id)}
                  className="p-5 sm:p-6 cursor-pointer flex items-start justify-between gap-4 select-none"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2E5642] text-white flex items-center justify-center shrink-0 shadow-xs">
                      {getIcon(rule.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-xs font-extrabold text-[#7A6F62]">
                          RULE {rule.number}
                        </span>
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded border ${rule.badgeColor}`}>
                          {rule.badgeText}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#241F1A]">
                        {rule.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-[#7A6F62] mt-0.5">
                        {rule.tagline}
                      </p>
                    </div>
                  </div>

                  <button
                    className="p-2 rounded-lg bg-[#EFE8DE] text-[#4A4237] hover:bg-[#E5DDD1] transition-colors shrink-0 mt-1"
                    aria-label={isExpanded ? 'Collapse rule' : 'Expand rule'}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Always-visible summary */}
                <div className="px-5 sm:px-6 pb-4">
                  <p className="text-sm text-[#4D453A] leading-relaxed">
                    {rule.description}
                  </p>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#E8DFD5] bg-[#FFFFFF] space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#61574C] mb-2">
                        Real-World Examples To Remember:
                      </h4>
                      <ul className="space-y-2">
                        {rule.examples.map((eg, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#3E372E]">
                            <span className="w-4 h-4 rounded-full bg-[#E7EFE9] text-[#2E5642] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3" />
                            </span>
                            <span>{eg}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Kid Tip Callout Box */}
                    <div className="p-3.5 rounded-xl bg-[#FEF6E9] border border-[#F4DCB4] flex items-start gap-2.5">
                      <Lightbulb className="w-5 h-5 text-[#B86E18] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-[#8A510E] block">Kid Super Tip:</span>
                        <p className="text-xs text-[#5C3A11] mt-0.5 font-medium leading-relaxed">
                          {rule.kidTip}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 p-4 rounded-xl bg-[#FAF7F2] border border-[#E5DDD1] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-sm font-bold text-[#241F1A]">
              Want to see how well you know these rules in real life?
            </p>
            <p className="text-xs text-[#665D52]">
              Test your instincts in our interactive, real-situation simulator.
            </p>
          </div>
          <a
            href="#game"
            className="px-4 py-2 rounded-lg bg-[#2E5642] text-white text-xs sm:text-sm font-semibold hover:bg-[#254636] transition-colors shrink-0"
          >
            Jump to Simulator
          </a>
        </div>
      </div>
    </section>
  );
};
