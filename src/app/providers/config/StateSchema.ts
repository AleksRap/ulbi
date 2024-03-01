import type { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { Reducer, ReducersMapObject, EnhancedStore } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

interface SyncStateSchema {
  counter: CounterSchema;
  user: UserSchema;
}

export type AsyncStateSchema = {
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
};

export type StateSchema = SyncStateSchema & AsyncStateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reducer: Reducer<StateSchema>;
  add: <Key extends keyof AsyncStateSchema>(
    key: Key,
    reducer: ReducersMapObject<StateSchema>[Key],
  ) => void;
  remove: (key: keyof AsyncStateSchema) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgs {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArgs;
}
