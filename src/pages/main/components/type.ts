import { Dispatch, SetStateAction } from 'react';

export type TSearchMoviesCont = {
  searchInput: string;
};

export type TFilters = {
  setSearchInput: Dispatch<SetStateAction<string>>;
};
