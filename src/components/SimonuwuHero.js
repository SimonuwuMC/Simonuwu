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
    <div className="relative minecraft-panel py-24 px-6 text-center overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="minecraft-text-glow mb-6 tracking-tight">
            <span 
              className="cursor-pointer hover:text-red-300 transition-colors duration-300 relative group"
              onClick={handleEasterEgg}
            >
              Simonuwu
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>{' '}
            <span className="text-white">
              Fabric Project
            </span>
          </h1>
          {showEasterEgg && (
            <div className="minecraft-panel p-8 rounded-none mb-8 animate-fade-in">
              <p className="text-white mb-4 font-minecraft">¡Has encontrado un Easter Egg! 🎉</p>
              <a 
                href="https://www.youtube.com/@simonuwu.minecraft" 
                target="_blank" 
                rel="noopener noreferrer"
                className="minecraft-btn inline-flex items-center bg-red-600 hover:bg-red-500"
              >
                ¡Visita mi canal de YouTube! 
                <img 
                  src="https://yt3.googleusercontent.com/nHDQOpEnEv82i7lGYAJ-Xal2YZQwCrHY9qKARDSUDbU-kMgrI0M4LvAbGukkN_7n2pDR-K4DrQ=s72-c-k-c0x00ffffff-no-rj" 
                  alt="Simonuwu Logo"
                  className="w-10 h-10 ml-3 rounded-none border-2 border-white"
                />
              </a>
            </div>
          )}
          <p className="text-red-300 mb-12 font-minecraft">El modpack más optimizado para Minecraft Fabric</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a 
              href="https://modrinth.com/modpack/simonuwu-fabric-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="minecraft-btn"
            >
              Ver en Modrinth
            </a>
            <a 
              href="#download" 
              className="minecraft-btn"
            >
              Descargar Ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimonuwuHero;