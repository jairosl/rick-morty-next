import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';

import ListFavorites from '../ListFavorites';

import { Container } from './styles';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const handleShowListFavorites = () => {
    setIsVisible(true);
  };

  return (
    <Container>
      <header>
        <h1>Rick &amp; Morty</h1>
        <FiHeart size={30} onClick={handleShowListFavorites} />
        {isVisible && (
          <ListFavorites
            isOpen={isVisible}
            closeModal={() => setIsVisible(false)}
          />
        )}
      </header>
    </Container>
  );
}
