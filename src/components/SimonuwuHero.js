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
      <div className="relative max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl font-minecraft text-white mb-6 tracking-tight">
            <span 
              className="cursor-pointer hover:text-green-300 transition-colors duration-300 relative group"
              onClick={handleEasterEgg}
            >
              Simonuwu
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>{' '}
            <span className="text-minecraft-grass">
              Fabric Project
            </span>
          </h1>
          {showEasterEgg && (
            <div className="minecraft-panel p-6 rounded-none mb-8 animate-fade-in">
              <p className="text-white text-lg mb-4 font-minecraft">¡Has encontrado un Easter Egg! 🎉</p>
              <a 
                href="https://www.youtube.com/@simonuwu.minecraft" 
                target="_blank" 
                rel="noopener noreferrer"
                className="minecraft-btn inline-flex items-center"
              >
                ¡Visita mi canal de YouTube! 
                <img 
                  src="https://yt3.googleusercontent.com/nHDQOpEnEv82i7lGYAJ-Xal2YZQwCrHY9qKARDSUDbU-kMgrI0M4LvAbGukkN_7n2pDR-K4DrQ=s72-c-k-c0x00ffffff-no-rj" 
                  alt="Simonuwu Logo"
                  className="w-8 h-8 ml-3 rounded-none"
                />
              </a>
            </div>
          )}
          <p className="text-2xl text-green-300 mb-10 font-minecraft">El modpack más optimizado para Minecraft Fabric</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
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