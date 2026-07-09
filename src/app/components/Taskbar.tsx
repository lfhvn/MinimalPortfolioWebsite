import React from 'react';
import { User, Briefcase, FileText, Mail, Settings, Terminal, Layout } from 'lucide-react';

interface WindowState {
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

interface WindowStates {
  [key: string]: WindowState;
}

interface TaskbarProps {
  windowStates: WindowStates;
  activeWindowId: string | null;
  onWindowAction: (id: string, action: 'minimize' | 'open' | 'focus') => void;
}

export function Taskbar({ windowStates, activeWindowId, onWindowAction }: TaskbarProps) {
  const tasks = [
    { id: 'about', label: 'about.txt', icon: User },
    { id: 'experience', label: 'experience/', icon: Briefcase },
    { id: 'work', label: 'work/', icon: Layout },
    { id: 'writing', label: 'writing/', icon: FileText },
    { id: 'contact', label: 'contact.sh', icon: Mail },
    { id: 'settings', label: 'settings', icon: Settings },
  ];

  const handleTaskClick = (id: string) => {
    const state = windowStates[id];
    if (!state.isOpen) {
      onWindowAction(id, 'open');
    } else if (state.isMinimized) {
      onWindowAction(id, 'open'); // This will unminimize in our logic
    } else if (activeWindowId === id) {
      onWindowAction(id, 'minimize');
    } else {
      onWindowAction(id, 'focus');
    }
  };

  return (
    <div className="aerogel-taskbar">
      <div className="aerogel-dock-container">
        {tasks.map((task) => {
          const state = windowStates[task.id];
          const isActive = state?.isOpen && !state.isMinimized;
          const isFocused = activeWindowId === task.id && !state.isMinimized;
          const Icon = task.icon;

          return (
            <button
              key={task.id}
              className={`aerogel-dock-item ${isActive ? 'active' : ''} ${isFocused ? 'focused' : ''}`}
              onClick={() => handleTaskClick(task.id)}
              title={task.label}
            >
              <div className="dock-icon-wrapper">
                <Icon size={20} strokeWidth={1.5} />
                {isActive && <div className="dock-indicator" />}
              </div>
              <span className="dock-tooltip">{task.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
