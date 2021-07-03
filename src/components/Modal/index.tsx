import { FiHeart, FiXCircle } from 'react-icons/fi';
import { IoIosHeartDislike } from 'react-icons/io';
import ReactModal from 'react-modal';
import { useAppContext } from '../../contexts/Favorites';
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
  const { addCharacters, searchCharacterbyId, removeCharacter } =
    useAppContext();
  function handleAddCharacterFavorites(characterSelected: Character) {
    addCharacters(characterSelected);
  }

  function handleRemoveCharacterFavorites(characterSelected: Character) {
    removeCharacter(characterSelected.id);
  }

  const IsFavorite = searchCharacterbyId(character.id);

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
            {!IsFavorite && (
              <FiHeart
                size={50}
                onClick={() => handleAddCharacterFavorites(character)}
              />
            )}

            {IsFavorite && (
              <IoIosHeartDislike
                size={50}
                onClick={() => handleRemoveCharacterFavorites(character)}
              />
            )}

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
