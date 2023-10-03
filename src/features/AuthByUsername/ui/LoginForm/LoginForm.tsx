import { FC } from 'react';
import cn from 'classnames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(cls.loginForm, className)}>
      <Input
        type='text'
        placeholder='login'
        autoFocus
      />
      <Input
        type='text'
        placeholder='password'
      />
      <Button>{t('Войти')}</Button>
    </div>
  );
};
