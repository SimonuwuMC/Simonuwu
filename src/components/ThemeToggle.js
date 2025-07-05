import React from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleExcelClick = () => {
    window.open('https://excel.cloud.microsoft/open/onedrive/?docId=36429BE1B422AEAE%21sfc99b638d8294f01a217d3f24799acc0&driveId=36429BE1B422AEAE', '_blank');
  };

  return (
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
  );
};

export default ThemeToggle;