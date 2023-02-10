import { FC } from 'react';
import { classNames } from "shared/lib";
import cls from './ThemeSwitcher.module.scss';
import {useTheme} from "../hooks/useTheme";
import ThemeIcon from '../assets/icons/theme.svg'
import {Button} from "shared/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(className)}
      onClick={toggleTheme}
    >
      <ThemeIcon className={classNames(cls.icon, {}, [cls[theme]])} />
    </Button>
  );
};
