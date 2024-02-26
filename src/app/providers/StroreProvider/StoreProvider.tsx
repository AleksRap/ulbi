import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { AsyncStateSchema, StateSchema } from '../config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<AsyncStateSchema>;
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = ({
  initialState,
  asyncReducers,
  children,
}) => {
  const store = createReduxStore(initialState, asyncReducers);

  return <Provider store={store}>{children}</Provider>;
};
