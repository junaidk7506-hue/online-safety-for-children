import { SafetyRule, Scenario, PrivacyItem, AgreementRule, AgeGuide } from '../types/safety';

export const GOLDEN_RULES: SafetyRule[] = [
  {
    id: 'rule-vault',
    number: 1,
    title: 'The Secret Vault',
    tagline: 'Keep your real-world identity locked away',
    description: 'The internet is a giant playground where anyone can visit. You never give house keys to someone on the street, and your personal details belong locked in your secret vault.',
    examples: [
      'Your real full name, phone number, and street address',
      'The name of your school or sports jersey with school logo',
      'Your passwords (never even tell your best friend)',
      'Photos showing house door numbers or car license plates'
    ],
    kidTip: 'Golden Rule check: If a stranger in a grocery store asked you, would you tell them? If no, keep it off the screen!',
    iconName: 'LockKeyhole',
    badgeText: 'Privacy First',
    badgeColor: 'bg-[#E7EFE9] text-[#2E5642] border-[#C3D9C9]'
  },
  {
    id: 'rule-kindness',
    number: 2,
    title: 'The Kindness Shield',
    tagline: 'Real feelings exist behind every screen avatar',
    description: 'Words typed into a keyboard travel directly into someone else’s heart. Treat people online with the exact same warmth, honesty, and manners you would on the school field.',
    examples: [
      'Never join "roast" channels or hate groups aimed at a classmate',
      'Don’t forward screenshots of private conversations to embarrass someone',
      'Speak up or report if you see someone being ganged up on in a game',
      'Pause before sending: If you wouldn’t say it to their face, don’t send it'
    ],
    kidTip: 'The 3-Second Rule: Count 1-2-3 before hitting "Send" on an angry message. You can never truly delete something once sent.',
    iconName: 'HeartHandshake',
    badgeText: 'Digital Kindness',
    badgeColor: 'bg-[#FDF1ED] text-[#C65337] border-[#F2D2C7]'
  },
  {
    id: 'rule-radar',
    number: 3,
    title: 'The Red Flag Radar',
    tagline: 'Spot tricks, fake promises, and digital traps',
    description: 'Some people online pretend to be children, friends, or game admins to get your account, money, or trust. Turn on your internal radar whenever an offer sounds too good to be true.',
    examples: [
      '"Click here to get 10,000 free Robux / V-Bucks instantly!" (100% scam)',
      'Someone asking you to keep a chat a secret from your parents',
      'Someone asking for photos or asking you to turn on your webcam',
      'Strangers asking you to move from a public game chat into a private app'
    ],
    kidTip: 'Remember: Real game companies never ask for your password or ask you to do tasks in secret.',
    iconName: 'ShieldAlert',
    badgeText: 'Scam Detection',
    badgeColor: 'bg-[#FEF6E9] text-[#B86E18] border-[#F4DCB4]'
  },
  {
    id: 'rule-grownup',
    number: 4,
    title: 'The No-Trouble Promise',
    tagline: 'If something feels weird, you will never be punished for asking for help',
    description: 'If you accidentally click a bad link, stumble on a scary video, or get a message that gives you that "uh-oh" feeling in your tummy, tell a trusted adult immediately. Good parents and teachers are here to help, not blame you.',
    examples: [
      'A pop-up that won’t close or displays scary pictures',
      'A message that made you feel uncomfortable, nervous, or confused',
      'If you accidentally made an in-app purchase or shared something by mistake',
      'If someone is threatening or blackmailing you online'
    ],
    kidTip: 'Grown-up code word: Agree on a safe code word with your family so you can ask for help anytime without shame.',
    iconName: 'Sparkles',
    badgeText: 'Trusted Adults',
    badgeColor: 'bg-[#F2EFF7] text-[#5E4E75] border-[#DDD5E8]'
  }
];

