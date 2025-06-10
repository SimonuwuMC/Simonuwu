import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: "Mods Kawaii",
      description: "Selección de los mods más adorables para tu experiencia Minecraft",
      icon: "🌸",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Performance",
      description: "Optimizado para correr bien incluso en PCs modestas",
      icon: "⚡",
      image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Fabric",
      description: "Compatible con la versión más moderna de Minecraft",
      icon: "🧵",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-12 px-6 bg-red-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-900 dark:text-red-400 mb-12">¿Por qué Simonuwu?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-4xl">{feature.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;