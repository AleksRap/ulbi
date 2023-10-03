import type { Meta, StoryObj } from '@storybook/react';

import { LangSwitcher } from './LangSwitcher';

const meta = {
  title: 'feature/LangSwitcher',
  component: LangSwitcher,
  tags: ['autodoc'],
} as Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
