import React from 'react';
import { useGetMoviesQuery } from 'api/movie';

import { QUERY_SELECT_FIELDS } from 'constants/queries/queries';
import MovieCard from 'components/movieCard';

const MoviesCont: React.FC = (props) => {
  const params = new URLSearchParams(
    QUERY_SELECT_FIELDS.map((param) => ['selectFields', param])
  );
  params.append('notNullFields', 'poster.url');

  const { data, isFetching } = useGetMoviesQuery(params.toString());
  //   console.log('+', params);

  return (
    <div>
      {/* {!!data?.moviesList?.length &&
        data.moviesList.map((m) => (
          <MovieCard
            key={m.id}
            movieInfo={m}
          />
        ))} */}
    </div>
  );
};

export default MoviesCont;
