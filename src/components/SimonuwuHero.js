import React, { useState } from 'react';

const SimonuwuHero = ({ onAchievement }) => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleEasterEgg = () => {
    setShowEasterEgg(!showEasterEgg);
    if (!showEasterEgg) {
      onAchievement();
    }
  };

  return (
    <header className="bg-gradient-to-br from-red-500 to-red-800 dark:from-red-900 dark:to-red-950 py-20 px-6 text-center transition-colors">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6">
          <span 
            className="cursor-pointer hover:text-red-100 transition-colors"
            onClick={handleEasterEgg}
          >
            Simonuwu
          </span> Fabric Project
        </h1>
        {showEasterEgg && (
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6 animate-fade-in">
            <p className="text-white mb-2">¡Has encontrado un Easter Egg! 🎉</p>
            <a 
              href="https://www.youtube.com/@simonuwu.minecraft" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-600 dark:bg-red-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 dark:hover:bg-red-900 transition-colors"
            >
              ¡Visita mi canal de YouTube! 
              <img 
                src="https://yt3.googleusercontent.com/nHDQOpEnEv82i7lGYAJ-Xal2YZQwCrHY9qKARDSUDbU-kMgrI0M4LvAbGukkN_7n2pDR-K4DrQ=s72-c-k-c0x00ffffff-no-rj" 
                alt="Simonuwu Logo"
                className="w-6 h-6 inline-block ml-2 rounded-full"
              />
            </a>
          </div>
        )}
        <p className="text-xl text-red-100 mb-8">El modpack más optimizado para Minecraft Fabric</p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 text-left max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">🎮 ¿Qué es Simonuwu Fabric Project?</h2>
          <p className="text-red-100 mb-3">
            Simonuwu Fabric Project es un modpack cuidadosamente curado para Minecraft que combina los mejores mods de optimización y características kawaii. Diseñado para ofrecer la mejor experiencia de juego posible, desde PCs modestas hasta configuraciones de alta gama.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm text-red-200">+200% Rendimiento</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎨</div>
              <div className="text-sm text-red-200">30+ Mods Visuales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔧</div>
              <div className="text-sm text-red-200">15+ Versiones</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://modrinth.com/modpack/simonuwu-fabric-project" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 text-red-600 dark:text-red-400 font-bold py-3 px-8 rounded-lg hover:bg-red-50 dark:hover:bg-gray-700 transition-colors"
          >
            Ver en Modrinth
          </a>
          <a 
            href="#download" 
            className="bg-red-700 dark:bg-red-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-800 dark:hover:bg-red-950 transition-colors"
          >
            Descargar
          </a>
        </div>
      </div>
    </header>
  );
};

export default SimonuwuHero;