import { createContext, useContext, useState, useEffect } from "react";
import authService from '../services/authService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const initAuth = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Error initializing auth:', error);
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  // Real sign in with Google
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const user = await authService.signInWithGoogle();
      setUser(user);
      return user;
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Real sign in with GitHub
  const signInWithGitHub = async () => {
    try {
      setLoading(true);
      const user = await authService.signInWithGitHub();
      setUser(user);
      return user;
    } catch (error) {
      console.error('Error signing in with GitHub:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Generic sign in function
  const signIn = async (provider) => {
    if (provider === 'google') {
      return await signInWithGoogle();
    } else if (provider === 'github') {
      return await signInWithGitHub();
    } else {
      throw new Error('Unsupported provider');
    }
  };

  // Real logout
  const logout = async () => {
    try {
      await authService.signOut();
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  // Legacy login function (for compatibility)
  const login = signIn;

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      signIn, 
      signInWithGoogle,
      signInWithGitHub,
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}