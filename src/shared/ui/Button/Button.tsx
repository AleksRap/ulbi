import {ButtonHTMLAttributes, FC, PropsWithChildren} from 'react';
import { classNames } from "shared/lib/classNames";
import cls from './Button.module.scss';

export enum ButtonVariant {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: ButtonVariant;
  className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  variant= ButtonVariant.CLEAR,
  ...otherProps
}) => {

  return (
    <button {...otherProps} className={classNames(cls.button, {}, [className, cls[variant]])}>
      {children}
    </button>
  );
};
