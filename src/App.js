import React, { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './hooks/useAuth';
import SimonuwuHero from './components/SimonuwuHero';
import DownloadSection from './components/DownloadSection';
import FeatureSection from './components/FeatureSection';
import InstallationGuide from './components/InstallationGuide';
import Achievements from './components/Achievements';
import ModsList from './components/ModsList';
import CommentsSection from './components/CommentsSection';
import ThemeToggle from './components/ThemeToggle';
import SEOHead from './components/SEOHead';

const App = () => {
  const [achievements, setAchievements] = useState([]);

  const addAchievement = (achievement) => {
    if (!achievements.some(a => a.id === achievement.id)) {
      setAchievements([...achievements, achievement]);
    }
  };

  return (
    <HelmetProvider>
      <AuthProvider>
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
            <CommentsSection />
            <Achievements achievements={achievements} />
          </div>
        </ThemeProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;