import React, { useState } from 'react';
import MoviesCont from './components/moviesCont';
import Filters from './components/filters';

const PageMain: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <section
      // style={{ maxHeight: `calc(100vh-10rem)`, height: `calc(100vh-13.5rem)` }}
      className="flex flex-col w-5/6 mx-auto row-start-2"
    >
      <Filters setSearchInput={setSearchInput} />
      {!searchInput ? <MoviesCont /> : null}
    </section>
  );
};

export default PageMain;
