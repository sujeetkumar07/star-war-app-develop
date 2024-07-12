import { useState } from 'react';
import EditCharacterForm from './EditCharacterForm';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';

import './CharacterCard.scss';

const CharacterCard = ({ character, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };
  return (
    <ErrorBoundary>
      <div className='character-card'>
        <div className='character-details'>
          <h3>{character.name || character.title}</h3>
          <p>Gender: {character.gender}</p>
          <p>Birth Year: {character.birth_year}</p>
        </div>
        <div className='button-container'>
          <button className='button primary' onClick={handleEdit}>
            Edit
          </button>
          <button
            className='button danger'
            onClick={() => onDelete(character.url)}
          >
            Delete
          </button>

          {isEditing && (
            <Modal isOpen={isEditing} onClose={handleClose}>
              <EditCharacterForm
                character={character}
                onClose={handleClose}
                onSave={onSave}
              />
            </Modal>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default CharacterCard;
