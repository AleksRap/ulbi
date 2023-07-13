import { FC } from 'react';
import cn from 'classnames';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '../hooks/useTheme';
import ThemeIcon from '../assets/icons/theme.svg';
import { Button, ButtonVariant } from 'shared/ui';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, handleToggleTheme } = useTheme();

  return (
    <Button
      variant={ButtonVariant.CLEAR}
      className={className}
      onClick={handleToggleTheme}
    >
      <ThemeIcon className={cn(cls.icon, cls[theme])} />
    </Button>
  );
};
