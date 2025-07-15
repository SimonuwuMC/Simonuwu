import React from 'react';

const PojavFeatureSection = () => {
  const features = [
    {
      title: "Optimizado para Móviles",
      description: "Especialmente configurado para funcionar perfectamente en Pojav Launcher",
      icon: "📱"
    },
    {
      title: "Rendimiento Mejorado",
      description: "Mods seleccionados para maximizar el rendimiento en dispositivos móviles",
      icon: "⚡"
    },
    {
      title: "Experiencia Táctil",
      description: "Interfaz adaptada para controles táctiles y pantallas pequeñas",
      icon: "👆"
    }
  ];

  return (
    <section className="py-12 px-6 bg-red-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-900 dark:text-red-400 mb-12">¿Por qué Simonuwu para Pojav?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PojavFeatureSection;