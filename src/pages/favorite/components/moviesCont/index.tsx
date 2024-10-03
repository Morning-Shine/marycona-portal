import MovieCard from 'components/movieCard';
import React from 'react';
import { useAppSelector } from 'utils/hooks/useRedux';
import NeedAuthorization from './NeedAuthorization';
import Pagination from 'components/pagination';

const MoviesCont: React.FC = (props) => {
  const user = useAppSelector((state) => state.user.user?.login);
  const movies = useAppSelector((state) =>
    user ? state.favorite.movies[user] : null
  );

  return (
    <>
      {!!movies ? (
        <div className="grid grid-cols-1 grid-rows-[1fr_112px]">
          <div
            style={{ height: `calc(100vh - 350px)` }}
            className="grid gap-5 mt-5 mb-2 grid-cols-grid-cards overflow-y-auto"
          >
            {!!movies.length ? (
              movies.map((m) => (
                <MovieCard
                  key={m.id}
                  movieInfo={m}
                />
              ))
            ) : (
              <p>У вас нет избранных фильмов</p>
            )}
          </div>
          {/* <div className="flex justify-between">
            <Pagination
              total={mainData.total}
              limit={mainData.limit}
              page={mainData.page}
              pages={mainData.pages}
            />
            <PageSizeChanger />
          </div> */}
        </div>
      ) : (
        //TODO сделать стили ссылок аналогично как в хедере?
        <NeedAuthorization />
      )}
    </>
  );
};

export default MoviesCont;
