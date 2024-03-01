import type { Meta, StoryObj } from '@storybook/react';

import { Title } from './Title';

const meta: Meta<typeof Title> = {
  title: 'shared/components/Title',
  component: Title,
  tags: ['autodoc'],
  args: {
    children: 'Title for title component',
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {};
