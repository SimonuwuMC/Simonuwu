import React, { useState } from 'react';
import CompatibilityModal from './CompatibilityModal';

// Safe theme hook with fallback
const useTheme = () => {
  try {
    const { useTheme: nextThemeHook } = require('next-themes');
    return nextThemeHook();
  } catch (e) {
    console.warn('next-themes not available, using fallback theme');
    return {
      theme: 'light',
      setTheme: () => {}
    };
  }
};

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isCompatibilityOpen, setIsCompatibilityOpen] = useState(false);

  const handleExcelClick = () => {
    setIsCompatibilityOpen(true);
  };

  return (
    <>
      <div className="fixed top-4 right-4 flex gap-2">
        <button
          onClick={handleExcelClick}
          className="p-2 rounded-lg bg-white dark:bg-gray-700 text-green-600 dark:text-green-400 border border-green-300 dark:border-green-600 hover:bg-green-50 dark:hover:bg-gray-600 transition-colors shadow-md"
          aria-label="Ver compatibilidad en Excel"
          title="Ver tabla de compatibilidad"
        >
          📊
        </button>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-lg bg-red-500 dark:bg-red-700 text-white transition-colors shadow-md"
          aria-label="Toggle theme"
          title="Cambiar tema"
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </div>
      
      <CompatibilityModal 
        isOpen={isCompatibilityOpen} 
        onClose={() => setIsCompatibilityOpen(false)} 
      />
    </>
  );
};

export default ThemeToggle;