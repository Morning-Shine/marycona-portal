import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PAGE_SIZES } from 'constants/enums';
import { TPageSizes } from './type';

const initialState: TPageSizes = {
  mainPageNumber: 1,
  favoritePageNumber: 1,
  mainPageSize: PAGE_SIZES[1],
  favoritePageSize: PAGE_SIZES[0],
};

export const pageSizes = createSlice({
  name: 'pageSizes',
  initialState,
  reducers: {
    changeMainPageNumber: (state, action: PayloadAction<number>) => {
      state.mainPageNumber = action.payload;
    },
    // changeMainPageSize: (
    //   state,
    //   action: PayloadAction<(typeof PAGE_ALBUMS_SIZES)[number]>
    // ) => {
    //   state.albums = action.payload;
    // },
    //   changePostsPageSize: (
    //     state,
    //     action: PayloadAction<(typeof PAGE_POST_SIZES)[number]>
    //   ) => {
    //     state.posts = action.payload;
    //   },
  },
});

export const { changeMainPageNumber } = pageSizes.actions;
export default pageSizes.reducer;
