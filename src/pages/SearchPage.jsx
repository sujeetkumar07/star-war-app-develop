import { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchCategoriesData } from '@apis/api';
import useDebounce from '@hooks/useDebounce';
import SearchBar from '@components/SearchBar';
import SearchResults from '@components/SearchResults';

import './SearchPage.scss';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState(null);
  const debouncedQuery = useDebounce(query, 200);

  useEffect(() => {
    if (debouncedQuery.length < 1) return;

    setLoading(true);

    if (controller) {
      controller.abort();
    }
    const newController = new AbortController();
    setController(newController);

    fetchCategoriesData(debouncedQuery, newController.signal)
      .then((response) => {
        setResults(response);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          console.error('Something went wrong: ', error.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [debouncedQuery]);

  return (
    <div className='search-page'>
      <h1>Search Page</h1>
      <SearchBar onSearch={setQuery} />
      {debouncedQuery.length < 1 ? (
        <p>Please type {'"L"'} to see some suggestions...</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
};

export default SearchPage;
