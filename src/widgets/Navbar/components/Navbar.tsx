import { FC } from 'react';
import cn from 'classnames';
import cls from './Navbar.module.scss';
import { Button, ButtonVariant } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { useBoolean } from 'shared/hooks';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  const { isBoolean: isShowModal, setTrue: handleOpen, setFalse: handleClose } = useBoolean(false);

  return (
    <div className={cn(cls.navbar, className)}>
      <Button
        variant={ButtonVariant.CLEAR}
        onClick={handleOpen}
      >
        {t('Войти')}
      </Button>
      <LoginModal
        isOpen={isShowModal}
        onClose={handleClose}
      >
        {t('Текст рыба')}
      </LoginModal>
    </div>
  );
};
