import React from 'react';
import { TIsFavorite } from '../type';
import { useAppSelector } from 'utils/hooks/useRedux';

const IsFavorite: React.FC<TIsFavorite> = ({ movieId }) => {
  const user = useAppSelector((state) => state.user.user?.login);
  const movies = useAppSelector((state) =>
    user ? state.favorite.movies[user] : null
  );
  const isFavorite = movies?.find((i) => i.id === movieId);
  return (
    <>
      {isFavorite ? (
        <div className="absolute top-5">
          <h6 className={`text-lg font-medium border rounded px-2
            text-[#C40C0E] border-[#C40C0E]`}>
            в избранном
          </h6>
        </div>
      ) : null}
    </>
  );
};

export default IsFavorite;
