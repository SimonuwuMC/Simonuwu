import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import CompatibilityModal from './CompatibilityModal';
import ChangelogModal from './ChangelogModal.js';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isCompatibilityOpen, setIsCompatibilityOpen] = useState(false);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);

  const handleExcelClick = () => {
    setIsCompatibilityOpen(true);
  };

  const handleChangelogClick = () => {
    setIsChangelogOpen(true);
  };

  return (
    <>
      <div className="fixed top-4 right-4 flex gap-2">
        <button
          onClick={handleChangelogClick}
          className="p-2 rounded-lg bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 border border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors shadow-md"
          aria-label="Ver registros de cambios"
          title="Ver registros de cambios"
        >
          📋
        </button>
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
      
      <ChangelogModal 
        isOpen={isChangelogOpen} 
        onClose={() => setIsChangelogOpen(false)} 
      />
      <CompatibilityModal 
        isOpen={isCompatibilityOpen} 
        onClose={() => setIsCompatibilityOpen(false)} 
      />
    </>
  );
};

export default ThemeToggle;