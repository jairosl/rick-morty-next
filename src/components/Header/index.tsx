import { FiHeart } from 'react-icons/fi';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <header>
        <h1>Rick &amp; Morty</h1>
        <FiHeart size={30} />
      </header>
    </Container>
  );
}
