import type { Meta, StoryObj } from '@storybook/react';

import { PageError } from 'widgets';

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  tags: ['autodoc'],
} as Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
