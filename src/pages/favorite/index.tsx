import React from 'react';
import MoviesCont from './components/moviesCont';

const PageFavorite: React.FC = () => {
  return (
    <section className="flex flex-col w-5/6 mx-auto row-start-2">
      <MoviesCont />
    </section>
  );
};

export default PageFavorite;
