import MovieCard from 'components/movieCard';
import React, { useState } from 'react';
import { useAppSelector } from 'utils/hooks/useRedux';
import NeedAuthorization from './NeedAuthorization';
import Search from './Search';

const MoviesCont: React.FC = () => {
  const user = useAppSelector((state) => state.user.user?.login);
  const movies = useAppSelector((state) =>
    user ? state.favorite.movies[user] : null
  );

  const [searchInput, setSearchInput] = useState('');

  const filteredMovies = searchInput
    ? movies?.filter((m) => m.name.toLowerCase().includes(searchInput))
    : movies;

  return (
    <>
      {!!user ? (
        <>
          <Search setSearchInput={setSearchInput} />
          <div className="grid grid-cols-1 grid-rows-[1fr_112px]">
            <div
              style={{ height: `calc(100vh - 350px)` }}
              className="grid gap-5 mt-5 mb-2 grid-cols-grid-cards overflow-y-auto"
            >
              {!!filteredMovies && !!filteredMovies.length ? (
                filteredMovies.map((m) => (
                  <MovieCard
                    key={m.id}
                    movieInfo={m}
                  />
                ))
              ) : searchInput ? (
                <p>Нет фильмов с таким запросом</p>
              ) : (
                <p>У вас нет избранных фильмов</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <NeedAuthorization />
      )}
    </>
  );
};

export default MoviesCont;
