import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkVariant } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/components/AppLink',
  component: AppLink,
  tags: ['autodoc'],
  args: {
    children: 'link',
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

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
