import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/ui/Modal',
  component: Modal,
  tags: ['autodoc'],
  args: {
    children:
      'Text modal text modal text modal text modal text modal text modal text modal text modal text modal text modal text modal text modal text modal text modal text modal text modal text modal text modal text modal',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
  },
};
