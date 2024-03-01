import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers';
import { DeepPartial } from '../../../types';
import { ReducerList } from '../../../lib';

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) =>
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
