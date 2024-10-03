import { useGetMovieByIdQuery } from 'api/movie';
import LabelRating from 'components/labelRating';
import PosterFoo from 'components/posterFoo';
import React from 'react';
import { useParams } from 'react-router-dom';

const About: React.FC = () => {
  const { id = '' } = useParams();

  const { data, isLoading } = useGetMovieByIdQuery(id, { skip: !id });
  // console.log(data);

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
  const persons = data?.persons
    ? data.persons.length <= 5
      ? data?.persons
      : data?.persons.slice(0, 5)
    : null;

  //TODO добавить еще инфо о фильме
  return (
    <>
      {!!data && (
        <div
          className={`grid grid-rows-1 grid-cols-[320px_1fr]
                      xl:grid-cols-[320px_1fr_1fr] gap-3`}
        >
          <div className="flex flex-col h-full">
            <h2 className="my-3 text-2xl font-bold text-amber-600 dark:text-amber-500">
              {name}
            </h2>
            {data?.countries &&
              data.countries.map((c: { name: string }, i: number) => (
                <span
                  key={c.name}
                  className="text-lg"
                >
                  {c.name}
                  {', '}
                  {data?.year ?? 'год не указан'}
                </span>
              ))}
            <div
              style={poster}
              className={`w-60 h-80 xl:w-80 xl:h-[30rem]
                my-3 relative rounded bg-gradient-to-b
              from-amber-500 to-lime-500 dark:from-amber-600 dark:to-lime-600`}
            >
              {!poster && <PosterFoo />}
              <div className="absolute right-1 top-2/3">
                <LabelRating rating={rating} />
              </div>
            </div>
            <p className="text-sm text-justify">{shortDescription}</p>
            {!!persons && !!persons.length && (
              <div className="mt-2 text-xs">
                <b>В ролях: </b>
                {persons.map(
                  (
                    p: { name: string; enName: string; id: number },
                    i: number
                  ) => (
                    <span key={p.id}>
                      {p.name ?? p.enName}
                      {i < persons.length - 1 ? ', ' : '.'}
                    </span>
                  )
                )}
              </div>
            )}
          </div>
          <div>
            <p className="mt-24 text-justify">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
