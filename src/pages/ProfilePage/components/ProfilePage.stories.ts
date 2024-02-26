import type { Meta, StoryObj } from '@storybook/react';

import ProfilePage from './ProfilePage';
import { StoreDecorator } from 'shared/config/storybook';
import { profileReducer } from 'entities/Profile';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodoc'],
} as Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithData: Story = {
  decorators: [
    StoreDecorator(
      {
        profile: { isLoading: false, readonly: true },
      },
      {
        profile: profileReducer,
      },
    ),
  ],
};
