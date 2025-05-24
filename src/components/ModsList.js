import React from 'react';

const ModsList = () => {
  const mods = [
    {
      name: "Sodium",
      description: "Optimización del renderizado gráfico",
      url: "https://modrinth.com/mod/sodium",
      category: "performance",
      icon: "⚡"
    },
    {
      name: "Lithium",
      description: "Mejoras en la física y lógica del juego",
      url: "https://modrinth.com/mod/lithium",
      category: "performance",
      icon: "🚀"
    },
    {
      name: "Entity Culling",
      description: "Mejora el rendimiento al optimizar el renderizado de entidades",
      url: "https://modrinth.com/mod/entityculling",
      category: "performance",
      icon: "📊"
    },
    {
      name: "Sodium Extra",
      description: "Mejoras adicionales para Sodium",
      url: "https://modrinth.com/mod/sodium-extra",
      category: "performance",
      icon: "⚡+"
    },
    {
      name: "Iris Shaders",
      description: "Soporte para shaders",
      url: "https://modrinth.com/mod/iris",
      category: "graphics",
      icon: "✨"
    },
    {
      name: "Continuity",
      description: "Mejora las texturas conectadas",
      url: "https://modrinth.com/mod/continuity",
      category: "graphics",
      icon: "🎨"
    },
    {
      name: "LambDynamicLights",
      description: "Iluminación dinámica",
      url: "https://modrinth.com/mod/lambdynamiclights",
      category: "graphics",
      icon: "💡"
    },
    {
      name: "3D Skin Layers",
      description: "Mejora la visualización de las capas de skin",
      url: "https://modrinth.com/mod/3dskinlayers",
      category: "graphics",
      icon: "👕"
    },
    {
      name: "Entity Model Features",
      description: "Mejoras en los modelos de entidades",
      url: "https://modrinth.com/mod/entity-model-features",
      category: "graphics",
      icon: "🎭"
    },
    {
      name: "Entity Texture Features",
      description: "Mejoras en las texturas de entidades",
      url: "https://modrinth.com/mod/entitytexturefeatures",
      category: "graphics",
      icon: "🖼️"
    },
    {
      name: "Fresh Animations",
      description: "Pack de recursos con animaciones mejoradas",
      url: "https://modrinth.com/resourcepack/fresh-animations",
      category: "graphics",
      icon: "🎬"
    },
    {
      name: "Mod Menu",
      description: "Interfaz para gestionar mods",
      url: "https://modrinth.com/mod/modmenu",
      category: "utility",
      icon: "🔧"
    },
    {
      name: "AppleSkin",
      description: "Información detallada sobre el hambre",
      url: "https://modrinth.com/mod/appleskin",
      category: "utility",
      icon: "🍎"
    },
    {
      name: "Better Third Person",
      description: "Mejora la vista en tercera persona",
      url: "https://modrinth.com/mod/better-third-person",
      category: "utility",
      icon: "👀"
    },
    {
      name: "Jade",
      description: "Información detallada al mirar bloques y entidades",
      url: "https://modrinth.com/mod/jade",
      category: "utility",
      icon: "🔍"
    },
    {
      name: "MiniHUD",
      description: "Información útil en pantalla",
      url: "https://modrinth.com/mod/minihud",
      category: "utility",
      icon: "📱"
    },
    {
      name: "Not Enough Animations",
      description: "Añade animaciones faltantes",
      url: "https://modrinth.com/mod/not-enough-animations",
      category: "utility",
      icon: "🎯"
    },
    {
      name: "REI",
      description: "Sistema de recetas e inventario",
      url: "https://modrinth.com/mod/rei",
      category: "utility",
      icon: "📖"
    },
    {
      name: "ReplayMod",
      description: "Grabar y reproducir gameplay",
      url: "https://modrinth.com/mod/replaymod",
      category: "utility",
      icon: "🎥"
    },
    {
      name: "Xaero's Minimap",
      description: "Minimapa en pantalla",
      url: "https://modrinth.com/mod/xaeros-minimap",
      category: "utility",
      icon: "🗺️"
    },
    {
      name: "Xaero's World Map",
      description: "Mapa completo del mundo",
      url: "https://modrinth.com/mod/xaeros-world-map",
      category: "utility",
      icon: "🌍"
    },
    {
      name: "Zoomify",
      description: "Función de zoom mejorada",
      url: "https://modrinth.com/mod/zoomify",
      category: "utility",
      icon: "🔎"
    },
    {
      name: "Fabric API",
      description: "API necesaria para los mods de Fabric",
      url: "https://modrinth.com/mod/fabric-api",
      category: "required",
      icon: "📦"
    },
    {
      name: "Fabric Language Kotlin",
      description: "Soporte para mods escritos en Kotlin",
      url: "https://modrinth.com/mod/fabric-language-kotlin",
      category: "required",
      icon: "🔧"
    },
    {
      name: "Architectury API",
      description: "API necesaria para REI",
      url: "https://modrinth.com/mod/architectury-api",
      category: "required",
      icon: "🏗️"
    },
    {
      name: "Cloth Config",
      description: "API de configuración para mods",
      url: "https://modrinth.com/mod/cloth-config",
      category: "required",
      icon: "⚙️"
    }
  ];

  const categories = {
    performance: "Rendimiento",
    graphics: "Gráficos",
    utility: "Utilidad",
    required: "APIs Requeridas"
  };

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-900 mb-12">Mods Instalados</h2>
        
        {Object.entries(categories).map(([category, title]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-red-800 mb-6">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mods
                .filter(mod => mod.category === category)
                .map((mod, index) => (
                  <a 
                    key={index}
                    href={mod.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-50 rounded-lg p-4 hover:shadow-md transition-all hover:bg-red-100"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{mod.icon}</span>
                      <h4 className="text-lg font-semibold text-red-900">{mod.name}</h4>
                    </div>
                    <p className="text-gray-700">{mod.description}</p>
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModsList;