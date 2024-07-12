import { useState } from 'react';
import './EditCharacterForm.scss';
import ErrorBoundary from './ErrorBoundary';

const EditCharacterModal = ({ character, onClose, onSave }) => {
  const [name, setName] = useState(character.name);
  const [gender, setGender] = useState(character.gender);
  const [birthYear, setBirthYear] = useState(character.birth_year);

  const handleSave = () => {
    onSave({ ...character, name, gender, birth_year: birthYear });
    onClose();
  };

  return (
    <ErrorBoundary>
      <div className='edit-character-form'>
        <h2>Edit Character</h2>
        <label>
          Name:{' '}
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Birth Year:{' '}
          <input
            type='text'
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
          />
        </label>
        <label>
          Gender:
          <div className='radio-group'>
            <label>
              <input
                type='radio'
                value='male'
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type='radio'
                value='female'
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type='radio'
                value='n/a'
                checked={gender === 'n/a'}
                onChange={(e) => setGender(e.target.value)}
              />
              Unknown
            </label>
          </div>
        </label>

        <div className='divider'></div>
        <button className='button primary' onClick={handleSave}>
          Save
        </button>
        <button className='button danger' onClick={onClose}>
          Cancel
        </button>
      </div>
    </ErrorBoundary>
  );
};

export default EditCharacterModal;
