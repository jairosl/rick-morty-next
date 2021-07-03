import {
  useState,
  createContext,
  ReactNode,
  useCallback,
  useContext,
} from 'react';

type Character = {
  id: number;
  name: string;
  gender: string;
  image: string;
};

type ContextValue = {
  characters: Character[];
  // eslint-disable-next-line no-unused-vars
  addCharacters: (character: Character) => void;
  // eslint-disable-next-line no-unused-vars
  removeCharacter: (id: number) => void;
  // eslint-disable-next-line no-unused-vars
  searchCharacterbyId: (id: number) => boolean;
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

  const removeCharacter = useCallback(
    (id: number) => {
      const existingCharacter = charactersState.some(
        character => character.id === id
      );
      if (existingCharacter) {
        const newCharacters = charactersState.filter(
          character => character.id !== id
        );
        setCharactersState(newCharacters);
      }
    },
    [charactersState]
  );

  const searchCharacterbyId = useCallback(
    (id: number) => {
      const existingCharacter = charactersState.some(
        character => character.id === id
      );

      return existingCharacter;
    },
    [charactersState]
  );

  const value = {
    characters: charactersState,
    addCharacters,
    removeCharacter,
    searchCharacterbyId,
  };
  return (
    <AppFavoritesContext.Provider value={value}>
      {children}
    </AppFavoritesContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppFavoritesContext);

  if (typeof context === 'undefined') {
    throw new Error('useAppContext must be used within an AppFavoritesContext');
  }

  return context;
}
