import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextVariant } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/ui/Text',
  component: Text,
  tags: ['autodoc'],
  args: {
    children: 'Text for text component',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    variant: TextVariant.error,
  },
};
