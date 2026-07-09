import * as React from 'react';

// Color scheme types and data
export interface ColorScheme {
  name: string;
  background: string;
  text: string;
  accent: string;
  description: string;
}

export const macTerminalColorSchemes: ColorScheme[] = [
  {
    name: 'Homebrew',
    background: '#000000',
    text: '#00ff00',
    accent: '#00ff00',
    description: 'Traditional green on black'
  },
  {
    name: 'Classic',
    background: '#000000',
    text: '#ffffff',
    accent: '#ffffff',
    description: 'Clean white on black'
  },
  {
    name: 'Light',
    background: '#ffffff',
    text: '#1a1a1a',
    accent: '#007aff',
    description: 'Modern glass light theme'
  },
  {
    name: 'Aerogel',
    background: '#404040',
    text: '#ffffff',
    accent: '#ffffff',
    description: 'Industrial gray aesthetic'
  },
  {
    name: 'Liquid Glass',
    background: '#fafbfc',
    text: '#0d1117',
    accent: '#0969da',
    description: 'Figma-inspired glass aesthetic'
  }
];

// Color scheme context
interface ColorSchemeContextType {
  currentScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  availableSchemes: ColorScheme[];
}

const ColorSchemeContext = React.createContext<ColorSchemeContextType | undefined>(undefined);

