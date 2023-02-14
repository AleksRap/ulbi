import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkVariant } from 'shared/ui';

const meta = {
  title: 'shared/ui/AppLink',
  component: AppLink,
  tags: ['autodoc'],
  args: {
    children: 'link',
    to: '/',
  },
} as Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: AppLinkVariant.SECONDARY,
  },
};

export const Red: Story = {
  args: {
    variant: AppLinkVariant.RED,
  },
};
