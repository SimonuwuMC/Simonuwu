import React, { useState } from 'react';

const PojavInstallationGuide = ({ onAchievement }) => {
  const [showTutorial, setShowTutorial] = useState(false);

  const handleTutorialClick = () => {
    setShowTutorial(!showTutorial);
    if (!showTutorial) {
      onAchievement();
    }
  };

  const steps = [
    "Descarga e instala Pojav Launcher desde la Play Store o desde su página oficial",
    "Abre Pojav Launcher y configura tu cuenta de Minecraft",
    "Ve a la sección de modpacks o instancias",
    "Busca 'Simonuwu Fabric Project for Pojav' o importa el archivo .mrpack",
    "Selecciona la versión que deseas instalar",
    "Espera a que se descarguen todos los mods",
    "¡Listo! Ahora puedes jugar Minecraft optimizado en tu móvil"
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-red-900 dark:text-red-400 mb-8">Cómo instalar en Pojav Launcher</h2>
      
      <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
        <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
          {steps.map((step, index) => (
            <li key={index} className="pl-2">
              {step}
            </li>
          ))}
        </ol>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/50 border border-blue-600 rounded-lg">
          <p className="text-blue-900 dark:text-blue-300 mb-2">📱 Consejo para Pojav Launcher:</p>
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            Asegúrate de tener al menos 3GB de RAM libre en tu dispositivo para una experiencia óptima. 
            Si experimentas lag, reduce la distancia de renderizado en las opciones de video.
          </p>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={handleTutorialClick}
            className="bg-red-600 dark:bg-red-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 dark:hover:bg-red-900 transition-colors"
          >
            {showTutorial ? 'Ocultar Tutorial' : 'Ver Tutorial en Video'}
          </button>
        </div>

        {showTutorial && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/50 border border-red-600 rounded-lg animate-fade-in">
            <p className="text-red-900 dark:text-red-300 mb-2">¡Has encontrado un tutorial secreto! 🎮</p>
            <a 
              href="https://youtu.be/20HXyed0-cE?si=SFsT4QdLGLhh_wme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 dark:bg-red-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 dark:hover:bg-red-900 transition-colors"
            >
              Ver Tutorial de Pojav Launcher en YouTube
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default PojavInstallationGuide;