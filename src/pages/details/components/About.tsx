import { useGetMovieByIdQuery } from 'api/movie';
import LabelRating from 'components/labelRating';
import MovieCard from 'components/movieCard';
import PosterFoo from 'components/posterFoo';
import React from 'react';
import { useParams } from 'react-router-dom';
// import { TAbout } from '../type';

const About: React.FC = () => {
  const { id = '' } = useParams();

  const { data, isLoading } = useGetMovieByIdQuery(id, { skip: !id });
  console.log(data);

  const name = data?.name ?? data?.alternativeName ?? 'Название не указано';
  const poster = data?.poster?.url
    ? {
        backgroundImage: `url(${data.poster.url})`,
        backgroundSize: 'cover',
      }
    : {};
  const rating = data?.rating?.imdb || '0';
  const description = data?.description || '';
  const shortDescription = data?.shortDescription || '';

  return (
    <div className="grid grid-rows-1 grid-cols-3">
      <div>
        <h2>{name}</h2>
        <div
          style={poster}
          className={`w-80 h-[30rem] relative rounded bg-gradient-to-b
          from-amber-500 to-lime-500 dark:from-amber-600 dark:to-lime-600`}
        >
          {!poster && <PosterFoo />}
          <div className="absolute right-1 top-2/3">
            <LabelRating rating={rating} />
          </div>
        </div>
        <p>{description}</p>
      </div>
      <div>
        <p>{shortDescription}</p>
      </div>
    </div>
  );
};

export default About;
