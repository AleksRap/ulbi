import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import cls from './Button.module.scss';
import { Loader } from '../Loader';

export enum ButtonVariant {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  variant = ButtonVariant.OUTLINE,
  isLoading,
  size = ButtonSize.M,
  type = 'button',
  ...otherProps
}) => {
  return (
    <button
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...otherProps}
      type={type}
      className={cn(cls.button, className, cls[variant], cls[size])}
      disabled={isLoading}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};
