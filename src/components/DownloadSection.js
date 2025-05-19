import React, { useState } from 'react';

const DownloadSection = ({ onAchievement }) => {
  const [activeTab, setActiveTab] = useState('1.21.5');

  const handleDownload = (version) => {
    if (version === "1.0.0") {
      onAchievement();
    }
  };

  const versionGroups = {
    '1.21.5': [
      {
        id: "60aT4Noc",
        version: "1.0.4",
        date: "May 14, 2025",
        changelog: "Versión estable para Minecraft 1.21.5 con todos los mods actualizados",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.4-1.21.5",
        isBeta: false
      },
      {
        id: "50zT3Nmb",
        version: "beta-0.2-1.0.4",
        date: "May 3, 2025",
        changelog: "Versión beta para Minecraft 1.21.5 con mejoras de rendimiento",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/0.2-1.0.4-1.21.5",
        isBeta: true
      },
      {
        id: "40yT2Mla",
        version: "beta-0.1-1.0.4",
        date: "Mar 30, 2025",
        changelog: "Primera versión beta para Minecraft 1.21.5 con mods básicos",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/0.1-1.0.4-1.21.5",
        isBeta: true
      }
    ],
    '1.21.4': [
      {
        id: "70bU5Pqd",
        version: "1.0.4",
        date: "May 12, 2025",
        changelog: "Última versión estable para Minecraft 1.21.4 con todas las características",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.4-1.21.4",
        isBeta: false
      },
      {
        id: "80cV6Qre",
        version: "1.0.3",
        date: "Feb 9, 2025",
        changelog: "Mejoras de rendimiento y corrección de errores",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.3-1.21.4",
        isBeta: false
      },
      {
        id: "90dW7Rsf",
        version: "1.0.2",
        date: "Jan 9, 2025",
        changelog: "Actualización de mods y optimizaciones",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.2-1.21.4",
        isBeta: false
      },
      {
        id: "10eX8Stg",
        version: "1.0.1",
        date: "Jan 9, 2025",
        changelog: "Primera actualización con correcciones importantes",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.1-1.21.4",
        isBeta: false
      },
      {
        id: "2A3CX5em",
        version: "1.0.0",
        date: "Jan 9, 2025",
        changelog: "Primera versión estable para Minecraft 1.21.4 y del modpack entero,con errores",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.0-1.21.4",
        isBeta: false
      }
    ],
    '1.20.4': [
      {
        id: "1B4DY6fn",
        version: "1.0.4",
        date: "May 10, 2025",
        changelog: "Versión estable para Minecraft 1.20.4",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.4-1.20.4",
        isBeta: false
      }
    ]
  };

  const sortedVersions = Object.keys(versionGroups).sort((a, b) => {
    const [aMajor, aMinor, aPatch] = a.split('.').map(Number);
    const [bMajor, bMinor, bPatch] = b.split('.').map(Number);
    
    if (aMajor !== bMajor) return bMajor - aMajor;
    if (aMinor !== bMinor) return bMinor - aMinor;
    return bPatch - aPatch;
  });

  return (
    <section id="download" className="py-20 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-purple-900 mb-4">Descargar por Versión</h2>
        <p className="text-xl text-purple-600 text-center mb-12">Elige la versión que mejor se adapte a tus necesidades</p>
        
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-4 justify-center">
          {sortedVersions.map((version) => (
            <button
              key={version}
              onClick={() => setActiveTab(version)}
              className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                activeTab === version 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              Minecraft {version}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {versionGroups[activeTab].map((item) => (
            <div 
              key={item.id} 
              className={`p-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                item.isBeta 
                ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' 
                : 'bg-white shadow-xl'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    v{item.version}
                    {item.isBeta && (
                      <span className="ml-3 inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-sm font-semibold rounded-full">
                        BETA
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-500">{item.date}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 text-lg">{item.changelog}</p>
              <a
                href={item.downloadUrl}
                onClick={() => handleDownload(item.version)}
                className={`inline-flex items-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  item.isBeta 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                }`}
                download
              >
                <span className="mr-2">Descargar v{item.version}</span>
                <span className="text-xl"></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;