import React from 'react';
import { Menu, Bell, User, Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  const { currentTheme, changeTheme } = useTheme();

  const toggleTheme = () => {
    const themes = ['light', 'dark', 'blue', 'purple', 'green'] as const;
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    changeTheme(themes[nextIndex]);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h2 className="ml-2 lg:ml-0 text-xl font-semibold text-gray-800 dark:text-white">
            Admin Dashboard
          </h2>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Toggle Theme"
          >
            {currentTheme === 'dark' ? (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Palette className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
          
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </header>
  );
}