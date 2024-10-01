import { createSlice } from '@reduxjs/toolkit';
import { PAGE_SIZES } from 'constants/enums';
import { TPageSizes } from './type';

const initialState: TPageSizes = {
  mainPageSize: PAGE_SIZES[1],
  favoritePageSize: PAGE_SIZES[0],
};

export const pageSizes = createSlice({
  name: 'pageSizes',
  initialState,
  reducers: {
    changeMainPageSize: (state, action) => {
      state.mainPageSize = action.payload;
    },
    changeFavoritePageSize: (state, action) => {
      state.favoritePageSize = action.payload;
    },
  },
});

export const { changeMainPageSize, changeFavoritePageSize } = pageSizes.actions;
export default pageSizes.reducer;
