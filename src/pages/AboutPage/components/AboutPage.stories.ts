import type { Meta, StoryObj } from '@storybook/react';

import { AboutPage } from 'pages';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  tags: ['autodoc'],
} as Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
