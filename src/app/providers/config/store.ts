import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { IS_DEV } from 'shared/constants';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from '../../../entities/User/model/slice/userSlice';

export const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: IS_DEV,
    preloadedState: initialState,
  });
};
