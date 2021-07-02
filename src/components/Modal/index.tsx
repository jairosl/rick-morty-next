import ReactModal from 'react-modal';
import { FiXCircle, FiHeart } from 'react-icons/fi';

import { Container } from './styles';

type Character = {
  id: number;
  name: string;
  gender: string;
  image: string;
};

type PropsModal = {
  isOpen: boolean;
  closeModal: () => void;
  character: Character;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Modal({ isOpen, closeModal, character }: PropsModal) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="example"
      ariaHideApp={false}
    >
      <Container>
        <div className="ContainerHeader">
          <h1>{character.name}</h1>
          <div className="ContainerButtons">
            <FiHeart size={50} />
            <button type="button" onClick={closeModal}>
              <FiXCircle size={50} />
            </button>
          </div>
        </div>
        <h2>{character.gender}</h2>
        <img src={character.image} alt="Rick Morty character" />
      </Container>
    </ReactModal>
  );
}
