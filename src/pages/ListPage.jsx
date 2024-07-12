import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GridIcon from '../assets/icons/grid.png';
import ListIcon from '../assets/icons/list.png';
import CharacterCard from '../components/CharacterCard';
import { fetchIndividualCategoryData } from '../apis/api';

import './ListPage.scss';

const ListPage = () => {
  const navigate = useNavigate();
  const { category: categoryName } = useParams();
  const [characters, setCharacters] = useState([]);
  const [view, setView] = useState('list');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results = await fetchIndividualCategoryData(
          categoryName,
          controller.signal,
          page
        );
        if (isMounted) {
          setCharacters((prevResults) => [...prevResults, ...results]);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setIsLoading(false);
          console.error('Failed to fetch characters', error);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [page]);

  const handleDelete = (characterUrl) => {
    setCharacters(
      characters.filter((character) => character.url !== characterUrl)
    );
  };

  const handleSave = (updatedCharacter) => {
    setCharacters(
      characters.map((character) =>
        character.url === updatedCharacter.url ? updatedCharacter : character
      )
    );
  };

  return (
    <div>
      <button className='button back' onClick={() => navigate('/')}>
        Go Back
      </button>
      <h1>{categoryName} List Page</h1>
      {categoryName !== 'people' ? (
        <p>{categoryName} list page is not implemented</p>
      ) : (
        <div className='list-page-container'>
          <button
            className='button icon'
            onClick={() => setView(view === 'list' ? 'grid' : 'list')}
          >
            {view === 'list' ? (
              <img src={ListIcon} alt='List View' height={20} width={20} />
            ) : (
              <img src={GridIcon} alt='Grid View' height={20} width={20} />
            )}
          </button>
          <div className={view === 'list' ? 'list-view' : 'grid-view'}>
            {characters.map((character, index) => (
              <CharacterCard
                key={index}
                character={character}
                onDelete={handleDelete}
                onSave={handleSave}
              />
            ))}
          </div>
          <button
            className='button full load-more'
            onClick={() => setPage(page + 1)}
          >
            {isLoading ? 'Loading...' : 'Load More...'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ListPage;
