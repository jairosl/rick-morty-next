import { useState, createContext, ReactNode } from 'react';

type Character = {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
};

type ContextValue = {
  characters: Character[];
  // addCharacters: () => void
};

// eslint-disable-next-line no-void
const AppFavoritesContext = createContext<ContextValue | undefined>(void 0);

type PropsContext = {
  children: ReactNode;
};

export function AppContextProvider(props: PropsContext) {
  const { children } = props;

  const [charactersState, setCharactersState] = useState<Character[]>([]);

  const value = {
    characters: charactersState,
  };
  return (
    <AppFavoritesContext.Provider value={value}>
      {children}
    </AppFavoritesContext.Provider>
  );
}
