import React from 'react';
import { ShieldCheck, ArrowRight, Heart, Sparkles, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';

interface HeroProps {
  onStartGame: () => void;
  onOpenAgreement: () => void;
  onOpenHowIMadeThis: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartGame, onOpenAgreement, onOpenHowIMadeThis }) => {
  return (
    <section className="relative pt-8 pb-14 md:pt-14 md:pb-20 overflow-hidden">
      {/* Soft warm background accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#E8E1D3]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#F5E8D8]/60 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7EFE9] border border-[#C5DBCB] text-[#2E5642] text-xs font-semibold mb-6">
          <ShieldCheck className="w-4 h-4 text-[#2E5642]" />
          <span>Interactive Digital Safety Handbook for Kids & Parents</span>
        </div>

        {/* Main Title & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#241F1A] tracking-tight leading-[1.15]">
              Growing Up <span className="text-[#2E5642] underline decoration-[#A3C9A8] decoration-wavy decoration-2">Safe & Smart</span> in a Connected World.
            </h1>

            <p className="text-base sm:text-lg text-[#5A5146] leading-relaxed max-w-xl">
              The internet is a wonderful playground to learn, play, and create—but every playground needs rules. 
              SafeSprout teaches children real digital instincts through interactive challenges, without scary lectures or tech jargon.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onStartGame}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2E5642] hover:bg-[#254636] text-[#FAF7F2] font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all active:scale-98"
              >
                <span>Play "What Would You Do?"</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenAgreement}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAF7F2] hover:bg-[#EFE8DE] text-[#2B2620] border-2 border-[#DCD3C7] font-semibold text-sm sm:text-base transition-all active:scale-98"
              >
                <span>Create Family Agreement</span>
              </button>

              <button
                onClick={onOpenHowIMadeThis}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#FDF1ED] hover:bg-[#FBE4DD] text-[#C65337] border border-[#F2D2C7] font-semibold text-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#C65337]" />
                <span>How This Was Made</span>
              </button>
            </div>

            {/* Micro-guarantees */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#6B6154] font-medium border-t border-[#E8DFD5]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E5642]" />
                <span>Zero Ads or Tracking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2E5642]" />
                <span>Age-Appropriate Scenarios</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#2E5642]" />
                <span>Printable Family Contract</span>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Teaser Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] border-2 border-[#E5DDD1] rounded-2xl p-6 shadow-sm relative overflow-hidden space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#EFE8DE]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C65337]" />
                  <div className="w-3 h-3 rounded-full bg-[#D9822B]" />
                  <div className="w-3 h-3 rounded-full bg-[#2E5642]" />
                  <span className="text-xs font-bold text-[#7A6F62] ml-1">Kid Shield Snapshot</span>
                </div>
                <span className="text-xs bg-[#E7EFE9] text-[#2E5642] font-semibold px-2 py-0.5 rounded">
                  4 Core Pillars
                </span>
              </div>

              {/* 4 Quick Pillars mini list */}
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EFE8DE] flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#2E5642] text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2B2620]">The Secret Vault</h4>
                    <p className="text-[11px] text-[#6E645A]">Never give out real names, address, or passwords.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EFE8DE] flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#C65337] text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2B2620]">The Kindness Shield</h4>
                    <p className="text-[11px] text-[#6E645A]">No bullying or sharing secret embarrassing photos.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EFE8DE] flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#D9822B] text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2B2620]">The Red Flag Radar</h4>
                    <p className="text-[11px] text-[#6E645A]">Spot fake "free game money" scams & stranger tricks.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EFE8DE] flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#5E4E75] text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2B2620]">The No-Trouble Promise</h4>
                    <p className="text-[11px] text-[#6E645A]">Ask for help anytime. You will never be punished for an accident.</p>
                  </div>
                </div>
              </div>

              {/* Little reassuring quote */}
              <div className="bg-[#F8F5EE] p-3 rounded-xl border border-[#E8DFD5] text-center">
                <p className="text-xs font-medium text-[#4D453A] italic">
                  "Safety isn't about being terrified of technology; it's about knowing how to navigate with confidence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
