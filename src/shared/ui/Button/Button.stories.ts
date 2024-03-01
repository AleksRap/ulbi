import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ButtonVariant } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/components/Button',
  component: Button,
  tags: ['autodoc'],
  args: {
    children: 'Title button',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

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

export const Size_S: Story = {
  args: {
    size: ButtonSize.S,
  },
};

export const Size_M: Story = {
  args: {
    size: ButtonSize.M,
  },
};

export const Size_L: Story = {
  args: {
    size: ButtonSize.L,
  },
};

export const Disabled: Story = {
  args: {
    isLoading: true,
  },
};
