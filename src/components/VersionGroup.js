import React, { useState } from 'react';
import { getVersionData } from '../data/versions';

const VersionGroup = ({ group, onAchievement, selectedImageOptions = {}, setSelectedImageOptions }) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-red-900 dark:text-red-400 mb-8 pb-4 border-b-2 border-red-200 dark:border-red-800">
        {group.name}
      </h3>

      <div className="space-y-12">
        {group.versions.map((version) => {
          const versionData = getVersionData(version);
          if (!versionData) return null;

          const selectedImageOption = selectedImageOptions[version] || 'movie';

          const handleDownload = (downloadVersion) => {
            if (downloadVersion === "1.0.0") {
              onAchievement();
            }
          };

          const getCurrentImageData = () => {
            if (versionData.hasImageSelector && versionData.imageOptions) {
              const selectedOption = versionData.imageOptions.find(
                option => option.key === selectedImageOption
              );
              return selectedOption || versionData.imageOptions[0];
            }

            return {
              image: versionData.image,
              title: versionData.title,
              description: null
            };
          };

          const currentImageData = getCurrentImageData();

          return (
            <div key={version} className="border-l-4 border-red-400 dark:border-red-600 pl-6">
              {/* Image Selector - Only show if version has image selector */}
              {versionData.hasImageSelector && versionData.imageOptions && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-2 shadow-md">
                    <div className="flex space-x-2">
                      {versionData.imageOptions.map((option) => (
                        <button
                          key={option.key}
                          onClick={() => setSelectedImageOptions({
                            ...selectedImageOptions,
                            [version]: option.key
                          })}
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
              <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={currentImageData.image}
                  alt={`Minecraft ${version} update - ${currentImageData.title}`}
                  className="w-full h-96 object-cover transition-all duration-300"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080';
                  }}
                />
                <div className="bg-gradient-to-r from-red-400 to-red-500 dark:from-red-800 dark:to-red-900 p-8">
                  <h4 className="text-2xl font-bold text-white mb-3">Minecraft {version}</h4>
                  <p className="text-red-100 text-lg">
                    {currentImageData.title}
                  </p>
                  {currentImageData.description && (
                    <p className="text-red-200 text-sm mt-2">
                      {currentImageData.icon} {currentImageData.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Releases */}
              <div className="space-y-4">
                {versionData.releases.map((item) => (
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
                        <h5 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                          v{item.version} - Minecraft {version}
                        </h5>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VersionGroup;
