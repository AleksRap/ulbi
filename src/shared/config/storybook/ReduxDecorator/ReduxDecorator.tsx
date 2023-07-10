import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { StoreProvider } from 'app/providers';

export const ReduxDecorator = (Story: StoryFn) => (
  <StoreProvider>
    <Story />
  </StoreProvider>
);
