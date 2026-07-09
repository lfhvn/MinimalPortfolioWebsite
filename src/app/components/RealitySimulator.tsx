import React, { useState, useEffect, useRef } from 'react';
import { RealityViewer } from './RealityViewer';

// Global reality state for UI effects
let globalRealityState = {
  isSimulationRunning: false,
  currentMode: 'base',
  realityStability: 100,
  effectIntensity: 0
};

// Function to update global reality state and apply effects
const updateGlobalRealityEffects = (state: typeof globalRealityState) => {
  globalRealityState = state;
  
  // Apply effects to the body based on reality mode
  const body = document.body;
  const html = document.documentElement;
  
  // Remove all existing reality effect classes
  body.classList.remove(
    'reality-glitch-virtual', 
    'reality-glitch-quantum', 
    'reality-glitch-consciousness', 
    'reality-glitch-ai',
    'weirdcore-distortion',
    'liminal-effect'
  );
  
  // Remove matrix effect if it exists
  const existingMatrix = document.querySelector('.matrix-effect');
  if (existingMatrix) {
    existingMatrix.remove();
  }
  
  if (state.isSimulationRunning && state.effectIntensity > 0) {
    switch (state.currentMode) {
      case 'virtual':
        body.classList.add('reality-glitch-virtual');
        break;
      case 'quantum':
        body.classList.add('reality-glitch-quantum');
        // Add matrix effect for quantum reality
        const matrixDiv = document.createElement('div');
        matrixDiv.className = 'matrix-effect';
        body.appendChild(matrixDiv);
        break;
      case 'consciousness':
        body.classList.add('reality-glitch-consciousness');
        body.classList.add('liminal-effect');
        break;
      case 'ai-mediated':
        body.classList.add('reality-glitch-ai');
        body.classList.add('weirdcore-distortion');
        break;
      case 'augmented':
        // Subtle effects for augmented reality
        body.style.filter = 'brightness(1.05) contrast(1.02)';
        break;
      default:
        body.style.filter = '';
        break;
    }
    
    // Adjust effect intensity based on stability
    if (state.realityStability < 50) {
      body.style.animation = 'glitch-hover 0.1s infinite';
    } else if (state.realityStability < 75) {
      body.style.animation = 'virtual-flicker 3s infinite';
    } else {
      body.style.animation = '';
    }
  } else {
    // Reset all effects
    body.style.filter = '';
    body.style.animation = '';
  }
};

// Export the update function for use by other components
export { updateGlobalRealityEffects, globalRealityState };

interface RealityMode {
  id: string;
  name: string;
  description: string;
  parameters: {
    temporalDilation: number;
    perceptionFilter: number;
    dataOverlay: number;
    consciousnessLevel: number;
    quantumCoherence: number;
  };
  status: 'stable' | 'fluctuating' | 'unstable' | 'critical';
  color: string;
  bgEffect: string;
}

