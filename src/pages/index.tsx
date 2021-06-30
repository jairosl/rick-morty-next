import { useCallback, useEffect, useState } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import { api } from '../services/Api';

import { Container } from '../styles/pages/home';

interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
}

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: null | string;
    prev: null | string;
  };
  results: Character[];
}

export default function Home() {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchValue = useCallback((data: string) => {
    setSearchValue(data);
  }, []);

  useEffect(() => {
    api.get('/character').then(res => {
      res.data as ApiResponse;
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <img src="/logo.png" alt="Logo" />
        <Search
          text="Procurar por personagem"
          value={searchValue}
          changeValue={handleChangeSearchValue}
        />
      </Container>
    </>
  );
}