export function ColorSchemeProvider({ children }: { children: React.ReactNode }) {
  const [currentScheme, setCurrentScheme] = React.useState<ColorScheme>(macTerminalColorSchemes[0]);

  const setColorScheme = (scheme: ColorScheme) => {
    setCurrentScheme(scheme);
    
    // Detect theme type
    const isLightTheme = scheme.name === 'Light' || 
                        scheme.name === 'Liquid Glass' ||
                        scheme.background === '#ffffff' ||
                        scheme.background === '#fafbfc' ||
                        (scheme.background.startsWith('#') && 
                         parseInt(scheme.background.slice(1), 16) > 0x888888);
    
    const root = document.documentElement;
    
    // Set the data-theme attribute for globals.css theme selectors
    if (isLightTheme) {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', 'dark');
    }
    
    // Update BOTH the main CSS variables (used by globals.css) AND legacy terminal variables
    // Main CSS variables for globals.css
    root.style.setProperty('--bg', scheme.background);
    root.style.setProperty('--text', scheme.text);
    root.style.setProperty('--accent', scheme.accent);
    root.style.setProperty('--window-bg', scheme.background);
    root.style.setProperty('--window-border', isLightTheme ? 'rgba(0, 0, 0, 0.12)' : scheme.text);
    
    if (isLightTheme) {
      // Modern glass light theme variables
      root.style.setProperty('--border', 'rgba(0, 0, 0, 0.08)');
      root.style.setProperty('--hover', 'rgba(0, 0, 0, 0.04)');
      root.style.setProperty('--button-bg', 'rgba(255, 255, 255, 0.8)');
      root.style.setProperty('--button-hover', 'rgba(0, 0, 0, 0.06)');
      root.style.setProperty('--muted', 'rgba(0, 0, 0, 0.6)');
      
      // Add glass morphism variables
      root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.85)');
      root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.2)');
      root.style.setProperty('--glass-shadow', '0 8px 32px rgba(0, 0, 0, 0.12)');
      root.style.setProperty('--glass-blur', 'blur(16px)');
    } else {
      // Dark theme specific variables
      root.style.setProperty('--border', '#004400');
      root.style.setProperty('--hover', '#001100');
      root.style.setProperty('--button-bg', '#002200');
      root.style.setProperty('--button-hover', '#003300');
      root.style.setProperty('--muted', '#008800');
      
      // Dark glass morphism variables
      root.style.setProperty('--glass-bg', 'rgba(0, 0, 0, 0.8)');
      root.style.setProperty('--glass-border', 'rgba(0, 255, 0, 0.2)');
      root.style.setProperty('--glass-shadow', '0 8px 32px rgba(0, 0, 0, 0.6)');
      root.style.setProperty('--glass-blur', 'blur(16px)');
    }
    
    // Legacy terminal CSS variables (for ColorSchemeSettings and any other components using them)
    root.style.setProperty('--terminal-bg', scheme.background);
    root.style.setProperty('--terminal-text', scheme.text);
    root.style.setProperty('--terminal-accent', scheme.accent);
    
    // Set border color with better contrast
    const borderOpacity = isLightTheme ? '20' : '4D';
    root.style.setProperty('--terminal-border', `${scheme.text}${borderOpacity}`);
    
    // Set hover colors
    root.style.setProperty('--terminal-hover-bg', scheme.text);
    root.style.setProperty('--terminal-hover-text', scheme.background);
    
    // Set selection background with appropriate opacity
    const selectionOpacity = isLightTheme ? '15' : '33';
    root.style.setProperty('--terminal-selection-bg', `${scheme.text}${selectionOpacity}`);
    
    // Set disabled state
    const disabledOpacity = isLightTheme ? '40' : '80';
    root.style.setProperty('--terminal-disabled', `${scheme.text}${disabledOpacity}`);
    
    // Update aerogel variables with theme-aware opacity
    const bgOpacity = isLightTheme ? 'F5' : 'E6';
    root.style.setProperty('--aerogel-bg', `${scheme.background}${bgOpacity}`);
    root.style.setProperty('--aerogel-text', scheme.text);
    root.style.setProperty('--aerogel-text-secondary', scheme.text);
    
    const aeroBorderOpacity = isLightTheme ? '25' : '4D';
    root.style.setProperty('--aerogel-border', `${scheme.text}${aeroBorderOpacity}`);
    
    const highlightOpacity = isLightTheme ? '08' : '1A';
    root.style.setProperty('--aerogel-highlight', `${scheme.text}${highlightOpacity}`);
    
    root.style.setProperty('--aerogel-accent', scheme.accent);
    root.style.setProperty('--aerogel-success', scheme.accent);
    root.style.setProperty('--aerogel-warning', scheme.accent);
    root.style.setProperty('--aerogel-error', scheme.accent);
    
    // Update shadow for themes
    const shadowColor = isLightTheme ? '0, 0, 0' : '0, 0, 0';
    const shadowOpacity = isLightTheme ? '0.08' : '0.8';
    root.style.setProperty('--aerogel-shadow', `rgba(${shadowColor}, ${shadowOpacity})`);
    
    // Update body background and color to ensure immediate visual feedback
    document.body.style.background = scheme.background;
    document.body.style.color = scheme.text;
    
    // Store in localStorage (using the more comprehensive scheme storage)
    localStorage.setItem('terminal-color-scheme', JSON.stringify(scheme));
    
    // Also clear any old simple theme storage to prevent conflicts
    localStorage.removeItem('terminal-theme');
  };

  React.useEffect(() => {
    // Load from localStorage on mount
    const stored = localStorage.getItem('terminal-color-scheme');
    if (stored) {
      try {
        const scheme = JSON.parse(stored);
        // Validate the scheme has required properties and migrate away from battlezone
        if (scheme && scheme.name && scheme.background && scheme.text && scheme.accent) {
          if (scheme.name === 'Battlezone') {
            // Migrate Battlezone users to Homebrew (dark green) theme
            setColorScheme(macTerminalColorSchemes[0]);
          } else {
            setColorScheme(scheme);
          }
        } else {
          // Invalid stored scheme, use default
          setColorScheme(macTerminalColorSchemes[0]);
        }
      } catch (e) {
        // If parsing fails, use default
        setColorScheme(macTerminalColorSchemes[0]);
      }
    } else {
      // Check for old terminal-theme storage and migrate
      const oldTheme = localStorage.getItem('terminal-theme');
      if (oldTheme === 'dark') {
        setColorScheme(macTerminalColorSchemes[0]); // Homebrew (dark)
      } else {
        setColorScheme(macTerminalColorSchemes.find(s => s.name === 'Light') || macTerminalColorSchemes[0]);
      }
    }
  }, []);

  return (
    <ColorSchemeContext.Provider value={{
      currentScheme,
      setColorScheme,
      availableSchemes: macTerminalColorSchemes
    }}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

export function useColorScheme() {
  const context = React.useContext(ColorSchemeContext);
  if (!context) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider');
  }
  return context;
}