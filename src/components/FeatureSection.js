import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      title: "Mods Kawaii",
      description: "Una colección cuidadosamente seleccionada de los mods más adorables para tu experiencia Minecraft",
      icon: "🌸",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Performance",
      description: "Optimizado meticulosamente para ofrecer el mejor rendimiento incluso en equipos modestos",
      icon: "⚡",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Fabric",
      description: "Construido sobre Fabric para garantizar la mejor compatibilidad y rendimiento con Minecraft moderno",
      icon: "🧵",
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-purple-900 mb-4">¿Por qué Simonuwu?</h2>
        <p className="text-xl text-purple-600 text-center mb-16 max-w-2xl mx-auto">Descubre por qué nuestro modpack es la elección perfecta para tu aventura en Minecraft</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${feature.gradient} p-6 flex justify-center items-center`}>
                <span className="text-6xl">{feature.icon}</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;