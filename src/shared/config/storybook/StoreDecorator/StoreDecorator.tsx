import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) =>
  function storeDecorator(StoryComponent: StoryFn) {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={asyncReducers}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };
