import React, { useState } from 'react';
import { FileText, Plus, Trash2, Printer, Check, Heart, Shield, RefreshCw } from 'lucide-react';
import { DEFAULT_AGREEMENT_RULES } from '../data/safetyContent';
import { AgreementRule } from '../types/safety';

export const FamilyContractBuilder: React.FC = () => {
  const [rules, setRules] = useState<AgreementRule[]>(DEFAULT_AGREEMENT_RULES);
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>(
    DEFAULT_AGREEMENT_RULES.reduce((acc, rule) => ({ ...acc, [rule.id]: true }), {})
  );
  const [customRuleText, setCustomRuleText] = useState('');
  const [childName, setChildName] = useState('');
  const [parentName, setParentName] = useState('');
  const [agreementDate, setAgreementDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [isSigned, setIsSigned] = useState(false);

  const toggleRule = (id: string) => {
    setCheckedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const addCustomRule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customRuleText.trim()) return;

    const newRule: AgreementRule = {
      id: `custom-${Date.now()}`,
      category: 'Trust',
      title: 'Our Custom Family Rule',
      description: customRuleText.trim(),
      defaultChecked: true
    };

    setRules(prev => [...prev, newRule]);
    setCheckedIds(prev => ({ ...prev, [newRule.id]: true }));
    setCustomRuleText('');
  };

  const removeRule = (id: string) => {
    setRules(prev => prev.filter(r => r.id !== id));
  };

  const handleResetDefaults = () => {
    setRules(DEFAULT_AGREEMENT_RULES);
    setCheckedIds(
      DEFAULT_AGREEMENT_RULES.reduce((acc, rule) => ({ ...acc, [rule.id]: true }), {})
    );
    setIsSigned(false);
  };

  const activeRules = rules.filter(r => checkedIds[r.id]);

  return (
    <section id="agreement" className="py-14 sm:py-18 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold tracking-wider uppercase text-[#2E5642] bg-[#E7EFE9] px-3 py-1 rounded-full border border-[#C5DBCB]">
            Interactive Family Agreement
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#241F1A] tracking-tight">
            Our Family Digital Safety Pact
          </h2>
          <p className="text-sm sm:text-base text-[#61574C] max-w-xl mx-auto">
            Rules work best when kids and parents agree on them together. Check off the rules for your house, add your own, and print your family agreement!
          </p>
        </div>

        {/* Builder Container */}
        <div className="bg-[#FFFFFF] border-2 border-[#E5DDD1] rounded-3xl p-6 sm:p-8 shadow-xs space-y-8">
          {/* Top Bar with reset */}
          <div className="flex items-center justify-between pb-4 border-b border-[#EFE8DE]">
            <div>
              <h3 className="text-lg font-bold text-[#241F1A]">Household Agreement Checklist</h3>
              <p className="text-xs text-[#7A6F62]">Selected rules: {activeRules.length} of {rules.length}</p>
            </div>
            <button
              onClick={handleResetDefaults}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#7A6F62] hover:text-[#2B2620] transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
          </div>

          {/* Rules List */}
          <div className="space-y-3">
            {rules.map((rule) => {
              const isChecked = !!checkedIds[rule.id];
              return (
                <div
                  key={rule.id}
                  className={`p-4 rounded-2xl border-2 transition-all flex items-start justify-between gap-3 ${
                    isChecked
                      ? 'bg-[#FAF7F2] border-[#2E5642]/40'
                      : 'bg-white border-[#E8DFD5] opacity-60'
                  }`}
                >
                  <label className="flex items-start gap-3.5 cursor-pointer flex-1 select-none">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleRule(rule.id)}
                      className="mt-1 w-5 h-5 rounded border-[#C5DBCB] text-[#2E5642] focus:ring-[#2E5642] accent-[#2E5642] cursor-pointer"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#241F1A]">{rule.title}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#EFE8DE] text-[#61574C]">
                          {rule.category}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#554C42] mt-0.5 leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </label>

                  {rule.id.startsWith('custom-') && (
                    <button
                      onClick={() => removeRule(rule.id)}
                      className="p-1.5 text-[#C65337] hover:bg-[#FDF1ED] rounded-lg transition-colors"
                      title="Remove custom rule"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Add Custom Rule Form */}
          <form onSubmit={addCustomRule} className="flex gap-2">
            <input
              type="text"
              value={customRuleText}
              onChange={(e) => setCustomRuleText(e.target.value)}
              placeholder="Add your own special family rule (e.g., No screens during dinner)..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-[#DCD3C7] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#2E5642] bg-[#FAF7F2]"
            />
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#2E5642] text-white text-xs sm:text-sm font-semibold hover:bg-[#254636] transition-colors shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add Rule</span>
            </button>
          </form>

          {/* Signatures & Names */}
          <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5DDD1] space-y-4">
            <h4 className="text-xs font-bold text-[#4A4237] uppercase tracking-wider">
              Family Signatures & Pledge
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#61574C] mb-1">
                  Child's Name:
                </label>
                <input
                  type="text"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  placeholder="e.g. Maya"
                  className="w-full px-3 py-2 rounded-lg border border-[#DCD3C7] bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#2E5642]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#61574C] mb-1">
                  Parent / Guardian's Name:
                </label>
                <input
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. Mom & Dad"
                  className="w-full px-3 py-2 rounded-lg border border-[#DCD3C7] bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#2E5642]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#61574C] mb-1">
                  Agreement Date:
                </label>
                <input
                  type="date"
                  value={agreementDate}
                  onChange={(e) => setAgreementDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-[#DCD3C7] bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#2E5642]"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setIsSigned(true)}
                className="px-5 py-2.5 rounded-xl bg-[#2E5642] text-white font-bold text-sm hover:bg-[#254636] transition-colors"
              >
                Sign & Finalize Agreement
              </button>

              {isSigned && (
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFFFFF] border-2 border-[#2E5642] text-[#2E5642] font-bold text-sm hover:bg-[#E7EFE9] transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print for Refrigerator</span>
                </button>
              )}
            </div>
          </div>

          {/* Printable Preview when Signed */}
          {isSigned && (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border-4 border-[#2E5642] space-y-5 print:m-0 print:border-2">
              <div className="text-center space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#7A6F62]">
                  The Official Family Pledge
                </span>
                <h4 className="text-2xl font-black text-[#2E5642]">
                  {childName ? `${childName}'s Family Internet Agreement` : 'Our Family Internet Agreement'}
                </h4>
                <p className="text-xs text-[#665D52]">
                  Pledged on {agreementDate || new Date().toLocaleDateString()}
                </p>
              </div>

              <div className="space-y-2.5 py-2">
                {activeRules.map((rule, idx) => (
                  <div key={rule.id} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3E372E]">
                    <span className="w-5 h-5 rounded-full bg-[#E7EFE9] text-[#2E5642] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      {idx + 1}
                    </span>
                    <div>
                      <strong className="text-[#241F1A]">{rule.title}:</strong>{' '}
                      <span>{rule.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t-2 border-[#E5DDD1] grid grid-cols-2 gap-6 text-center">
                <div className="border-t border-dashed border-[#7A6F62] pt-2">
                  <p className="text-sm font-bold text-[#241F1A] italic">
                    {childName.trim() || 'Signed by Child'}
                  </p>
                  <p className="text-[10px] uppercase font-bold text-[#7A6F62] mt-0.5">
                    Child's Signature
                  </p>
                </div>
                <div className="border-t border-dashed border-[#7A6F62] pt-2">
                  <p className="text-sm font-bold text-[#241F1A] italic">
                    {parentName.trim() || 'Signed by Parent / Guardian'}
                  </p>
                  <p className="text-[10px] uppercase font-bold text-[#7A6F62] mt-0.5">
                    Parent / Guardian's Signature
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
