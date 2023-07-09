import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import cls from './Button.module.scss';

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
  className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  variant,
  size = ButtonSize.M,
  ...otherProps
}) => {
  return (
    <button
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...otherProps}
      type='button'
      className={cn(cls.button, className, cls[variant], cls[size])}
    >
      {children}
    </button>
  );
};