export const SCENARIOS: Scenario[] = [
  {
    id: 'scen-1',
    category: 'Gaming',
    title: 'The "Free Game Coins" Offer',
    situation: 'You are playing your favorite multiplayer builder game. A player with a cool badge messages: "Hey friend! My dad works at the game studio. Give me your login name and password for 10 minutes and I will load 5,000 free coins into your account!"',
    prompt: 'What should you do?',
    choices: [
      {
        id: 'c1',
        text: 'Give them the password quickly, but change it right after they finish.',
        isSafe: false,
        feedback: 'Uh-oh! They will immediately change your email, lock you out of your account, and take all your hard-earned items! Never share passwords with anyone.',
        points: 0
      },
      {
        id: 'c2',
        text: 'Politely refuse, block the player, and report their account in the game menu.',
        isSafe: true,
        feedback: 'Spot on! Real developers never ask for passwords. Reporting protects other kids from getting tricked too.',
        points: 10
      },
      {
        id: 'c3',
        text: 'Ask them to give you their password first to see if they are telling the truth.',
        isSafe: false,
        feedback: 'Risky move! Engaging with scammers keeps you in danger. It’s always best to ignore and report.',
        points: 0
      }
    ],
    takeaway: 'Never give your password to anyone except your parents. No one gives away real game money for free.'
  },
  {
    id: 'scen-2',
    category: 'Privacy',
    title: 'The Friendly Stranger',
    situation: 'You’ve been teaming up with another player in an online adventure game for three days. They seem super friendly and say: "You’re an awesome teammate! What school do you go to and what park do you hang out at after 3 PM?"',
    prompt: 'How do you respond?',
    choices: [
      {
        id: 'c1',
        text: 'Tell them your school mascot name only, so they don’t know the exact address.',
        isSafe: false,
        feedback: 'Not safe! People can search mascot names along with your city and easily find your exact school building.',
        points: 0
      },
      {
        id: 'c2',
        text: 'Say: "I keep real-life stuff private! Let’s just focus on beating this game boss."',
        isSafe: true,
        feedback: 'Brilliant boundary! It’s polite, firm, and keeps your real world identity 100% protected.',
        points: 10
      },
      {
        id: 'c3',
        text: 'Give them your address because you’ve known them for 3 days and they are your friend.',
        isSafe: false,
        feedback: 'Dangerous! Three days of gaming does not make someone a real-world trusted friend. Online strangers can pretend to be anyone.',
        points: 0
      }
    ],
    takeaway: 'Keep online gaming friendships in the game. Real-life locations (school, street, parks) stay secret.'
  },
  {
    id: 'scen-3',
    category: 'Social',
    title: 'The Class Group Chat Gossip',
    situation: 'Someone created a WhatsApp or Discord group chat named "School Memes". Suddenly, two kids start posting mean photos and teasing a quiet classmate who is also in the chat.',
    prompt: 'What is the kindest and safest action?',
    choices: [
      {
        id: 'c1',
        text: 'Send funny laughing emojis so the popular kids don’t target you next.',
        isSafe: false,
        feedback: 'Laughing emojis encourage the bullies and hurt the target even more. Being a silent follower helps the bully.',
        points: 0
      },
      {
        id: 'c2',
        text: 'Screenshot the evidence, message the classmate privately to check on them, and show the screenshots to a teacher or parent.',
        isSafe: true,
        feedback: 'Hero move! You supported your friend, didn’t escalate violence in the chat, and gave proof to adults who can resolve it.',
        points: 10
      },
      {
        id: 'c3',
        text: 'Start typing terrible insults back at the bullies in all capital letters.',
        isSafe: false,
        feedback: 'While defending a friend is good, fighting online often gets you in trouble and escalates the drama.',
        points: 5
      }
    ],
    takeaway: 'Be an upstander, not a bystander. Save proof, show support privately, and involve an adult.'
  },
  {
    id: 'scen-4',
    category: 'Feelings',
    title: 'The Accidental Click',
    situation: 'You were searching for video game walkthroughs and clicked a link. The screen redirected to a flashing website with disturbing images and a loud siren sound warning that your device is infected.',
    prompt: 'Your heart is racing. What should you do right now?',
    choices: [
      {
        id: 'c1',
        text: 'Close the browser tab immediately or turn the screen off, take a deep breath, and calmly tell your parent.',
        isSafe: true,
        feedback: 'Perfect! The siren and scary words are just fake scareware designed to trick you. Your parents won’t be angry at an accident.',
        points: 10
      },
      {
        id: 'c2',
        text: 'Call the phone number flashing on the screen to fix the computer before your parents find out.',
        isSafe: false,
        feedback: 'Stop! That number connects straight to scammers who will try to steal your family’s credit card.',
        points: 0
      },
      {
        id: 'c3',
        text: 'Hide the tablet under your bed and pretend you never used it.',
        isSafe: false,
        feedback: 'Hiding leaves the problem unresolved and causes unnecessary anxiety. Remember the No-Trouble Promise!',
        points: 0
      }
    ],
    takeaway: 'Fake alerts want you to panic. Turn off the screen and talk to a parent—accidents happen to everyone.'
  },
  {
    id: 'scen-5',
    category: 'Strangers',
    title: 'The Webcam Request',
    situation: 'Someone you met in a trivia voice room asks: "Can you turn on your camera or send a quick photo of yourself so I can see what you look like? Just for 5 seconds!"',
    prompt: 'What should you do?',
    choices: [
      {
        id: 'c1',
        text: 'Turn it on for just 2 seconds while covering half your face with your hand.',
        isSafe: false,
        feedback: 'Not safe! Even 2 seconds allows someone to record your screen or take screenshots of your room and face.',
        points: 0
      },
      {
        id: 'c2',
        text: 'Firmly say no, leave the call, and tell an adult that someone was asking for your camera.',
        isSafe: true,
        feedback: '100% correct! Your body, face, and private room are yours alone. Anyone pressuring you for camera access is crossing a red line.',
        points: 10
      },
      {
        id: 'c3',
        text: 'Send a photo of your sibling or cousin instead.',
        isSafe: false,
        feedback: 'Never send photos of family members either. That puts them in the same privacy danger.',
        points: 0
      }
    ],
    takeaway: 'Never turn on a webcam or send personal pictures to anyone you don’t know personally in real life.'
  }
];

