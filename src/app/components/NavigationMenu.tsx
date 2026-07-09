import React from 'react';
import { useColorScheme } from './ColorSchemeProvider';

interface WindowState {
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

type WindowStates = {
  [key: string]: WindowState;
};

interface NavigationMenuProps {
  windowStates: WindowStates;
  handleWindowAction: (windowId: string, action: 'close' | 'minimize' | 'maximize' | 'open') => void;
  activeMobileSection?: string | null;
  setActiveMobileSection?: (section: string | null) => void;
}

export function NavigationMenu({ 
  windowStates, 
  handleWindowAction,
  activeMobileSection,
  setActiveMobileSection 
}: NavigationMenuProps) {
  const { currentScheme, setColorScheme, availableSchemes } = useColorScheme();

  // Two-way theme toggle: Light ↔ Dark
  const cycleTheme = () => {
    const isLightTheme = currentScheme.name === 'Light' || 
                        currentScheme.name === 'Liquid Glass' ||
                        (currentScheme.background.startsWith('#') && 
                         parseInt(currentScheme.background.slice(1), 16) > 0x888888);
    
    if (isLightTheme) {
      // Light → Dark (Homebrew)
      const darkScheme = availableSchemes.find(s => s.name === 'Homebrew') || availableSchemes[0];
      setColorScheme(darkScheme);
    } else {
      // Dark → Light
      const lightScheme = availableSchemes.find(s => s.name === 'Light') || availableSchemes.find(s => s.name === 'Liquid Glass');
      if (lightScheme) {
        setColorScheme(lightScheme);
      }
    }
  };

  // Determine current theme type for button display
  const isCurrentlyLight = currentScheme.name === 'Light' || 
                          currentScheme.name === 'Liquid Glass' ||
                          (currentScheme.background.startsWith('#') && 
                           parseInt(currentScheme.background.slice(1), 16) > 0x888888);
  
  // Get theme display info - Simple two-way toggle
  const getThemeDisplay = () => {
    if (isCurrentlyLight) return { icon: '◐', text: 'DARK' };
    return { icon: '◑', text: 'LIGHT' };
  };
  
  const themeDisplay = getThemeDisplay();

  const menuItems = [
    { id: 'about', name: 'about', icon: '◦' },
    { id: 'experience', name: 'exp', icon: '◈' },
    { id: 'work', name: 'work', icon: '◇' },
    { id: 'writing', name: 'write', icon: '◐' },
    { id: 'contact', name: 'cont', icon: '●' }
  ];

  const handleItemClick = (itemId: string) => {
    const windowState = windowStates[itemId];
    
    if (!windowState) {
      console.warn(`Window state for '${itemId}' not found`);
      return;
    }
    
    // If window is closed, open it. Otherwise, toggle minimize.
    if (!windowState.isOpen) {
      handleWindowAction(itemId, 'open');
    } else {
      handleWindowAction(itemId, 'minimize');
    }
  };

  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
      {menuItems.map((item) => {
        const windowState = windowStates[item.id];
        const isActive = windowState?.isOpen && !windowState?.isMinimized;
        const isClosed = !windowState?.isOpen;
        
        return (
          <button
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className={`nav-menu-button ${isActive ? 'active' : ''} glitch-hover scramble-text`}
            data-text={`${item.icon} ${item.name}`}
            style={{
              background: isActive ? 'var(--text)' : 'var(--button-bg)',
              color: isActive ? 'var(--bg)' : 'var(--text)',
              border: '1px solid var(--border)',
              borderRadius: '2px',
              padding: '4px 8px',
              fontSize: '11px',
              fontFamily: 'var(--terminal-font)',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              opacity: isClosed ? 0.6 : 1,
              transition: 'all 0.15s ease',
              letterSpacing: '0.3px',
              position: 'relative'
            }}
          >
            <span style={{ fontSize: '9px', fontWeight: '600' }}>{item.icon}</span>
            <span>{item.name}</span>
            {isClosed && <span style={{ fontSize: '8px', opacity: 0.7 }}>×</span>}
          </button>
        );
      })}
      
      {/* Theme Toggle - Two-way cycle */}
      <button
        onClick={cycleTheme}
        className="theme-toggle glitch-hover scramble-text"
        data-text={`${themeDisplay.icon} ${themeDisplay.text}`}
        style={{
          background: 'var(--button-bg)',
          color: 'var(--text)',
          border: '1px solid var(--border)',
          borderRadius: '2px',
          padding: '4px 8px',
          fontSize: '10px',
          fontFamily: 'var(--terminal-font)',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          letterSpacing: '0.3px',
          marginLeft: '4px'
        }}
      >
        <span style={{ fontSize: '8px' }}>{themeDisplay.icon}</span>
        <span>{themeDisplay.text}</span>
      </button>
    </div>
  );
}