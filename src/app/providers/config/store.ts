import { configureStore } from '@reduxjs/toolkit';
import { IS_DEV } from 'shared/constants';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: IS_DEV,
    preloadedState: initialState,
  });
};