const realityModes: RealityMode[] = [
  {
    id: 'base',
    name: 'BASE REALITY',
    description: 'Unfiltered physical reality - raw sensory input',
    parameters: {
      temporalDilation: 1.0,
      perceptionFilter: 0.0,
      dataOverlay: 0.0,
      consciousnessLevel: 1.0,
      quantumCoherence: 0.97
    },
    status: 'stable',
    color: '#00ff00',
    bgEffect: 'none'
  },
  {
    id: 'augmented',
    name: 'AUGMENTED REALITY',
    description: 'Physical reality enhanced with digital information layers',
    parameters: {
      temporalDilation: 1.0,
      perceptionFilter: 0.3,
      dataOverlay: 0.8,
      consciousnessLevel: 1.2,
      quantumCoherence: 0.89
    },
    status: 'stable',
    color: '#00dd00',
    bgEffect: 'linear-gradient(45deg, rgba(0,255,0,0.02) 0%, rgba(0,255,0,0.05) 100%)'
  },
  {
    id: 'virtual',
    name: 'VIRTUAL REALITY',
    description: 'Fully synthetic environment with haptic feedback',
    parameters: {
      temporalDilation: 0.8,
      perceptionFilter: 0.9,
      dataOverlay: 1.0,
      consciousnessLevel: 0.9,
      quantumCoherence: 0.45
    },
    status: 'fluctuating',
    color: '#00bb00',
    bgEffect: 'radial-gradient(circle, rgba(0,255,0,0.03) 0%, rgba(0,255,0,0.01) 100%)'
  },
  {
    id: 'ai-mediated',
    name: 'AI-MEDIATED REALITY',
    description: 'Reality processed through AI interpretation layers',
    parameters: {
      temporalDilation: 1.3,
      perceptionFilter: 0.7,
      dataOverlay: 0.6,
      consciousnessLevel: 1.5,
      quantumCoherence: 0.72
    },
    status: 'fluctuating',
    color: '#009900',
    bgEffect: 'repeating-linear-gradient(90deg, rgba(0,255,0,0.01) 0px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.01) 4px)'
  },
  {
    id: 'quantum',
    name: 'QUANTUM REALITY',
    description: 'Reality at the quantum level - superposition states',
    parameters: {
      temporalDilation: 0.2,
      perceptionFilter: 1.0,
      dataOverlay: 0.3,
      consciousnessLevel: 2.1,
      quantumCoherence: 0.12
    },
    status: 'unstable',
    color: '#007700',
    bgEffect: 'conic-gradient(from 180deg, rgba(0,255,0,0.02) 0deg, rgba(0,255,0,0.06) 90deg, rgba(0,255,0,0.02) 180deg)'
  },
  {
    id: 'consciousness',
    name: 'PURE CONSCIOUSNESS',
    description: 'Reality as experienced by pure awareness',
    parameters: {
      temporalDilation: 0.0,
      perceptionFilter: 0.0,
      dataOverlay: 0.0,
      consciousnessLevel: 3.0,
      quantumCoherence: 1.0
    },
    status: 'critical',
    color: '#005500',
    bgEffect: 'radial-gradient(ellipse, rgba(0,255,0,0.08) 0%, rgba(0,255,0,0.02) 40%, rgba(0,255,0,0.01) 100%)'
  }
];

