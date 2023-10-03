import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/ui/Input',
  component: Input,
  tags: ['autodoc'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
