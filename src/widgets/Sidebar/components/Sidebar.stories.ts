import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from 'widgets/Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodoc'],
} as Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
