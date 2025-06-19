import React from 'react';

const ModsList = () => {
  const mods = [
    {
      name: "Sodium",
      description: "Optimización del renderizado gráfico",
      url: "https://modrinth.com/mod/sodium",
      category: "performance",
      icon: "https://cdn.modrinth.com/data/AANobbMI/icon.png"
    },
    {
      name: "Lithium",
      description: "Mejoras en la física y lógica del juego",
      url: "https://modrinth.com/mod/lithium",
      category: "performance",
      icon: "https://cdn.modrinth.com/data/gvQqBUqZ/icon.png"
    },
    {
      name: "Entity Culling",
      description: "Mejora el rendimiento al optimizar el renderizado de entidades",
      url: "https://modrinth.com/mod/entityculling",
      category: "performance",
      icon: "https://cdn.modrinth.com/data/NNAgCjsB/icon.png"
    },
    {
      name: "Sodium Extra",
      description: "Mejoras adicionales para Sodium",
      url: "https://modrinth.com/mod/sodium-extra",
      category: "performance",
      icon: "https://cdn.modrinth.com/data/PtjYWJkn/icon.png"
    },
    {
      name: "Iris Shaders",
      description: "Soporte para shaders",
      url: "https://modrinth.com/mod/iris",
      category: "graphics",
      icon: "https://cdn.modrinth.com/data/YL57xq9U/18d0e7f076d3d6ed5bedd472b853909aac5da202_96.webp"
    },
    {
      name: "Continuity",
      description: "Mejora las texturas conectadas",
      url: "https://modrinth.com/mod/continuity",
      category: "graphics",
      icon: "https://cdn.modrinth.com/data/1IjD5062/icon.png"
    },
    {
      name: "LambDynamicLights",
      description: "Iluminación dinámica",
      url: "https://modrinth.com/mod/lambdynamiclights",
      category: "graphics",
      icon: "https://cdn.modrinth.com/data/yBW8D80W/d4f5c3ff8df7caf024178b04eca6d69f95979cfe_96.webp"
    },
    {
      name: "3D Skin Layers",
      description: "Mejora la visualización de las capas de skin",
      url: "https://modrinth.com/mod/3dskinlayers",
      category: "graphics",
      icon: "https://cdn.modrinth.com/data/zV5r3pPn/ff7010d4ec0275609866c8b0f603b25e25949c08_96.webp"
    },
    {
      name: "Entity Model Features",
      description: "Mejoras en los modelos de entidades",
      url: "https://modrinth.com/mod/entity-model-features",
      category: "graphics",
      icon: "https://cdn.modrinth.com/data/4I1XuqiY/6e5bbd0d06b1741bfdab6c0cfab6de8fdaf0064c_96.webp"
    },
    {
      name: "Entity Texture Features",
      description: "Mejoras en las texturas de entidades",
      url: "https://modrinth.com/mod/entitytexturefeatures",
      category: "graphics",
      icon: "https://cdn.modrinth.com/data/BVzZfTc1/af683d206d50b05258d865b0d6e4aa2f2cee12f2_96.webp"
    },
    {
      name: "Fresh Animations",
      description: "Pack de recursos con animaciones mejoradas",
      url: "https://modrinth.com/resourcepack/fresh-animations",
      category: "graphics",
      icon: "https://cdn.modrinth.com/data/50dA9Sha/d5f379581096db483bd2181ab982d9270b17feb7_96.webp"
    },
    {
      name: "Mod Menu",
      description: "Interfaz para gestionar mods",
      url: "https://modrinth.com/mod/modmenu",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/mOgUt4GM/1bfe2006b38340e9d064700e41adf84a8abb1bd4_96.webp"
    },
    {
      name: "AppleSkin",
      description: "Información detallada sobre el hambre",
      url: "https://modrinth.com/mod/appleskin",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/EsAfCjCV/icon.png"
    },
    {
      name: "Better Third Person",
      description: "Mejora la vista en tercera persona",
      url: "https://modrinth.com/mod/better-third-person",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/G1s2WpNo/icon.png"
    },
    {
      name: "Leawind's Third Person",
      description: "Alternativa para Better thrid person para mejorar la vista en tercera persona",
      url: "https://modrinth.com/mod/leawind-third-person",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/S3D3QF0M/707a25d3fcf17f6aa7009dd3d3bcb68ed7aa10e1_96.webp"
    },
    {
      name: "Jade",
      description: "Información detallada al mirar bloques y entidades",
      url: "https://modrinth.com/mod/jade",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/nvQzSEkH/icon.png"
    },
    {
      name: "MiniHUD",
      description: "Información útil en pantalla",
      url: "https://modrinth.com/mod/minihud",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/UMxybHE8/4adf057a251f694983af139a06839e33bcd7a419.png"
    },
    {
      name: "Not Enough Animations",
      description: "Añade animaciones faltantes",
      url: "https://modrinth.com/mod/not-enough-animations",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/MPCX6s5C/icon.png"
    },
    {
      name: "REI",
      description: "Sistema de recetas e inventario",
      url: "https://modrinth.com/mod/rei",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/nfn13YXA/icon.png"
    },
    {
      name: "Reese's Sodium Options",
      description: "Mejora la interfaz de opciones de Sodium",
      url: "https://modrinth.com/mod/reeses-sodium-options",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/Bh37bMuy/icon.png"
    },
    {
      name: "ReplayMod",
      description: "Grabar y reproducir gameplay",
      url: "https://modrinth.com/mod/replaymod",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/Nv2fQJo5/icon.png"
    },
    {
      name: "Xaero's Minimap",
      description: "Minimapa en pantalla",
      url: "https://modrinth.com/mod/xaeros-minimap",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/1bokaNcj/354080f65407e49f486fcf9c4580e82c45ae63b8_96.webp"
    },
    {
      name: "Xaero's World Map",
      description: "Mapa completo del mundo",
      url: "https://modrinth.com/mod/xaeros-world-map",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/NcUtCpym/354080f65407e49f486fcf9c4580e82c45ae63b8_96.webp"
    },
    {
      name: "Zoomify",
      description: "Función de zoom mejorada",
      url: "https://modrinth.com/mod/zoomify",
      category: "utility",
      icon: "https://cdn.modrinth.com/data/w7ThoJFB/e2de67a0bfb9e8aa2347982ab3ec5463f26cca31_96.webp"
    },
    {
      name: "Translations for Sodium",
      description: "Pack de recursos con traducciones para Sodium",
      url: "https://modrinth.com/resourcepack/translations-for-sodium",
      category: "resourcepacks",
      icon: "https://cdn.modrinth.com/data/yfDziwn1/907581019df45903df237952ce8d10ac37134cb5_96.webp"
    },
    {
      name: "Fabric API",
      description: "API necesaria para los mods de Fabric",
      url: "https://modrinth.com/mod/fabric-api",
      category: "required",
      icon: "https://cdn.modrinth.com/data/P7dR8mSH/icon.png"
    },
    {
      name: "Fabric Language Kotlin",
      description: "Soporte para mods escritos en Kotlin",
      url: "https://modrinth.com/mod/fabric-language-kotlin",
      category: "required",
      icon: "https://cdn.modrinth.com/data/Ha28R6CL/72c3d74aeb665e45aea93a945a01474cbce3b7da_96.webp"
    },
    {
      name: "Architectury API",
      description: "API necesaria para REI",
      url: "https://modrinth.com/mod/architectury-api",
      category: "required",
      icon: "https://cdn.modrinth.com/data/lhGA9TYQ/icon.png"
    },
    {
      name: "Cloth Config",
      description: "API de configuración para mods",
      url: "https://modrinth.com/mod/cloth-config",
      category: "required",
      icon: "https://cdn.modrinth.com/data/9s6osm5g/icon.png"
    }
  ];

  const categories = {
    performance: "Rendimiento",
    graphics: "Gráficos",
    utility: "Utilidad",
    resourcepacks: "Packs de Recursos",
    required: "APIs Requeridas"
  };

  return (
    <section className="py-12 px-6 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-red-900 dark:text-red-400 mb-12">Mods Instalados</h2>
        
        {Object.entries(categories).map(([category, title]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-red-800 dark:text-red-300 mb-4">{title}</h3>
            <div className="space-y-4">
              {mods
                .filter(mod => mod.category === category)
                .map((mod, index) => (
                  <a 
                    key={index}
                    href={mod.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-white dark:bg-gray-700 hover:bg-red-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <img 
                      src={mod.icon} 
                      alt={`${mod.name} icon`}
                      className="w-12 h-12 rounded"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-red-900 dark:text-red-300">{mod.name}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{mod.description}</p>
                    </div>
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