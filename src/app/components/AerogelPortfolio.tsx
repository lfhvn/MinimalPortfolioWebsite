import React, { useState } from 'react';
import { DraggableWindow } from './DraggableWindow';
import { CaseStudies } from './CaseStudies';
import { NavigationMenu } from './NavigationMenu';
import { Taskbar } from './Taskbar';
import { TerminalCLI } from './TerminalCLI';
import { Writing } from './Writing';
import { ColorSchemeSettings } from './ColorSchemeSettings';
import { useIsMobile } from './ui/use-mobile';

interface WindowState {
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

type WindowStates = {
  [key: string]: WindowState;
};

export function AerogelPortfolio() {
  const isMobile = useIsMobile();
  const [windowStates, setWindowStates] = useState<WindowStates>({
    about: { isOpen: true, isMinimized: false, isMaximized: false, zIndex: 100 },
    experience: { isOpen: true, isMinimized: true, isMaximized: false, zIndex: 101 },
    work: { isOpen: true, isMinimized: true, isMaximized: false, zIndex: 102 },
    writing: { isOpen: true, isMinimized: true, isMaximized: false, zIndex: 103 },
    contact: { isOpen: true, isMinimized: true, isMaximized: false, zIndex: 104 },
    settings: { isOpen: true, isMinimized: true, isMaximized: false, zIndex: 105 },
    reality: { isOpen: true, isMinimized: true, isMaximized: false, zIndex: 106 }
  });

  const [highestZIndex, setHighestZIndex] = useState(107);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [currentCaseStudy, setCurrentCaseStudy] = useState<string | null>(null);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
  const [showCLI, setShowCLI] = useState(true);

  const handleWindowAction = (windowId: string, action: 'close' | 'minimize' | 'maximize' | 'open' | 'focus') => {
    if (isMobile) {
      if (action === 'minimize' || action === 'open') {
        setActiveMobileSection(activeMobileSection === windowId ? null : windowId);
      } else if (action === 'close') {
        setActiveMobileSection(null);
      }
      return;
    }

    setWindowStates(prev => {
      const currentState = prev[windowId];
      
      if (!currentState) {
        console.warn(`Window state for '${windowId}' not found`);
        return prev;
      }
      
      const newState = { ...currentState };

      switch (action) {
        case 'close':
          newState.isOpen = false;
          newState.isMinimized = true;
          if (activeWindowId === windowId) setActiveWindowId(null);
          break;
        case 'open':
          newState.isOpen = true;
          newState.isMinimized = false;
          setActiveWindowId(windowId);
          break;
        case 'minimize':
          if (!newState.isOpen) {
            newState.isOpen = true;
            newState.isMinimized = false;
            setActiveWindowId(windowId);
          } else {
            newState.isMinimized = !currentState.isMinimized;
            if (newState.isMinimized && activeWindowId === windowId) {
              setActiveWindowId(null);
            } else if (!newState.isMinimized) {
              setActiveWindowId(windowId);
            }
          }
          break;
        case 'maximize':
          newState.isMaximized = !currentState.isMaximized;
          setActiveWindowId(windowId);
          break;
        case 'focus':
          if (!newState.isOpen || newState.isMinimized) {
            newState.isOpen = true;
            newState.isMinimized = false;
          }
          setActiveWindowId(windowId);
          break;
      }

      if (action !== 'close' && (action === 'focus' || action === 'open' || (action === 'minimize' && !newState.isMinimized))) {
        newState.zIndex = highestZIndex + 1;
        setHighestZIndex(highestZIndex + 1);
      }

      return { ...prev, [windowId]: newState };
    });
  };

  const handleCaseStudyClick = (studyId: string) => {
    setCurrentCaseStudy(studyId);
  };

  const handleBackToWork = () => {
    setCurrentCaseStudy(null);
  };

  const handleCLINavigate = (section: string) => {
    setShowCLI(false);
    if (isMobile) {
      setActiveMobileSection(section);
    } else {
      const windowState = windowStates[section];
      if (!windowState?.isOpen) {
        handleWindowAction(section, 'open');
      } else {
        handleWindowAction(section, 'minimize');
      }
    }
  };

  // Mobile section content renderer
  const renderMobileSection = (sectionId: string) => {
    switch (sectionId) {
      case 'about':
        return (
          <div>
            <h1 className="glitch-hover scramble-text" data-text="LEIF HAVEN MARTINSON">LEIF HAVEN MARTINSON</h1>
            
            <div className="content-section">
              <div className="content-item">
                <div><strong>ROLE:</strong> Product Design Leader • AI / LLM Experience Architect</div>
                <div><strong>ORG:</strong> Meta Reality Labs</div>
                <div><strong>EMAIL:</strong> leif.haven@gmail.com</div>
                <div><strong>STATUS:</strong> Building ethical, high-impact AI product features</div>
              </div>
            </div>

            <h2>PROFILE</h2>
            <p>
              Design leader with 10+ years driving human-centered AI and HCI experiences. 
              Expert in AI/LLM architecture, model behavior, fine-tuning LLMs, prompting, 
              and building rigorous evaluation frameworks across AR/VR and wearable platforms. 
              Proven at partnering with research scientists, linguistic engineers, and policy 
              teams to ship ethical, high-impact AI product features. Currently at Meta Reality Labs leading AI on Wearables.
            </p>
          </div>
        );

      case 'experience':
        return (
          <div>
            <h2>Professional Experience</h2>
            
            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company glitch-hover scramble-text" data-text="Meta Platforms">Meta Platforms</span>
                <span className="experience-dates">2018 – Present</span>
              </div>
              <div className="experience-role">Principal Product Designer, Meta Reality Labs (2023 – Present)</div>
              <div className="experience-details">
                <div>• Leading AI integration for next-gen smart glasses and AR wearables</div>
                <div>• Designing prompt strategies and evaluation frameworks for Llama 3/4 models</div>
                <div>• Primary design lead for AI safety and model behavior across Reality Labs</div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-role">Product Design Manager, AI Infrastructure (2021 – 2023)</div>
              <div className="experience-details">
                <div>• Led 13-person design team building Meta's AR/VR AI platforms</div>
                <div>• Shipped Wit.ai integrations and Oculus Voice SDK</div>
                <div>• Embedded ethical guardrails into AI pipelines and release processes</div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-role">Senior Product Designer, Conversational AI (2018 – 2021)</div>
              <div className="experience-details">
                <div>• Designed voice interfaces for Portal, Quest, and Ray-Ban Stories</div>
                <div>• Established usability benchmarks for AI interactions</div>
                <div>• Created design guidelines for conversational AI experiences</div>
              </div>
            </div>

            <h2>Additional UX & Design Roles</h2>
            
            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company">Wells Fargo Innovation Lab</span>
                <span className="experience-dates">2018</span>
              </div>
              <div className="experience-role">Lead Designer</div>
              <div className="experience-details">
                <div>• Designed conversational financial UIs and AR experiences</div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company">Botanic Technologies</span>
                <span className="experience-dates">2016 – 2018</span>
              </div>
              <div className="experience-role">Lead Designer</div>
              <div className="experience-details">
                <div>• Built personality-driven chatbots with NLP engineers</div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company">City of Oakland Innovation Fellowship</span>
                <span className="experience-dates">2017</span>
              </div>
              <div className="experience-role">UX Designer</div>
              <div className="experience-details">
                <div>• Redesigned public-sector interfaces for transparency and accessibility</div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company">Field Day Lab, Univ. of Wisconsin–Madison</span>
                <span className="experience-dates">2015 – 2017</span>
              </div>
              <div className="experience-role">UX Designer</div>
              <div className="experience-details">
                <div>• Built educational games with voice-guided interactions</div>
              </div>
            </div>

            <h2>Education</h2>
            
            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company">Columbia College Chicago</span>
                <span className="experience-dates">2015</span>
              </div>
              <div className="experience-role">Master of Fine Arts, Creative Writing (Poetry)</div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company">University of Wisconsin–Madison</span>
                <span className="experience-dates">2010</span>
              </div>
              <div className="experience-role">Bachelor of Arts, English & Philosophy (Double Major)</div>
            </div>

            {/* PATENTS & INNOVATIONS SECTION - MOVED FROM ABOUT */}
            <h2>PATENTS & INNOVATIONS</h2>
            <div className="content-section highlight-section">
              <div className="patent-item">
                <strong>US 12,131,733 B2</strong> – Active Listening for Assistant Systems
              </div>
              <div className="patent-item">
                <strong>US 11,563,706 B1</strong> – Context-Aware Rendering of Media Contents for Assistants
              </div>
              <div className="patent-item">
                <strong>US 2022/0199079 A1</strong> – Systems for Smart Assistant User Experiences
              </div>
              <div className="patent-item">
                <strong>US 2022/0269870 A1</strong> – Readout of Non-Latin or Non-Parsable Content
              </div>
              <div className="patent-item">
                <strong>EP 4327200 A1</strong> – Auto-Capture of Interesting Moments by Assistant Systems
              </div>
              <div className="patent-item">
                <strong>WO 2022/226244 A1</strong> – Multi-Device Mediation for Assistant Systems
              </div>
              <div className="patent-item">
                <strong>EP 4327197 A1</strong> – Task Execution Based on Real-World Text Detection for Assistant Systems
              </div>
            </div>

            {/* CORE SKILLS SECTION - MOVED FROM ABOUT */}
            <h2>CORE SKILLS</h2>
            <div className="content-section">
              <div className="skills-list">
                <div>• LLM Fine-Tuning & Prompt Engineering</div>
                <div>• Model Behavior Evaluation & Metrics</div>
                <div>• Human–Computer Interaction (HCI)</div>
                <div>• Cross-Functional Leadership & Mentorship</div>
                <div>• Design Systems & Rapid Prototyping</div>
                <div>• Ethical AI Design & Policy Alignment</div>
              </div>
            </div>
          </div>
        );

      case 'writing':
        return <Writing />;

      case 'work':
        return currentCaseStudy ? (
          <CaseStudies study={currentCaseStudy} onBack={handleBackToWork} />
        ) : (
          <div>
            <h2>Case Studies & Project Work</h2>
            
            <div className="project-item">
              <span 
                className="project-title glitch-hover scramble-text"
                data-text="ray-ban-meta.md"
                onClick={() => handleCaseStudyClick('smart-glasses')}
              >
                ray-ban-meta.md
              </span>
              <div className="project-meta">
                <span className="project-dates">2023-present</span>
              </div>
              <div className="project-description">
                Next-gen AI glasses with multimodal capabilities. Leading design for advanced AI that can see, hear, and understand context.
              </div>
            </div>

            <div className="project-item">
              <span 
                className="project-title glitch-hover scramble-text"
                data-text="ray-ban-stories.md"
                onClick={() => handleCaseStudyClick('ray-ban-stories')}
              >
                ray-ban-stories.md
              </span>
              <div className="project-meta">
                <span className="project-dates">2019-2021</span>
              </div>
              <div className="project-description">
                First consumer smart glasses. Led AI interaction design for voice commands and camera features.
              </div>
            </div>

            <div className="project-item">
              <span 
                className="project-title glitch-hover scramble-text"
                data-text="whisperer-vr.md"
                onClick={() => handleCaseStudyClick('whisperer')}
              >
                whisperer-vr.md
              </span>
              <div className="project-meta">
                <span className="project-dates">2022</span>
              </div>
              <div className="project-description">
                Voice-only VR puzzle game developed with BUCK. Flagship demo for Meta Voice SDK proving natural language can drive core gameplay.
              </div>
            </div>

            <div className="project-item">
              <span 
                className="project-title glitch-hover scramble-text"
                data-text="world-beyond.md"
                onClick={() => handleCaseStudyClick('world-beyond')}
              >
                world-beyond.md
              </span>
              <div className="project-meta">
                <span className="project-dates">2021-2022</span>
              </div>
              <div className="project-description">
                Interactive mixed reality demo showcasing Meta's Presence Platform with voice-controlled virtual pet Oppy.
              </div>
            </div>

            <div className="project-item">
              <span 
                className="project-title glitch-hover scramble-text"
                data-text="ai-ecosystem.md"
                onClick={() => handleCaseStudyClick('ai-ecosystem')}
              >
                ai-ecosystem.md
              </span>
              <div className="project-meta">
                <span className="project-dates">2020-2023</span>
              </div>
              <div className="project-description">
                AI developer ecosystem including Voice SDK for Oculus and Wit.ai conversational AI platform.
              </div>
            </div>

            <div className="project-item">
              <span 
                className="project-title glitch-hover scramble-text"
                data-text="quest-ai-features.md"
                onClick={() => handleCaseStudyClick('quest-ai')}
              >
                quest-ai-features.md
              </span>
              <div className="project-meta">
                <span className="project-dates">2020-2022</span>
              </div>
              <div className="project-description">
                VR voice interactions and spatial computing. Designed AI that understands 3D environments.
              </div>
            </div>

            <div className="project-item">
              <span 
                className="project-title glitch-hover scramble-text"
                data-text="portal-devices.md"
                onClick={() => handleCaseStudyClick('portal-devices')}
              >
                portal-devices.md
              </span>
              <div className="project-meta">
                <span className="project-dates">2018-2020</span>
              </div>
              <div className="project-description">
                AI-powered video calling for families. Smart camera features and conversational AI for home environments.
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div>
            <h2>Professional Contact</h2>
            
            <p>
              Connect with me on LinkedIn to discuss opportunities in AI design, wearables, or human-computer interaction.
            </p>
            
            <div className="content-section">
              <a 
                href="https://linkedin.com/in/leifhavenmartinson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link glitch-hover scramble-text"
                data-text="LinkedIn Profile →"
              >
                LinkedIn Profile →
              </a>
              
              <a 
                href="mailto:leif.haven@gmail.com"
                className="contact-link glitch-hover scramble-text"
                data-text="Email: leif.haven@gmail.com →"
              >
                Email: leif.haven@gmail.com →
              </a>
              
              <a 
                href="https://lhm.works" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link glitch-hover scramble-text"
                data-text="Portfolio: lhm.works →"
              >
                Portfolio: lhm.works →
              </a>
            </div>
            
            <div className="content-section highlight-section">
              <h3>Current Focus</h3>
              <p>
                Building the future of AI for wearables at Meta Reality Labs. Leading design for 
                next-generation smart glasses and AR/VR experiences that feel natural and intuitive.
              </p>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div>
            <h2>Portfolio Settings</h2>
            <p>Configure terminal themes and interface preferences.</p>
            <div className="content-section">
              <ColorSchemeSettings />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isMobile) {
    return (
      <div className="aerogel-desktop">
        <div className="aerogel-topbar">
          <div className="aerogel-topbar-left">
            <NavigationMenu 
              windowStates={windowStates}
              handleWindowAction={handleWindowAction}
              activeMobileSection={activeMobileSection}
              setActiveMobileSection={setActiveMobileSection}
            />
          </div>
          <div className="aerogel-topbar-center">
            {/* Removed terminal button */}
          </div>
          <div className="aerogel-topbar-right">
            <div className="aerogel-status-indicator">
              <span className="status-dot"></span>
              <span>online</span>
            </div>
          </div>
        </div>

        {showCLI && !activeMobileSection ? (
          <TerminalCLI onNavigate={handleCLINavigate} />
        ) : activeMobileSection ? (
          <div className="mobile-content-section">
            <button
              onClick={() => {
                setActiveMobileSection(null);
                setShowCLI(true);
              }}
              className="mobile-back-button glitch-hover scramble-text"
              data-text="← back"
            >
              ← back
              <span className="back-button-subtitle">
                {activeMobileSection}.txt
              </span>
            </button>
            {renderMobileSection(activeMobileSection)}
          </div>
        ) : (
          <div className="terminal-welcome scan-lines">
            <div className="terminal-welcome-window">
              <div className="terminal-welcome-header">
                <div className="terminal-welcome-controls">
                  <div className="terminal-dot"></div>
                  <div className="terminal-dot"></div>
                  <div className="terminal-dot"></div>
                </div>
                <div className="terminal-welcome-title glitch-hover scramble-text" data-text="lhm@portfolio:~$">lhm@portfolio:~$</div>
              </div>
              <div className="terminal-welcome-content">
                <div className="terminal-boot-sequence">
                  <div className="boot-line">[  OK  ] portfolio system initialized</div>
                  <div className="boot-line">[  OK  ] loading applications...</div>
                  <div className="boot-line">[  OK  ] 5 modules ready</div>
                  <div className="boot-line">[READY] system online</div>
                </div>
                
                <div className="terminal-command-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-command">ls -la ~/portfolio/</span>
                </div>
                
                <div className="terminal-file-listing">
                  <div 
                    className="terminal-file-item glitch-hover scramble-text" 
                    data-text="◦ about.txt"
                    onClick={() => setActiveMobileSection('about')}
                  >
                    <span className="file-permissions">-rw-r--r--</span>
                    <span className="file-icon">◦</span>
                    <span className="file-name">about.txt</span>
                    <span className="file-desc">personal information</span>
                  </div>
                  <div 
                    className="terminal-file-item glitch-hover scramble-text" 
                    data-text="◈ experience/"
                    onClick={() => setActiveMobileSection('experience')}
                  >
                    <span className="file-permissions">drwxr-xr-x</span>
                    <span className="file-icon">◈</span>
                    <span className="file-name">experience/</span>
                    <span className="file-desc">career timeline</span>
                  </div>
                  <div 
                    className="terminal-file-item glitch-hover scramble-text" 
                    data-text="◇ work/"
                    onClick={() => setActiveMobileSection('work')}
                  >
                    <span className="file-permissions">drwxr-xr-x</span>
                    <span className="file-icon">◇</span>
                    <span className="file-name">work/</span>
                    <span className="file-desc">case studies</span>
                  </div>
                  <div 
                    className="terminal-file-item glitch-hover scramble-text" 
                    data-text="◐ writing/"
                    onClick={() => setActiveMobileSection('writing')}
                  >
                    <span className="file-permissions">drwxr-xr-x</span>
                    <span className="file-icon">◐</span>
                    <span className="file-name">writing/</span>
                    <span className="file-desc">publications</span>
                  </div>
                  <div 
                    className="terminal-file-item glitch-hover scramble-text" 
                    data-text="● contact.sh"
                    onClick={() => setActiveMobileSection('contact')}
                  >
                    <span className="file-permissions">-rwxr-xr-x</span>
                    <span className="file-icon">●</span>
                    <span className="file-name">contact.sh</span>
                    <span className="file-desc">professional links</span>
                  </div>

                </div>
                
                <div className="terminal-command-line">
                  <span className="terminal-prompt">$</span>
                  <span className="terminal-cursor">_</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop version
  return (
    <div className="aerogel-desktop">
      {/* Background Terminal / Welcome Screen (shown when no windows active or as background) */}
      <div className="terminal-welcome scan-lines" style={{ zIndex: 0 }}>
        <div className="terminal-welcome-window">
          <div className="terminal-welcome-header">
            <div className="terminal-welcome-controls">
              <div className="terminal-dot" style={{ background: '#ff5f56' }}></div>
              <div className="terminal-dot" style={{ background: '#ffbd2e' }}></div>
              <div className="terminal-dot" style={{ background: '#27c93f' }}></div>
            </div>
            <div className="terminal-welcome-title glitch-hover scramble-text" data-text="lhm@portfolio:~$">lhm@portfolio:~$</div>
          </div>
          <div className="terminal-welcome-content">
            <div className="terminal-boot-sequence">
              <div className="boot-line">[  OK  ] portfolio system initialized</div>
              <div className="boot-line">[  OK  ] loading applications...</div>
              <div className="boot-line">[READY] system online</div>
            </div>
            
            <div className="terminal-command-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command">launch_gui.exe</span>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center', opacity: 0.6, fontSize: '12px' }}>
              Select an application from the dock to begin.
            </div>
          </div>
        </div>
      </div>

      <div className="aerogel-topbar">
        <div className="aerogel-topbar-left">
          {/* Navigation Menu removed for desktop, replaced by Taskbar */}
        </div>
        <div className="aerogel-topbar-center">
          {/* Removed terminal button */}
        </div>
        <div className="aerogel-topbar-right">
          <div className="aerogel-status-indicator">
            <span className="status-dot"></span>
            <span>online</span>
          </div>
        </div>
      </div>

      {/* ABOUT WINDOW */}
      {windowStates.about?.isOpen && !windowStates.about?.isMinimized && (
        <DraggableWindow
          title="about.txt"
          isMaximized={windowStates.about.isMaximized}
          zIndex={windowStates.about.zIndex}
          onClose={() => handleWindowAction('about', 'close')}
          onMinimize={() => handleWindowAction('about', 'minimize')}
          onMaximize={() => handleWindowAction('about', 'maximize')}
          onFocus={() => handleWindowAction('about', 'focus')}
        >
          <div>
            <h1 className="glitch-hover scramble-text" data-text="LEIF HAVEN MARTINSON">LEIF HAVEN MARTINSON</h1>
            
            <div className="content-section">
              <div className="content-item">
                <div><strong>ROLE:</strong> Product Design Leader • AI / LLM Experience Architect</div>
                <div><strong>ORG:</strong> Meta Reality Labs</div>
                <div><strong>EMAIL:</strong> leif.haven@gmail.com</div>
                <div><strong>STATUS:</strong> Building ethical, high-impact AI product features</div>
              </div>
            </div>

            <h2>PROFILE</h2>
            <p>
              Design leader with 10+ years driving human-centered AI and HCI experiences. 
              Expert in AI/LLM architecture, model behavior, fine-tuning LLMs, prompting, 
              and building rigorous evaluation frameworks across AR/VR and wearable platforms. 
              Proven at partnering with research scientists, linguistic engineers, and policy 
              teams to ship ethical, high-impact AI product features. Currently at Meta Reality Labs leading AI on Wearables.
            </p>
          </div>
        </DraggableWindow>
      )}

      {/* EXPERIENCE WINDOW */}
      {windowStates.experience?.isOpen && !windowStates.experience?.isMinimized && (
        <DraggableWindow
          title="experience/"
          isMaximized={windowStates.experience.isMaximized}
          zIndex={windowStates.experience.zIndex}
          onClose={() => handleWindowAction('experience', 'close')}
          onMinimize={() => handleWindowAction('experience', 'minimize')}
          onMaximize={() => handleWindowAction('experience', 'maximize')}
          onFocus={() => handleWindowAction('experience', 'focus')}
        >
          <div>
            <h2>Professional Experience</h2>
            
            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company glitch-hover scramble-text" data-text="Meta Platforms">Meta Platforms</span>
                <span className="experience-dates">2018 – Present</span>
              </div>
              <div className="experience-role">Principal Product Designer, Meta Reality Labs (2023 – Present)</div>
              <div className="experience-details">
                <div>• Leading AI integration for next-gen smart glasses and AR wearables</div>
                <div>• Designing prompt strategies and evaluation frameworks for Llama 3/4 models</div>
                <div>• Primary design lead for AI safety and model behavior across Reality Labs</div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-role">Product Design Manager, AI Infrastructure (2021 – 2023)</div>
              <div className="experience-details">
                <div>• Led 13-person design team building Meta's AR/VR AI platforms</div>
                <div>• Shipped Wit.ai integrations and Oculus Voice SDK</div>
                <div>• Embedded ethical guardrails into AI pipelines and release processes</div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-role">Senior Product Designer, Conversational AI (2018 – 2021)</div>
              <div className="experience-details">
                <div>• Designed voice interfaces for Portal, Quest, and Ray-Ban Stories</div>
                <div>• Established usability benchmarks for AI interactions</div>
                <div>• Created design guidelines for conversational AI experiences</div>
              </div>
            </div>

            <h2>Additional UX & Design Roles</h2>
            
            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company">Wells Fargo Innovation Lab</span>
                <span className="experience-dates">2018</span>
              </div>
              <div className="experience-role">Lead Designer</div>
              <div className="experience-details">
                <div>• Designed conversational financial UIs and AR experiences</div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company">Botanic Technologies</span>
                <span className="experience-dates">2016 – 2018</span>
              </div>
              <div className="experience-role">Lead Designer</div>
              <div className="experience-details">
                <div>• Built personality-driven chatbots with NLP engineers</div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company">City of Oakland Innovation Fellowship</span>
                <span className="experience-dates">2017</span>
              </div>
              <div className="experience-role">UX Designer</div>
              <div className="experience-details">
                <div>• Redesigned public-sector interfaces for transparency and accessibility</div>
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company">Field Day Lab, Univ. of Wisconsin–Madison</span>
                <span className="experience-dates">2015 – 2017</span>
              </div>
              <div className="experience-role">UX Designer</div>
              <div className="experience-details">
                <div>• Built educational games with voice-guided interactions</div>
              </div>
            </div>

            <h2>Education</h2>
            
            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company">Columbia College Chicago</span>
                <span className="experience-dates">2015</span>
              </div>
              <div className="experience-role">Master of Fine Arts, Creative Writing (Poetry)</div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <span className="experience-company">University of Wisconsin–Madison</span>
                <span className="experience-dates">2010</span>
              </div>
              <div className="experience-role">Bachelor of Arts, English & Philosophy (Double Major)</div>
            </div>

            {/* PATENTS & INNOVATIONS SECTION - MOVED FROM ABOUT */}
            <h2>PATENTS & INNOVATIONS</h2>
            <div className="content-section highlight-section">
              <div className="patent-item">
                <strong>US 12,131,733 B2</strong> – Active Listening for Assistant Systems
              </div>
              <div className="patent-item">
                <strong>US 11,563,706 B1</strong> – Context-Aware Rendering of Media Contents for Assistants
              </div>
              <div className="patent-item">
                <strong>US 2022/0199079 A1</strong> – Systems for Smart Assistant User Experiences
              </div>
              <div className="patent-item">
                <strong>US 2022/0269870 A1</strong> – Readout of Non-Latin or Non-Parsable Content
              </div>
              <div className="patent-item">
                <strong>EP 4327200 A1</strong> – Auto-Capture of Interesting Moments by Assistant Systems
              </div>
              <div className="patent-item">
                <strong>WO 2022/226244 A1</strong> – Multi-Device Mediation for Assistant Systems
              </div>
              <div className="patent-item">
                <strong>EP 4327197 A1</strong> – Task Execution Based on Real-World Text Detection for Assistant Systems
              </div>
            </div>

            {/* CORE SKILLS SECTION - MOVED FROM ABOUT */}
            <h2>CORE SKILLS</h2>
            <div className="content-section">
              <div className="skills-list">
                <div>• LLM Fine-Tuning & Prompt Engineering</div>
                <div>• Model Behavior Evaluation & Metrics</div>
                <div>• Human–Computer Interaction (HCI)</div>
                <div>• Cross-Functional Leadership & Mentorship</div>
                <div>• Design Systems & Rapid Prototyping</div>
                <div>• Ethical AI Design & Policy Alignment</div>
              </div>
            </div>
          </div>
        </DraggableWindow>
      )}

      {/* WORK WINDOW */}
      {windowStates.work?.isOpen && !windowStates.work?.isMinimized && (
        <DraggableWindow
          title="work/"
          isMaximized={windowStates.work.isMaximized}
          zIndex={windowStates.work.zIndex}
          onClose={() => handleWindowAction('work', 'close')}
          onMinimize={() => handleWindowAction('work', 'minimize')}
          onMaximize={() => handleWindowAction('work', 'maximize')}
          onFocus={() => handleWindowAction('work', 'focus')}
        >
          {currentCaseStudy ? (
            <CaseStudies study={currentCaseStudy} onBack={handleBackToWork} />
          ) : (
            <div>
              <h2>Case Studies & Project Work</h2>
              
              <div className="project-item">
                <span 
                  className="project-title glitch-hover scramble-text"
                  data-text="ray-ban-meta.md"
                  onClick={() => handleCaseStudyClick('smart-glasses')}
                >
                  ray-ban-meta.md
                </span>
                <div className="project-meta">
                  <span className="project-dates">2023-present</span>
                </div>
                <div className="project-description">
                  Next-gen AI glasses with multimodal capabilities. Leading design for advanced AI that can see, hear, and understand context.
                </div>
              </div>

              <div className="project-item">
                <span 
                  className="project-title glitch-hover scramble-text"
                  data-text="ray-ban-stories.md"
                  onClick={() => handleCaseStudyClick('ray-ban-stories')}
                >
                  ray-ban-stories.md
                </span>
                <div className="project-meta">
                  <span className="project-dates">2019-2021</span>
                </div>
                <div className="project-description">
                  First consumer smart glasses. Led AI interaction design for voice commands and camera features.
                </div>
              </div>

              <div className="project-item">
                <span 
                  className="project-title glitch-hover scramble-text"
                  data-text="whisperer-vr.md"
                  onClick={() => handleCaseStudyClick('whisperer')}
                >
                  whisperer-vr.md
                </span>
                <div className="project-meta">
                  <span className="project-dates">2022</span>
                </div>
                <div className="project-description">
                  Voice-only VR puzzle game developed with BUCK. Flagship demo for Meta Voice SDK proving natural language can drive core gameplay.
                </div>
              </div>

              <div className="project-item">
                <span 
                  className="project-title glitch-hover scramble-text"
                  data-text="world-beyond.md"
                  onClick={() => handleCaseStudyClick('world-beyond')}
                >
                  world-beyond.md
                </span>
                <div className="project-meta">
                  <span className="project-dates">2021-2022</span>
                </div>
                <div className="project-description">
                  Interactive mixed reality demo showcasing Meta's Presence Platform with voice-controlled virtual pet Oppy.
                </div>
              </div>

              <div className="project-item">
                <span 
                  className="project-title glitch-hover scramble-text"
                  data-text="ai-ecosystem.md"
                  onClick={() => handleCaseStudyClick('ai-ecosystem')}
                >
                  ai-ecosystem.md
                </span>
                <div className="project-meta">
                  <span className="project-dates">2020-2023</span>
                </div>
                <div className="project-description">
                  AI developer ecosystem including Voice SDK for Oculus and Wit.ai conversational AI platform.
                </div>
              </div>

              <div className="project-item">
                <span 
                  className="project-title glitch-hover scramble-text"
                  data-text="quest-ai-features.md"
                  onClick={() => handleCaseStudyClick('quest-ai')}
                >
                  quest-ai-features.md
                </span>
                <div className="project-meta">
                  <span className="project-dates">2020-2022</span>
                </div>
                <div className="project-description">
                  VR voice interactions and spatial computing. Designed AI that understands 3D environments.
                </div>
              </div>

              <div className="project-item">
                <span 
                  className="project-title glitch-hover scramble-text"
                  data-text="portal-devices.md"
                  onClick={() => handleCaseStudyClick('portal-devices')}
                >
                  portal-devices.md
                </span>
                <div className="project-meta">
                  <span className="project-dates">2018-2020</span>
                </div>
                <div className="project-description">
                  AI-powered video calling for families. Smart camera features and conversational AI for home environments.
                </div>
              </div>
            </div>
          )}
        </DraggableWindow>
      )}

      {/* WRITING WINDOW */}
      {windowStates.writing?.isOpen && !windowStates.writing?.isMinimized && (
        <DraggableWindow
          title="writing/"
          isMaximized={windowStates.writing.isMaximized}
          zIndex={windowStates.writing.zIndex}
          onClose={() => handleWindowAction('writing', 'close')}
          onMinimize={() => handleWindowAction('writing', 'minimize')}
          onMaximize={() => handleWindowAction('writing', 'maximize')}
          onFocus={() => handleWindowAction('writing', 'focus')}
        >
          <Writing />
        </DraggableWindow>
      )}

      {/* CONTACT WINDOW */}
      {windowStates.contact?.isOpen && !windowStates.contact?.isMinimized && (
        <DraggableWindow
          title="contact.sh"
          isMaximized={windowStates.contact.isMaximized}
          zIndex={windowStates.contact.zIndex}
          onClose={() => handleWindowAction('contact', 'close')}
          onMinimize={() => handleWindowAction('contact', 'minimize')}
          onMaximize={() => handleWindowAction('contact', 'maximize')}
          onFocus={() => handleWindowAction('contact', 'focus')}
        >
          <div>
            <h2>Professional Contact</h2>
            
            <p>
              Connect with me on LinkedIn to discuss opportunities in AI design, wearables, or human-computer interaction.
            </p>
            
            <div className="content-section">
              <a 
                href="https://linkedin.com/in/leifhavenmartinson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link glitch-hover scramble-text"
                data-text="LinkedIn Profile →"
              >
                LinkedIn Profile →
              </a>
              
              <a 
                href="mailto:leif.haven@gmail.com"
                className="contact-link glitch-hover scramble-text"
                data-text="Email: leif.haven@gmail.com →"
              >
                Email: leif.haven@gmail.com →
              </a>
              
              <a 
                href="https://lhm.works" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link glitch-hover scramble-text"
                data-text="Portfolio: lhm.works →"
              >
                Portfolio: lhm.works →
              </a>
            </div>
            
            <div className="content-section highlight-section">
              <h3>Current Focus</h3>
              <p>
                Building the future of AI for wearables at Meta Reality Labs. Leading design for 
                next-generation smart glasses and AR/VR experiences that feel natural and intuitive.
              </p>
            </div>
          </div>
        </DraggableWindow>
      )}

      {/* SETTINGS WINDOW */}
      {windowStates.settings?.isOpen && !windowStates.settings?.isMinimized && (
        <DraggableWindow
          title="settings"
          isMaximized={windowStates.settings.isMaximized}
          zIndex={windowStates.settings.zIndex}
          onClose={() => handleWindowAction('settings', 'close')}
          onMinimize={() => handleWindowAction('settings', 'minimize')}
          onMaximize={() => handleWindowAction('settings', 'maximize')}
          onFocus={() => handleWindowAction('settings', 'focus')}
        >
          <div>
            <h2>Portfolio Settings</h2>
            <p>Configure terminal themes and interface preferences.</p>
            <div className="content-section">
              <ColorSchemeSettings />
            </div>
          </div>
        </DraggableWindow>
      )}

      {/* TASKBAR */}
      <Taskbar 
        windowStates={windowStates}
        activeWindowId={activeWindowId}
        onWindowAction={handleWindowAction}
      />
    </div>
  );
}
