import React, { useState, useEffect, useRef } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface FileSystemNode {
  name: string;
  type: 'file' | 'directory';
  content?: string;
  children?: { [key: string]: FileSystemNode };
  permissions: string;
  size?: string;
  modified?: string;
  description?: string;
}

// File system structure matching the portfolio
const fileSystem: { [key: string]: FileSystemNode } = {
  'home': {
    name: 'home',
    type: 'directory',
    permissions: 'drwxr-xr-x',
    children: {
      'lhm': {
        name: 'lhm',
        type: 'directory',
        permissions: 'drwxr-xr-x',
        children: {
          'portfolio': {
            name: 'portfolio',
            type: 'directory',
            permissions: 'drwxr-xr-x',
            children: {
              'about.txt': {
                name: 'about.txt',
                type: 'file',
                permissions: '-rw-r--r--',
                size: '1.9K',
                modified: '2025-01-24',
                description: 'Who I am & what I do',
                content: `LEIF HAVEN MARTINSON
================================

I design AI for wearables at Meta Reality Labs.

Right now I'm working on smart glasses that let you talk to AI
about what you're seeing. Think: "Hey Meta, what kind of dog is that?"
and getting an actual helpful answer through your glasses.

WHAT I DO
---------
I'm a Principal Product Designer focused on making AI feel natural
and useful in everyday life. My background in philosophy helps me
think about how technology should work for humans, not the other way around.

Most of my work involves:
• Designing how AI should respond (prompt engineering, fine-tuning)
• Building safety systems (so AI doesn't say dumb or harmful stuff)
• Voice interaction design (making conversations feel natural)
• Privacy & ethics (because glasses with AI are... sensitive)

CURRENT FOCUS
-------------
Smart glasses with multimodal AI. You can ask about what you see,
translate languages in real-time, or just get quick info without
pulling out your phone.

The interesting challenge: making AI feel like a helpful companion,
not a creepy robot watching your life.

BACKGROUND
----------
Philosophy degree → Design → AI wearables

I think a lot about consciousness, language, and how we interact with
technology. That philosophy background actually matters when you're
designing AI that talks to people all day.
`
              },
              'experience': {
                name: 'experience',
                type: 'directory',
                permissions: 'drwxr-xr-x',
                children: {
                  'meta-reality-labs.md': {
                    name: 'meta-reality-labs.md',
                    type: 'file',
                    permissions: '-rw-r--r--',
                    size: '2.1K',
                    modified: '2025-01-24',
                    description: 'What I actually do at Meta',
                    content: `META REALITY LABS
==================
2018 - Present | Principal Designer

I work on AI for wearables - mostly smart glasses right now.

WHAT I'VE SHIPPED
-----------------
• Ray-Ban Stories (2021) - First consumer smart glasses with voice control
• Ray-Ban Meta (2023) - Added multimodal AI that can see and hear
• Quest AI features - Voice interaction stuff for VR
• Dev tools for voice AI - Helped other teams build voice experiences

THE ACTUAL WORK
---------------
A lot of my job is designing how AI behaves. That means:

- Writing system prompts and fine-tuning models
- Figuring out what AI should say (and what it definitely shouldn't)
- Building safety rails so the AI doesn't mess up
- Testing edge cases (trust me, people ask AI some weird stuff)
- Designing voice interactions that don't feel robotic

Also spent time building tools for developers to integrate voice AI
into their VR apps. Turns out voice is really good for VR because
your hands are busy.
`
                  },
                  'wells-fargo.md': {
                    name: 'wells-fargo.md',
                    type: 'file',
                    permissions: '-rw-r--r--',
                    size: '0.4K',
                    modified: '2018-12-01',
                    description: 'Brief stint in fintech',
                    content: `WELLS FARGO INNOVATION
=======================
2018 | UX Designer

Worked on digital banking stuff for a few months.
Helped design some fintech features before moving to Meta.

Not much to say here - learned a lot about financial systems,
then pivoted to wearables.
`
                  }
                }
              },
              'work': {
                name: 'work',
                type: 'directory',
                permissions: 'drwxr-xr-x',
                children: {
                  'ray-ban-meta.md': {
                    name: 'ray-ban-meta.md',
                    type: 'file',
                    permissions: '-rw-r--r--',
                    size: '4.7K',
                    modified: '2024-12-15',
                    description: 'Next-gen AI smart glasses',
                    content: `RAY-BAN META SMART GLASSES
===========================
2023 - Present | Principal Designer

Next-generation AI glasses with multimodal capabilities.
Leading design for advanced AI that can see, hear, and understand context.

Features:
• Multimodal AI assistant
• Visual question answering
• Real-time translation
• Contextual understanding
• Privacy-first design

Status: In Development
`
                  },
                  'ray-ban-stories.md': {
                    name: 'ray-ban-stories.md',
                    type: 'file',
                    permissions: '-rw-r--r--',
                    size: '3.8K',
                    modified: '2021-09-09',
                    description: 'First consumer smart glasses',
                    content: `RAY-BAN STORIES
================
2019 - 2021 | Principal Designer

First consumer smart glasses. Led AI interaction design 
for voice commands and camera features.

Features:
• Voice-activated capture
• Hands-free calling
• Smart camera controls
• Seamless social sharing

Status: Shipped (2021)
Impact: 1M+ units sold
`
                  }
                }
              },
              'writing': {
                name: 'writing',
                type: 'directory',
                permissions: 'drwxr-xr-x',
                children: {
                  'ai-ethics-design.md': {
                    name: 'ai-ethics-design.md',
                    type: 'file',
                    permissions: '-rw-r--r--',
                    size: '4.2K',
                    modified: '2024-11-15',
                    description: 'Ethics in AI Design for Wearables',
                    content: `ETHICS IN AI DESIGN FOR WEARABLES
===================================

As AI becomes more integrated into our daily lives through wearable devices, 
designers must grapple with fundamental questions about privacy, agency, and 
human dignity.

KEY PRINCIPLES:
• Privacy by Design - Default to user control
• Transparent AI - Users should understand what AI is doing
• Human Agency - Technology should augment, not replace human decision-making
• Inclusive Design - AI should work for diverse populations
• Responsible Data - Minimal collection, maximum user benefit

The challenge for designers is creating experiences that feel magical while 
maintaining trust and respecting human autonomy.

CASE STUDY: RAY-BAN META GLASSES
When designing AI for smart glasses, we faced unique privacy challenges:
- Always-on AI processing personal visual and audio data
- Social situations where others might not consent to recording
- Balancing AI capability with user understanding and control

Our approach prioritized transparency and user agency:
- Clear visual and audio indicators when AI is active
- Granular privacy controls for different contexts
- On-device processing to minimize data sharing
- User education about AI capabilities and limitations

Published in ACM Interactions, November 2024
`
                  },
                  'future-of-wearables.md': {
                    name: 'future-of-wearables.md',
                    type: 'file',
                    permissions: '-rw-r--r--',
                    size: '3.8K',
                    modified: '2024-09-22',
                    description: 'The Future of Wearable AI',
                    content: `THE FUTURE OF WEARABLE AI
==========================

Wearable AI represents a fundamental shift from reactive to proactive technology. 
Instead of waiting for user input, AI glasses can understand context and provide 
assistance before being asked.

EMERGING PARADIGMS:
• Ambient Computing - Technology that fades into the background
• Contextual AI - Understanding environment, relationships, and intent
• Multimodal Interaction - Seamless voice, vision, and gesture
• Personal AI - Assistants that learn and adapt to individual users
• Spatial Computing - AI that understands 3D environments

DESIGN IMPLICATIONS:
The next decade will see AI wearables become as essential as smartphones, 
but with greater intimacy and lower friction. Key design challenges include:

- Invisible Interfaces: AI should work without explicit commands
- Social Integration: Technology must respect social norms and contexts
- Energy Efficiency: Always-on AI requires breakthrough battery technology
- Privacy Preservation: Intimate data requires new protection paradigms
- Inclusive Design: AI must work for diverse populations and use cases

PHILOSOPHICAL CONSIDERATIONS:
As wearables become more intelligent, we must consider their impact on human 
agency and consciousness. Will AI glasses enhance or diminish our connection 
to the world? How do we maintain human autonomy while benefiting from AI assistance?

These questions guide my work on next-generation wearable experiences.

Keynote presentation at CHI 2024 Conference
`
                  },
                  'design-philosophy.md': {
                    name: 'design-philosophy.md',
                    type: 'file',
                    permissions: '-rw-r--r--',
                    size: '5.1K',
                    modified: '2024-08-10',
                    description: 'Philosophy of Mind in Interface Design',
                    content: `PHILOSOPHY OF MIND IN INTERFACE DESIGN
======================================

My background in philosophy deeply influences my approach to AI design. 
Understanding consciousness, language, and perception is crucial for creating 
natural human-AI interactions.

PHILOSOPHICAL FOUNDATIONS:

1. EMBODIED COGNITION
The mind extends beyond the brain into the world through tools and environment.
Wearable AI should feel like an extension of human cognition, not a separate entity.

Design implication: AI glasses should augment perception, not replace it.
The interface should be invisible, making AI feel like enhanced human capability.

2. PHENOMENOLOGY
First-person experience shapes how we interact with technology.
What matters is not just what AI can do, but how it feels to use it.

Design implication: User research must capture subjective experience, not just
behavioral metrics. The feeling of using AI is as important as its functionality.

3. PHILOSOPHY OF LANGUAGE
Meaning emerges through conversation, context, and shared understanding.
AI communication requires understanding pragmatics, not just semantics.

Design implication: Conversational AI must understand context, intent, and
social appropriateness. It's not enough to process words - AI must understand meaning.

4. ETHICS OF TECHNOLOGY
We have moral responsibility for the technologies we create.
AI design choices shape human behavior and social relationships.

Design implication: Every design decision has ethical implications.
We must consider not just what we can build, but what we should build.

PRACTICAL APPLICATIONS:

In my work on Ray-Ban Meta glasses, these philosophical insights guided key decisions:
- Prioritizing user agency over AI automation
- Designing for transparency and understanding, not just efficiency
- Considering social and ethical implications of always-on AI
- Creating interactions that feel natural and human-centered

The intersection of philosophy and design leads to more thoughtful, humane technology.

Essay published in Philosophical Studies in Technology, August 2024
`
                  },
                  'conversational-ai.md': {
                    name: 'conversational-ai.md',
                    type: 'file',
                    permissions: '-rw-r--r--',
                    size: '3.5K',
                    modified: '2024-06-18',
                    description: 'Designing Conversational AI for Wearables',
                    content: `DESIGNING CONVERSATIONAL AI FOR WEARABLES
==========================================

Conversational AI on wearables requires fundamentally different design patterns 
than traditional chatbots or voice assistants. The intimate, always-on nature 
of wearables demands more nuanced interaction design.

KEY DESIGN CONSIDERATIONS:

1. AMBIENT AWARENESS
AI should understand when to interrupt and when to wait. Unlike smartphones,
wearables are always present and must be socially appropriate.

Design patterns:
- Contextual interruption: Use environmental cues to determine appropriateness
- Progressive disclosure: Start with subtle cues, escalate if needed
- User control: Always allow users to defer or dismiss AI suggestions

2. CONTEXTUAL RELEVANCE
Responses must be appropriate to physical environment and social situation.
AI needs spatial, temporal, and social awareness.

Design patterns:
- Location-aware responses: Different AI behavior for home vs. work vs. public
- Time-sensitive interactions: Morning briefings vs. evening summaries
- Social context detection: Quiet AI during meetings or conversations

3. ENERGY EFFICIENCY
Conversations must be optimized for battery life and thermal constraints.
Every interaction has computational cost on wearable hardware.

Design patterns:
- Efficient wake words: Minimal false positives to save processing
- Local processing: On-device AI for common interactions
- Smart batching: Group related queries to minimize radio usage

4. PRIVACY PRESERVATION
Intimate conversations require special handling and user control.
Wearables hear and see everything - privacy is paramount.

Design patterns:
- On-device processing: Keep sensitive data local when possible
- Selective recording: Only capture when explicitly requested
- Transparency: Clear indicators when AI is listening or processing

CONVERSATION DESIGN PATTERNS:

1. Progressive Disclosure
Start simple, add complexity as needed:
"Weather today?" → "72°F, sunny" → "Want details?" → Full forecast

2. Graceful Degradation
Handle misunderstandings naturally:
"I didn't catch that. Could you rephrase?" vs. error messages

3. Multi-turn Conversations
Support complex, goal-oriented dialogues:
"Book dinner" → "What type of food?" → "Italian" → "What time?" → etc.

4. Proactive Assistance
Anticipate needs without being intrusive:
"Your meeting starts in 10 minutes. Want directions?"

The future of conversational AI lies in creating natural, contextual assistants 
that feel like trusted companions rather than robotic tools.

Article in UX Magazine, June 2024
`
                  }
                }
              },
              'reality.sim': {
                name: 'reality.sim',
                type: 'file',
                permissions: '-rwxr-xr-x',
                size: '12.3K',
                modified: '2025-01-05',
                description: 'Reality simulation interface',
                content: `REALITY SIMULATOR v4.2.1
==========================

An experimental interface exploring the intersection of 
consciousness, perception, and digital reality.

Available modes:
• Base Reality
• Augmented Reality  
• Virtual Reality
• AI-Mediated Reality
• Quantum Reality
• Pure Consciousness

Use 'open reality.sim' to launch the simulator.
`
              },

              'contact.sh': {
                name: 'contact.sh',
                type: 'file',
                permissions: '-rwxr-xr-x',
                size: '0.9K',
                modified: '2025-01-05',
                description: 'Professional contact script',
                content: `#!/bin/bash
# Professional Contact Information
#
# LinkedIn: https://linkedin.com/in/leifhavenmartinson
#
# Connect with me to discuss:
# • AI design opportunities
# • Wearables and AR/VR
# • Human-computer interaction
# • Philosophy and technology

echo "Opening LinkedIn profile..."
# Use 'open contact.sh' to access contact information
`
              }
            }
          }
        }
      }
    }
  }
};

