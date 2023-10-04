import { FC, memo, useCallback } from 'react';
import cn from 'classnames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, Input, Text, TextVariant } from 'shared/ui';
import { useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'shared/hooks';

interface LoginFormProps {
  className?: string;
}

const LoginFormMemo: FC<LoginFormProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const { username, password, error, isLoading } = useSelector(getLoginState);

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const handleLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={cn(cls.loginForm, className)}>
      <Input
        type='text'
        placeholder='login'
        value={username}
        onChange={handleChangeUsername}
        autoFocus
      />
      <Input
        type='text'
        placeholder='password'
        value={password}
        onChange={handleChangePassword}
      />

      {error && <Text variant={TextVariant.error}>{error}</Text>}

      <Button
        onClick={handleLogin}
        isLoading={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};

export const LoginForm = memo(LoginFormMemo);
