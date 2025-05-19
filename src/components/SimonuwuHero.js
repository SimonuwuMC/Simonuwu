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
    <div className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 py-24 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl font-extrabold text-white mb-6 tracking-tight">
            <span 
              className="cursor-pointer hover:text-pink-200 transition-colors duration-300 relative group"
              onClick={handleEasterEgg}
            >
              Simonuwu
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-purple-200">
              Fabric Project
            </span>
          </h1>
          {showEasterEgg && (
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl mb-8 animate-fade-in shadow-xl">
              <p className="text-white text-lg mb-4">¡Has encontrado un Easter Egg! 🎉</p>
              <a 
                href="https://www.youtube.com/@simonuwu.minecraft" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                ¡Visita mi canal de YouTube! 
                <img 
                  src="https://yt3.googleusercontent.com/nHDQOpEnEv82i7lGYAJ-Xal2YZQwCrHY9qKARDSUDbU-kMgrI0M4LvAbGukkN_7n2pDR-K4DrQ=s72-c-k-c0x00ffffff-no-rj" 
                  alt="Simonuwu Logo"
                  className="w-8 h-8 ml-3 rounded-full ring-2 ring-white/50"
                />
              </a>
            </div>
          )}
          <p className="text-2xl text-pink-100 mb-10 font-light">El modpack más optimizado para Minecraft Fabric</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://modrinth.com/modpack/simonuwu-fabric-project" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-pink-600 font-bold py-4 px-10 rounded-xl hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Ver en Modrinth
            </a>
            <a 
              href="#download" 
              className="bg-pink-600 text-white font-bold py-4 px-10 rounded-xl hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg ring-2 ring-pink-400/50"
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