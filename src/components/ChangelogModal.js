import React from 'react';

const ChangelogModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const changelogs = [
    {
        version: "1.0.5a",
        date: "4 Apr 2026",
        changes: [
          "🚨 ACTUALIZACIÓN URGENTE",
          "⚠️ Algunos mods fueron degradados de versión y su proveedor cambió de Modrinth a CurseForge (debido al rechazo del archivo por moderadores)",
          "🏷️ Nombre de la ventana actualizado a Simonuwu Fabric Project 1.0.5a-(Nombre de Versión de Minecraft) en el menú simonuwu_fabric_project",
          "⬇️ Mods degradados: MiniHUD (0.36.7 → 0.36.4), MaLiLib (0.25.7 → 0.25.5)"
          "📌 Versiones afectadas: 1.21.8"
      ]
    },
    {
      version: "1.0.5",
      date: "3 Apr 2026",
      changes: [
        "📦 Mods actualizados a sus últimas versiones disponibles",
        "🔧 Fabric Loader actualizado a la versión 0.18.1",
        "⚠️ Traducciones de Sodium eliminadas (pueden descargarse con Resourcify o manualmente)",
        "🎮 Mod agregado para personalizar el menú (incluye marca de agua del proyecto)",
        "🆕 Menú actualizado con el diseño simonuwu_fabric_project (botón de YouTube, logo y sitio web oficial)",
        "💲 Ícono de donación reemplazado por un botón con símbolo $",
        "🏷️ Nombre de la ventana actualizado a Simonuwu Fabric Project 1.0.5-(Nombre de Versión de Minecraft)",
        "⚡ Mejoras de rendimiento (mejor carga de chunks y optimización general)",
        "⬇️ Mejora en la descarga de Resource Packs, Data Packs, mundos y shaders",
        "➕ Mods agregados: BadOptimizations, C2ME, Fast IP Ping, FerriteCore, ImmediatelyFast, ModernFix, Starlight, Very Many Players, FastChest, Resourcify, FancyMenu, Konkrete, Melody, Cubes Without Borders",
        "➖ Eliminado: Traducciones de Sodium (Resource Pack)"
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
