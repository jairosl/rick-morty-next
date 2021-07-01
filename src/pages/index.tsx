import { useCallback, useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import Card from '../components/Card';
import Header from '../components/Header';
import Search from '../components/Search';

import { api } from '../services/Api';

import { CardContainer, Container } from '../styles/pages/home';
import loaderAnimated from '../assets/loading-screen-loader-spinning-circle.json';

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
  const [loader, setLoader] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);

  const handleChangeSearchValue = useCallback((data: string) => {
    setSearchValue(data);
  }, []);

  useEffect(() => {
    api
      .get('/character')
      .then(res => {
        const { results } = res.data as ApiResponse;
        setCharacters(results);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderAnimated,
  };

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
      <CardContainer>
        {loader && <Lottie options={defaultOptions} height={400} width={400} />}
        {!loader && (
          <div className="Cards">
            {characters.map(character => (
              <Card
                key={character.id}
                image={character.image}
                name={character.name}
              />
            ))}
          </div>
        )}
      </CardContainer>
    </>
  );
}
