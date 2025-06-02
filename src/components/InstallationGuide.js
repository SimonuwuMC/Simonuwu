import React, { useState } from 'react';

const InstallationGuide = ({ onAchievement }) => {
  const [showTutorial, setShowTutorial] = useState(false);

  const handleTutorialClick = () => {
    setShowTutorial(!showTutorial);
    if (!showTutorial) {
      onAchievement();
    }
  };

  const steps = [
    <span key="0">
      Descarga e instala Prism Launcher,SkLauncher,{' '}
      <span 
        className="cursor-pointer hover:text-red-600 dark:hover:text-red-400 transition-colors"
        onClick={handleTutorialClick}
      >
        Pojav Launcher
      </span>{' '}
      o MultiMC (recomendado)
    </span>,
    "Crea una nueva instancia de Fabric para la versión adecuada",
    "En la pestaña de modpacks, busca 'Simonuwu Fabric Project'",
    "Selecciona la versión que deseas instalar",
    "¡Listo! Ahora solo haz click en jugar"
  ];

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-red-900 dark:text-red-400 mb-8">Cómo instalar</h2>
      
      <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
        <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
          {steps.map((step, index) => (
            <li key={index} className="pl-2">
              {step}
            </li>
          ))}
        </ol>

        {showTutorial && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/50 border border-red-600 rounded-lg animate-fade-in">
            <p className="text-red-900 dark:text-red-300 mb-2">¡Has encontrado un tutorial secreto! 🎮</p>
            <a 
              href="https://youtu.be/20HXyed0-cE?si=SFsT4QdLGLhh_wme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 dark:bg-red-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 dark:hover:bg-red-900 transition-colors"
            >
              Ver Tutorial en YouTube
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstallationGuide;