import { combineReducers, ReducersMapObject } from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, AsyncStateSchema } from './StateSchema';

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: (keyof AsyncStateSchema)[] = [];

  return {
    getReducerMap: () => reducers,

    reducer: (state, action) => {
      if (keysToRemove.length > 0) {
        // Если есть что удалять, значит уже точно есть стейт
        state = { ...state } as StateSchema;

        for (const key of keysToRemove) {
          delete state[key];
        }

        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key, reducer) => {
      if (!key || reducers[key]) return;

      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key) => {
      if (!key || !reducers[key]) return;

      delete reducers[key];
      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
