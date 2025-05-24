import React from 'react';

const ModsList = () => {
  const mods = [
    {
      name: "Sodium",
      description: "Optimización del renderizado gráfico",
      category: "performance",
      icon: "⚡"
    },
    {
      name: "Lithium",
      description: "Mejoras en la física y lógica del juego",
      category: "performance",
      icon: "🚀"
    },
    {
      name: "Iris Shaders",
      description: "Soporte para shaders",
      category: "graphics",
      icon: "✨"
    },
    {
      name: "Mod Menu",
      description: "Interfaz para gestionar mods",
      category: "utility",
      icon: "🔧"
    },
    {
      name: "AppleSkin",
      description: "Información detallada sobre el hambre",
      category: "utility",
      icon: "🍎"
    },
    {
      name: "Better F3",
      description: "Mejora la pantalla de depuración",
      category: "utility",
      icon: "📊"
    },
    {
      name: "LambDynamicLights",
      description: "Iluminación dinámica",
      category: "graphics",
      icon: "💡"
    },
    {
      name: "Continuity",
      description: "Mejora las texturas conectadas",
      category: "graphics",
      icon: "🎨"
    }
  ];

  const categories = {
    performance: "Rendimiento",
    graphics: "Gráficos",
    utility: "Utilidad"
  };

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-900 mb-12">Mods Instalados</h2>
        
        {Object.entries(categories).map(([category, title]) => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-semibold text-red-800 mb-4">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mods
                .filter(mod => mod.category === category)
                .map((mod, index) => (
                  <div 
                    key={index}
                    className="bg-red-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{mod.icon}</span>
                      <h4 className="text-lg font-semibold text-red-900">{mod.name}</h4>
                    </div>
                    <p className="text-gray-700">{mod.description}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModsList;