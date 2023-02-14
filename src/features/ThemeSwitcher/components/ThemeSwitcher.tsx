import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '../hooks/useTheme';
import ThemeIcon from '../assets/icons/theme.svg';
import { Button, ButtonVariant } from 'shared/ui';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant={ButtonVariant.CLEAR}
      className={classNames(className)}
      onClick={toggleTheme}
    >
      <ThemeIcon className={classNames(cls.icon, {}, [cls[theme]])} />
    </Button>
  );
};
