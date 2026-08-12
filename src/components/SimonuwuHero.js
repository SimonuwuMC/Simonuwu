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
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://modrinth.com/modpack/simonuwu-fabric-project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 dark:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-emerald-600 dark:hover:bg-emerald-700 transition-all hover:scale-105 shadow-sm hover:shadow-emerald-500/30"
          >
            Modrinth
          </a>
          <a
            href="https://www.curseforge.com/minecraft/modpacks/simonuwu-fabric-project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 dark:bg-orange-600 text-white font-extrabold uppercase tracking-wide py-3 px-8 rounded-lg hover:bg-orange-600 dark:hover:bg-orange-700 transition-all hover:scale-105 shadow-sm hover:shadow-orange-500/30"
          >
            CurseForge
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-2.5 bg-emerald-500 text-white font-extrabold text-lg uppercase tracking-wider py-4 px-10 rounded-xl transition-all duration-150 border-b-[6px] border-emerald-700 hover:bg-emerald-600 active:border-b-0 active:translate-y-1 active:shadow-inner shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:bg-emerald-600 dark:border-emerald-800 dark:hover:bg-emerald-700 dark:focus:ring-emerald-900"
          >
            Descargar
          </a>
          <a 
            href="https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.5a-1.21.8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-3 px-8 rounded-lg hover:from-violet-700 hover:to-fuchsia-700 transition-all shadow-md hover:shadow-lg"
          >
             ✨ 1.0.5a-1.21.8
          </a>
        </div>
      </div>
    </header>
  );
};

export default SimonuwuHero;
