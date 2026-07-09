import React, { useState } from 'react';
import { useColorScheme } from './ColorSchemeProvider';
import { RealitySimulator } from './RealitySimulator';

export function ColorSchemeSettings() {
  const { currentScheme, setColorScheme, availableSchemes } = useColorScheme();
  const [activeTab, setActiveTab] = useState<'themes' | 'reality'>('themes');

  return (
    <div>
      {/* Tab Navigation */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '2px', marginBottom: '15px' }}>
          <button
            onClick={() => setActiveTab('themes')}
            className={`glitch-hover scramble-text ${activeTab === 'themes' ? 'active' : ''}`}
            data-text="COLOR THEMES"
            style={{
              padding: '8px 16px',
              background: activeTab === 'themes' ? 'var(--text)' : 'var(--button-bg)',
              border: `1px solid var(--border)`,
              color: activeTab === 'themes' ? 'var(--bg)' : 'var(--text)',
              fontFamily: 'var(--terminal-font)',
              fontSize: '11px',
              cursor: 'pointer',
              borderRadius: '4px 4px 0 0',
              transition: 'all 0.2s ease'
            }}
          >
            COLOR THEMES
          </button>
          <button
            onClick={() => setActiveTab('reality')}
            className={`glitch-hover scramble-text ${activeTab === 'reality' ? 'active' : ''}`}
            data-text="REALITY SIMULATOR"
            style={{
              padding: '8px 16px',
              background: activeTab === 'reality' ? 'var(--text)' : 'var(--button-bg)',
              border: `1px solid var(--border)`,
              color: activeTab === 'reality' ? 'var(--bg)' : 'var(--text)',
              fontFamily: 'var(--terminal-font)',
              fontSize: '11px',
              cursor: 'pointer',
              borderRadius: '4px 4px 0 0',
              transition: 'all 0.2s ease'
            }}
          >
            REALITY SIMULATOR
          </button>
        </div>
      </div>

      {/* Color Themes Tab */}
      {activeTab === 'themes' && (
        <div>
          <h2 style={{ color: 'var(--text)', marginBottom: '15px' }}>Terminal Color Schemes</h2>
          
          <p style={{ marginBottom: '20px', color: 'var(--text)' }}>
            Choose from curated terminal color schemes:
          </p>
          
          <div style={{ display: 'grid', gap: '12px' }}>
            {availableSchemes.map((scheme) => (
              <div
                key={scheme.name}
                onClick={() => setColorScheme(scheme)}
                className="glitch-hover scramble-text"
                data-text={scheme.name}
                style={{
                  padding: '16px',
                  border: currentScheme.name === scheme.name 
                    ? '2px solid var(--text)' 
                    : '1px solid var(--border)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  backgroundColor: currentScheme.name === scheme.name 
                    ? 'var(--hover)' 
                    : 'transparent',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
                onMouseEnter={(e) => {
                  if (currentScheme.name !== scheme.name) {
                    e.currentTarget.style.backgroundColor = 'var(--hover)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentScheme.name !== scheme.name) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {/* Color preview */}
                <div style={{
                  width: '40px',
                  height: '24px',
                  backgroundColor: scheme.background,
                  border: '1px solid var(--text)',
                  borderRadius: '4px',
                  position: 'relative',
                  flexShrink: 0
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '4px',
                    left: '4px',
                    right: '4px',
                    bottom: '4px',
                    color: scheme.text,
                    fontSize: '8px',
                    fontFamily: 'var(--terminal-font)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    $
                  </div>
                </div>
                
                {/* Scheme info */}
                <div style={{ flex: 1 }}>
                  <div style={{ 
                    color: 'var(--text)', 
                    fontWeight: 'bold',
                    marginBottom: '4px',
                    fontFamily: 'var(--terminal-font)'
                  }}>
                    {scheme.name}
                  </div>
                  <div style={{ 
                    color: 'var(--muted)', 
                    fontSize: '12px',
                    fontFamily: 'var(--terminal-font)'
                  }}>
                    {scheme.description}
                  </div>
                </div>
                
                {/* Selected indicator */}
                {currentScheme.name === scheme.name && (
                  <div style={{
                    color: 'var(--accent)',
                    fontSize: '16px'
                  }}>
                    ●
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div style={{ 
            marginTop: '24px', 
            padding: '16px', 
            border: '1px solid var(--border)', 
            borderRadius: '8px',
            backgroundColor: 'var(--hover)'
          }}>
            <h3 style={{ 
              color: 'var(--text)', 
              marginBottom: '8px', 
              marginTop: 0,
              fontFamily: 'var(--terminal-font)'
            }}>
              Current Scheme: {currentScheme.name}
            </h3>
            <div style={{ 
              fontSize: '12px', 
              color: 'var(--muted)',
              fontFamily: 'var(--terminal-font)'
            }}>
              Background: {currentScheme.background}<br />
              Text: {currentScheme.text}<br />
              Accent: {currentScheme.accent}
            </div>
          </div>
        </div>
      )}

      {/* Reality Simulator Tab */}
      {activeTab === 'reality' && (
        <div>
          <RealitySimulator />
        </div>
      )}
    </div>
  );
}