import { createContext, useContext, useState } from 'react';

type AuthContextType = {
  logueado: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  logueado: false,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [logueado, setLogueado] = useState(false);
  const login = () => setLogueado(true);
  const logout = () => setLogueado(false);

  return (
    <AuthContext.Provider value={{ logueado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);