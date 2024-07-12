import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SearchPage from '@pages/SearchPage';
import ListPage from '@pages/ListPage';
import './App.scss';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/list/:category' element={<ListPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
