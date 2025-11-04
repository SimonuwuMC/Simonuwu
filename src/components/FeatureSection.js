import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: "Optimización Avanzada",
      description: "Sodium, Lithium e Iris Shaders trabajan juntos para mejorar el rendimiento hasta un 300%. Compatible con shaders y texturas de alta resolución sin sacrificar FPS.",
      icon: "⚡",
      details: [
        "Sodium: Renderizado optimizado",
        "Lithium: Mejora la lógica del juego", 
        "Iris: Soporte completo para shaders"
      ]
    },
    {
      title: "Experiencia Visual Mejorada",
      description: "Más de 15 mods visuales que transforman completamente tu experiencia de Minecraft. Desde animaciones fluidas hasta efectos de iluminación dinámica.",
      icon: "🎨",
      details: [
        "Fresh Animations: Animaciones realistas",
        "3D Skin Layers: Skins en 3D",
        "LambDynamicLights: Iluminación dinámica"
      ]
    },
    {
      title: "Herramientas de Utilidad",
      description: "Conjunto completo de herramientas para mejorar tu gameplay. Desde mapas detallados hasta sistemas de recetas avanzados y grabación de gameplay.",
      icon: "🔧",
      details: [
        "Xaero's Minimap: Navegación avanzada",
        "REI: Sistema de recetas completo",
        "ReplayMod: Grabación profesional"
      ]
    }
  ];

  return (
    <section className="py-12 px-6 bg-red-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-900 dark:text-red-400 mb-12">¿Por qué Simonuwu?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all group">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              <div className="mt-4 space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;