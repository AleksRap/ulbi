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

    reduce: (state, action) => {
      if (keysToRemove.length > 0) {
        // Если есть что удалять, значит уже точно импользуется полный стейт состоящий из асинхронного и синхронного
        const fullState = { ...state } as StateSchema;

        for (const key of keysToRemove) {
          if (key in fullState) delete fullState[key];
        }

        state = fullState;

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
