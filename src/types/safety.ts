export interface SafetyRule {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  examples: string[];
  kidTip: string;
  iconName: string;
  badgeText: string;
  badgeColor: string;
}

export interface ScenarioChoice {
  id: string;
  text: string;
  isSafe: boolean;
  feedback: string;
  points: number;
}

export interface Scenario {
  id: string;
  category: 'Gaming' | 'Social' | 'Privacy' | 'Strangers' | 'Feelings';
  title: string;
  situation: string;
  prompt: string;
  choices: ScenarioChoice[];
  takeaway: string;
}

export interface PrivacyItem {
  id: string;
  label: string;
  icon: string;
  isSafeToShare: boolean;
  explanation: string;
  category: 'personal' | 'harmless' | 'risky';
}

export interface AgreementRule {
  id: string;
  category: 'Privacy' | 'Kindness' | 'Time' | 'Trust';
  title: string;
  description: string;
  defaultChecked: boolean;
}

export interface AgeGuide {
  ageGroup: string;
  subtitle: string;
  coreFocus: string;
  keyRisks: string[];
  actionItems: string[];
  conversationStarter: string;
}
