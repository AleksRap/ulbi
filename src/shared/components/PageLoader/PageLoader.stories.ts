import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from 'shared/components';

const meta = {
  title: 'shared/components/PageLoader',
  component: PageLoader,
  tags: ['autodoc'],
} as Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
