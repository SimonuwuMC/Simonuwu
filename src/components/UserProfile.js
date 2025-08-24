import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import authService from '../services/authService';

const UserProfile = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && user) {
      loadUserData();
    }
  }, [isOpen, user]);

  const loadUserData = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const data = await authService.getUserData(user.uid);
      setUserData(data);
    } catch (error) {
      console.error('Error loading user data:', error);
    }
    setLoading(false);
  };

  if (!isOpen || !user) return null;

  const handleSignOut = async () => {
    try {
      await logout();
      onClose();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Use real user data or fallback to defaults
  const userStats = userData || {
    totalDownloads: 0,
    favoriteVersions: [],
    downloads: [],
    isPremium: false
  };

  const joinDate = userData?.createdAt 
    ? new Date(userData.createdAt.seconds * 1000).toLocaleDateString('es-ES')
    : new Date().toLocaleDateString('es-ES');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            👤 Mi Perfil
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            </div>
          ) : (
            <>
              {/* Información del usuario */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email)}&background=dc2626&color=fff&size=80`}
                  alt="Avatar"
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {user.displayName || 'Usuario'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Miembro desde: {joinDate}
                    </span>
                    {userStats.isPremium && (
                      <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full text-xs font-bold">
                        ⭐ Premium
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Estadísticas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                    {Array.isArray(userStats.downloads) ? userStats.downloads.length : userStats.totalDownloads || 0}
                  </div>
                  <div className="text-sm text-red-800 dark:text-red-300">
                    Descargas Totales
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {Array.isArray(userStats.favoriteVersions) ? userStats.favoriteVersions.length : 0}
                  </div>
                  <div className="text-sm text-blue-800 dark:text-blue-300">
                    Versiones Favoritas
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {user.providerData?.[0]?.providerId === 'github.com' ? 'GitHub' : 'Google'}
                  </div>
                  <div className="text-sm text-green-800 dark:text-green-300">
                    Proveedor
                  </div>
                </div>
              </div>

              {/* Historial de descargas */}
              {userStats.downloads && userStats.downloads.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                    📥 Historial de Descargas
                  </h4>
                  <div className="space-y-2">
                    {userStats.downloads.slice(0, 5).map((download, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                      >
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {typeof download === 'string' ? `Minecraft ${download}` : `Descarga ${index + 1}`}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date().toLocaleDateString('es-ES')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Versiones favoritas */}
              {userStats.favoriteVersions && userStats.favoriteVersions.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-3">
                    ⭐ Versiones Favoritas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {userStats.favoriteVersions.map((version, index) => (
                      <span
                        key={index}
                        className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {version}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Beneficios premium */}
              {userStats.isPremium && (
                <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                    ⭐ Beneficios Premium
                  </h4>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>✅ Acceso anticipado a versiones beta</li>
                    <li>✅ Soporte prioritario</li>
                    <li>✅ Configuraciones personalizadas</li>
                    <li>✅ Sin anuncios</li>
                  </ul>
                </div>
              )}

              {/* Acciones */}
              <div className="flex space-x-3">
                <button
                  onClick={handleSignOut}
                  className="bg-red-600 dark:bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-700 dark:hover:bg-red-800 transition-colors"
                >
                  🚪 Cerrar Sesión
                </button>
                <button
                  onClick={onClose}
                  className="bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;