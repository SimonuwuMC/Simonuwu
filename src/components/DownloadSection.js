import React, { useState } from 'react';

const DownloadSection = ({ onAchievement }) => {
  const [activeTab, setActiveTab] = useState('1.21.6');

  const handleDownload = (version) => {
    if (version === "1.0.0") {
      onAchievement();
    }
  };

  const versionImages = {
    '1.21.6': 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/MCV_ChaseTheSkies_launch_Header_1170x500.jpg',
    '1.21.5': 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/game-updates/MCV_SpringDrop_DotNet_Blog_Editorial_1280x720.jpg',
    '1.21.4': 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Minecraft_TheGardenAwakens_DotNet_1280x768.jpg',
    '1.21.3': 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/MCV_falldrop_launch_editorial_1170x500.jpg',
    '1.21.1': 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Tricky-Trials_1280x768.jpg',
    '1.20.4': 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Trails-and-Tales_1280x768.jpg',
    '1.18.2': 'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/CC2_KeyArt_1140x565.jpg'
  };

  const versionTitles = {
    '1.18.2': 'Caves & Cliffs Part II',
    '1.20.4': 'Trails & Tales',
    '1.21.1': 'Tricky Trials',
    '1.21.3': 'Bundles of Bravery',
    '1.21.4': 'Garden Awakens',
    '1.21.5': 'Spring to Life',
    '1.21.6': 'Chase the Skies'
  };

  const versionGroups = {
    '1.21.6': [
      {
        id: "80dU7Qsg",
        version: "beta-0.2-1.0.4",
        date: "Jun 24, 2025",
        changelog: "Segunda versión beta para Minecraft 1.21.6 con mejoras y correcciones",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/0.2-1.0.4-1.21.6",
        isBeta: true
      },
      {
        id: "70cU6Qrf",
        version: "beta-0.1-1.0.4",
        date: "Jun 21, 2025",
        changelog: "Primera versión beta para Minecraft 1.21.6 Chase the Skies",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/0.1-1.0.4-1.21.6",
        isBeta: true
      }
    ],
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
    '1.21.3': [
      {
        id: "1B4DY6fn",
        version: "1.0.4",
        date: "May 26, 2025",
        changelog: "Versión estable para Minecraft 1.21.3",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.4-1.21.3",
        isBeta: false
      }
    ],
    '1.21.1': [
      {
        id: "1B4DY6fn",
        version: "1.0.4",
        date: "May 26, 2025",
        changelog: "Versión estable para Minecraft 1.21.1",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.4-1.21.1",
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
    ],
     '1.18.2': [
       {
        id: "1B4DY6fn",
        version: "1.0.4",
        date: "May 10, 2025",
        changelog: "Versión estable para Minecraft 1.18.2, se modifico un mod por otra alternativa",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.4-1.18.2",
        isBeta: false
      },
      {
        id: "1B4DY6fn",
        version: "beta-0.1-1.0.4",
        date: "May 23, 2025",
        changelog: "Versión beta para Minecraft 1.18.2",
        downloadUrl: "https://modrinth.com/modpack/simonuwu-fabric-project/version/0.1-1.0.4-1.18.2",
        isBeta: true
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
    <section id="download" className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-red-900 dark:text-red-400 mb-6">Descargar por Versión</h2>
      
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {sortedVersions.map((version) => (
          <button
            key={version}
            onClick={() => setActiveTab(version)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap ${
              activeTab === version 
                ? 'bg-red-600 dark:bg-red-800 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            } transition-colors`}
          >
            {version}
          </button>
        ))}
      </div>

      {/* Version Image */}
      <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
        <img 
          src={versionImages[activeTab]} 
          alt={`Minecraft ${activeTab} update`}
          className="w-full h-120 object-cover"
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080';
          }}
        />
        <div className="bg-gradient-to-r from-red-400 to-red-400 dark:from-red-800 dark:to-red-900 p-8">
          <h3 className="text-2xl font-bold text-white mb-3">Minecraft {activeTab}</h3>
          <p className="text-red-100 text-xl">
            {versionTitles[activeTab] || 'Actualización de Minecraft'}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {versionGroups[activeTab].map((item) => (
          <div 
            key={item.id} 
            className={`p-6 rounded-xl ${
              item.isBeta 
                ? 'bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800' 
                : 'bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600'
            } transition-colors`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  v{item.version} - Minecraft {activeTab}
                </h3>
                {item.isBeta && (
                  <span className="inline-block ml-2 px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-bold rounded">
                    BETA
                  </span>
                )}
              </div>
              <span className="text-gray-500 dark:text-gray-400 text-sm">{item.date}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{item.changelog}</p>
            <a
              href={item.downloadUrl}
              onClick={() => handleDownload(item.version)}
              className={`px-6 py-2 rounded-lg font-medium ${
                item.isBeta 
                  ? 'bg-yellow-500 dark:bg-yellow-700 hover:bg-yellow-600 dark:hover:bg-yellow-800' 
                  : 'bg-green-600 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-800'
              } text-white transition-colors`}
              download
            >
              Descargar v{item.version}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DownloadSection;