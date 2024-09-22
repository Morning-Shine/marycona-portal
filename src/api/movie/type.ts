import { TMovie } from 'types/movie';

type TMoviesResponse = {
  alternativeName: string | null;
  id: number;
  name: string | null;
  poster: {
    previewUrl: string;
    url: string;
  } | null;
  rating: {
    await: number;
    filmCritics: number;
    imdb: number;
    kp: number;
    russianFilmCritics: number;
  };
  year: number;
};

export type TMoviesResponseData = {
  docs: TMoviesResponse[];
  limit: number;
  page: number;
  pages: number;
  total: number;
};

export interface IMoviesTransformResponse
  extends Omit<TMoviesResponseData, 'docs'> {
  moviesList: TMovie[];
}
