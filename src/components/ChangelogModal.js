import React from 'react';

const ChangelogModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const changelogs = [
    {
      version: "1.0.5",
      date: "3 Apr 2026",
      changes: [
        " ## **Changes** ",
        "- Several mods have been updated to their latest available versions at this time**"
        "- **The fabric loader was updated to version 0.18.1**
        "- **Translations for Sodium was removed to avoid copyright issues. However, it can be downloaded using the Resourcify mod or manually from Modrinth or Curseforge.** 

## **Changes for the menu.**
- **A mod was added that allows you to customize Minecraft menus so that the project gets a watermark.** 
**The game menu was modified with the ``simonuwu_fabric_project`` layouts, adding a button to view the YouTube channel, the project logo, and its official website.** 
- **The donation icon in the ``simonuwu_fabric_project`` menu was changed to a button with the $ symbol, and the window name was also changed from Simonuwu Fabric Project BetaTest-6-1.0.4-1.21.8 to Simonuwu Fabric Project 1.0.5-1.21.8** 


**Several mods have been added to improve chunk loading and other gameplay improvements, A mod has been added to improve the download of Resource Packs, Data Packs, Worlds, and Shaders.** 

### **Mods Added**

- BadOptimizations
- Concurrent Chunk Management Engine (C2ME)
- Fast IP Ping 
- FerriteCore 
- ImmediatelyFast 
- ModernFix 
- Starlight - ScalableLux 
- Very Many Players
- FastChest
- Resourcify
- FancyMenu
- Konkrete
- Melody
- Cubes Without Borders mod was recently added to version 7 of 1.0.5

### **Resource Pack Eliminated**

- Translations for Sodium

https://modrinth.com/modpack/simonuwu-fabric-project/version/1.0.5-1.21.8"
      ]
    },
    {
      version: "1.0.4",
      date: "24 Jul 2025",
      changes: [
        "✅ Versión estable para todas las versiones de Minecraft soportadas",
        "🔧 Optimizaciones de rendimiento mejoradas",
        "🆕 Nuevos mods agregados: 3D Skin Layers, AppleSkin, MiniHUD",
        "🐛 Corrección de errores menores",
        "📦 Actualización de todos los mods a sus últimas versiones compatibles"
      ]
    },
    {
      version: "1.0.3",
      date: "9 Feb 2025",
      changes: [
        "🚀 Mejoras significativas de rendimiento",
        "🔧 Corrección de errores críticos",
        "📦 Actualización de mods principales",
        "🎨 Mejoras en la interfaz de usuario"
      ]
    },
    {
      version: "1.0.2",
      date: "9 Jan 2025",
      changes: [
        "📦 Actualización masiva de mods",
        "⚡ Optimizaciones de memoria",
        "🔧 Correcciones de compatibilidad",
        "🆕 Agregado soporte para más versiones de Minecraft"
      ]
    },
    {
      version: "1.0.1",
      date: "9 Jan 2025",
      changes: [
        "🐛 Primera actualización con correcciones importantes",
        "🔧 Solución de problemas de carga",
        "📦 Actualización de dependencias críticas",
        "⚡ Mejoras menores de rendimiento"
      ]
    },
    {
      version: "1.0.0",
      date: "9 Jan 2025",
      changes: [
        "🎉 Primera versión estable del modpack (1.21.4)",
        "📦 Mods principales: Sodium, Lithium, Iris Shaders para optimización",
        "🔧 Mods de utilidad: ModMenu, MiniHUD + MaLiLib, In-Game Account Switcher",
        "🎨 Mejoras visuales: Continuity, Entity Culling + Entity Model Features",
        "📹 Grabación: ReplayMod para capturar gameplay",
        "🔍 Funcionalidad: Zoomify para zoom mejorado",
        "🌟 APIs esenciales: Fabric API, Fabric Language Kotlin",
        "🎨 Resource Packs: Fresh Animations, Translations for Sodium",
        "⚡ Optimizaciones: Sodium Extra, Reese's Sodium Options",
        "⚠️ Versión inicial con algunos errores conocidos"
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            📋 Registros de Cambios - Simonuwu Fabric Project
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
        
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-6">
            {changelogs.map((changelog, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    Versión {changelog.version}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {changelog.date}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {changelog.changes.map((change, changeIndex) => (
                    <li 
                      key={changeIndex}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="mr-2 mt-1 text-xs">•</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
              🔗 Enlaces Útiles
            </h4>
            <div className="space-y-2 text-sm">
              <a 
                href="https://modrinth.com/modpack/simonuwu-fabric-project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                📦 Ver en Modrinth
              </a>
              <a 
                href="https://www.youtube.com/@simonuwu.minecraft" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-blue-600 dark:text-blue-400 hover:underline"
              >
                🎥 Canal de YouTube de Simonuwu
              </a>
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-gray-200 dark:border-gray-600">
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogModal;