import { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const AuthContext = createContext();

// Proveedor que envolverá tu app
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simular verificación de sesión
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Función para iniciar sesión (simulada)
  const login = (username, password) => {
    // Aquí iría la lógica real de autenticación con tu API
    const fakeUser = { username };
    setUser(fakeUser);
    localStorage.setItem("user", JSON.stringify(fakeUser));
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para consumir el contexto
export function useAuth() {
  return useContext(AuthContext);
}
