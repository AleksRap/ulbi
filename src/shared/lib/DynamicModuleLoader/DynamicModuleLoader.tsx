import { FC, PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, AsyncStateSchema, StateSchema } from 'app/providers';
import { useAppDispatch } from '../../hooks';
import { Reducer, ReducersMapObject } from '@reduxjs/toolkit';

export type ReducerList = {
  [name in keyof StateSchema]?: Reducer;
};

type ReducersListEntry = [
  keyof ReducersMapObject<AsyncStateSchema>,
  ReducersMapObject<StateSchema>[keyof ReducersMapObject<AsyncStateSchema>],
][];

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<PropsWithChildren<DynamicModuleLoaderProps>> = ({
  reducers,
  removeAfterUnmount = true,
  children,
}) => {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    (Object.entries(reducers) as ReducersListEntry).forEach(([name, reducer]) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        (Object.entries(reducers) as ReducersListEntry).forEach(([name]) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