interface TerminalCLIProps {
  onNavigate: (section: string) => void;
}

export function TerminalCLI({ onNavigate }: TerminalCLIProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<React.ReactNode[]>([
    <div key="init" className="terminal-boot-sequence">
      <div className="boot-line text-green-500">Leif Haven Martinson Portfolio CLI v2.5</div>
      <div className="boot-line">Type 'help' for available commands.</div>
      <div className="boot-line">Type 'ask {'<'}{'question'}{'>'}' to chat with the AI assistant.</div>
    </div>
  ]);
  const [currentPath, setCurrentPath] = useState<string[]>(['home', 'lhm', 'portfolio']);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const getCurrentDirectory = () => {
    let current = fileSystem['home'];
    // Skip 'home' in currentPath since we start at fileSystem['home']
    for (let i = 1; i < currentPath.length; i++) {
      if (current.children && current.children[currentPath[i]]) {
        current = current.children[currentPath[i]];
      } else {
        return null;
      }
    }
    return current;
  };

  const resolvePath = (path: string) => {
    if (path === '/') return ['home'];
    if (path === '~') return ['home', 'lhm', 'portfolio'];
    
    let newPath = path.startsWith('/') ? ['home'] : [...currentPath];
    const parts = path.split('/').filter(p => p && p !== '.');
    
    for (const part of parts) {
      if (part === '..') {
        if (newPath.length > 1) newPath.pop();
      } else {
        // Check if valid child exists
        let current = fileSystem['home'];
        for (let i = 1; i < newPath.length; i++) {
          if (current.children) current = current.children[newPath[i]];
        }
        
        if (current && current.children && current.children[part]) {
          newPath.push(part);
        } else {
          return null; // Invalid path
        }
      }
    }
    return newPath;
  };

  const getAllContent = (node: FileSystemNode): string => {
    let content = '';
    if (node.type === 'file' && node.content) {
      content += `FILE: ${node.name}\n${node.content}\n---\n`;
    }
    if (node.children) {
      for (const key in node.children) {
        content += getAllContent(node.children[key]);
      }
    }
    return content;
  };

  const handleCommand = async (cmdString: string) => {
    const trimmedCmd = cmdString.trim();
    if (!trimmedCmd) return;

    const [cmd, ...args] = trimmedCmd.split(' ');
    const argString = args.join(' ');

    // Add to output
    const newOutput = [
      ...output,
      <div key={Date.now() + '-cmd'} className="terminal-command-line mb-0 mt-2">
        <span className="terminal-prompt">lhm@portfolio:{currentPath.length > 3 ? '~/' + currentPath.slice(3).join('/') : '/' + currentPath.join('/')}$ </span>
        <span className="terminal-command">{trimmedCmd}</span>
      </div>
    ];

    switch (cmd) {
      case 'help':
        newOutput.push(
          <div key={Date.now() + '-res'} className="text-[var(--text)] whitespace-pre-wrap opacity-80">
            Available commands:{'\n'}
            ls       - List directory contents{'\n'}
            cd       - Change directory{'\n'}
            cat      - Read file{'\n'}
            open     - Open file in window{'\n'}
            clear    - Clear terminal{'\n'}
            ask      - Ask AI about Leif (e.g., "ask {'<'}{'question'}{'>'}"){'\n'}
            chat     - Alias for ask{'\n'}
            whois    - Display user info{'\n'}
            pwd      - Print working directory
          </div>
        );
        break;

      case 'clear':
        setOutput([]);
        return;

      case 'pwd':
        newOutput.push(
          <div key={Date.now() + '-res'} className="text-[var(--text)] opacity-80">
            /{currentPath.join('/')}
          </div>
        );
        break;

      case 'ls':
        const currentDir = getCurrentDirectory();
        if (currentDir && currentDir.children) {
          const items = Object.values(currentDir.children).map(item => (
            <div key={item.name} className="terminal-file-item" onClick={() => {
                if(item.type === 'directory') {
                    // cd into it
                    const newPath = [...currentPath, item.name];
                    setCurrentPath(newPath);
                } else {
                    // open it
                    const filename = item.name.toLowerCase();
                    if (filename.includes('about')) onNavigate('about');
                    else if (filename.includes('experience') || filename.includes('meta') || filename.includes('wells')) onNavigate('experience');
                    else if (filename.includes('work') || filename.includes('ray-ban') || filename.includes('quest') || filename.includes('portal')) onNavigate('work');
                    else if (filename.includes('writing') || filename.includes('ethics') || filename.includes('future') || filename.includes('philosophy')) onNavigate('writing');
                    else if (filename.includes('contact')) onNavigate('contact');
                    else if (filename.includes('reality')) onNavigate('reality');
                }
            }}>
              <span className="file-permissions">{item.permissions}</span>
              <span className="file-icon">{item.type === 'directory' ? '◈' : '◦'}</span>
              <span className="file-name" style={{ color: item.type === 'directory' ? 'var(--accent)' : 'var(--text)' }}>
                {item.name}{item.type === 'directory' ? '/' : ''}
              </span>
              <span className="file-desc">{item.description || ''}</span>
            </div>
          ));
          newOutput.push(<div key={Date.now() + '-res'} className="terminal-file-listing my-2">{items}</div>);
        } else {
          newOutput.push(<div key={Date.now() + '-res'} className="text-red-400">Error: Cannot list directory</div>);
        }
        break;

      case 'cd':
        if (!argString || argString === '~') {
          setCurrentPath(['home', 'lhm', 'portfolio']);
        } else {
          const targetPath = resolvePath(argString);
          if (targetPath) {
            // Check if it's a directory
            let current = fileSystem['home'];
            for (let i = 1; i < targetPath.length; i++) {
              if (current.children) current = current.children[targetPath[i]];
            }
            if (current.type === 'directory') {
              setCurrentPath(targetPath);
            } else {
              newOutput.push(<div key={Date.now() + '-res'} className="text-red-400">Error: Not a directory</div>);
            }
          } else {
            newOutput.push(<div key={Date.now() + '-res'} className="text-red-400">Error: No such file or directory</div>);
          }
        }
        break;

      case 'cat':
        if (!argString) {
          newOutput.push(<div key={Date.now() + '-res'} className="text-red-400">Usage: cat {'<'}{'filename'}{'>'}</div>);
        } else {
          const dir = getCurrentDirectory();
          if (dir && dir.children && dir.children[argString]) {
            const file = dir.children[argString];
            if (file.type === 'file') {
              newOutput.push(
                <div key={Date.now() + '-res'} className="whitespace-pre-wrap text-[var(--text)] opacity-90 my-2">
                  {file.content}
                </div>
              );
            } else {
              newOutput.push(<div key={Date.now() + '-res'} className="text-red-400">Error: Is a directory</div>);
            }
          } else {
            newOutput.push(<div key={Date.now() + '-res'} className="text-red-400">Error: File not found</div>);
          }
        }
        break;

      case 'open':
        if (!argString) {
          newOutput.push(<div key={Date.now() + '-res'} className="text-red-400">Usage: open {'<'}{'filename'}{'>'}</div>);
        } else {
          // Map filenames to sections
          const filename = argString.toLowerCase();
          if (filename.includes('about')) onNavigate('about');
          else if (filename.includes('experience') || filename.includes('meta') || filename.includes('wells')) onNavigate('experience');
          else if (filename.includes('work') || filename.includes('ray-ban') || filename.includes('quest') || filename.includes('portal')) onNavigate('work');
          else if (filename.includes('writing') || filename.includes('ethics') || filename.includes('future') || filename.includes('philosophy')) onNavigate('writing');
          else if (filename.includes('contact')) onNavigate('contact');
          else if (filename.includes('reality')) onNavigate('reality');
          else if (filename === '.') onNavigate('about'); // Open current dir?
          else {
             // Check if file exists
            const dir = getCurrentDirectory();
            if (dir && dir.children && dir.children[argString]) {
               newOutput.push(<div key={Date.now() + '-res'} className="text-[var(--accent)]">Opening {argString}...</div>);
            } else {
               newOutput.push(<div key={Date.now() + '-res'} className="text-red-400">Error: File not found</div>);
            }
          }
        }
        break;

      case 'ask':
      case 'chat':
        if (!argString) {
          newOutput.push(<div key={Date.now() + '-res'} className="text-red-400">Usage: {cmd} {'<'}{'question'}{'>'}</div>);
        } else {
          setIsProcessing(true);
          setOutput(newOutput); // Update immediately to show command
          
          // Add loading indicator
          const loadingId = Date.now() + '-loading';
          setOutput(prev => [...prev, <div key={loadingId} className="text-[var(--accent)] animate-pulse">Accessing neural network...</div>]);

          try {
            const portfolioContent = getAllContent(fileSystem['home']);
            const systemPrompt = `You are an AI assistant for Leif Haven Martinson's portfolio.
Use the following file contents to answer questions about Leif.
If the answer is not in the files, politely say you don't know but suggest contacting Leif.
Keep answers concise and formatted for a terminal interface.

FILE SYSTEM CONTENT:
${portfolioContent}`;

            const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-ca6a59aa/chat`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${publicAnonKey}`
              },
              body: JSON.stringify({
                message: argString,
                provider: 'openai',
                userId: 'portfolio-visitor',
                systemPrompt
              })
            });

            const data = await response.json();
            
            // Remove loading indicator and add response
            setOutput(prev => {
              const filtered = prev.filter(item => (item as React.ReactElement).key !== loadingId);
              return [...filtered, (
                <div key={Date.now() + '-ai-res'} className="whitespace-pre-wrap my-2 p-2 border-l-2 border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--text)]">
                  <div className="text-xs text-[var(--accent)] mb-1 font-bold">AI RESPONSE:</div>
                  {data.error ? `Error: ${data.error}` : data.response}
                </div>
              )];
            });

          } catch (err) {
            setOutput(prev => {
              const filtered = prev.filter(item => (item as React.ReactElement).key !== loadingId);
              return [...filtered, <div key={Date.now() + '-err'} className="text-red-500">System Error: {err instanceof Error ? err.message : 'Unknown error'}</div>];
            });
          } finally {
            setIsProcessing(false);
            return; // We updated output asynchronously
          }
        }
        break;

      default:
        newOutput.push(
          <div key={Date.now() + '-res'} className="text-red-400">
            Command not found: {cmd}. Type 'help' for available commands.
          </div>
        );
    }

    setOutput(newOutput);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (input.trim()) {
        setCommandHistory(prev => [...prev, input]);
        setHistoryIndex(commandHistory.length + 1);
        handleCommand(input);
        setInput('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex === -1 && commandHistory.length > 0) {
         const newIndex = commandHistory.length - 1;
         setHistoryIndex(newIndex);
         setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(commandHistory.length);
        setInput('');
      }
    }
  };

  return (
    <div className="terminal-welcome scan-lines h-full w-full absolute inset-0 z-0">
      <div className="terminal-welcome-window flex flex-col h-full max-h-[800px] w-full max-w-[1000px] shadow-2xl">
        <div className="terminal-welcome-header shrink-0">
          <div className="terminal-welcome-controls">
            <div className="terminal-dot"></div>
            <div className="terminal-dot"></div>
            <div className="terminal-dot"></div>
          </div>
          <div className="terminal-welcome-title glitch-hover scramble-text" data-text="lhm@portfolio:~$">lhm@portfolio:~$</div>
        </div>
        
        <div className="terminal-welcome-content flex-1 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[var(--border)] scrollbar-track-transparent px-2" ref={bottomRef}>
             {output}
             <div ref={bottomRef} />
          </div>
          
          <div className="terminal-command-line mt-2 pt-2 border-t border-[var(--border)] shrink-0">
            <span className="terminal-prompt">
              lhm@portfolio:{currentPath.length > 3 ? '~/' + currentPath.slice(3).join('/') : '/' + currentPath.join('/')}$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none border-none text-[var(--text)] placeholder-[var(--muted)] ml-2"
              placeholder={isProcessing ? "Processing..." : "Enter command..."}
              disabled={isProcessing}
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}
