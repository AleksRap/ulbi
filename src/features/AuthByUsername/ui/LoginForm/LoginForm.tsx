import { FC, memo, useCallback } from 'react';
import cn from 'classnames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, Input, Text, TextVariant } from 'shared/ui';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { useAppDispatch } from 'shared/hooks';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { DynamicModuleLoader, ReducerList } from 'shared/lib';

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const LoginFormMemo: FC<LoginFormProps> = ({ className, onSuccess }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

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

  const handleLogin = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result.meta.requestStatus === 'fulfilled') onSuccess();
  }, [dispatch, onSuccess, password, username]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <form className={cn(cls.loginForm, className)}>
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
          type='submit'
          onClick={handleLogin}
          isLoading={isLoading}
        >
          {t('Войти')}
        </Button>
      </form>
    </DynamicModuleLoader>
  );
};

const LoginForm = memo(LoginFormMemo);

export default LoginForm;
