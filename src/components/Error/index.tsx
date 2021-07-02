import Lottie from 'react-lottie';
import MortyCry from '../../assets/morty-cry-loader.json';

import { Container } from './styles';

type PropsError = {
  message: string;
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: MortyCry,
};

export default function Error({ message }: PropsError) {
  return (
    <Container>
      <h1>{message}</h1>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Container>
  );
}
