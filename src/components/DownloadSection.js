import React, { useState, useEffect } from 'react';
import { useKeyboardNavigation } from '../utils/keyboardNavigation';
import { getSortedVersions, getVersionStrings, getVersionData } from '../data/versions';

const DownloadSection = ({ onAchievement }) => {
  const sortedVersions = getVersionStrings();
  const [activeTab, setActiveTab] = useState(sortedVersions[0]);
  const [selectedImageOption, setSelectedImageOption] = useState('movie'); // Default to first option

  const handleDownload = (version) => {
    if (version === "1.0.0") {
      onAchievement();
    }
  };

  // Initialize keyboard navigation
  const { handleKeyDown } = useKeyboardNavigation(sortedVersions, activeTab, setActiveTab);

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Reset image selection when changing tabs
  useEffect(() => {
    setSelectedImageOption('movie'); // Reset to default option
  }, [activeTab]);

  // Get current version data
  const currentVersionData = getVersionData(activeTab);

  if (!currentVersionData) {
    return <div>Error: Version data not found</div>;
  }

  // Get current image and title based on selection
  const getCurrentImageData = () => {
    if (currentVersionData.hasImageSelector && currentVersionData.imageOptions) {
      const selectedOption = currentVersionData.imageOptions.find(
        option => option.key === selectedImageOption
      );
      return selectedOption || currentVersionData.imageOptions[0];
    }
    
    // Fallback for versions without image selector
    return {
      image: currentVersionData.image,
      title: currentVersionData.title,
      description: null
    };
  };

  const currentImageData = getCurrentImageData();

  return (
    <section id="download" className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-red-900 dark:text-red-400 mb-6">Descargar por Versión</h2>
      
      {/* Keyboard navigation hint */}
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          💡 Usa las teclas ← → para navegar entre versiones
        </p>
      </div>
      
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {sortedVersions.map((version) => (
          <button
            key={version}
            onClick={() => setActiveTab(version)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
              activeTab === version 
                ? 'bg-red-600 dark:bg-red-800 text-white shadow-lg transform scale-105' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {version}
          </button>
        ))}
      </div>

      {/* Image Selector - Only show if version has image selector */}
      {currentVersionData.hasImageSelector && currentVersionData.imageOptions && (
        <div className="flex justify-center mb-4">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-2 shadow-md">
            <div className="flex space-x-2">
              {currentVersionData.imageOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setSelectedImageOption(option.key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedImageOption === option.key
                      ? 'bg-red-600 dark:bg-red-800 text-white'
                      : 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500'
                  }`}
                >
                  {option.icon} {option.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Version Image */}
      <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
        <img 
          src={currentImageData.image} 
          alt={`Minecraft ${activeTab} update - ${currentImageData.title}`}
          className="w-full h-120 object-cover transition-all duration-300"
          onError={(e) => {
            e.target.src = 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080';
          }}
        />
        <div className="bg-gradient-to-r from-red-400 to-red-400 dark:from-red-800 dark:to-red-900 p-8">
          <h3 className="text-2xl font-bold text-white mb-3">Minecraft {activeTab}</h3>
          <p className="text-red-100 text-xl">
            {currentImageData.title}
          </p>
          {currentImageData.description && (
            <p className="text-red-200 text-sm mt-2">
              {currentImageData.icon} {currentImageData.description}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {currentVersionData.releases.map((item) => (
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
            <div className="flex gap-3">
              <a
                href={item.downloadUrl}
                onClick={() => handleDownload(item.version)}
                className={`px-6 py-2 rounded-lg font-medium ${
                  item.isBeta
                    ? 'bg-yellow-500 dark:bg-yellow-700 hover:bg-yellow-600 dark:hover:bg-yellow-800'
                    : 'bg-green-600 dark:bg-green-700 hover:bg-green-700 dark:hover:bg-green-800'
                } text-white transition-colors`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Modrinth
              </a>
              {item.curseforgeUrl && (
                <a
                  href={item.curseforgeUrl}
                  onClick={() => handleDownload(item.version)}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    item.isBeta
                      ? 'bg-yellow-500 dark:bg-yellow-700 hover:bg-yellow-600 dark:hover:bg-yellow-800'
                      : 'bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800'
                  } text-white transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CurseForge
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DownloadSection;