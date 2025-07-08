import React from 'react';

const CompatibilityModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOpenExcel = () => {
    window.location.href = 'https://d.kuku.lu/uj2ducbmc';
    onClose(); // Close the modal after opening the link
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
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
        
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            La tabla de compatibilidad se abrirá en una nueva pestaña para una mejor experiencia de visualización.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={handleOpenExcel}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              <span className="mr-2">📊</span>
              Abrir Tabla de Compatibilidad
            </button>
            
            <button
              onClick={onClose}
              className="w-full bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompatibilityModal;