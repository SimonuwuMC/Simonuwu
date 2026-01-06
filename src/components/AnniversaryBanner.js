import React from 'react';

const AnniversaryBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 left-10 animate-bounce text-2xl">🎉</div>
        <div className="absolute top-4 right-20 animate-bounce text-2xl" style={{ animationDelay: '0.2s' }}>🎂</div>
        <div className="absolute bottom-3 left-1/4 animate-bounce text-2xl" style={{ animationDelay: '0.4s' }}>🎊</div>
        <div className="absolute top-3 right-10 animate-bounce text-2xl" style={{ animationDelay: '0.6s' }}>⭐</div>
        <div className="absolute bottom-2 right-1/4 animate-bounce text-2xl" style={{ animationDelay: '0.3s' }}>🎈</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">
            ¡1 Año de Simonuwu Fabric Project!
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 drop-shadow-md">
            Gracias por formar parte de esta increíble comunidad durante este primer año
          </p>
          <p className="text-sm sm:text-base text-blue-100 mt-2 drop-shadow-md">
            Celebrando con especiales, nuevas versiones y más contenido que viene
          </p>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default AnniversaryBanner;
