import { StoryFn } from '@storybook/react';
import { StateSchema, AsyncStateSchema, StoreProvider } from 'app/providers';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { DeepPartial } from '../../../types';

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersMapObject<AsyncStateSchema>,
) =>
  function storeDecorator(StoryComponent: StoryFn) {
    return (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={asyncReducers}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };
