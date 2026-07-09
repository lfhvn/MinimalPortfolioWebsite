import { useState, useEffect, useRef } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// ==========================================
// THEMES (macOS Terminal inspired)
// ==========================================

export interface TerminalTheme {
  name: string;
  bg: string;
  text: string;
  green: string;
  orange: string;
  yellow: string;
  red: string;
  dim: string;
  white: string;
  promptColor: string;
  selectionBg: string;
  selectionText: string;
  linkColor: string;
  linkHover: string;
  navBorder: string;
  navBg: string;
  scanlineColor: string;
  cursorColor: string;
  crtOpacity: string;
  flicker: string;
  glow: string;
}

const THEMES: Record<string, TerminalTheme> = {
  'clear-light': {
    name: 'Clear Light',
    bg: '#fafaf8',
    text: '#1a1a1a',
    green: '#2d2d2d',
    orange: '#8b5c34',
    yellow: '#6b5b3e',
    red: '#b44040',
    dim: '#555555',
    white: '#1a1a1a',
    promptColor: '#aaaaaa',
    selectionBg: '#c8dff8',
    selectionText: '#1a1a1a',
    linkColor: '#4a6fa5',
    linkHover: '#2d5a8e',
    navBorder: '#e0e0de',
    navBg: 'rgba(250, 250, 248, 0.95)',
    scanlineColor: 'transparent',
    cursorColor: '#1a1a1a',
    crtOpacity: '0',
    flicker: 'none',
    glow: 'none'
  },
  homebrew: {
    name: 'Homebrew',
    bg: '#0a0a0a',
    text: '#33ff33',
    green: '#33ff33',
    orange: '#ff6600',
    yellow: '#ffcc00',
    red: '#ff0033',
    dim: '#1a9e1a',
    white: '#f0f0f0',
    promptColor: '#1a9e1a',
    selectionBg: '#33ff33',
    selectionText: '#0a0a0a',
    linkColor: '#ff6600',
    linkHover: '#ffcc00',
    navBorder: '#1a3a1a',
    navBg: 'rgba(5, 5, 5, 0.8)',
    scanlineColor: 'rgba(51, 255, 51, 0.08)',
    cursorColor: '#33ff33',
    crtOpacity: '1',
    flicker: 'flicker 8s infinite',
    glow: '0 0 10px currentColor'
  },
  basic: {
    name: 'Basic',
    bg: '#ffffff',
    text: '#000000',
    green: '#007400',
    orange: '#c41a16',
    yellow: '#826b28',
    red: '#c41a16',
    dim: '#666666',
    white: '#000000',
    promptColor: '#666666',
    selectionBg: '#b4d5fe',
    selectionText: '#000000',
    linkColor: '#0433ff',
    linkHover: '#0060ff',
    navBorder: '#cccccc',
    navBg: 'rgba(245, 245, 245, 0.9)',
    scanlineColor: 'transparent',
    cursorColor: '#000000',
    crtOpacity: '0',
    flicker: 'none',
    glow: 'none'
  },
  grass: {
    name: 'Grass',
    bg: '#13773d',
    text: '#fff0a5',
    green: '#fff0a5',
    orange: '#ff9d00',
    yellow: '#ffffff',
    red: '#ff6b6b',
    dim: '#b8e0c8',
    white: '#ffffff',
    promptColor: '#b8e0c8',
    selectionBg: '#fff0a5',
    selectionText: '#13773d',
    linkColor: '#ff9d00',
    linkHover: '#ffffff',
    navBorder: '#0f5c2f',
    navBg: 'rgba(15, 92, 47, 0.8)',
    scanlineColor: 'rgba(255, 240, 165, 0.05)',
    cursorColor: '#fff0a5',
    crtOpacity: '0',
    flicker: 'none',
    glow: 'none'
  },
  'man-page': {
    name: 'Man Page',
    bg: '#fef49c',
    text: '#000000',
    green: '#006400',
    orange: '#a0522d',
    yellow: '#6b4226',
    red: '#c41a16',
    dim: '#666633',
    white: '#000000',
    promptColor: '#666633',
    selectionBg: '#000000',
    selectionText: '#fef49c',
    linkColor: '#0433ff',
    linkHover: '#0060ff',
    navBorder: '#d4c870',
    navBg: 'rgba(240, 230, 140, 0.8)',
    scanlineColor: 'transparent',
    cursorColor: '#000000',
    crtOpacity: '0',
    flicker: 'none',
    glow: 'none'
  },
  novel: {
    name: 'Novel',
    bg: '#dfdbc3',
    text: '#3b2322',
    green: '#3b2322',
    orange: '#8b4513',
    yellow: '#6b4226',
    red: '#8b0000',
    dim: '#7a6a5a',
    white: '#3b2322',
    promptColor: '#7a6a5a',
    selectionBg: '#3b2322',
    selectionText: '#dfdbc3',
    linkColor: '#8b4513',
    linkHover: '#a0522d',
    navBorder: '#c0b89a',
    navBg: 'rgba(210, 205, 180, 0.9)',
    scanlineColor: 'transparent',
    cursorColor: '#3b2322',
    crtOpacity: '0',
    flicker: 'none',
    glow: 'none'
  },
  ocean: {
    name: 'Ocean',
    bg: '#224fbc',
    text: '#ffffff',
    green: '#44ff44',
    orange: '#ff9d00',
    yellow: '#ffff00',
    red: '#ff0000',
    dim: '#9999ff',
    white: '#ffffff',
    promptColor: '#9999ff',
    selectionBg: '#ffffff',
    selectionText: '#224fbc',
    linkColor: '#ff9d00',
    linkHover: '#ffff00',
    navBorder: '#1a3a8a',
    navBg: 'rgba(25, 50, 140, 0.8)',
    scanlineColor: 'rgba(255, 255, 255, 0.04)',
    cursorColor: '#ffffff',
    crtOpacity: '0',
    flicker: 'none',
    glow: 'none'
  },
  pro: {
    name: 'Pro',
    bg: '#000000',
    text: '#f2f2f2',
    green: '#2dc55e',
    orange: '#c7c400',
    yellow: '#c7c400',
    red: '#ff6d67',
    dim: '#808080',
    white: '#f2f2f2',
    promptColor: '#808080',
    selectionBg: '#414141',
    selectionText: '#f2f2f2',
    linkColor: '#6699ff',
    linkHover: '#99bbff',
    navBorder: '#333333',
    navBg: 'rgba(20, 20, 20, 0.9)',
    scanlineColor: 'rgba(255, 255, 255, 0.02)',
    cursorColor: '#f2f2f2',
    crtOpacity: '0',
    flicker: 'none',
    glow: 'none'
  },
  'red-sands': {
    name: 'Red Sands',
    bg: '#7a2518',
    text: '#d7c9a7',
    green: '#d7c9a7',
    orange: '#ff9966',
    yellow: '#ffd39b',
    red: '#ff6666',
    dim: '#b8a080',
    white: '#eee0c8',
    promptColor: '#b8a080',
    selectionBg: '#d7c9a7',
    selectionText: '#7a2518',
    linkColor: '#ff9966',
    linkHover: '#ffd39b',
    navBorder: '#5c1a10',
    navBg: 'rgba(90, 25, 15, 0.8)',
    scanlineColor: 'rgba(215, 201, 167, 0.05)',
    cursorColor: '#d7c9a7',
    crtOpacity: '0',
    flicker: 'none',
    glow: 'none'
  },
  'silver-aerogel': {
    name: 'Silver Aerogel',
    bg: '#929292',
    text: '#000000',
    green: '#005500',
    orange: '#8b4513',
    yellow: '#555500',
    red: '#990000',
    dim: '#444444',
    white: '#000000',
    promptColor: '#444444',
    selectionBg: '#000000',
    selectionText: '#929292',
    linkColor: '#003399',
    linkHover: '#0055cc',
    navBorder: '#777777',
    navBg: 'rgba(130, 130, 130, 0.9)',
    scanlineColor: 'transparent',
    cursorColor: '#000000',
    crtOpacity: '0',
    flicker: 'none',
    glow: 'none'
  },
  'solid-colors': {
    name: 'Solid Colors',
    bg: '#c0c0c0',
    text: '#000080',
    green: '#008000',
    orange: '#800080',
    yellow: '#808000',
    red: '#800000',
    dim: '#404080',
    white: '#000000',
    promptColor: '#404080',
    selectionBg: '#000080',
    selectionText: '#c0c0c0',
    linkColor: '#800080',
    linkHover: '#a000a0',
    navBorder: '#999999',
    navBg: 'rgba(180, 180, 180, 0.9)',
    scanlineColor: 'transparent',
    cursorColor: '#000080',
    crtOpacity: '0',
    flicker: 'none',
    glow: 'none'
  },
};

// ==========================================
// CONTENT
// ==========================================

export interface CommandLine {
  type: 'command' | 'output';
  content: string;
  isHtml?: boolean;
  className?: string;
}

const BOOT_LINES = [
  '<span class="dim">LHM.WORKS TERMINAL v6.1</span>',
  '<span class="dim">Initializing connection...</span>',
  '&nbsp;',
  `<pre class="green ascii-art">
 ██╗     ██╗  ██╗███╗   ███╗
 ██║     ██║  ██║████╗ ████║
 ██║     ███████║██╔████╔██║
 ██║     ██╔══██║██║╚██╔╝██║
 ███████╗██║  ██║██║ ╚═╝ ██║
 ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝
 ─────────────────────────────
 LEIF HAVEN MARTINSON
 design / language / machines</pre>`,
  '&nbsp;',
  '<span class="orange">Designer focused human AI interaction.</span>',
  '<span class="orange">Product Designer, AI + Wearables</span> @ <span class="yellow">Meta Reality Labs</span>',
  '<span class="dim">Bay Area, CA</span>',
  '&nbsp;',
  '<span class="green">Type <span class="yellow">help</span> for commands, or ask a question.</span>'
];

const ABOUT_TEXT = [
  'I’m a product designer working on AI systems, multimodal interfaces, and wearable computing.',
  'At Meta Reality Labs, I’ve worked on assistant behavior and interaction design across smart glasses, voice systems, and AI-driven hardware experiences.',
  'My work focuses on turning model capability into product behavior: interaction patterns, trust, recovery, and system coherence.'
];

const DATA = {
  bio: {
    name: 'Leif Haven Martinson',
    role: 'Product Designer, AI + Wearables',
    title2: 'AI Interaction Design',
    org: 'Meta Reality Labs',
    location: 'Bay Area, CA',
    specialization: 'AI model behavior · conversational systems · AR/XR interaction · wearable AI',
    education: [
      'BA, Philosophy',
      'MFA, Creative Writing'
    ]
  },
  roles: [
    {
      title: 'Product Designer - AI on Wearables',
      org: 'Meta Reality Labs',
      dates: 'Aug 2023 - Present',
      desc: 'Works on assistant behavior and interaction design for AI wearables, including multimodal interaction patterns, response behavior, guardrails, and recovery flows across current and exploratory hardware programs.'
    },
    {
      title: 'Senior Product Design Manager - AI Interaction Systems',
      org: 'Meta Reality Labs',
      dates: 'May 2021 - Aug 2023',
      desc: 'Led design work across AI-driven interaction systems for Meta hardware, with a focus on behavioral quality, coherence, and cross-surface experience patterns across voice, presence, and embodied assistants.'
    },
    {
      title: 'Product Designer - Portal, Quest & Ray-Ban Stories',
      org: 'Facebook / Meta Reality Labs',
      dates: 'Sep 2018 - Jun 2021',
      desc: 'Designed conversational frameworks and interaction patterns for AI-assisted consumer hardware, spanning smart displays, VR, and early wearables.'
    },
    {
      title: 'Designer - Innovation Group',
      org: 'Wells Fargo',
      dates: 'May 2018 - Sep 2018',
      desc: 'Prototyped conversational and AI-assisted product concepts for financial health in a regulated environment.'
    },
    {
      title: 'Lead Conversation Designer',
      org: 'Botanic Technologies',
      dates: 'Feb 2017 - Jul 2018',
      desc: 'Led conversation design across voice and text systems, including persona design, dialog behavior, escalation patterns, and interaction architecture.'
    },
    {
      title: 'User Experience Designer',
      org: 'City of Oakland',
      dates: 'Aug 2017 - Feb 2018',
      desc: 'Redesigned public-facing civic technology systems and service interactions.'
    },
    {
      title: 'User Experience Designer',
      org: 'Field Day Lab // UW-Madison',
      dates: 'Sep 2016 - Jan 2018',
      desc: 'Designed interaction and narrative systems for educational software, simulations, and science learning experiences.'
    },
    {
      title: 'Instructor - Writing & Rhetoric',
      org: 'Columbia College Chicago',
      dates: 'Jan 2011 - May 2012',
      desc: 'Taught courses in writing, rhetoric, argumentation, and critical reasoning.'
    }
  ],
  patents: {
    granted: [
      {
        num: 'US 12,131,733',
        title: 'Active Listening for Assistant Systems',
        date: 'Granted Oct 29, 2024',
        abstract: 'Method where an assistant, activated by wake word, enters listening mode with continuous non-visual feedback, then transitions to inactive after processing utterance.',
        coinventors: 'H.W. Black, R.F. Stewart, T. Ramanan, S.S. Noertker'
      },
      {
        num: 'US 11,563,706',
        title: 'Generating Context-Aware Rendering of Media Contents for Assistant Systems',
        date: 'Granted Jan 24, 2023',
        abstract: 'Delivering media content based on priority levels and context from multimodal signals. Personalized notifications across modalities.',
        coinventors: 'M. Greenberg, C.E. Balmes, F.P. Penov, S. Goel, Y. Pu'
      }
    ],
    published: [
      {
        num: 'US 20260087801',
        title: 'Methods for Conversational Interactions with an AI Assistant',
        date: 'Published Mar 26, 2026',
        abstract: 'AI assistant on smart glasses invoked without a query; uses camera data to determine when to proactively assist user about objects in view.'
      },
      {
        num: 'US 20260079358',
        title: 'Systems, Methods, and Devices for Servicing and/or Maintaining Wearable Devices',
        date: 'Published Mar 19, 2026',
        abstract: 'Battery serviceability for smart glasses - hybrid seal design allowing 1,000+ battery replacement cycles while maintaining water/dust protection.'
      },
      {
        num: 'US 20250384596',
        title: 'Interaction Initiation by a Virtual Assistant',
        date: 'Published Dec 18, 2025',
        abstract: 'Analyzing contextual clues from XR environment; AI proactively superimposes customized digital information via virtual assistant to recommend actions.'
      },
      {
        num: 'US 20260045084',
        title: 'Wearable Device Including an AI Assistant for Generating Responses to User Requests',
        date: 'Published Feb 12, 2026',
        abstract: 'Head-wearable device captures contextual data (image, audio, sensor), determines contextual cues, provides to AI assistant which generates ML-based response.'
      }
    ],
    pendingCount: 1
  },
  casestudies: {
    meta: {
      title: 'DOSSIER 001: AI on Wearables',
      content: `<span class="orange bold">CONTEXT:</span> AI interaction design for smart glasses at Meta Reality Labs.

<span class="orange bold">PROBLEM:</span> Screenless devices change the interaction model. The assistant has limited output bandwidth, operates in public, and has access to camera and environmental context. The design challenge is not just capability, but legibility, trust, and recovery.

<span class="orange bold">SCOPE:</span> Worked on assistant behavior and interaction design for wearable AI systems, including behavioral patterns, prompt-like instruction structures, guardrails, and recovery flows across current and exploratory hardware programs.

<span class="orange bold">KEY DECISIONS:</span> Helped define how multimodal context should shape assistant responses, how the system should signal uncertainty or limits, and how hands-free interactions should remain coherent over repeated use.

<span class="orange bold">OUTCOME:</span> Contributed to the interaction foundations for AI experiences on smart glasses as the category expanded from capture and audio toward more capable multimodal assistance.`
    },
    meta2: {
      title: 'DOSSIER 002: AI Interaction Systems',
      content: `<span class="orange bold">CONTEXT:</span> Design leadership across AI-driven interaction systems in Meta hardware.

<span class="orange bold">PROBLEM:</span> Assistant quality varied across devices. Users encountered inconsistent tone, behavior, recovery patterns, and escalation across Portal, Quest, and early wearables.

<span class="orange bold">SCOPE:</span> Led design work across voice, presence, and embodied assistant experiences. Focused on behavioral quality, coherence, and cross-surface interaction patterns.

<span class="orange bold">KEY DECISIONS:</span> Established shared expectations for assistant behavior, including tone, refusals, recovery, and behavioral review practices for quality and safety issues.

<span class="orange bold">OUTCOME:</span> Helped create a more consistent behavioral foundation for Meta assistant experiences across hardware surfaces.`
    },
    meta3: {
      title: 'DOSSIER 003: Portal, Quest, and Ray-Ban Stories',
      content: `<span class="orange bold">CONTEXT:</span> Early assistant and voice interaction design across multiple consumer hardware platforms.

<span class="orange bold">PROBLEM:</span> The same assistant needed to work across devices with very different affordances: a smart display, a VR headset, and camera glasses.

<span class="orange bold">SCOPE:</span> Designed conversational frameworks and interaction patterns for AI-assisted consumer hardware, including multimodal contexts and always-available interaction models.

<span class="orange bold">KEY DECISIONS:</span> Worked on how assistant behavior should adapt to each device form factor while still feeling like part of one system.

<span class="orange bold">OUTCOME:</span> Contributed to foundational interaction patterns that informed later assistant experiences on Meta hardware.`
    },
    botanic: {
      title: 'DOSSIER 004: Botanic Technologies',
      content: `<span class="orange bold">CONTEXT:</span> Early work in conversation design for voice and text systems.

<span class="orange bold">PROBLEM:</span> Most conversational products at the time relied on scripts and narrow decision trees. The interaction design challenge was making systems feel more natural, coherent, and usable.

<span class="orange bold">SCOPE:</span> Led conversation design across voice and text interfaces, including persona design, dialog structure, escalation paths, and interaction behavior.

<span class="orange bold">KEY DECISIONS:</span> Developed frameworks for behavioral consistency, personality, and handoff across conversational surfaces.

<span class="orange bold">OUTCOME:</span> Built the design foundations that later carried into more complex assistant and AI behavior work.`
    },
    fieldday: {
      title: 'DOSSIER 005: Field Day Lab',
      content: `<span class="orange bold">CONTEXT:</span> Educational software, games, and simulations focused on science learning.

<span class="orange bold">PROBLEM:</span> Complex scientific systems are difficult to teach through static interfaces. The challenge was making them understandable and engaging without flattening the underlying ideas.

<span class="orange bold">SCOPE:</span> Worked on interaction and narrative systems for research-driven educational products, including AR, simulation, and game-based learning experiences.

<span class="orange bold">KEY DECISIONS:</span> Focused on clarity, feedback, and interaction models that made unfamiliar systems feel usable and intuitive.

<span class="orange bold">OUTCOME:</span> Helped shape products that translated difficult scientific concepts into accessible interactive experiences.`
    }
  },
  skills: [
    'AI Model Behavior',
    'Conversational AI Design',
    'Voice & Personality Architecture',
    'AR/XR Interaction Design',
    'Wearable AI Systems',
    'Prompting & Guardrails',
    'Design Management',
    'User Research',
    'Prototyping',
    'Philosophy of Mind'
  ]
};

