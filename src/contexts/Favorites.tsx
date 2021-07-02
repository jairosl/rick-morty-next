import { useState, createContext, ReactNode, useCallback } from 'react';

type Character = {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
};

type ContextValue = {
  characters: Character[];
  // eslint-disable-next-line no-unused-vars
  addCharacters: (character: Character) => void;
};

// eslint-disable-next-line no-void
const AppFavoritesContext = createContext<ContextValue | undefined>(void 0);

type PropsContext = {
  children: ReactNode;
};

export function AppContextProvider(props: PropsContext) {
  const { children } = props;

  const [charactersState, setCharactersState] = useState<Character[]>([]);

  const addCharacters = useCallback(
    (character: Character) => {
      const newCharacters = [...charactersState, character];
      setCharactersState(newCharacters);
    },
    [charactersState]
  );

  const value = {
    characters: charactersState,
    addCharacters,
  };
  return (
    <AppFavoritesContext.Provider value={value}>
      {children}
    </AppFavoritesContext.Provider>
  );
}
