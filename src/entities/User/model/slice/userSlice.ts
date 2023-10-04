import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCAL_STORAGE_KEY } from '../../../../shared/constants';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) state.authData = JSON.parse(user);
    },
    signOut: (state) => {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      state.authData = undefined;
    },
  },
});
export const { actions: userActions, reducer: userReducer } = userSlice;
