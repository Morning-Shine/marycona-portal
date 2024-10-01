import { Dispatch, SetStateAction } from 'react';

export type TFilters = {
  setSearchInput: Dispatch<SetStateAction<string>>;
};
