import React, { useState } from 'react';

const DownloadTabs = () => {
  const [activeTab, setActiveTab] = useState('stable');

  return (
    <div className="max-w-4xl mx-auto mb-8">
      <div className="flex border-b border-gray-200">
        <button
          className={`py-3 px-6 font-medium ${activeTab === 'stable' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('stable')}
        >
          Versiones Estables
        </button>
        <button
          className={`py-3 px-6 font-medium ${activeTab === 'beta' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => setActiveTab('beta')}
        >
          Versiones Beta
        </button>
      </div>
    </div>
  );
};

export default DownloadTabs;