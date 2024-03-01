import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { __IS_DEV__ } from 'shared/constants';
import { StateSchema, ThunkExtraArgs } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api';
import { NavigateOptions, To } from 'react-router-dom';
import { ReducerList } from 'shared/lib';

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducerList,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArgument: ThunkExtraArgs = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
      }),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
