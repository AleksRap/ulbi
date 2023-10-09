import { FC, useCallback } from 'react';
import cn from 'classnames';
import cls from './Navbar.module.scss';
import { Button, ButtonVariant } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useBoolean } from 'shared/hooks';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '../../../entities/User';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);

  const { isBoolean: isShowModal, setTrue: handleOpen, setFalse: handleClose } = useBoolean(false);

  const handleSignOut = useCallback(() => {
    dispatch(userActions.signOut());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={cn(cls.navbar, className)}>
        <Button
          variant={ButtonVariant.CLEAR}
          onClick={handleSignOut}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={cn(cls.navbar, className)}>
      <Button
        variant={ButtonVariant.CLEAR}
        onClick={handleOpen}
      >
        {t('Войти')}
      </Button>
      {isShowModal && (
        <LoginModal
          isOpen={isShowModal}
          onClose={handleClose}
        />
      )}
    </div>
  );
};