export function Terminal() {
  const [lines, setLines] = useState<CommandLine[]>([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [activeNav, setActiveNav] = useState('');
  const [hasBooted, setHasBooted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>('clear-light');
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isBootingRef = useRef(true);

  const bootTimeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    if (!hasBooted) {
      bootSequence();
      setHasBooted(true);
    }
    setTimeout(() => {
      isBootingRef.current = false;
      inputRef.current?.focus();
    }, 800);

    return () => {
      bootTimeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (!isBootingRef.current && inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [lines]);

  const addLine = (content: string, isHtml = true, className = '') => {
    setLines(prev => [...prev, { type: 'output', content, isHtml, className }]);
  };

  const addCommand = (cmd: string) => {
    setLines(prev => [
      ...prev,
      {
        type: 'command',
        content: cmd,
        isHtml: false
      }
    ]);
  };

  const bootSequence = () => {
    const delays = [0, 80, 160, 240, 320, 360, 400, 450, 500, 550, 600, 650, 700, 750];

    BOOT_LINES.forEach((lineContent, i) => {
      const delay = delays[Math.min(i, delays.length - 1)];
      const timeout = setTimeout(() => {
        addLine(lineContent);
      }, delay);
      bootTimeoutsRef.current.push(timeout);
    });
  };

  const cancelBootSequence = () => {
    bootTimeoutsRef.current.forEach(clearTimeout);
    bootTimeoutsRef.current = [];
  };

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    addCommand(trimmed);
    setHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    switch (command) {
      case 'help':
        showHelp();
        setActiveNav('');
        break;
      case 'about':
      case 'whoami':
        showAbout();
        setActiveNav('about');
        break;
      case 'work':
        showWork();
        setActiveNav('work');
        break;
      case 'ls':
        showLs(args);
        setActiveNav('');
        break;
      case 'cat':
        showCat(args);
        if (args.toLowerCase() === 'patents') setActiveNav('patents');
        else if (args.toLowerCase() === 'research') setActiveNav('research');
        else setActiveNav('');
        break;
      case 'history':
        showHistory();
        setActiveNav('');
        break;
      case 'skills':
        showSkills();
        setActiveNav('');
        break;
      case 'contact':
        showContact();
        setActiveNav('contact');
        break;
      case 'mode':
        showMode();
        setActiveNav('');
        break;
      case 'theme':
        handleTheme(args);
        setActiveNav('');
        break;
      case 'clear':
        setLines([]);
        setActiveNav('');
        break;
      default:
        askAI(trimmed);
        break;
    }
  };

  const askAI = async (query: string) => {
    addLine('<span class="dim blink ai-loading">Processing query...</span>');

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ca6a59aa/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          message: query,
          provider: 'openai',
          userId: 'guest-user'
        })
      });

      setLines(prev => prev.filter(l => !l.content.includes('Processing query...')));

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to connect to AI subsystem.');
      }

      const data = await response.json();

      if (data.error) {
        addLine(`<span class="red">AI ERROR: ${data.error}</span>`);
      } else if (data.response) {
        const formattedResponse = data.response.replace(/\n/g, '<br/>');
        addLine(`<span class="green">${formattedResponse}</span>`);
      } else {
        addLine('<span class="red">AI ERROR: Invalid response structure</span>');
      }
    } catch (error) {
      setLines(prev => prev.filter(l => !l.content.includes('Processing query...')));
      addLine(`<span class="red">AI SUBSYSTEM OFFLINE OR ERROR: ${(error as Error).message}</span>`);
      addLine('<span class="dim">Type "help" for available commands.</span>');
    }

    setActiveNav('');
  };

  const handleNavClick = (cmd: string, navKey: string) => {
    cancelBootSequence();

    setLines(
      BOOT_LINES.map(content => ({
        type: 'output',
        content,
        isHtml: true,
        className: ''
      }))
    );

    executeCommand(cmd);
    setActiveNav(navKey);
  };

  const showHelp = () => {
    addLine('<span class="orange bold">AVAILABLE COMMANDS:</span>');
    addLine('&nbsp;');
    const cmds = [
      ['about', 'Profile'],
      ['work', 'Career overview'],
      ['cat meta', 'Case study: AI on wearables'],
      ['cat meta2', 'Case study: AI interaction systems'],
      ['cat meta3', 'Case study: Portal, Quest, and Stories'],
      ['cat patents', 'Patent registry'],
      ['cat research', 'Independent research interests'],
      ['cat education', 'Education'],
      ['history', 'Career timeline'],
      ['skills', 'Core competencies'],
      ['contact', 'Contact'],
      ['clear', 'Clear terminal'],
      ['theme', 'Terminal theme picker'],
      ['help', 'This message']
    ];
    cmds.forEach(c => {
      addLine(`  <span class="yellow">${c[0].padEnd(28)}</span><span class="dim">${c[1]}</span>`);
    });
    addLine('&nbsp;');
    addLine('<span class="dim">// Or just type a question in plain English.</span>');
  };

  const showWork = () => {
    addLine('<span class="orange bold">═══ WORK ═══</span>');
    addLine('&nbsp;');
    addLine('<span class="yellow bold">META REALITY LABS</span> <span class="dim">// 2018-Present</span>');
    addLine('<span class="dim">Designing AI behavior and interaction systems across consumer hardware, from voice assistants on early devices to multimodal AI on wearables.</span>');
    addLine('&nbsp;');

    const r0 = DATA.roles[0];
    addLine(`  <span class="orange bold">${r0.title}</span>`);
    addLine(`  <span class="dim">${r0.dates}</span>`);
    addLine(`  <span class="green">${r0.desc}</span>`);
    addLine('&nbsp;');

    const r1 = DATA.roles[1];
    addLine(`  <span class="orange bold">${r1.title}</span>`);
    addLine(`  <span class="dim">${r1.dates}</span>`);
    addLine(`  <span class="green">${r1.desc}</span>`);
    addLine('&nbsp;');

    const r2 = DATA.roles[2];
    addLine(`  <span class="orange bold">${r2.title}</span>`);
    addLine(`  <span class="dim">${r2.dates}</span>`);
    addLine(`  <span class="green">${r2.desc}</span>`);
    addLine('&nbsp;');

    addLine('  <span class="dim">// Deep dives: <span class="yellow">cat meta</span> · <span class="yellow">cat meta2</span> · <span class="yellow">cat meta3</span> · <span class="yellow">cat patents</span></span>');
    addLine('&nbsp;');
    addLine('<span class="yellow bold">PRIOR</span>');
    addLine('&nbsp;');

    for (let i = 3; i < DATA.roles.length; i++) {
      const r = DATA.roles[i];
      addLine(`  <span class="dim">${r.dates.padEnd(26)}</span><span class="orange">${r.title}</span> <span class="dim">@ ${r.org}</span>`);
    }
    addLine('&nbsp;');
    addLine('<span class="dim">// Full timeline: <span class="yellow">history</span></span>');
  };

  const showAbout = () => {
    addLine('<span class="orange bold">═══ PROFILE ═══</span>');
    addLine('&nbsp;');
    const d = DATA.bio;
    const fields = [
      ['NAME', d.name],
      ['ROLE', `<span class="orange">${d.role}</span>`],
      ['ORGANIZATION', `<span class="yellow">${d.org}</span>`],
      ['LOCATION', d.location],
      ['FOCUS', d.specialization]
    ];
    fields.forEach(f => {
      addLine(`  <span class="dim">${f[0].padEnd(14)}</span>${f[1]}`);
    });
    addLine('&nbsp;');

    ABOUT_TEXT.forEach(paragraph => {
      if (paragraph.trim() === '') {
        addLine('&nbsp;');
      } else {
        addLine(`<span class="dim">${paragraph}</span>`);
      }
    });
  };

  const showLs = (args: string) => {
    const sub = args.trim().toLowerCase();
    if (sub === 'work' || sub === 'projects' || sub === '') {
      addLine('<span class="orange bold">═══ PROJECTS & ROLES ═══</span>');
      addLine('&nbsp;');
      DATA.roles.forEach((r, i) => {
        addLine(`  <span class="yellow">${r.dates.padEnd(26)}</span><span class="orange">${r.title}</span>`);
        addLine(`  ${''.padEnd(26)}<span class="dim">@ ${r.org}</span>`);
        if (i < DATA.roles.length - 1) addLine('');
      });
    } else {
      addLine(`<span class="red">ls: cannot access '${args}': No such directory</span>`);
      addLine('<span class="dim">Try: ls work, ls projects</span>');
    }
  };

  const showCat = (args: string) => {
    const file = args.trim().toLowerCase();
    if (!file) {
      addLine('<span class="red">cat: missing file operand</span>');
      addLine('<span class="dim">Try: cat meta, cat patents, cat education, cat research</span>');
      return;
    }

    if (DATA.casestudies[file as keyof typeof DATA.casestudies]) {
      const cs = DATA.casestudies[file as keyof typeof DATA.casestudies];
      addLine(`<span class="orange bold">═══ ${cs.title} ═══</span>`);
      addLine('&nbsp;');
      addLine(cs.content);
      return;
    }

    switch (file) {
      case 'patents':
        showPatents();
        break;
      case 'education':
        showEducation();
        break;
      case 'research':
        showResearch();
        break;
      default:
        addLine(`<span class="red">cat: ${file}: No such file or directory</span>`);
        addLine('<span class="dim">Available: meta, meta2, meta3, botanic, fieldday, patents, education, research</span>');
    }
  };

  const showPatents = () => {
    addLine('<span class="orange bold">═══ PATENT REGISTRY ═══</span>');
    addLine('<span class="dim">// Granted patents and published applications</span>');
    addLine('&nbsp;');
    addLine(`  <span class="yellow bold">GRANTED: 2</span>  |  <span class="orange bold">PUBLISHED: 4</span>  |  <span class="yellow">PENDING: 1</span>  |  <span class="white bold">TOTAL: 7</span>`);
    addLine('&nbsp;');

    DATA.patents.granted.forEach(p => {
      addLine(`  <span class="yellow">${p.num}</span>  <span class="patent-status granted">GRANTED</span>`);
      addLine(`  <span class="orange bold">${p.title}</span>`);
      addLine(`  <span class="dim">${p.date} · Assignee: Meta Platforms, Inc.</span>`);
      addLine(`  <span class="green">${p.abstract}</span>`);
      if (p.coinventors) addLine(`  <span class="dim">Co-inventors: ${p.coinventors}</span>`);
      addLine('&nbsp;');
    });

    DATA.patents.published.forEach(p => {
      addLine(`  <span class="yellow">${p.num}</span>  <span class="patent-status published">PUBLISHED</span>`);
      addLine(`  <span class="orange bold">${p.title}</span>`);
      addLine(`  <span class="dim">${p.date} · Assignee: Meta Platforms Technologies</span>`);
      addLine(`  <span class="green">${p.abstract}</span>`);
      addLine('&nbsp;');
    });

    addLine(`  <span class="patent-status pending">PENDING</span>  <span class="yellow">+ 1 additional application pending (not yet published)</span>`);
  };

  const showEducation = () => {
    addLine('<span class="orange bold">═══ EDUCATION ═══</span>');
    addLine('&nbsp;');
    DATA.bio.education.forEach(e => {
      addLine(`  <span class="yellow">></span> ${e}`);
    });
    addLine('&nbsp;');
    addLine('<span class="dim">Background in philosophy and writing, carried forward into the design of AI systems and interaction behavior.</span>');
  };

  const showResearch = () => {
    addLine('<span class="orange bold">═══ RESEARCH INTERESTS ═══</span>');
    addLine('&nbsp;');
    addLine('  <span class="dim">FOCUS AREAS:</span>');
    addLine('  <span class="yellow">></span> Alignment');
    addLine('  <span class="yellow">></span> Interpretability');
    addLine('  <span class="yellow">></span> Multi-agent systems');
    addLine('  <span class="yellow">></span> AI-to-AI communication');
    addLine('&nbsp;');
    addLine('  <span class="dim">FOUNDATIONS:</span>');
    addLine('  <span class="yellow">></span> Philosophy of mind');
    addLine('  <span class="yellow">></span> Epistemology');
    addLine('  <span class="yellow">></span> Language');
    addLine('  <span class="yellow">></span> Ethics');
    addLine('&nbsp;');
    addLine('<span class="dim">Interested in model behavior for agentic and multimodal systems, especially where interaction design, safety, and real-world use intersect.</span>');
  };

  const showHistory = () => {
    addLine('<span class="orange bold">═══ CAREER TIMELINE ═══</span>');
    addLine('&nbsp;');
    DATA.roles.forEach(r => {
      addLine(`  <span class="orange">></span> <span class="yellow">${r.dates}</span>`);
      addLine(`    <span class="orange bold">${r.title}</span>`);
      addLine(`    <span class="dim">@ ${r.org}</span>`);
      addLine(`    <span class="green">${r.desc}</span>`);
      addLine('&nbsp;');
    });
  };

  const showSkills = () => {
    addLine('<span class="orange bold">═══ CORE COMPETENCIES ═══</span>');
    addLine('&nbsp;');
    DATA.skills.forEach(s => {
      addLine(`  <span class="yellow">></span> ${s}`);
    });
  };

  const showContact = () => {
    addLine('<span class="orange bold">═══ CONTACT ═══</span>');
    addLine('&nbsp;');
    addLine(`  <span class="dim">EMAIL:</span>      <a href="mailto:leif.haven@gmail.com">leif.haven@gmail.com</a>`);
    addLine(`  <span class="dim">WEBSITE:</span>    <a href="https://lhm.works" target="_blank" rel="noopener noreferrer">lhm.works</a>`);
  };

  const showMode = () => {
    addLine('<span class="orange bold">═══ AI STATUS ═══</span>');
    addLine('&nbsp;');
    addLine('  <span class="dim">ENDPOINT:</span>  <span class="green">OPENAI CONNECTED</span>');
    addLine('  <span class="dim">STATUS:</span>   <span class="green">ONLINE</span>');
    addLine('&nbsp;');
    addLine('<span class="dim">// Natural language queries are enabled.</span>');
  };

  const handleTheme = (args: string) => {
    const themeName = args.trim().toLowerCase();
    if (!themeName) {
      addLine('<span class="orange bold">═══ THEME PICKER ═══</span>');
      addLine('&nbsp;');
      addLine(`  <span class="dim">CURRENT:</span> <span class="yellow">${currentTheme}</span>`);
      addLine('&nbsp;');
      Object.entries(THEMES).forEach(([key, t]) => {
        const marker = key === currentTheme ? '<span class="yellow"> *</span>' : '';
        addLine(`  <span class="yellow">${key.padEnd(18)}</span><span class="dim">${t.name}</span>${marker}`);
      });
      addLine('&nbsp;');
      addLine('<span class="dim">Usage: <span class="yellow">theme [name]</span></span>');
      return;
    }
    if (THEMES[themeName]) {
      setCurrentTheme(themeName);
      addLine(`<span class="green">Theme changed to <span class="yellow">${THEMES[themeName].name}</span>.</span>`);
    } else {
      addLine(`<span class="red">theme: '${themeName}' not found</span>`);
      addLine('<span class="dim">Type <span class="yellow">theme</span> to see available themes.</span>');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    }
  };

  const theme = THEMES[currentTheme];

  const themeStyle = {
    '--t-bg': theme.bg,
    '--t-text': theme.text,
    '--t-green': theme.green,
    '--t-orange': theme.orange,
    '--t-yellow': theme.yellow,
    '--t-red': theme.red,
    '--t-dim': theme.dim,
    '--t-white': theme.white,
    '--t-prompt': theme.promptColor,
    '--t-selection-bg': theme.selectionBg,
    '--t-selection-text': theme.selectionText,
    '--t-link': theme.linkColor,
    '--t-link-hover': theme.linkHover,
    '--t-nav-border': theme.navBorder,
    '--t-nav-bg': theme.navBg,
    '--t-scanline': theme.scanlineColor,
    '--t-cursor': theme.cursorColor,
    '--t-crt-opacity': theme.crtOpacity,
    '--t-flicker': theme.flicker,
    '--t-glow': theme.glow,
  } as React.CSSProperties;

  return (
    <div className="terminal-container" style={themeStyle}>
      <nav className="nav-bar">
        <div className="nav-row">
            <button
              className={`nav-item ${activeNav === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about', 'about')}
            >
              about
            </button>
            <button
              className={`nav-item ${activeNav === 'work' ? 'active' : ''}`}
              onClick={() => handleNavClick('work', 'work')}
            >
              work
            </button>
            <button
              className={`nav-item ${activeNav === 'patents' ? 'active' : ''}`}
              onClick={() => handleNavClick('cat patents', 'patents')}
            >
              patents
            </button>
            <button
              className={`nav-item ${activeNav === 'research' ? 'active' : ''}`}
              onClick={() => handleNavClick('cat research', 'research')}
            >
              research
            </button>
            <button
              className={`nav-item ${activeNav === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact', 'contact')}
            >
              contact
            </button>
        </div>
      </nav>

      <div className="terminal-content">
        <div className="terminal-output" ref={outputRef}>
          {lines.map((line, i) => (
            <div key={i} className={`terminal-line ${line.className || ''}`}>
              {line.type === 'command' ? (
                <>
                  <span className="prompt-color">
                    <span className="orange">visitor</span>@<span className="yellow">lhm.works</span>:~$
                  </span>{' '}
                  <span className="green">{line.content}</span>
                </>
              ) : line.isHtml ? (
                <span dangerouslySetInnerHTML={{ __html: line.content }} />
              ) : (
                <span>{line.content}</span>
              )}
            </div>
          ))}
        </div>
        <div className="terminal-input-line">
          <span className="prompt-text">
            <span className="orange">visitor</span>@<span className="yellow">lhm.works</span>:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}