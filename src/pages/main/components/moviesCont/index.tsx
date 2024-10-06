import { useGetMoviesQuery } from 'api/movie';
import { QUERY_SELECT_FIELDS } from 'constants/queries/queries';
import MovieCard from 'components/movieCard';
import Pagination from 'components/pagination';
import { useAppSelector } from 'utils/hooks/useRedux';
import PageSizeChanger from 'components/pageSizeChanger';
import { TMoviesCont } from '../type';
import Loader from 'components/loader';

const MoviesCont: React.FC<TMoviesCont> = ({ genreFilter }) => {
  const pageNumber = useAppSelector((state) =>
    state.pageNumbers.mainPageNumber.toString()
  );
  const pageSize = useAppSelector((state) =>
    state.pageSizes.mainPageSize.toString()
  );

  const params = new URLSearchParams(
    QUERY_SELECT_FIELDS.map((param) => ['selectFields', param])
  );

  params.append('page', pageNumber);
  params.append('limit', pageSize);
  if (genreFilter) params.append('genres.name', genreFilter);

  const {
    data: mainData,
    isFetching: mainDataIsFetching,
    isError,
  } = useGetMoviesQuery(params.toString());

  return (
    <>
      {!isError&&!mainDataIsFetching && !!mainData?.moviesList?.length && (
        <div className="grid grid-cols-1 grid-rows-[1fr_112px]">
          <div
            style={{ height: `calc(100vh - 350px)` }}
            className="grid gap-5 mt-5 mb-2 grid-cols-grid-cards overflow-y-auto"
          >
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
      {mainDataIsFetching && (
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
          <p className='text-2xl text-amber-600'>Ошибка получения данных от сервера</p>
        </div>
      )}
    </>
  );
};

export default MoviesCont;
