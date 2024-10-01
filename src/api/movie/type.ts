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
  countries: { name: string }[];
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

export type TPossibleValuesForFiltersResponse = { name: string; slug: string };
