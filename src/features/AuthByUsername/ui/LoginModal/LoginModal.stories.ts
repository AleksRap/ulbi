import type { Meta, StoryObj } from '@storybook/react';

import { LoginModal } from './LoginModal';

const meta = {
  title: 'feature/LoginModal',
  component: LoginModal,
  tags: ['autodoc'],
} as Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
