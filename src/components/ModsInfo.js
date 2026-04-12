import React, { useState } from 'react';
import { mods105 } from '../data/mods-1.0.5';

const ModsInfo = () => {
  const [activeTab, setActiveTab] = useState('added');

  const getTabContent = () => {
    switch (activeTab) {
      case 'added':
        return mods105.added;
      case 'removed':
        return mods105.removed;
      case 'updated':
        return mods105.updated;
      default:
        return [];
    }
  };

  const tabLabel = {
    added: `Mods Agregados (${mods105.added.length})`,
    removed: `Mods Eliminados (${mods105.removed.length})`,
    updated: `Actualizaciones (${mods105.updated.length})`
  };

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-red-900 dark:text-red-400 mb-8">
        Cambios en la Versión 1.0.5
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {Object.keys(tabLabel).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 px-6 font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-red-600 dark:bg-red-800 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {tabLabel[tab]}
            </button>
          ))}
        </div>

        <div className="p-6">
          <ul className="space-y-3">
            {getTabContent().map((item, index) => (
              <li
                key={index}
                className="flex items-start p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <span className="text-red-600 dark:text-red-400 font-bold mr-3">•</span>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ModsInfo;
