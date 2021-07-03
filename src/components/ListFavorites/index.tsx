import { FiTrash2, FiX } from 'react-icons/fi';
import ReactModal from 'react-modal';
import { useAppContext } from '../../contexts/Favorites';
import Error from '../Error';
import { Container } from './styles';

type PropsListFavorites = {
  isOpen: boolean;
  closeModal: () => void;
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

export default function Modal({ isOpen, closeModal }: PropsListFavorites) {
  const { characters, removeCharacter } = useAppContext();

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="example"
      ariaHideApp={false}
    >
      <Container>
        <header>
          <div className="Close">
            <button type="button" onClick={closeModal}>
              <FiX size={50} color="rgb(255,0,0)" />
            </button>
          </div>
          {characters.length !== 0 && <h1>Favoritos</h1>}
        </header>
        {characters.length === 0 && (
          <Error message="Nenhum personagem favoritado" />
        )}
        {characters.length !== 0 &&
          characters.map((character, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className="itemList">
              <img src={character.image} alt="Rick Morty Character" />

              <p>{character.name}</p>
              <FiTrash2
                size={30}
                color="rgb(255,0,0)"
                onClick={() => removeCharacter(character.id)}
              />
            </div>
          ))}
      </Container>
    </ReactModal>
  );
}
