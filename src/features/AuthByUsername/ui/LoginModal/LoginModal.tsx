import { ComponentProps, FC } from 'react';
import { Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';

type LoginModalProps = ComponentProps<typeof Modal>;

export const LoginModal: FC<LoginModalProps> = ({ className, isOpen, onClose }) => {
  return (
    <Modal
      className={className}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
};
