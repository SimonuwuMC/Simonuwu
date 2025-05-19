import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesGrid = () => {
  const features = [
    {
      icon: '✨',
      title: 'Optimizado',
      description: 'Rendimiento mejorado para una experiencia fluida'
    },
    {
      icon: '🧩',
      title: 'Mods Seleccionados',
      description: 'Colección cuidadosamente curada de los mejores mods'
    },
    {
      icon: '🎨',
      title: 'Estético',
      description: 'Diseño visual cohesivo y hermoso'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Características Principales</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;