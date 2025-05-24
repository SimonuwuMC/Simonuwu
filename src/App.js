import React, { useState } from 'react';
import SimonuwuHero from './components/SimonuwuHero';
import DownloadSection from './components/DownloadSection';
import FeatureSection from './components/FeatureSection';
import InstallationGuide from './components/InstallationGuide';
import Achievements from './components/Achievements';
import ModsList from './components/ModsList';

const App = () => {
  const [achievements, setAchievements] = useState([]);

  const addAchievement = (achievement) => {
    if (!achievements.some(a => a.id === achievement.id)) {
      setAchievements([...achievements, achievement]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
  );
};

export default App;