import { useState, useEffect } from 'react';
import { Theme, ThemeConfig } from '../types';

const themes: Record<Theme, ThemeConfig> = {
  light: {
    name: 'Light',
    value: 'light',
    primary: '#3B82F6',
    secondary: '#6B7280',
    background: '#F9FAFB',
    surface: '#FFFFFF',
    text: '#111827'
  },
  dark: {
    name: 'Dark',
    value: 'dark',
    primary: '#60A5FA',
    secondary: '#9CA3AF',
    background: '#111827',
    surface: '#1F2937',
    text: '#F9FAFB'
  },
  blue: {
    name: 'Ocean Blue',
    value: 'blue',
    primary: '#0EA5E9',
    secondary: '#0284C7',
    background: '#F0F9FF',
    surface: '#FFFFFF',
    text: '#0C4A6E'
  },
  purple: {
    name: 'Royal Purple',
    value: 'purple',
    primary: '#8B5CF6',
    secondary: '#7C3AED',
    background: '#FAF5FF',
    surface: '#FFFFFF',
    text: '#581C87'
  },
  green: {
    name: 'Forest Green',
    value: 'green',
    primary: '#10B981',
    secondary: '#059669',
    background: '#F0FDF4',
    surface: '#FFFFFF',
    text: '#064E3B'
  }
};

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('admin-theme') as Theme;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const theme = themes[currentTheme];
    const root = document.documentElement;
    
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-secondary', theme.secondary);
    root.style.setProperty('--color-background', theme.background);
    root.style.setProperty('--color-surface', theme.surface);
    root.style.setProperty('--color-text', theme.text);
    
    // Apply theme class to body
    document.body.className = `theme-${currentTheme}`;
    
    localStorage.setItem('admin-theme', currentTheme);
  }, [currentTheme]);

  const changeTheme = (theme: Theme) => {
    setCurrentTheme(theme);
  };

  return {
    currentTheme,
    themeConfig: themes[currentTheme],
    availableThemes: Object.values(themes),
    changeTheme
  };
}