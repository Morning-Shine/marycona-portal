import React, { useState } from 'react';
import { TMovieCard } from './type';
import LabelRating from 'components/labelRating';
import { ENUMS } from 'constants/enums';
import PosterFoo from 'components/posterFoo';
import Like from 'components/like';

const MovieCard: React.FC<TMovieCard> = ({ movieInfo }) => {
  const { id, name, posterUrl, rating, year, countries } = movieInfo;
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
    <div
      className="cursor-pointer"
      onMouseOver={hoverHandlerOver}
      onMouseOut={hoverHandlerOut}
    >
      {/* TODO  обработка нажатия лайка*/}
      <div
        style={poster}
        className={`w-40 h-60 relative rounded bg-gradient-to-b
           from-amber-500 to-lime-500 dark:from-amber-600 dark:to-lime-600`}
      >
        {isHovering && <Like isLiked />}
        {!posterUrl && <PosterFoo />}
        <div className="absolute right-1 top-2/3">
          <LabelRating rating={rating} />
        </div>
      </div>
      <h3 className="font-bold text-sm">{name}</h3>
      <p>
        {countries?.map((c) => `${c.name}, `)}
        <span className="text-md">{!!year ? year : ENUMS.noYear}</span>
      </p>
    </div>
  );
};

export default MovieCard;
