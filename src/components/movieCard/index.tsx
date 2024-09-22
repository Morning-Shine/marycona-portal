import React from 'react';
import { TMovieCard } from './type';

const MovieCard: React.FC<TMovieCard> = ({ movieInfo }) => {
  const { id, name, posterUrl, rating, year } = movieInfo;
  // console.log(`url(${posterUrl})`);

  return (
    // <div
    //   className={`border-blue-600 border `}
    // >
    // <div className={`border-red-600 border`}>
    <>
      <h3>{name}</h3>
      <p>{year}</p>
    </>
    // </div>
  );
};

export default MovieCard;
