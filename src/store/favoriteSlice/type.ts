import { TMovie } from 'types/movie';

export type TFavoriteSliceState = {
  movies: { [key: string]: TMovie[] };
};

export type TFavoriteSliceActionAddMovie = {
  user: string;
  movie: TMovie;
};

export type TFavoriteSliceActionDeleteMovie = Omit<
  TFavoriteSliceActionAddMovie,
  'movie'
> & { movieId: number };
