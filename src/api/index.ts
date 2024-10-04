import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const API_KEY = `${process.env.REACT_APP_KINOPOISK_API_KEY}`

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev/',
    headers: {
      'X-API-KEY': API_KEY
    }
    // baseUrl: `https://www.omdbapi.com/`,
  }),
  tagTypes: ['Movies'],
  endpoints: () => ({}),
});