export function RealitySimulator() {
  const [currentMode, setCurrentMode] = useState<RealityMode>(realityModes[0]);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [realityGlitches, setRealityGlitches] = useState<string[]>([]);
  const [simulationTime, setSimulationTime] = useState(0);
  const [quantumFlux, setQuantumFlux] = useState(0);
  const [realityStability, setRealityStability] = useState(100);
  const [activeParameters, setActiveParameters] = useState(currentMode.parameters);
  const [visualGlitch, setVisualGlitch] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [systemMessages, setSystemMessages] = useState<string[]>([
    'REALITY SIMULATOR v4.2.1 INITIALIZED',
    'QUANTUM FIELD GENERATORS: ONLINE',
    'CONSCIOUSNESS INTERFACE: CALIBRATED',
    'TEMPORAL STABILIZERS: ACTIVE'
  ]);

  useEffect(() => {
    // Update global reality effects whenever state changes
    updateGlobalRealityEffects({
      isSimulationRunning,
      currentMode: currentMode.id,
      realityStability,
      effectIntensity: isSimulationRunning ? (100 - realityStability) / 100 : 0
    });
    
    let intervalId: NodeJS.Timeout;
    let parameterIntervalId: NodeJS.Timeout;
    
    if (isSimulationRunning) {
      // Main simulation loop
      intervalId = setInterval(() => {
        setSimulationTime(prev => prev + 1);
        
        // Generate reality glitches based on current mode stability
        const glitchProbability = currentMode.status === 'stable' ? 0.08 : 
                                 currentMode.status === 'fluctuating' ? 0.2 :
                                 currentMode.status === 'unstable' ? 0.35 : 0.5;
        
        if (Math.random() < glitchProbability) {
          const glitches = [
            'TEMPORAL ANOMALY DETECTED - CORRECTING',
            'PERCEPTION DRIFT: +0.02σ - RECALIBRATING',
            'QUANTUM DECOHERENCE EVENT - STABILIZING',
            'CONSCIOUSNESS FLUCTUATION - MONITORING',
            'REALITY BUFFER OVERFLOW - CLEARING',
            'CAUSAL LOOP DETECTED - BREAKING',
            'DIMENSION LEAK: SEALING... [OK]',
            'PROBABILITY WAVE COLLAPSE - REFORMED',
            'NEURAL PATHWAY REROUTED',
            'SPACETIME CURVATURE ADJUSTED',
            'QUANTUM ENTANGLEMENT RESTORED',
            'REALITY MATRIX REFRESHED'
          ];
          
          const newGlitch = glitches[Math.floor(Math.random() * glitches.length)];
          setRealityGlitches(prev => [...prev.slice(-8), newGlitch]);
          
          // Trigger visual glitch effect
          setVisualGlitch(true);
          setTimeout(() => setVisualGlitch(false), 200);
        }

        // Update quantum flux
        setQuantumFlux(prev => {
          const flux = Math.sin(Date.now() * 0.002) * 50 + 50;
          return Math.max(0, Math.min(100, flux + (Math.random() - 0.5) * 20));
        });

        // Update reality stability based on current mode
        setRealityStability(prev => {
          const baseStability = currentMode.status === 'stable' ? 95 : 
                               currentMode.status === 'fluctuating' ? 75 :
                               currentMode.status === 'unstable' ? 45 : 25;
          const variation = (Math.random() - 0.5) * 10;
          return Math.max(0, Math.min(100, baseStability + variation));
        });
      }, 1500);

      // Parameter fluctuation loop
      parameterIntervalId = setInterval(() => {
        setActiveParameters(prev => {
          const newParams = { ...prev };
          Object.keys(newParams).forEach(key => {
            const baseValue = currentMode.parameters[key as keyof typeof currentMode.parameters];
            const variation = currentMode.status === 'stable' ? 0.02 : 
                            currentMode.status === 'fluctuating' ? 0.05 :
                            currentMode.status === 'unstable' ? 0.1 : 0.15;
            const change = (Math.random() - 0.5) * variation;
            newParams[key as keyof typeof newParams] = Math.max(0, Math.min(3, baseValue + change));
          });
          return newParams;
        });
      }, 800);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (parameterIntervalId) clearInterval(parameterIntervalId);
    };
  }, [isSimulationRunning, currentMode, realityStability]);

  // Cleanup effects when component unmounts
  useEffect(() => {
    return () => {
      // Reset all reality effects when component unmounts
      updateGlobalRealityEffects({
        isSimulationRunning: false,
        currentMode: 'base',
        realityStability: 100,
        effectIntensity: 0
      });
    };
  }, []);

  const handleModeChange = (mode: RealityMode) => {
    setCurrentMode(mode);
    setActiveParameters(mode.parameters);
    setSystemMessages(prev => [...prev, `>>> SWITCHING TO ${mode.name}...`, `>>> REALITY PARAMETERS UPDATED`, `>>> STATUS: ${mode.status.toUpperCase()}`]);
    
    // Reset some values when switching modes
    if (isSimulationRunning) {
      setSimulationTime(0);
      setRealityGlitches([]);
    }

    // Visual feedback for mode change
    setVisualGlitch(true);
    setTimeout(() => setVisualGlitch(false), 300);
  };

  const toggleSimulation = () => {
    setIsSimulationRunning(!isSimulationRunning);
    if (!isSimulationRunning) {
      setSystemMessages(prev => [...prev, 
        '>>> REALITY SIMULATION STARTED', 
        '>>> MONITORING QUANTUM STATES...', 
        '>>> TEMPORAL FIELD ACTIVE',
        `>>> CURRENT MODE: ${currentMode.name}`
      ]);
      setSimulationTime(0);
    } else {
      setSystemMessages(prev => [...prev, 
        '>>> SIMULATION PAUSED', 
        '>>> REALITY FROZEN AT CURRENT STATE',
        `>>> TOTAL RUNTIME: ${simulationTime}s`
      ]);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'var(--terminal-text)';
      case 'fluctuating': return 'var(--terminal-text)';
      case 'unstable': return 'var(--terminal-text)';
      case 'critical': return 'var(--terminal-text)';
      default: return 'var(--terminal-text)';
    }
  };

  return (
    <div 
      ref={containerRef}
      style={{ 
        color: 'var(--terminal-text)', 
        fontFamily: 'JetBrains Mono', 
        fontSize: '13px',
        background: isSimulationRunning ? currentMode.bgEffect : 'transparent',
        transition: 'all 0.3s ease',
        transform: visualGlitch ? 'translate(1px, -1px)' : 'none',
        filter: visualGlitch ? 'hue-rotate(30deg) brightness(1.2)' : 'none',
        position: 'relative',
        minHeight: '100%'
      }}
    >
      <h1 style={{ 
        color: isSimulationRunning ? currentMode.color : 'var(--terminal-text)', 
        marginBottom: '20px', 
        fontSize: '20px',
        textShadow: isSimulationRunning ? `0 0 10px ${currentMode.color}` : 'none',
        transition: 'all 0.3s ease'
      }}>
        REALITY SIMULATOR {isSimulationRunning ? '◉ ACTIVE' : '◯ STANDBY'}
      </h1>
      
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{ color: 'var(--terminal-text)' }}>STATUS:</span>
              <span style={{ color: getStatusColor(currentMode.status) }}>
                {isSimulationRunning ? 'RUNNING' : 'STANDBY'}
              </span>
              <div style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                background: isSimulationRunning ? currentMode.color : 'rgba(0, 255, 0, 0.3)',
                animation: isSimulationRunning ? 'pulse 1s infinite' : 'none',
                boxShadow: isSimulationRunning ? `0 0 6px ${currentMode.color}` : 'none'
              }} />
            </div>
            <div style={{ fontSize: '11px', color: 'var(--terminal-text)', opacity: 0.7 }}>
              RUNTIME: {simulationTime}s
            </div>
          </div>
          
          <div>
            <div style={{ marginBottom: '8px' }}>
              <span style={{ color: 'var(--terminal-text)' }}>QUANTUM FLUX: </span>
              <span style={{ color: currentMode.color }}>{quantumFlux.toFixed(1)}%</span>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--terminal-text)', opacity: 0.7 }}>
              STABILITY: {realityStability.toFixed(1)}%
            </div>
          </div>
        </div>
        
        <button
          onClick={toggleSimulation}
          className="glitch-hover glitch-click terminal-glitch"
          data-text={isSimulationRunning ? '⏸ PAUSE SIMULATION' : '▶ START SIMULATION'}
          style={{
            background: isSimulationRunning ? 'rgba(0, 255, 0, 0.1)' : 'transparent',
            border: `1px solid ${isSimulationRunning ? currentMode.color : 'var(--terminal-text)'}`,
            color: isSimulationRunning ? currentMode.color : 'var(--terminal-text)',
            padding: '10px 20px',
            fontFamily: 'JetBrains Mono',
            fontSize: '12px',
            cursor: 'pointer',
            borderRadius: '2px',
            transition: 'all 0.2s ease',
            textShadow: isSimulationRunning ? `0 0 6px ${currentMode.color}` : 'none',
            animation: isSimulationRunning ? 'pulse 2s infinite' : 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = isSimulationRunning ? 'rgba(0, 255, 0, 0.2)' : 'rgba(0, 255, 0, 0.1)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = isSimulationRunning ? 'rgba(0, 255, 0, 0.1)' : 'transparent';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {isSimulationRunning ? '⏸ PAUSE SIMULATION' : '▶ START SIMULATION'}
        </button>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: 'var(--terminal-text)', marginBottom: '15px' }}>REALITY MODES</h2>
        <div style={{ display: 'grid', gap: '10px' }}>
          {realityModes.map((mode) => (
            <div
              key={mode.id}
              onClick={() => handleModeChange(mode)}
              className="glitch-hover glitch-click terminal-glitch"
              data-text={mode.name}
              style={{
                padding: '12px',
                border: `1px solid ${currentMode.id === mode.id ? mode.color : 'rgba(0, 255, 0, 0.3)'}`,
                background: currentMode.id === mode.id ? mode.bgEffect || 'rgba(0, 255, 0, 0.1)' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderRadius: '4px',
                position: 'relative',
                transform: currentMode.id === mode.id ? 'scale(1.02)' : 'scale(1)',
                boxShadow: currentMode.id === mode.id && isSimulationRunning ? `0 0 15px ${mode.color}33` : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = mode.bgEffect || 'rgba(0, 255, 0, 0.05)';
                e.currentTarget.style.borderColor = mode.color;
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = currentMode.id === mode.id ? (mode.bgEffect || 'rgba(0, 255, 0, 0.1)') : 'transparent';
                e.currentTarget.style.borderColor = currentMode.id === mode.id ? mode.color : 'rgba(0, 255, 0, 0.3)';
                e.currentTarget.style.transform = currentMode.id === mode.id ? 'scale(1.02)' : 'scale(1)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ 
                  color: currentMode.id === mode.id ? mode.color : 'var(--terminal-text)', 
                  fontWeight: 'bold',
                  textShadow: currentMode.id === mode.id && isSimulationRunning ? `0 0 8px ${mode.color}` : 'none',
                  transition: 'all 0.3s ease'
                }}>
                  {mode.name}
                </span>
                <span style={{ 
                  color: mode.color,
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  padding: '2px 6px',
                  border: `1px solid ${mode.color}`,
                  borderRadius: '2px',
                  background: `${mode.color}11`
                }}>
                  {mode.status}
                </span>
              </div>
              <div style={{ 
                color: 'var(--terminal-text)', 
                fontSize: '11px', 
                opacity: 0.8,
                lineHeight: '1.3'
              }}>
                {mode.description}
              </div>
              {currentMode.id === mode.id && isSimulationRunning && (
                <div style={{ 
                  position: 'absolute',
                  right: '8px',
                  top: '8px',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: mode.color,
                  animation: 'pulse 1s infinite',
                  boxShadow: `0 0 8px ${mode.color}`
                }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Reality Viewer */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: 'var(--terminal-text)', marginBottom: '15px' }}>
          REALITY VIEWER - {currentMode.name}
        </h2>
        <div style={{
          height: '200px',
          border: `1px solid ${isSimulationRunning ? currentMode.color : 'var(--terminal-text)'}`,
          borderRadius: '8px',
          background: 'rgba(0, 0, 0, 0.2)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: isSimulationRunning ? `0 0 20px ${currentMode.color}22` : 'none',
          transition: 'all 0.3s ease'
        }}>
          <RealityViewer 
            realityMode={currentMode.id} 
            className="reality-viewer-canvas"
          />
          {!isSimulationRunning && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'var(--terminal-text)',
              fontSize: '14px',
              opacity: 0.6,
              textAlign: 'center'
            }}>
              ▶ START SIMULATION TO VIEW REALITY
            </div>
          )}
          <div style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            color: isSimulationRunning ? currentMode.color : 'var(--terminal-text)',
            fontSize: '10px',
            background: 'rgba(0, 0, 0, 0.7)',
            padding: '4px 8px',
            borderRadius: '4px',
            transition: 'color 0.3s ease'
          }}>
            {isSimulationRunning ? '��� LIVE' : '◯ STANDBY'}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: 'var(--terminal-text)', marginBottom: '15px' }}>CURRENT PARAMETERS</h2>
        <div style={{ display: 'grid', gap: '10px' }}>
          {Object.entries(activeParameters).map(([key, value]) => {
            const baseValue = currentMode.parameters[key as keyof typeof currentMode.parameters];
            const isFluctuating = isSimulationRunning && Math.abs(value - baseValue) > 0.01;
            
            return (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ 
                  color: isFluctuating ? currentMode.color : 'var(--terminal-text)', 
                  minWidth: '180px', 
                  textTransform: 'uppercase',
                  fontSize: '12px',
                  transition: 'color 0.3s ease'
                }}>
                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                </span>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ 
                    width: '120px', 
                    height: '6px', 
                    background: 'rgba(0, 255, 0, 0.2)',
                    border: `1px solid ${isFluctuating ? currentMode.color : 'var(--terminal-text)'}`,
                    position: 'relative',
                    borderRadius: '2px',
                    transition: 'border-color 0.3s ease'
                  }}>
                    <div style={{ 
                      width: `${Math.min(value * 33.33, 100)}%`, 
                      height: '100%', 
                      background: isFluctuating ? currentMode.color : 'var(--terminal-text)',
                      transition: 'all 0.3s ease',
                      borderRadius: '1px',
                      boxShadow: isFluctuating ? `0 0 6px ${currentMode.color}` : 'none'
                    }} />
                  </div>
                  <span style={{ 
                    color: isFluctuating ? currentMode.color : 'var(--terminal-text)', 
                    fontSize: '11px', 
                    minWidth: '50px',
                    fontWeight: isFluctuating ? 'bold' : 'normal',
                    transition: 'all 0.3s ease'
                  }}>
                    {value.toFixed(3)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ color: 'var(--terminal-text)', marginBottom: '15px' }}>SYSTEM LOG</h2>
        <div style={{ 
          background: isSimulationRunning ? 'rgba(0, 255, 0, 0.08)' : 'rgba(0, 255, 0, 0.05)',
          border: `1px solid ${isSimulationRunning ? currentMode.color : 'var(--terminal-text)'}`,
          padding: '12px',
          height: '140px',
          overflowY: 'auto',
          fontSize: '11px',
          borderRadius: '4px',
          transition: 'all 0.3s ease',
          boxShadow: isSimulationRunning ? `0 0 10px ${currentMode.color}22` : 'none'
        }}>
          {systemMessages.slice(-12).map((message, index) => (
            <div key={index} style={{ 
              color: message.startsWith('>>>') ? currentMode.color : 'var(--terminal-text)', 
              marginBottom: '3px',
              opacity: index === systemMessages.slice(-12).length - 1 ? 1 : 0.8,
              animation: index === systemMessages.slice(-12).length - 1 ? 'fadeIn 0.5s ease' : 'none'
            }}>
              [{new Date().toLocaleTimeString()}] {message}
            </div>
          ))}
          {isSimulationRunning && (
            <div style={{ 
              color: currentMode.color, 
              animation: 'blink 1s infinite',
              marginTop: '5px'
            }}>
              ▶ MONITORING...
            </div>
          )}
        </div>
      </div>

      {realityGlitches.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ 
            color: currentMode.color, 
            marginBottom: '15px',
            textShadow: `0 0 8px ${currentMode.color}`,
            animation: 'pulse 2s infinite'
          }}>
            ⚠ REALITY ANOMALIES ⚠
          </h2>
          <div style={{ 
            background: 'rgba(255, 0, 0, 0.05)',
            border: `1px solid ${currentMode.color}`,
            padding: '12px',
            fontSize: '11px',
            borderRadius: '4px',
            maxHeight: '100px',
            overflowY: 'auto',
            boxShadow: `0 0 15px ${currentMode.color}22`
          }}>
            {realityGlitches.map((glitch, index) => (
              <div key={index} style={{ 
                color: currentMode.color, 
                marginBottom: '3px',
                opacity: index === realityGlitches.length - 1 ? 1 : 0.7,
                animation: index === realityGlitches.length - 1 ? 'fadeIn 0.5s ease' : 'none'
              }}>
                ⚡ [{new Date().toLocaleTimeString()}] {glitch}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        border: `1px solid ${isSimulationRunning ? currentMode.color : 'rgba(0, 255, 0, 0.3)'}`, 
        background: isSimulationRunning ? currentMode.bgEffect || 'rgba(0, 255, 0, 0.05)' : 'rgba(0, 255, 0, 0.05)',
        borderRadius: '4px',
        transition: 'all 0.3s ease'
      }}>
        <h3 style={{ 
          color: isSimulationRunning ? currentMode.color : 'var(--terminal-text)', 
          marginBottom: '10px',
          transition: 'color 0.3s ease'
        }}>
          🧪 EXPERIMENTAL INTERFACE
        </h3>
        <p style={{ color: 'var(--terminal-text)', fontSize: '12px', opacity: 0.8, lineHeight: '1.4' }}>
          This reality simulator explores the intersection of consciousness, perception, and digital reality. 
          Each mode represents different ways of experiencing and processing reality - from raw physical input 
          to AI-mediated perception layers. The parameters simulate how different technologies might alter 
          our fundamental experience of existence.
        </p>
        {isSimulationRunning && (
          <div style={{ 
            marginTop: '10px', 
            fontSize: '11px', 
            color: currentMode.color,
            opacity: 0.9
          }}>
            ⚡ Active simulation affecting reality parameters in real-time
          </div>
        )}
      </div>
    </div>
  );
}