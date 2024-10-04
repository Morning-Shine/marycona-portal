import React, { useState } from 'react';
import { TMovieCard } from './type';
import LabelRating from 'components/labelRating';
import { ENUMS } from 'constants/enums';
import PosterPlug from 'components/posterPlug';
import Like from 'components/like';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'utils/hooks/useRedux';

const MovieCard: React.FC<TMovieCard> = ({ movieInfo }) => {
  const { id, name, posterUrl, rating, year, countries } = movieInfo;
  const user = useAppSelector((state) => state.user?.user?.login);
  const isLiked = useAppSelector((state) =>
    user ? state.favorite.movies?.[user]?.find((i) => i.id === id) : null
  );
  const [isHovering, setIsHovering] = useState(false);

  const hoverHandlerOver = () => setIsHovering(true);
  const hoverHandlerOut = () => setIsHovering(false);

  const poster = posterUrl
    ? {
        backgroundImage: `url(${posterUrl})`,
        backgroundSize: 'cover',
      }
    : {};

  return (
    <Link
      to={`/${id}`}
      onMouseOver={hoverHandlerOver}
      onMouseOut={hoverHandlerOut}
    >
      <div
        style={poster}
        className={`w-40 h-60 relative rounded bg-gradient-to-b
           from-amber-500 to-lime-500 dark:from-amber-600 dark:to-lime-600`}
      >
        {(isLiked || isHovering) && (
          <div className="absolute flex justify-end w-8 top-2 left-3">
            <Like movieInfo={movieInfo} />
          </div>
        )}
        {!posterUrl && <PosterPlug />}
        <div className="absolute right-1 top-2/3">
          <LabelRating rating={rating} />
        </div>
      </div>
      <h3 className="font-bold text-sm">{name}</h3>
      <p>
        {countries?.map((c) => `${c.name}, `)}
        <span className="text-md">{!!year ? year : ENUMS.noYear}</span>
      </p>
    </Link>
  );
};

export default MovieCard;