export const PRIVACY_ITEMS: PrivacyItem[] = [
  {
    id: 'pi-1',
    label: 'My favorite color & favorite dinosaur',
    icon: '🎨',
    isSafeToShare: true,
    explanation: 'Safe! General hobbies and favorite things can’t be used to locate you or steal your accounts.',
    category: 'harmless'
  },
  {
    id: 'pi-2',
    label: 'The street address of my house',
    icon: '🏠',
    isSafeToShare: false,
    explanation: 'Private! Never share your home location. It tells strangers where you and your family sleep.',
    category: 'personal'
  },
  {
    id: 'pi-3',
    label: 'My Roblox or game account password',
    icon: '🔑',
    isSafeToShare: false,
    explanation: 'Top Secret! Passwords should only ever be known by you and your parent/guardian.',
    category: 'personal'
  },
  {
    id: 'pi-4',
    label: 'A drawing of a robot I drew myself',
    icon: '🖍️',
    isSafeToShare: true,
    explanation: 'Safe! Sharing your creative artwork is great as long as you didn’t write your real full name on it.',
    category: 'harmless'
  },
  {
    id: 'pi-5',
    label: 'My school sports jersey with the school badge',
    icon: '👕',
    isSafeToShare: false,
    explanation: 'Private! A school badge tells strangers the exact town, building, and hours where you can be found.',
    category: 'risky'
  },
  {
    id: 'pi-6',
    label: 'My favorite movie soundtrack song',
    icon: '🎵',
    isSafeToShare: true,
    explanation: 'Safe! Sharing your taste in music or movies is a harmless, fun part of the internet.',
    category: 'harmless'
  },
  {
    id: 'pi-7',
    label: 'My mother’s phone number',
    icon: '📱',
    isSafeToShare: false,
    explanation: 'Private! Phone numbers can be targeted by spam calls, text scammers, and identity thieves.',
    category: 'personal'
  },
  {
    id: 'pi-8',
    label: 'My high score in a space arcade game',
    icon: '🏆',
    isSafeToShare: true,
    explanation: 'Safe! Bragging about your game high score or gaming alias is completely fine!',
    category: 'harmless'
  }
];

