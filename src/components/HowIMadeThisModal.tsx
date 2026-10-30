import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, BookOpen, Palette, Code, CheckCircle2, Lightbulb, HelpCircle } from 'lucide-react';
import { HOW_I_MADE_THIS_INFO } from '../data/safetyContent';

interface HowIMadeThisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HowIMadeThisModal: React.FC<HowIMadeThisModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'pitch' | 'design' | 'tech' | 'faq'>('pitch');

  if (!isOpen) return null;

  const fullPresentationScript = `SafeSprout - Project Presentation & Architecture

Elevator Pitch:
${HOW_I_MADE_THIS_INFO.elevatorPitch}

Key Project Pillars:
1. The Problem: Most children encounter tablets and games early, but safety advice is either boring walls of corporate text or scary warnings that make kids hide mistakes.
2. Design Decision: We deliberately avoided the cold corporate blue-and-white IT style. Instead, we used a warm, organic palette (Forest Sage Green #2E5642 for protection and growth, Terracotta #C65337 for friendly alert states, and warm Oatmeal Paper #FAF7F2 for high readability).
3. Gamified Education: Built a "What Would You Do?" interactive scenario simulator with instant feedback, plus a "Safe to Share or Secret Vault" privacy sorter.
4. Tangible Real-World Utility: Includes a Family Digital Agreement generator that households can customize, sign, and print out for their refrigerator.
5. Technical Implementation: React 19, TypeScript for type safety, Tailwind CSS for responsive styling, and clean modular component architecture.

Creator Contact:
Junaid (junaidk7506@gmail.com)`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPresentationScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF7F2] border-2 border-[#E5DDD1] rounded-3xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-white border-b border-[#E8DFD5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C65337] text-white flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#241F1A]">
                  How I Made SafeSprout
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FDF1ED] text-[#C65337]">
                  Explainer & Talking Points
                </span>
              </div>
              <p className="text-xs text-[#7A6F62]">
                Your ready-to-use cheat sheet for explaining this project to anyone
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#DCD3C7] text-[#2B2620] hover:bg-[#EFE8DE] text-xs font-semibold transition-colors"
              title="Copy presentation notes to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#2E5642]" /> : <Copy className="w-3.5 h-3.5 text-[#7A6F62]" />}
              <span>{copied ? 'Copied!' : 'Copy Script'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#7A6F62] hover:bg-[#EFE8DE] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#E8DFD5] bg-[#FFFFFF] px-6 gap-2 sm:gap-4 overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setActiveTab('pitch')}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'pitch'
                ? 'border-[#2E5642] text-[#2E5642]'
                : 'border-transparent text-[#7A6F62] hover:text-[#241F1A]'
            }`}
          >
            🎤 30-Second Pitch
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'design'
                ? 'border-[#2E5642] text-[#2E5642]'
                : 'border-transparent text-[#7A6F62] hover:text-[#241F1A]'
            }`}
          >
            🎨 Color & Anti-AI Design
          </button>
          <button
            onClick={() => setActiveTab('tech')}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'tech'
                ? 'border-[#2E5642] text-[#2E5642]'
                : 'border-transparent text-[#7A6F62] hover:text-[#241F1A]'
            }`}
          >
            ⚙️ Tech & Features
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`py-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'faq'
                ? 'border-[#2E5642] text-[#2E5642]'
                : 'border-transparent text-[#7A6F62] hover:text-[#241F1A]'
            }`}
          >
            💡 Viva & Questions Q&A
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#3E372E] text-sm">
          {activeTab === 'pitch' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#E7EFE9] border border-[#C3D9C9] text-[#1E3B2C] space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider block text-[#2E5642]">
                  The 30-Second Verbal Script (Say this out loud!)
                </span>
                <p className="text-sm sm:text-base font-medium leading-relaxed italic">
                  "{HOW_I_MADE_THIS_INFO.elevatorPitch}"
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B6154]">
                  Key Points To Highlight In A Presentation:
                </h4>
                <div className="space-y-2.5">
                  {HOW_I_MADE_THIS_INFO.presentationBullets.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E5DDD1] space-y-1">
                      <span className="text-xs font-bold text-[#241F1A] block">{item.title}</span>
                      <p className="text-xs text-[#554C42] leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'design' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#FEF6E9] border border-[#F4DCB4] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8A510E] uppercase tracking-wider">
                  <Palette className="w-4 h-4 text-[#B86E18]" />
                  <span>Why No Blue & White? (The Color Philosophy)</span>
                </div>
                <p className="text-xs text-[#5C3A11] leading-relaxed">
                  Most generic tech templates use cold navy blue and sterile stark white, which feels clinical, intimidating, and robotic. For a child safety application, colors need to evoke <strong>warmth, protection, and calm grounding</strong>.
                </p>
              </div>

              {/* Color Swatches Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white border border-[#E5DDD1] space-y-2">
                  <div className="w-full h-12 rounded-lg bg-[#2E5642] flex items-center justify-center text-white text-xs font-bold">
                    #2E5642
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#241F1A]">Forest Sage Green</h5>
                    <p className="text-[11px] text-[#7A6F62]">Represents safety, nature, growth, and reassuring security.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E5DDD1] space-y-2">
                  <div className="w-full h-12 rounded-lg bg-[#C65337] flex items-center justify-center text-white text-xs font-bold">
                    #C65337
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#241F1A]">Terracotta Rust</h5>
                    <p className="text-[11px] text-[#7A6F62]">Friendly alert color that signals "Stop & Think" without causing terror.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E5DDD1] space-y-2">
                  <div className="w-full h-12 rounded-lg bg-[#FAF7F2] border border-[#DCD3C7] flex items-center justify-center text-[#241F1A] text-xs font-bold">
                    #FAF7F2
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#241F1A]">Warm Oatmeal Paper</h5>
                    <p className="text-[11px] text-[#7A6F62]">Soft reading background that feels like an illustrated storybook.</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5DDD1] space-y-1">
                <h5 className="text-xs font-bold text-[#241F1A]">Zero "AI Slop" Discipline:</h5>
                <p className="text-xs text-[#554C42] leading-relaxed">
                  No generic floating neon bubbles, no purple gradient buttons, and no robotic chatbot widgets. Everything is designed around tangible human needs: clear cards, readable type, and practical tools.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'tech' && (
            <div className="space-y-4">
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B6154]">
                  How the Web App Works Behind the Scenes:
                </h4>

                <div className="p-4 rounded-2xl bg-white border border-[#E5DDD1] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2E5642]">
                    <Code className="w-4 h-4" />
                    <span>Component Architecture</span>
                  </div>
                  <ul className="space-y-2 text-xs text-[#4A4237]">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#2E5642]">•</span>
                      <span><strong>State Management:</strong> React hooks (<code className="bg-[#FAF7F2] px-1 py-0.5 rounded text-[11px]">useState</code>) track real-time quiz answers, scoring logic, and custom family agreement rules dynamically.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#2E5642]">•</span>
                      <span><strong>Interactive Simulator:</strong> Evaluates child responses, provides contextual reasoning, calculates points, and dynamically renders personalized certificates.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#2E5642]">•</span>
                      <span><strong>Family Pact Generator:</strong> Allows parents and kids to add custom rules, type signatures, and triggers native browser print styles (<code className="bg-[#FAF7F2] px-1 py-0.5 rounded text-[11px]">@media print</code>).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-[#2E5642]">•</span>
                      <span><strong>Type Safety:</strong> 100% written in TypeScript with explicit interfaces (<code className="bg-[#FAF7F2] px-1 py-0.5 rounded text-[11px]">SafetyRule, Scenario, AgreementRule</code>).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B6154]">
                Common Questions You Might Be Asked:
              </h4>

              {HOW_I_MADE_THIS_INFO.quickFaq.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#E5DDD1] space-y-1.5">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-extrabold text-[#C65337]">Q:</span>
                    <h5 className="text-xs sm:text-sm font-bold text-[#241F1A]">{item.q}</h5>
                  </div>
                  <p className="text-xs text-[#554C42] leading-relaxed pl-5">{item.a}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-[#E8DFD5] flex items-center justify-between">
          <span className="text-xs text-[#7A6F62]">
            Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-[#FAF7F2] border border-[#DCD3C7] text-[10px] font-mono">ESC</kbd> or click Close to return
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#2E5642] hover:bg-[#254636] text-white text-xs font-bold transition-colors"
          >
            Got It! Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
