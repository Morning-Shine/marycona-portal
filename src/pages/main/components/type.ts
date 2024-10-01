import { Dispatch, SetStateAction } from 'react';

export type TSearchMoviesCont = {
  searchInput: string;
};

export type TSearch = {
  setSearchInput: Dispatch<SetStateAction<string>>;
};

export type TSelectGenge = {
  isSearchInput: boolean;
  setGenreFilter: Dispatch<SetStateAction<string>>;
};
export type TFilters = TSelectGenge & TSearch;

export type TMoviesCont = {genreFilter:string};