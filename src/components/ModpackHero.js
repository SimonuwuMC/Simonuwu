import React from 'react';

const ModpackHero = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-800 py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">Simonuwu Fabric Project</h1>
        <p className="text-xl text-indigo-200 mb-6">El modpack más kawaii para Minecraft Fabric</p>
        <a 
          href="https://modrinth.com/modpack/simonuwu-fabric-project" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white text-indigo-900 font-bold py-3 px-8 rounded-lg hover:bg-indigo-100 transition-colors"
        >
          Ver en Modrinth
        </a>
      </div>
    </div>
  );
};

export default ModpackHero;