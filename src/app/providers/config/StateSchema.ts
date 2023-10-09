import type { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { EnhancedStore } from '@reduxjs/toolkit/dist/configureStore';
import { AnyAction, CombinedState, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Асинхронные редьюсеры
  loginForm?: LoginSchema;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: keyof StateSchema, reducer: Reducer) => void;
  remove: (key: keyof StateSchema) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
