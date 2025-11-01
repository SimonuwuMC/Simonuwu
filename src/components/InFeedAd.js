import React from 'react';
import AdBanner from './AdBanner';

const InFeedAd = ({ className = "" }) => {
  return (
    <div className={`my-8 flex justify-center ${className}`}>
      <div className="max-w-4xl w-full">
        <div className="text-center mb-2">
          <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Publicidad
          </span>
        </div>
        <AdBanner
          slot="1234567890" // Reemplaza con tu slot ID real
          format="rectangle"
          style={{
            width: '100%',
            height: '250px',
            maxWidth: '728px',
            margin: '0 auto'
          }}
          className="bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
        />
      </div>
    </div>
  );
};

export default InFeedAd;