export const DEFAULT_AGREEMENT_RULES: AgreementRule[] = [
  {
    id: 'agr-1',
    category: 'Trust',
    title: 'The Safe Harbor Promise',
    description: 'If I see something scary, weird, or accidental online, I can always tell my grown-up without fear of losing my device or getting in trouble.',
    defaultChecked: true
  },
  {
    id: 'agr-2',
    category: 'Privacy',
    title: 'Password & Vault Secrecy',
    description: 'I will never give my passwords, real full name, phone number, school, or address to anyone online without asking first.',
    defaultChecked: true
  },
  {
    id: 'agr-3',
    category: 'Time',
    title: 'Living Room Charging Zone',
    description: 'All tablets and phones sleep in the common family charging station at night, never under pillows or behind closed bedroom doors.',
    defaultChecked: true
  },
  {
    id: 'agr-4',
    category: 'Kindness',
    title: 'The Golden Screen Rule',
    description: 'I will only type messages that I would be proud to say aloud to someone in front of my family and teachers.',
    defaultChecked: true
  },
  {
    id: 'agr-5',
    category: 'Privacy',
    title: 'Ask Before Downloading',
    description: 'I will check with a parent before installing new games, apps, or entering credit card / billing information.',
    defaultChecked: true
  },
  {
    id: 'agr-6',
    category: 'Time',
    title: 'Play, School & Sleep First',
    description: 'Screens are tools for fun and learning, but homework, fresh air, hobbies, and family meals always come first.',
    defaultChecked: true
  }
];

export const AGE_GUIDES: AgeGuide[] = [
  {
    ageGroup: 'Ages 5 – 8',
    subtitle: 'First Explorers: Supervised Wonder',
    coreFocus: 'Building healthy habits, guided exploration, and recognizing feelings.',
    keyRisks: [
      'Accidentally clicking ads or buying in-game currency',
      'Overstimulation or scary videos disguised as cartoons',
      'Device tantrums when screen time ends'
    ],
    actionItems: [
      'Keep screens in open family areas (kitchen or living room).',
      'Turn on YouTube Kids with "Approved Content Only" mode enabled.',
      'Use a 5-minute visual timer before ending screen sessions.'
    ],
    conversationStarter: '"What was the silliest or coolest thing you saw on the tablet today?"'
  },
  {
    ageGroup: 'Ages 9 – 12',
    subtitle: 'Digital Navigators: Multiplayer & Friendships',
    coreFocus: 'Private data protection, peer pressure, and in-game trading scams.',
    keyRisks: [
      'In-game grooming and fake currency giveaways (Roblox/Fortnite)',
      'Class group chat drama and exclusionary cliques',
      'Contact requests from unknown accounts'
    ],
    actionItems: [
      'Audit multiplayer game privacy settings together once every month.',
      'Establish the rule: "No webcams with strangers under any circumstance".',
      'Co-create the family internet agreement and sign it together.'
    ],
    conversationStarter: '"Has anyone ever asked you for your password or been mean in a game chat?"'
  },
  {
    ageGroup: 'Ages 13 – 16',
    subtitle: 'Emerging Citizens: Independence & Reputation',
    coreFocus: 'Digital footprint, mental health, algorithms, and critical thinking.',
    keyRisks: [
      'Social media comparison and anxiety from endless scrolling',
      'Sextortion or blackmail scams targeting teens on Instagram/Snapchat',
      'Permanence of photos, jokes, and digital records'
    ],
    actionItems: [
      'Focus on mentorship rather than espionage—keep open communication channels.',
      'Discuss how algorithms are designed to keep users hooked and angry.',
      'Teach them how to use two-factor authentication on all accounts.'
    ],
    conversationStarter: '"Do you ever feel tired or drained after scrolling? Let’s test a 24-hour phone-free Sunday together."'
  }
];

