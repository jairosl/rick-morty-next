import { useCallback, useState } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';

import { Container } from '../styles/pages/home';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchValue = useCallback((data: string) => {
    setSearchValue(data);
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
