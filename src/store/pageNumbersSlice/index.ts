import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TPageNumbers } from './type';

const initialState: TPageNumbers = {
  mainPageNumber: 1,
  favoritePageNumber: 1,
};

export const pageNumbers = createSlice({
  name: 'pageNumbers',
  initialState,
  reducers: {
    changeMainPageNumber: (state, action: PayloadAction<number>) => {
      state.mainPageNumber = action.payload;
    },
    changeFavoritePageNumber: (state, action: PayloadAction<number>) => {
      state.favoritePageNumber = action.payload;
    },
  },
});

export const { changeMainPageNumber,changeFavoritePageNumber } = pageNumbers.actions;
export default pageNumbers.reducer;
