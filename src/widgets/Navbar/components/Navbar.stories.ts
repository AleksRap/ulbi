import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from 'widgets/Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodoc'],
} as Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
