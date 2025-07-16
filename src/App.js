import React, { useState } from 'react';

// Conditional imports with fallbacks
let ThemeProvider, HelmetProvider;
try {
  ThemeProvider = require('next-themes').ThemeProvider;
} catch (e) {
  console.warn('next-themes not available, using fallback');
  ThemeProvider = ({ children }) => <div>{children}</div>;
}

try {
  HelmetProvider = require('react-helmet-async').HelmetProvider;
} catch (e) {
  console.warn('react-helmet-async not available, using fallback');
  HelmetProvider = ({ children }) => <div>{children}</div>;
}

import SimonuwuHero from './components/SimonuwuHero';
import DownloadSection from './components/DownloadSection';
import FeatureSection from './components/FeatureSection';
import InstallationGuide from './components/InstallationGuide';
import Achievements from './components/Achievements';
import ModsList from './components/ModsList';
import ThemeToggle from './components/ThemeToggle';
import SEOHead from './components/SEOHead';

const App = () => {
  const [achievements, setAchievements] = useState([]);

  const addAchievement = (achievement) => {
    if (achievement && !achievements.some(a => a.id === achievement.id)) {
      setAchievements([...achievements, achievement]);
    }
  };

  return (
    <HelmetProvider>
      <ThemeProvider attribute="class">
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <SEOHead />
          <ThemeToggle />
          <SimonuwuHero onAchievement={() => addAchievement({
            id: 'youtube-fan',
            title: '¡Logro Desbloqueado!',
            description: 'Fan Verdadero: Encontraste el canal de YouTube de Simonuwu'
          })} />
          <DownloadSection onAchievement={() => addAchievement({
            id: 'original-version',
            title: '¡Logro Desbloqueado!',
            description: 'Arqueólogo: Encontraste la versión 1.0.0 del modpack'
          })} />
          <FeatureSection />
          <ModsList />
          <InstallationGuide onAchievement={() => addAchievement({
            id: 'pojav-expert',
            title: '¡Logro Desbloqueado!',
            description: 'Experto en Launchers: Encontraste el tutorial secreto de Pojav Launcher'
          })} />
          <Achievements achievements={achievements} />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;