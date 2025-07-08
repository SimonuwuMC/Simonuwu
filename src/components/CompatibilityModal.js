import React from 'react';

const CompatibilityModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOpenExcel = () => {
    window.location.href = 'https://d.kuku.lu/uj2ducbmc';
    onClose(); // Close the modal after opening the link
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            📊 Tabla de Compatibilidad
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
        
        <div className="flex-1 p-6 overflow-hidden">
          <div className="h-full bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
            <iframe
              src="https://d.kuku.lu/uj2ducbmc"
              className="w-full h-full border-0"
              title="Tabla de Compatibilidad"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 dark:border-gray-600">
          <div className="flex justify-center space-x-3">
            <button
              onClick={handleOpenExcel}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center"
            >
              <span className="mr-2">🔗</span>
              Abrir en Página Completa
            </button>
            
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibilityModal;