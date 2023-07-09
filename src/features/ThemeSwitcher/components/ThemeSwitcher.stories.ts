import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from 'features/ThemeSwitcher';

const meta = {
  title: 'feature/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodoc'],
} as Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
