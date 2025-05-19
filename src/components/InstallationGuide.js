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
      Descarga e instala Prism Launcher, SkLauncher,{' '}
      <span 
        className="cursor-pointer text-purple-600 hover:text-purple-800 font-semibold transition-colors underline decoration-dotted"
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
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-purple-900 mb-4">Guía de Instalación</h2>
        <p className="text-xl text-purple-600 text-center mb-12">Sigue estos sencillos pasos para comenzar tu aventura</p>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li 
                key={index} 
                className="flex items-start"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </span>
                <p className="text-lg text-gray-700 pt-1">{step}</p>
              </li>
            ))}
          </ol>

          {showTutorial && (
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl animate-fade-in">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🎮</span>
                <h3 className="text-xl font-bold text-purple-900">¡Tutorial Secreto Encontrado!</h3>
              </div>
              <a 
                href="https://youtu.be/20HXyed0-cE?si=SFsT4QdLGLhh_wme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="mr-2">Ver Tutorial en YouTube</span>
                <span className="text-xl">▶️</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;