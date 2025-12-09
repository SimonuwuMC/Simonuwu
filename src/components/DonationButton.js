import React, { useState } from 'react';

const DonationButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState('');

  const binanceAddress = 'TU_DIRECCION_BINANCE_AQUI';
  const paypalLink = 'https://paypal.me/tuusuario';

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 z-40 flex items-center space-x-2"
        aria-label="Donaciones"
      >
        <span className="text-xl">💝</span>
        <span>Donar</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-600">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                Apoya el Proyecto
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                Tu apoyo ayuda a mantener y mejorar este modpack. Elige tu método de donación preferido:
              </p>

              <div className="space-y-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">🔶</span>
                      <h3 className="font-bold text-gray-800 dark:text-gray-200">Binance</h3>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded p-3 mb-3">
                    <p className="text-sm text-gray-600 dark:text-gray-300 break-all">
                      {binanceAddress}
                    </p>
                  </div>
                  <button
                    onClick={() => handleCopy(binanceAddress, 'binance')}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    {copied === 'binance' ? 'Copiado' : 'Copiar Dirección'}
                  </button>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">💙</span>
                      <h3 className="font-bold text-gray-800 dark:text-gray-200">PayPal</h3>
                    </div>
                  </div>
                  <a
                    href={paypalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center"
                  >
                    Donar con PayPal
                  </a>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Toda donación es muy apreciada y ayuda a seguir desarrollando el proyecto
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationButton;
