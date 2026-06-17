import { createContext, useContext, useState } from 'react';

type TemaContextType = {
  oscuro: boolean;
  toggleTema: () => void;
};

const TemaContext = createContext<TemaContextType>({
  oscuro: false,
  toggleTema: () => {},
});

export function TemaProvider({ children }: { children: React.ReactNode }) {
  const [oscuro, setOscuro] = useState(false);
  const toggleTema = () => setOscuro(prev => !prev);

  return (
    <TemaContext.Provider value={{ oscuro, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
}

export const useTema = () => useContext(TemaContext);