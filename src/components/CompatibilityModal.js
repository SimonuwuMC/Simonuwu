import React from 'react';

const CompatibilityModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-6xl h-5/6 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-600">
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
        <div className="flex-1 p-4">
          <iframe
            src="https://1drv.ms/x/c/36429be1b422aeae/ETi2mfwp2AFPohfT8keZrMABFDnX88lucPgy_nkME0QRPQ"
            className="w-full h-full border-0 rounded"
            title="Tabla de Compatibilidad Excel"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default CompatibilityModal;