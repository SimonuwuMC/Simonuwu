import React, { useState } from 'react';
import { groupVersionsByGeneration } from '../utils/versionGrouping';
import VersionGroup from './VersionGroup';

const DownloadSectionVertical = ({ onAchievement }) => {
  const groups = groupVersionsByGeneration();
  const [selectedImageOptions, setSelectedImageOptions] = useState({});

  return (
    <section id="download-vertical" className="py-12 px-6 max-w-5xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-red-900 dark:text-red-400 mb-3">
          Descargar por Versión - Vista Experimental
        </h2>
        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-bold rounded-full">
          BETA TEST
        </span>
      </div>

      {/* Quick Navigation */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {groups.map((group) => (
          <a
            key={group.id}
            href={`#group-${group.id}`}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            {group.id}
          </a>
        ))}
      </div>

      <div className="space-y-16">
        {groups.map((group) => (
          <div key={group.id} id={`group-${group.id}`}>
            <VersionGroup
              group={group}
              onAchievement={onAchievement}
              selectedImageOptions={selectedImageOptions}
              setSelectedImageOptions={setSelectedImageOptions}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DownloadSectionVertical;
