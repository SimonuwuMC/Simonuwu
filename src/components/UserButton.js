import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import AuthModal from './AuthModal';
import UserProfile from './UserProfile';

const UserButton = () => {
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  if (loading) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse"></div>
    );
  }

  const handleUserClick = () => {
    if (user) {
      setShowProfile(true);
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <>
      <button
        onClick={handleUserClick}
        className="flex items-center space-x-2 p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors shadow-md"
        title={user ? `Perfil de ${user.displayName || user.email}` : 'Iniciar sesión'}
      >
        {user ? (
          <>
            <img
              src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email)}&background=dc2626&color=fff`}
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="hidden sm:block font-medium">
              {user.displayName || user.email?.split('@')[0]}
            </span>
          </>
        ) : (
          <>
            <div className="w-8 h-8 rounded-full bg-gray-400 dark:bg-gray-500 flex items-center justify-center">
              <span className="text-white text-sm">👤</span>
            </div>
            <span className="hidden sm:block font-medium">Iniciar Sesión</span>
          </>
        )}
      </button>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
      
      {user && (
        <UserProfile 
          isOpen={showProfile} 
          onClose={() => setShowProfile(false)} 
        />
      )}
    </>
  );
};

export default UserButton;