import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  TFavoriteSliceActionAddMovie,
  TFavoriteSliceActionDeleteMovie,
  TFavoriteSliceState,
} from './type';

const initialState: TFavoriteSliceState = {
  movies: {},
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<TFavoriteSliceActionAddMovie>) => {
      const user = action.payload.user;
      !!state?.movies?.[user]
        ? state.movies[user].push(action.payload.movie)
        : (state.movies![user] = [action.payload.movie]);
    },
    deleteMovie: (
      state,
      action: PayloadAction<TFavoriteSliceActionDeleteMovie>
    ) => {
      const user = action.payload.user;
      state.movies![user] = state.movies![user]?.filter(
        (i) => i.id !== action.payload.movieId
      );
    },
  },
});

export const { addMovie, deleteMovie } = favoriteSlice.actions;
export default favoriteSlice.reducer;
