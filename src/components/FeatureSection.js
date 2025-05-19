import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: "Mods Kawaii",
      description: "Selección de los mods más adorables para tu experiencia Minecraft",
      icon: "🌸"
    },
    {
      title: "Performance",
      description: "Optimizado para correr bien incluso en PCs modestas",
      icon: "⚡"
    },
    {
      title: "Fabric",
      description: "Compatible con la versión más moderna de Minecraft",
      icon: "🧵"
    }
  ];

  return (
    <section className="py-12 px-6 bg-purple-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">¿Por qué Simonuwu?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;