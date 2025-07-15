import React, { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { HelmetProvider } from 'react-helmet-async';
import PojavHero from './components/pojav/Hero';
import PojavDownloadSection from './components/pojav/DownloadSection';
import PojavFeatureSection from './components/pojav/FeatureSection';
import PojavInstallationGuide from './components/pojav/InstallationGuide';
import Achievements from './components/Achievements';
import ThemeToggle from './components/ThemeToggle';
import SEOHead from './components/SEOHead';

const PojavApp = () => {
  const [achievements, setAchievements] = useState([]);

  const addAchievement = (achievement) => {
    if (!achievements.some(a => a.id === achievement.id)) {
      setAchievements([...achievements, achievement]);
    }
  };

  return (
    <HelmetProvider>
      <ThemeProvider attribute="class">
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <SEOHead 
            title="Simonuwu Fabric Project - Pojav Launcher Edition"
            description="Modpack optimizado especialmente para Pojav Launcher. Juega Minecraft con mods en tu dispositivo móvil con el mejor rendimiento."
            keywords="minecraft, modpack, fabric, simonuwu, pojav launcher, mobile, android, mods móviles"
          />
          <ThemeToggle />
          <PojavHero onAchievement={() => addAchievement({
            id: 'pojav-youtube-fan',
            title: '¡Logro Desbloqueado!',
            description: 'Fan Móvil: Encontraste el canal de YouTube desde la versión Pojav'
          })} />
          <PojavDownloadSection onAchievement={() => addAchievement({
            id: 'pojav-first-version',
            title: '¡Logro Desbloqueado!',
            description: 'Pionero Móvil: Encontraste la primera versión para Pojav Launcher'
          })} />
          <PojavFeatureSection />
          <PojavInstallationGuide onAchievement={() => addAchievement({
            id: 'pojav-tutorial-expert',
            title: '¡Logro Desbloqueado!',
            description: 'Experto en Pojav: Encontraste el tutorial secreto de Pojav Launcher'
          })} />
          <Achievements achievements={achievements} />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default PojavApp;