import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers';
import { Profile } from '../../types/profile';
import { isApiError } from 'shared/utils';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Profile>('/profile');

      return response.data;
    } catch (e) {
      return rejectWithValue(isApiError(e) ? e.response.data.message : 'error');
    }
  },
);
