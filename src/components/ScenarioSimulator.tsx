import React, { useState } from 'react';
import { Gamepad2, CheckCircle2, AlertCircle, Award, RotateCcw, ShieldCheck, ChevronRight, Sparkles, Printer } from 'lucide-react';
import { SCENARIOS } from '../data/safetyContent';
import { Scenario, ScenarioChoice } from '../types/safety';

export const ScenarioSimulator: React.FC = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answeredScenarios, setAnsweredScenarios] = useState<Record<string, { choice: ScenarioChoice; scoreEarned: number }>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [kidName, setKidName] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const scenario: Scenario = SCENARIOS[currentScenarioIndex];
  const currentAnswer = answeredScenarios[scenario.id];

  const handleSelectChoice = (choice: ScenarioChoice) => {
    if (currentAnswer) return; // already answered

    setSelectedChoiceId(choice.id);
    const newAnswers = {
      ...answeredScenarios,
      [scenario.id]: { choice, scoreEarned: choice.points }
    };
    setAnsweredScenarios(newAnswers);
    setScore(prev => prev + choice.points);
  };

  const handleNext = () => {
    setSelectedChoiceId(null);
    if (currentScenarioIndex < SCENARIOS.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentScenarioIndex(0);
    setSelectedChoiceId(null);
    setScore(0);
    setAnsweredScenarios({});
    setIsFinished(false);
    setShowCertificate(false);
  };

  const maxPoints = SCENARIOS.length * 10;
  const percentage = Math.round((score / maxPoints) * 100);

  const getRankBadge = () => {
    if (percentage >= 80) return { title: 'Master Digital Guardian', color: 'bg-[#E7EFE9] text-[#2E5642] border-[#A3C9A8]' };
    if (percentage >= 50) return { title: 'Junior Cyber Detective', color: 'bg-[#FEF6E9] text-[#B86E18] border-[#F4DCB4]' };
    return { title: 'Safety Sprout Explorer', color: 'bg-[#FDF1ED] text-[#C65337] border-[#F2D2C7]' };
  };

  return (
    <section id="game" className="py-14 sm:py-18 bg-[#FFFFFF] border-y border-[#E8DFD5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold tracking-wider uppercase text-[#C65337] bg-[#FDF1ED] px-3 py-1 rounded-full border border-[#F2D2C7]">
            Real-Life Simulation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#241F1A] tracking-tight">
            "What Would You Do?" Challenge
          </h2>
          <p className="text-sm sm:text-base text-[#61574C] max-w-xl mx-auto">
            These are real situations kids encounter on games and chat apps. Pick your reaction and see if you stay safe!
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-[#FAF7F2] border-2 border-[#E5DDD1] rounded-3xl p-6 sm:p-8 shadow-xs">
          {!isFinished ? (
            <div className="space-y-6">
              {/* Progress & Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E8DFD5]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7A6F62]">
                    Scenario {currentScenarioIndex + 1} of {SCENARIOS.length}
                  </span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#E5DDD1] text-[#4A4237]">
                    {scenario.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D9822B]" />
                  <span className="text-xs font-bold text-[#4A4237]">
                    Points: <strong className="text-[#2E5642] text-sm">{score}</strong> / {maxPoints}
                  </span>
                </div>
              </div>

              {/* Scenario Story */}
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#241F1A]">
                  {scenario.title}
                </h3>
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5DDD1] text-sm sm:text-base text-[#3A332A] leading-relaxed shadow-xs">
                  {scenario.situation}
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#6B6154] uppercase tracking-wider">
                  {scenario.prompt}
                </p>
              </div>

              {/* Choices */}
              <div className="space-y-3">
                {scenario.choices.map((choice, index) => {
                  const isSelected = selectedChoiceId === choice.id || currentAnswer?.choice.id === choice.id;
                  const isAnswered = !!currentAnswer;

                  let buttonStyle = 'bg-white border-[#E5DDD1] hover:border-[#2E5642] text-[#332D25]';
                  if (isAnswered) {
                    if (choice.isSafe) {
                      buttonStyle = 'bg-[#E7EFE9] border-[#2E5642] text-[#1E3B2C] font-semibold';
                    } else if (isSelected && !choice.isSafe) {
                      buttonStyle = 'bg-[#FDF1ED] border-[#C65337] text-[#7A2B19]';
                    } else {
                      buttonStyle = 'bg-[#F5F2EB] border-[#E8DFD5] text-[#8C8276] opacity-60';
                    }
                  }

                  return (
                    <button
                      key={choice.id}
                      onClick={() => handleSelectChoice(choice)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3.5 ${buttonStyle} ${
                        !isAnswered ? 'cursor-pointer active:scale-99' : 'cursor-default'
                      }`}
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#EFE8DE] text-[#4A4237] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-sm sm:text-base flex-1">
                        {choice.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation when answered */}
              {currentAnswer && (
                <div
                  className={`p-4 sm:p-5 rounded-2xl border flex items-start gap-3 transition-all ${
                    currentAnswer.choice.isSafe
                      ? 'bg-[#E7EFE9] border-[#A3C9A8] text-[#1C3829]'
                      : 'bg-[#FDF1ED] border-[#F2D2C7] text-[#7A2B19]'
                  }`}
                >
                  {currentAnswer.choice.isSafe ? (
                    <CheckCircle2 className="w-5 h-5 text-[#2E5642] shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-[#C65337] shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider block">
                      {currentAnswer.choice.isSafe ? 'Great Decision! (+10 pts)' : 'Uh-oh! Risk Alert (+0 pts)'}
                    </span>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed">
                      {currentAnswer.choice.feedback}
                    </p>
                    <div className="pt-1 text-[11px] font-bold text-[#554C42] border-t border-black/10">
                      Takeaway: {scenario.takeaway}
                    </div>
                  </div>
                </div>
              )}

              {/* Next Button */}
              {currentAnswer && (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2E5642] hover:bg-[#254636] text-white font-bold text-sm sm:text-base transition-all shadow-sm active:scale-98"
                  >
                    <span>{currentScenarioIndex < SCENARIOS.length - 1 ? 'Next Scenario' : 'View Your Results'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results & Certificate Completion */
            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#E7EFE9] border-2 border-[#A3C9A8] mx-auto flex items-center justify-center text-[#2E5642]">
                <Award className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${getRankBadge().color}`}>
                  {getRankBadge().title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#241F1A]">
                  Challenge Complete!
                </h3>
                <p className="text-sm sm:text-base text-[#61574C]">
                  You earned <strong className="text-[#2E5642] font-extrabold">{score}</strong> out of {maxPoints} points ({percentage}%).
                </p>
              </div>

              {/* Kid Name Input for Certificate */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-white border border-[#E5DDD1] space-y-3">
                <label className="block text-xs font-bold text-[#4A4237] uppercase tracking-wider text-left">
                  Enter Your Name for the Safe Surfer Certificate:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={kidName}
                    onChange={(e) => setKidName(e.target.value)}
                    placeholder="e.g. Alex or Maya"
                    className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#DCD3C7] text-sm focus:outline-none focus:ring-2 focus:ring-[#2E5642] bg-[#FAF7F2]"
                  />
                  <button
                    onClick={() => setShowCertificate(true)}
                    className="px-4 py-2.5 rounded-xl bg-[#2E5642] text-white font-semibold text-sm hover:bg-[#254636] transition-colors shrink-0"
                  >
                    Generate
                  </button>
                </div>
              </div>

              {/* Printable Certificate View */}
              {showCertificate && (
                <div className="max-w-lg mx-auto bg-[#FFFFFF] border-4 border-[#2E5642] rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-md relative">
                  <div className="w-12 h-12 rounded-full bg-[#E7EFE9] text-[#2E5642] mx-auto flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#7A6F62] uppercase tracking-widest">
                      Official Certificate of Internet Smarts
                    </span>
                    <h4 className="text-xl sm:text-2xl font-black text-[#2E5642] tracking-tight mt-1">
                      Certified Safe Surfer
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#554C42]">
                    This certifies that
                  </p>
                  <p className="text-lg sm:text-xl font-black text-[#C65337] underline decoration-[#F2D2C7] decoration-2">
                    {kidName.trim() || 'Awesome Digital Explorer'}
                  </p>
                  <p className="text-xs text-[#554C42] leading-relaxed max-w-sm mx-auto">
                    has successfully navigated realistic online scenarios, mastered the Secret Vault rule, and knows how to ask trusted adults for help.
                  </p>
                  <div className="pt-3 border-t border-[#E8DFD5] flex items-center justify-between text-[11px] text-[#7A6F62] font-semibold">
                    <span>Rank: {getRankBadge().title}</span>
                    <span>Date: {new Date().toLocaleDateString()}</span>
                  </div>

                  <button
                    onClick={() => window.print()}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#2E5642] hover:text-[#1E3B2C] font-bold"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print or Save as PDF</span>
                  </button>
                </div>
              )}

              {/* Restart Button */}
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DCD3C7] text-[#2B2620] font-semibold text-sm hover:bg-[#EFE8DE] transition-colors"
                >
                  <RotateCcw className="w-4 h-4 text-[#7A6F62]" />
                  <span>Try Again</span>
                </button>

                <a
                  href="#agreement"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2E5642] text-white font-semibold text-sm hover:bg-[#254636] transition-colors"
                >
                  <span>Build Family Contract →</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
