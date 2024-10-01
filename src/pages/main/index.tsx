import React from 'react';
import MoviesCont from './components/moviesCont';


const PageMain: React.FC = () => {
  return (
    <section className='flex flex-col'>
      <MoviesCont />
    </section>
  );
};

export default PageMain;
