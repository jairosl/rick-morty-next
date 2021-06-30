import { Container } from './styles';

interface PropsCard {
  name: string;
  image: string;
}

export default function Card({ image, name }: PropsCard) {
  return (
    <Container>
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </Container>
  );
}
