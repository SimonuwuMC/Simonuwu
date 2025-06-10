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
    <div className="relative bg-gradient-to-br from-red-500 to-red-800 dark:from-red-900 dark:to-red-950 py-20 px-6 text-center transition-colors overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Minecraft-style logo area */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
              alt="Gaming blocks"
              className="w-24 h-24 rounded-lg shadow-lg"
            />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">🎮</span>
            </div>
          </div>
        </div>

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
    </div>
  );
};

export default SimonuwuHero;