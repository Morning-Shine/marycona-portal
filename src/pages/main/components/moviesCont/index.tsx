import React from 'react';
import { useGetMoviesQuery } from 'api/movie';

import { QUERY_SELECT_FIELDS } from 'constants/queries/queries';
import MovieCard from 'components/movieCard';
import Pagination from 'components/pagination';
import { useAppSelector } from 'utils/hooks/useRedux';

const MoviesCont: React.FC = (props) => {
  const pageNumber = useAppSelector((state) =>
    state.pageSizes.mainPageNumber.toString()
  );
  // TODO поправить отображение пагинации, чтобы не скакало

  const params = new URLSearchParams(
    QUERY_SELECT_FIELDS.map((param) => ['selectFields', param])
  );
  params.append('page', pageNumber);
  // params.append('limit', pageSize);

  const { data, isFetching } = useGetMoviesQuery(params.toString());
  //   console.log('+', params);

  return (
    <>
      {!!data?.moviesList?.length && (
        <div
          style={{ height: `calc(100vh - 10rem)` }}
          className="w-5/6 mx-auto flex flex-col justify-between"
        >
          <div className="grid gap-5 grid-cols-grid-cards overflow-y-auto">
            {data.moviesList.map((m) => (
              <MovieCard
                key={m.id}
                movieInfo={m}
              />
            ))}
          </div>
          <Pagination
            total={data.total}
            limit={data.limit}
            page={data.page}
            pages={data.pages}
          />
        </div>
      )}
    </>
  );
};

export default MoviesCont;
