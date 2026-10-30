import React, { useState } from 'react';
import { Lock, Share2, CheckCircle2, XCircle, RotateCcw, Award, Sparkles, HelpCircle } from 'lucide-react';
import { PRIVACY_ITEMS } from '../data/safetyContent';
import { PrivacyItem } from '../types/safety';

export const PrivacySorterGame: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { userChoice: boolean; isCorrect: boolean }>>({});
  const [selectedFeedback, setSelectedFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  const currentItem: PrivacyItem | undefined = PRIVACY_ITEMS[currentIndex];
  const isCompleted = Object.keys(answers).length === PRIVACY_ITEMS.length;
  const correctCount = Object.values(answers).filter(a => a.isCorrect).length;

  const handleChoice = (shareChoice: boolean) => {
    if (!currentItem || selectedFeedback) return;

    const isCorrect = currentItem.isSafeToShare === shareChoice;
    setAnswers(prev => ({
      ...prev,
      [currentItem.id]: { userChoice: shareChoice, isCorrect }
    }));

    setSelectedFeedback({
      isCorrect,
      text: isCorrect
        ? `Spot on! ${currentItem.explanation}`
        : `Careful! ${currentItem.explanation}`
    });
  };

  const handleNext = () => {
    setSelectedFeedback(null);
    if (currentIndex < PRIVACY_ITEMS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setAnswers({});
    setSelectedFeedback(null);
  };

  return (
    <section id="sorter" className="py-14 sm:py-18 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold tracking-wider uppercase text-[#2E5642] bg-[#E7EFE9] px-3 py-1 rounded-full border border-[#C5DBCB]">
            Interactive Mini-Game
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#241F1A] tracking-tight">
            Safe to Share or Secret Vault?
          </h2>
          <p className="text-sm sm:text-base text-[#61574C] max-w-xl mx-auto">
            Test your instincts! Read each item and decide: is it fine to tell friends online, or should you lock it in your secret vault?
          </p>
        </div>

        {/* Game Container */}
        <div className="bg-[#FFFFFF] border-2 border-[#E5DDD1] rounded-3xl p-6 sm:p-8 shadow-xs">
          {/* Progress Bar & Header */}
          <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#EFE8DE]">
            <div>
              <span className="text-xs font-bold text-[#7A6F62] uppercase tracking-wider">
                Question {currentIndex + 1} of {PRIVACY_ITEMS.length}
              </span>
              <div className="w-36 sm:w-48 h-2 bg-[#EFE8DE] rounded-full mt-1.5 overflow-hidden">
                <div
                  className="h-full bg-[#2E5642] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / PRIVACY_ITEMS.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs font-bold text-[#7A6F62] block">Score</span>
              <span className="text-lg font-extrabold text-[#2E5642]">
                {correctCount} / {Object.keys(answers).length}
              </span>
            </div>
          </div>

          {!isCompleted ? (
            <div className="py-8 space-y-8">
              {/* Question Card */}
              {currentItem && (
                <div className="text-center space-y-4 max-w-lg mx-auto">
                  <div className="w-20 h-20 rounded-2xl bg-[#F8F5EE] border-2 border-[#E5DDD1] mx-auto flex items-center justify-center text-4xl shadow-inner">
                    {currentItem.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#8C7E6D] uppercase tracking-wider">
                      Can I post or tell this to someone online?
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#241F1A] mt-1">
                      "{currentItem.label}"
                    </h3>
                  </div>
                </div>
              )}

              {/* Feedback Alert if choice made */}
              {selectedFeedback && (
                <div
                  className={`p-4 rounded-2xl border flex items-start gap-3 max-w-xl mx-auto transition-all ${
                    selectedFeedback.isCorrect
                      ? 'bg-[#E7EFE9] border-[#C3D9C9] text-[#204030]'
                      : 'bg-[#FDF1ED] border-[#F2D2C7] text-[#802D19]'
                  }`}
                >
                  {selectedFeedback.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-[#2E5642] shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-[#C65337] shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider block">
                      {selectedFeedback.isCorrect ? 'Correct Decision!' : 'Not Quite Right'}
                    </span>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed">
                      {selectedFeedback.text}
                    </p>
                  </div>
                </div>
              )}

              {/* Choice Buttons */}
              <div className="max-w-md mx-auto">
                {!selectedFeedback ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => handleChoice(true)}
                      className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-[#E7EFE9] hover:bg-[#D5E6D9] text-[#204030] border-2 border-[#A3C9A8] font-bold text-sm sm:text-base transition-all active:scale-98 shadow-xs"
                    >
                      <Share2 className="w-5 h-5 text-[#2E5642]" />
                      <span>Safe to Share 🟢</span>
                    </button>

                    <button
                      onClick={() => handleChoice(false)}
                      className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-[#FDF1ED] hover:bg-[#FBE4DD] text-[#802D19] border-2 border-[#EAAFA1] font-bold text-sm sm:text-base transition-all active:scale-98 shadow-xs"
                    >
                      <Lock className="w-5 h-5 text-[#C65337]" />
                      <span>Secret Vault 🔒</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <button
                      onClick={handleNext}
                      className="px-8 py-3.5 rounded-xl bg-[#2E5642] hover:bg-[#254636] text-white font-bold text-sm sm:text-base transition-all shadow-sm active:scale-98"
                    >
                      {currentIndex < PRIVACY_ITEMS.length - 1 ? 'Next Question →' : 'See Final Results 🎉'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="py-8 text-center space-y-6 max-w-lg mx-auto">
              <div className="w-20 h-20 rounded-full bg-[#FEF6E9] border-2 border-[#F4DCB4] mx-auto flex items-center justify-center text-[#D9822B]">
                <Award className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-[#D9822B] uppercase tracking-wider">
                  Challenge Completed!
                </span>
                <h3 className="text-2xl font-extrabold text-[#241F1A] mt-1">
                  You scored {correctCount} out of {PRIVACY_ITEMS.length}!
                </h3>
                <p className="text-xs sm:text-sm text-[#61574C] mt-2">
                  {correctCount >= 7
                    ? 'Superstar Detective! You have top-tier digital instincts and keep your identity airtight.'
                    : correctCount >= 5
                    ? 'Great job! You know the core rules well. Keep reviewing what belongs in the Secret Vault.'
                    : 'Good effort! Review the 4 Golden Rules above and try again to master your safety shield.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F5EE] border border-[#E5DDD1] text-left space-y-2">
                <span className="text-xs font-bold text-[#4D453A] block">Key Rule of Thumb:</span>
                <p className="text-xs text-[#61574C]">
                  If it helps someone locate your house, your school, your family, or log into your accounts, it stays <strong>100% private</strong>. Hobbies, favorite games, and art are safe!
                </p>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#DCD3C7] text-[#2B2620] font-semibold text-sm hover:bg-[#EFE8DE] transition-colors"
                >
                  <RotateCcw className="w-4 h-4 text-[#7A6F62]" />
                  <span>Play Again</span>
                </button>

                <a
                  href="#game"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2E5642] text-white font-semibold text-sm hover:bg-[#254636] transition-colors"
                >
                  <span>Try Safety Scenarios →</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
