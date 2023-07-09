import type { Meta, StoryObj } from '@storybook/react';

import { MainPage } from 'pages/MainPage';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodoc'],
} as Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
