import React from 'react';

const VersionCard = ({ version, date, changelog, isBeta, downloadUrl }) => {
  return (
    <div className={`rounded-xl p-6 mb-4 shadow-md ${isBeta ? 'bg-yellow-50 border-l-4 border-yellow-400' : 'bg-white border-l-4 border-green-400'}`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-2xl font-semibold">
          {version} {isBeta && <span className="ml-2 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded">BETA</span>}
        </h3>
        <span className="text-gray-500">{date}</span>
      </div>
      <p className="text-gray-700 mb-4">{changelog}</p>
      <a 
        href={downloadUrl} 
        className={`inline-block px-6 py-2 rounded-lg font-medium ${isBeta ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}
        download
      >
        Descargar
      </a>
    </div>
  );
};

export default VersionCard;