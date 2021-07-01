import { Container } from './styles';

interface PropsCard {
  name: string;
  image: string;
  onClick: () => void;
}

export default function Card({ image, name, onClick }: PropsCard) {
  return (
    <Container onClick={onClick}>
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </Container>
  );
}
