import React, { useState } from 'react';

const VersionSelector = () => {
  const [selectedVersion, setSelectedVersion] = useState('');

  const versions = [
    { id: '1.19.2', name: '1.19.2 (Recomendada)' },
    { id: '1.18.2', name: '1.18.2' },
    { id: '1.17.1', name: '1.17.1' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Selecciona tu versión</h2>
      <select
        value={selectedVersion}
        onChange={(e) => setSelectedVersion(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
      >
        <option value="">Selecciona una versión</option>
        {versions.map((version) => (
          <option key={version.id} value={version.id}>{version.name}</option>
        ))}
      </select>
      
      {selectedVersion && (
        <a
          href={`https://modrinth.com/modpack/simonuwu-fabric-project/version/${selectedVersion}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-4 rounded-lg transition-colors"
        >
          Descargar para {selectedVersion}
        </a>
      )}
    </div>
  );
};

export default VersionSelector;