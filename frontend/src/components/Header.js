import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Search, 
  Bell, 
  Moon, 
  Sun, 
  User,
  Settings
} from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search campaigns, reports..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right side actions */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Settings */}
        <button className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150">
          <Settings className="h-5 w-5" />
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <div className="flex flex-col text-right">
            <span className="text-sm font-medium text-gray-900 dark:text-white">Sarah Johnson</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Marketing Manager</span>
          </div>
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;