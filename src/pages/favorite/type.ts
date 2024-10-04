import { Dispatch, SetStateAction } from "react";

export type TSearch = {
    setSearchInput: Dispatch<SetStateAction<string>>;
  };