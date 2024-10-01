import React, { useState } from 'react';
import MoviesCont from './components/moviesCont';
import Filters from './components/filters';
import SearchMoviesCont from './components/searchMoviesCont';

const PageMain: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <section className="flex flex-col w-5/6 mx-auto row-start-2">
      <Filters setSearchInput={setSearchInput} />
      {!searchInput ? (
        <MoviesCont />
      ) : (
        <SearchMoviesCont searchInput={searchInput} />
      )}
    </section>
  );
};

export default PageMain;
