import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GoldenRules } from './components/GoldenRules';
import { PrivacySorterGame } from './components/PrivacySorterGame';
import { ScenarioSimulator } from './components/ScenarioSimulator';
import { FamilyContractBuilder } from './components/FamilyContractBuilder';
import { ParentGuide } from './components/ParentGuide';
import { EmergencyHelp } from './components/EmergencyHelp';
import { HowIMadeThisModal } from './components/HowIMadeThisModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isHowIMadeThisOpen, setIsHowIMadeThisOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2B2620] font-sans selection:bg-[#E8D6C0]">
      {/* Navigation Header */}
      <Navbar
        onOpenHowIMadeThis={() => setIsHowIMadeThisOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onStartGame={() => scrollTo('game')}
          onOpenAgreement={() => scrollTo('agreement')}
          onOpenHowIMadeThis={() => setIsHowIMadeThisOpen(true)}
        />

        {/* 4 Golden Rules */}
        <GoldenRules />

        {/* Safe to Share or Secret Vault Interactive Game */}
        <PrivacySorterGame />

        {/* "What Would You Do?" Interactive Simulator */}
        <ScenarioSimulator />

        {/* Family Internet Agreement Pact Builder */}
        <FamilyContractBuilder />

        {/* Parent & Educator Playbook */}
        <ParentGuide />

        {/* Emergency Assistance & 4-Step Action Plan */}
        <EmergencyHelp />
      </main>

      {/* Footer */}
      <Footer onOpenHowIMadeThis={() => setIsHowIMadeThisOpen(true)} />

      {/* Explainer / Presentation Notes Modal */}
      <HowIMadeThisModal
        isOpen={isHowIMadeThisOpen}
        onClose={() => setIsHowIMadeThisOpen(false)}
      />
    </div>
  );
}
