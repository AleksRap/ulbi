import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook';
import { loginReducer } from '../../model/slice/loginSlice';

const meta = {
  title: 'feature/LoginForm',
  component: LoginForm,
  tags: ['autodoc'],
} as Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithData: Story = {
  decorators: [
    StoreDecorator(
      {
        loginForm: { username: '123', password: 'asc' },
      },
      {
        loginForm: loginReducer,
      },
    ),
  ],
};
