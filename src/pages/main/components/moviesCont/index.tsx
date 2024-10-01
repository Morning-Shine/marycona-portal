import React, { useState } from 'react';
import { useGetMoviesQuery, useGetMoviesWithSearchQuery } from 'api/movie';

import { QUERY_SELECT_FIELDS } from 'constants/queries/queries';
import MovieCard from 'components/movieCard';
import Pagination from 'components/pagination';
import { useAppSelector } from 'utils/hooks/useRedux';
import Filters from '../filters';
import PageSizeChanger from 'components/pageSizeChanger';

const MoviesCont: React.FC = (props) => {
  const pageNumber = useAppSelector((state) =>
    state.pageNumbers.mainPageNumber.toString()
  );
  const pageSize = useAppSelector((state) =>
    state.pageSizes.mainPageSize.toString()
  );

  const [searchInput, setSearchInput] = useState('');
  const params = new URLSearchParams(
    QUERY_SELECT_FIELDS.map((param) => ['selectFields', param])
  );
  params.append('page', pageNumber);
  params.append('limit', pageSize);

  const { data: mainData, isFetching } = useGetMoviesQuery(params.toString());

  return (
    <>
      {!!mainData?.moviesList?.length && (
        <div
          style={{ height: `calc(100vh - 10rem)` }}
          className="w-5/6 mx-auto grid grid-cols-1 grid-rows-[56px_1fr_112px]"
        >
          <Filters setSearchInput={setSearchInput} />
          <div className="grid gap-5 mt-5 grid-cols-grid-cards overflow-y-auto">
            {mainData.moviesList.map((m) => (
              <MovieCard
                key={m.id}
                movieInfo={m}
              />
            ))}
          </div>
          <div className="flex justify-between">
            <Pagination
              total={mainData.total}
              limit={mainData.limit}
              page={mainData.page}
              pages={mainData.pages}
            />
            <PageSizeChanger />
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesCont;
