import React from 'react';
import { Palette, Monitor, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Settings() {
  const { currentTheme, availableThemes, changeTheme } = useTheme();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
      </div>

      {/* Theme Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
            <Palette className="w-5 h-5 mr-2" />
            Theme Customization
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Choose your preferred theme to customize the appearance of your dashboard.
          </p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableThemes.map((theme) => {
              const isActive = currentTheme === theme.value;
              
              return (
                <button
                  key={theme.value}
                  onClick={() => changeTheme(theme.value)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                    isActive 
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      {theme.value === 'light' && <Sun className="w-5 h-5 mr-2" />}
                      {theme.value === 'dark' && <Moon className="w-5 h-5 mr-2" />}
                      {!['light', 'dark'].includes(theme.value) && <Sparkles className="w-5 h-5 mr-2" />}
                      <span className="font-medium text-gray-900 dark:text-white">{theme.name}</span>
                    </div>
                    {isActive && (
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <div 
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: theme.primary }}
                    />
                    <div 
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: theme.secondary }}
                    />
                    <div 
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: theme.surface }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* General Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
            <Monitor className="w-5 h-5 mr-2" />
            General Settings
          </h2>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Email Notifications</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Receive email notifications for important updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Auto-refresh Data</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Automatically refresh dashboard data every 5 minutes</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Show Animations</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Enable smooth animations and transitions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}