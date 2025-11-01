import React from 'react';
import AdBanner from './AdBanner';

const SidebarAd = ({ className = "" }) => {
  return (
    <div className={`sticky top-4 ${className}`}>
      <div className="text-center mb-2">
        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          Publicidad
        </span>
      </div>
      <AdBanner
        slot="0987654321" // Reemplaza con tu slot ID real
        format="vertical"
        style={{
          width: '300px',
          height: '600px'
        }}
        className="bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
      />
    </div>
  );
};

export default SidebarAd;