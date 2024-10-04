import React from 'react';
import { TIsFavorite } from '../type';
import { useAppSelector } from 'utils/hooks/useRedux';
import Like from 'components/like';

const IsFavorite: React.FC<TIsFavorite> = ({ movieInfo }) => {
  const user = useAppSelector((state) => state.user.user?.login);
  const movies = useAppSelector((state) =>
    user ? state.favorite.movies[user] : null
  );
  const isFavorite = movies?.find((i) => i.id === movieInfo.id);
  return (
    <>
      <div className="absolute top-5 flex justify-center gap-4 h-8">
        <div
          className={`w-8 h-8 cursor-pointer flex ${
            isFavorite ? '' : 'opacity-65 hover:opacity-100'
          }`}
        >
          <Like
            movieInfo={movieInfo}
          />
        </div>
        {isFavorite ? (
          <h6
            className={`text-nowrap text-lg font-medium border rounded px-2
          text-[#C40C0E] border-[#C40C0E]`}
          >
            в избранном
          </h6>
        ) : null}
      </div>
    </>
  );
};

export default IsFavorite;
