// src/components/SearchBar.js
import { useState } from 'react';
import './SearchBar.scss';
import ErrorBoundary from './ErrorBoundary';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <ErrorBoundary>
      <div className='search-bar'>
        <input
          type='text'
          value={query}
          onChange={handleChange}
          placeholder='Type "L" to see some suggestions...'
        />
      </div>
    </ErrorBoundary>
  );
};

export default SearchBar;
