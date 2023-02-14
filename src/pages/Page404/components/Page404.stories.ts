import type { Meta, StoryObj } from '@storybook/react';

import { Page404 } from 'pages';

const meta = {
  title: 'pages/Page404',
  component: Page404,
  tags: ['autodoc'],
} as Meta<typeof Page404>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
