import { api } from '..';
import {
  TMoviesResponseData,
  IMoviesTransformResponse,
  TPossibleValuesForFiltersResponse,
} from './type';

export const movieApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovies: build.query({
      query: (params) => ({
        url: !!params ? `/v1.4/movie?${params}` : '/v1.4/movie',
        method: 'GET',
      }),
      transformResponse: (
        response: TMoviesResponseData
      ): IMoviesTransformResponse => {
        const moviesList = [];
        for (const m of response.docs) {
          moviesList.push({
            id: m.id,
            name: m.name || m.alternativeName || 'название отсутствует',
            posterUrl: m.poster?.url || null,
            rating: m.rating.imdb,
            year: m.year,
            countries: m.countries,
          });
        }
        return {
          moviesList,
          limit: response.limit,
          page: response.page,
          pages: response.pages,
          total: response.total,
        };
      },
    }),
    getMoviesWithSearch: build.query({
      query: (params) => ({
        url: !!params ? `/v1.4/movie/search?${params}` : '/v1.4/movie/search',
        method: 'GET',
      }),
      transformResponse: (
        response: TMoviesResponseData
      ): IMoviesTransformResponse => {
        const moviesList = [];
        for (const m of response.docs) {
          moviesList.push({
            id: m.id,
            name: m.name || m.alternativeName || 'название отсутствует',
            posterUrl: m.poster?.url || null,
            rating: m.rating.imdb,
            year: m.year,
            countries: m.countries,
          });
        }
        return {
          moviesList,
          limit: response.limit,
          page: response.page,
          pages: response.pages,
          total: response.total,
        };
      },
    }),
    getPossibleValuesForFilters: build.query<
      TPossibleValuesForFiltersResponse[],
      string
    >({
      query: (params) => ({
        url: !!params
          ? `/v1.4/movie/possible-values-by-field?${params}`
          : '/v1.4/movie/possible-values-by-field',
        method: 'GET',
      }),
    }),
    //TODO сделать типизацию ответа
    getMovieById: build.query<any, string>({
      query: (id) => ({
        url: `/v1.4/movie/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMoviesWithSearchQuery,
  useGetPossibleValuesForFiltersQuery,
  useGetMovieByIdQuery,
} = movieApi;
