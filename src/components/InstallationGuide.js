import React, { useState } from 'react';

const InstallationGuide = ({ onAchievement }) => {
  const [showTutorial, setShowTutorial] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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

  const detailedSteps = [
    {
      title: "Descargar Launcher",
      description: "Elige el launcher que mejor se adapte a tu sistema operativo",
      content: "Recomendamos Prism Launcher por su facilidad de uso y compatibilidad completa con modpacks de Modrinth. También puedes usar SkLauncher, MultiMC o Pojav Launcher para móviles.",
      tips: [
        "Prism Launcher es gratuito y open source",
        "Soporta instalación automática desde Modrinth",
        "Compatible con Windows, Mac y Linux"
      ]
    },
    {
      title: "Crear Instancia",
      description: "Configura una nueva instancia de Minecraft con Fabric",
      content: "Crea una nueva instancia seleccionando la versión de Minecraft que desees y asegúrate de instalar Fabric Loader. El launcher se encargará de descargar todos los componentes necesarios.",
      tips: [
        "Selecciona la versión exacta de Minecraft",
        "Fabric Loader se instala automáticamente",
        "Asigna al menos 4GB de RAM para mejor rendimiento"
      ]
    },
    {
      title: "Instalar Modpack",
      description: "Busca e instala Simonuwu Fabric Project",
      content: "En la sección de modpacks, busca 'Simonuwu Fabric Project' o usa el enlace directo de Modrinth. El launcher descargará automáticamente todos los mods y configuraciones.",
      tips: [
        "Usa la búsqueda integrada del launcher",
        "Verifica la versión de Minecraft compatible",
        "La descarga puede tomar varios minutos"
      ]
    },
    {
      title: "Configurar y Jugar",
      description: "Ajusta la configuración y disfruta del juego",
      content: "Una vez instalado, puedes ajustar la configuración gráfica según tu hardware. El modpack viene preconfigurado para un balance óptimo entre calidad visual y rendimiento.",
      tips: [
        "Ajusta los shaders según tu GPU",
        "Configura la asignación de RAM",
        "Explora las opciones de Sodium para optimización"
      ]
    }
  ];
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-red-900 dark:text-red-400 mb-8">Cómo instalar</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pasos rápidos */}
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-4">🚀 Instalación Rápida</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
            {steps.map((step, index) => (
              <li key={index} className="pl-2 cursor-pointer hover:text-red-600 dark:hover:text-red-400 transition-colors" onClick={() => setActiveStep(index)}>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Guía detallada */}
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-4">📖 Guía Detallada</h3>
          <div className="space-y-4">
            <div className="flex space-x-2 mb-4">
              {detailedSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-8 h-8 rounded-full text-sm font-bold transition-colors ${
                    activeStep === index
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                {detailedSteps[activeStep].title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {detailedSteps[activeStep].description}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                {detailedSteps[activeStep].content}
              </p>
              <div className="space-y-1">
                {detailedSteps[activeStep].tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="text-sm text-green-600 dark:text-green-400 flex items-center">
                    <span className="mr-2">💡</span>
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

        {showTutorial && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/50 border border-red-600 rounded-lg animate-fade-in">
            <p className="text-red-900 dark:text-red-300 mb-2">¡Has encontrado un tutorial secreto! 🎮</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://youtu.be/20HXyed0-cE?si=SFsT4QdLGLhh_wme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 dark:bg-red-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 dark:hover:bg-red-900 transition-colors"
              >
                Ver Tutorial en YouTube
              </a>
              <a 
                href="/pojav.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 dark:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-900 transition-colors"
              >
                📱 Versión para Pojav Launcher
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstallationGuide;