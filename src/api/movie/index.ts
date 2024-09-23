import { api } from '..';
import { TMoviesResponseData, IMoviesTransformResponse } from './type';

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
            countries: m.countries
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
  }),
});

export const { useGetMoviesQuery } = movieApi;
