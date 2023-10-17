import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from 'shared/ui';

const meta = {
  title: 'shared/components/Loader',
  component: Loader,
  tags: ['autodoc'],
} as Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
