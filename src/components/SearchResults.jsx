import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../utils/constant';
import './SearchResults.scss';
import ErrorBoundary from './ErrorBoundary';

const SearchResults = ({ results }) => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const categoryKeys = Object.keys(CATEGORIES);
  const visibleCategories = showMore ? categoryKeys : categoryKeys.slice(0, 3);

  const hasResults = visibleCategories.some(
    (category) => results[category]?.results?.length
  );

  if (!hasResults) return null;

  return (
    <ErrorBoundary>
      <div className='search-results-popup'>
        {visibleCategories.map((category) => {
          const categoryResults = results[category]?.results || [];
          const visibleResults = categoryResults.slice(0, 3);
          const hasResults = visibleResults.length > 0;
          return (
            <div className='search-results-container' key={category}>
              <h3 className='category-title'>{CATEGORIES[category]}</h3>
              <ul className='category-list'>
                {!hasResults && (
                  <li className='no-list-style'>No results found</li>
                )}
                {hasResults &&
                  visibleResults.map((item) => (
                    <li className='category-item' key={item.url}>
                      {item.name || item.title}
                    </li>
                  ))}

                {hasResults && (
                  <li className='no-list-style'>
                    <button
                      className='link'
                      onClick={() => navigate(`/list/${category}`)}
                    >
                      View All
                    </button>
                  </li>
                )}
              </ul>
            </div>
          );
        })}
        {!showMore && visibleCategories.length < categoryKeys.length && (
          <button
            className='button more-categories'
            onClick={() => setShowMore(true)}
          >
            show all categories...
          </button>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default SearchResults;
