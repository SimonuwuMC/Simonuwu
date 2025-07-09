import React from 'react';

const CompatibilityModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-6xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            📊 Tabla de Compatibilidad de Mods
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
          <div className="h-full bg-white rounded-lg overflow-hidden border-2 border-gray-200">
            {/* Display the table image directly */}
            <div className="w-full h-full overflow-auto">
              <img 
                src="/Captura de pantalla 2025-07-08 123410 copy.png" 
                alt="Tabla de Compatibilidad de Mods"
                className="w-full h-auto min-w-[800px] object-contain"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 dark:border-gray-600">
          <div className="flex justify-center space-x-3">
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