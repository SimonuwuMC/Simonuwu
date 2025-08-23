import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // 🔹 Función de login básica
  const login = (username, password) => {
    const fakeUser = { username };
    setUser(fakeUser);
    localStorage.setItem("user", JSON.stringify(fakeUser));
  };

  // 🔹 Función de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // 🔹 Solución: agregar signIn como alias de login
  const signIn = (username, password) => {
    login(username, password);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
