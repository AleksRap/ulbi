import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonVariant } from './Button';

const meta = {
  title: 'shared/ui/Button',
  component: Button,
  tags: ['autodoc'],
  args: {
    children: 'Text button',
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Clear: Story = {
  args: {
    variant: ButtonVariant.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    variant: ButtonVariant.OUTLINE,
  },
};
