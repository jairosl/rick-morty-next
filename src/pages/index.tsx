import { useCallback, useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import Card from '../components/Card';
import Header from '../components/Header';
import Search from '../components/Search';

import { api } from '../services/Api';

import { CardContainer, Container, ButtonViewMore } from '../styles/pages/home';
import loaderAnimated from '../assets/loading-screen-loader-spinning-circle.json';
import Modal from '../components/Modal';
import Error from '../components/Error';
import { useAppContext } from '../contexts/Favorites';

interface Character {
  id: number;
  name: string;
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
  const [page, setPage] = useState(1);
  const [isMoreCharacters, setIsMoreCharacters] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [hasError, setHasError] = useState(false);

  const [visibleModal, setVisibleModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  const context = useAppContext();

  const handleChangeSearchValue = useCallback((data: string) => {
    setSearchValue(data);
  }, []);

  const handleModalVisible = useCallback(
    (id: number) => {
      setVisibleModal(true);
      const result = characters.filter(character => character.id === id)[0];
      setSelectedCharacter(result);
    },
    [characters]
  );

  const handleViewMore = async (url: string) => {
    const { data } = await api.get(url);
    const { info, results } = data as ApiResponse;
    if (info.next) {
      setIsMoreCharacters(true);
    } else {
      setIsMoreCharacters(false);
    }

    setCharacters([...characters, ...results]);
    setPage(page + 1);
  };

  useEffect(() => {
    if (searchValue === '') {
      setPage(1);
      api
        .get('/character')
        .then(res => {
          const { results } = res.data as ApiResponse;
          setCharacters(results);
          setPage(page + 1);
        })
        .finally(() => {
          setLoader(false);
        });
    } else {
      setLoader(true);
      setPage(1);
      api
        .get(`/character?&name=${searchValue}`)
        .then(res => {
          const { results } = res.data as ApiResponse;
          setCharacters(results);
          setHasError(false);
        })
        // eslint-disable-next-line no-unused-vars
        .catch(_error => {
          // console.error(error);
          setHasError(true);
        })
        .finally(() => {
          setLoader(false);
        });
      setCharacters([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

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
            {characters.map((character, index) => (
              <Card
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                image={character.image}
                name={character.name}
                onClick={() => handleModalVisible(character.id)}
              />
            ))}

            {isMoreCharacters && !hasError && (
              <ButtonViewMore
                onClick={() => {
                  const url =
                    searchValue === ''
                      ? `/character?page=${page}`
                      : `/character?page=${page}&name=${searchValue}`;

                  handleViewMore(url);
                }}
              >
                Ver Mais
              </ButtonViewMore>
            )}
          </div>
        )}

        {visibleModal && !!selectedCharacter && (
          <Modal
            isOpen={visibleModal}
            closeModal={() => setVisibleModal(false)}
            character={selectedCharacter}
          />
        )}

        {hasError && !loader && context.characters.length === 0 && (
          <Error message="opss... não encontramos esse personagem" />
        )}
      </CardContainer>
    </>
  );
}
