import type { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { Reducer, ReducersMapObject, UnknownAction, EnhancedStore } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';

interface SyncStateSchema {
  counter: CounterSchema;
  user: UserSchema;
}

export interface AsyncStateSchema {
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

export type StateSchema = SyncStateSchema & AsyncStateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema, UnknownAction, SyncStateSchema>;
  reduce: Reducer<StateSchema, UnknownAction, SyncStateSchema>;
  add: (key: keyof AsyncStateSchema, reducer: Reducer) => void;
  remove: (key: keyof AsyncStateSchema) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