export const EMERGENCY_RESOURCES = [
  {
    name: 'Childline (UK / International Partner)',
    phone: '0800 1111',
    description: 'Free, confidential helpline for kids and young people available 24/7.',
    tag: 'Kids Support'
  },
  {
    name: 'Cyberbullying Research Center',
    phone: 'Online Resource Hub',
    description: 'Evidence-based advice for parents, educators, and teens facing online harassment.',
    tag: 'Education'
  },
  {
    name: 'National Center for Missing & Exploited Children (NCMEC)',
    phone: '1-800-843-5678',
    description: 'CyberTipline to report suspicious online contact, grooming, or child exploitation.',
    tag: 'Immediate Danger'
  },
  {
    name: 'Internet Watch Foundation (IWF)',
    phone: 'Report Online Anonymously',
    description: 'Confidential portal to report and remove inappropriate or criminal imagery online.',
    tag: 'Content Removal'
  }
];

export const HOW_I_MADE_THIS_INFO = {
  elevatorPitch: 'I created "SafeSprout", a clean, friendly, and practical web platform designed to teach kids, parents, and teachers how to stay safe on the internet without boring lectures or terrifying scare-tactics.',
  presentationBullets: [
    {
      title: '1. Why This Problem Matters',
      detail: 'Most children start using tablets and online games between ages 4 and 9. Traditional safety advice is either too complex for kids to understand or written in sterile corporate documents. SafeSprout turns abstract safety rules into tactile, interactive choices.'
    },
    {
      title: '2. The Deliberate Color & Design Strategy (No Blue & White!)',
      detail: 'Traditional tech apps default to corporate blue and sterile white, which makes them feel like cold software or robotic AI templates. Instead, SafeSprout uses a grounded, natural palette: Forest Sage Green (#2E5642) representing safety and growth, warm Terracotta (#C65337) for gentle alerts, Honey Amber (#D9822B) for rewards, and warm Oatmeal Paper (#FAF7F2). This gives it the approachable feel of a trusted library guidebook.'
    },
    {
      title: '3. Interactive Learning Over Lectures',
      detail: 'Kids learn through simulation. I built two key interactive engines: (a) The "What Would You Do?" Scenario Simulator with immediate reasoning feedback, and (b) The "Is It Safe to Share?" visual privacy sorter.'
    },
    {
      title: '4. Actionable Real-World Tool: The Family Agreement Builder',
      detail: 'Instead of just reading advice, families can customize their household digital rules, digitally sign an agreement together, and print or download a real contract to hang on the fridge.'
    },
    {
      title: '5. Technology & Architecture',
      detail: 'Built with React 19 and TypeScript for rock-solid stability, styled with modern Tailwind CSS for instant responsiveness across mobile phones, tablets, and laptops, and powered by Lucide icons for friendly visual metaphors.'
    }
  ],
  quickFaq: [
    {
      q: 'How did you choose the scenarios?',
      a: 'They are based on real situations children face today: fake game currency scams in Roblox/Minecraft, strangers in multiplayer chats asking for school names, peer pressure in group chats, and accidental clicks on scary popups.'
    },
    {
      q: 'How can you explain this in a 1-minute school presentation?',
      a: '"I built SafeSprout to give kids a safe digital sandbox. Instead of scary rules, it teaches four core pillars: Secret Vault, Kindness Shield, Red Flag Radar, and the No-Trouble Rule. It includes an interactive quiz, privacy sorter, and a printable family contract."'
    },
    {
      q: 'Why does the site emphasize the "No-Trouble Promise"?',
      a: 'Research shows the #1 reason children hide online dangers from parents is fear of having their device taken away. SafeSprout explicitly reminds kids that asking for help will never get them in trouble.'
    }
  ]
};
