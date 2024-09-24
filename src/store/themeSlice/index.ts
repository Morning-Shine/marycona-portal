import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TMode } from 'types/mode';


const initialState: { mode: TMode } = {
  mode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<TMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { changeMode } = themeSlice.actions;
export default themeSlice.reducer;
