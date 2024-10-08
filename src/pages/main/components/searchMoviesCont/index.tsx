import { useGetMoviesWithSearchQuery } from 'api/movie';
import React from 'react';
import { useAppSelector } from 'utils/hooks/useRedux';
import { TSearchMoviesCont } from '../type';
import MovieCard from 'components/movieCard';
import Pagination from 'components/pagination';
import PageSizeChanger from 'components/pageSizeChanger';
import Loader from 'components/loader';

const SearchMoviesCont: React.FC<TSearchMoviesCont> = ({ searchInput }) => {
  const pageSize = useAppSelector((state) =>
    state.pageSizes.mainPageSize.toString()
  );
  const params = new URLSearchParams();

  params.append('limit', pageSize);
  params.append('query', searchInput);

  const {
    data: searchData,
    isFetching: searchDataIsFetching,
    isError,
  } = useGetMoviesWithSearchQuery(params.toString(), {
    refetchOnMountOrArgChange: true,
    skip: !searchInput,
  });

  return (
    <>
      {!isError &&
        !searchDataIsFetching &&
        !!searchData?.moviesList?.length && (
          <div className="grid grid-cols-1 grid-rows-[1fr_112px]">
            <div
              style={{ height: `calc(100vh - 350px)` }}
              className="grid gap-5 mt-5 mb-2 grid-cols-grid-cards overflow-y-auto"
            >
              {searchData.moviesList.map((m) => (
                <MovieCard
                  key={m.id}
                  movieInfo={m}
                />
              ))}
            </div>
            <div className="flex justify-between">
              <Pagination
                total={searchData.total}
                limit={searchData.limit}
                page={searchData.page}
                pages={searchData.pages}
              />
              <PageSizeChanger />
            </div>
          </div>
        )}
      {searchDataIsFetching && (
        <div
          style={{ height: `calc(100vh - 350px)` }}
          className="flex items-center justify-center"
        >
          <Loader />
        </div>
      )}
      {isError && (
        <div
          style={{ height: `calc(100vh - 350px)` }}
          className="flex items-center justify-center"
        >
          <p className="text-2xl text-amber-600">
            Ошибка получения данных от сервера
          </p>
        </div>
      )}
    </>
  );
};

export default SearchMoviesCont;
