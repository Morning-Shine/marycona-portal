import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from 'types/user';

type TUserSlice = TUser | null;

const initialState: { user: TUserSlice; users: TUser[] } = {
  user: null,
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<TUserSlice>) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = null;
    },
    addUser: (state, action: PayloadAction<TUser>) => {
      state.users.push(action.payload);
    },
  },
});

export const { setActiveUser, resetUser, addUser } = userSlice.actions;
export default userSlice.reducer;
