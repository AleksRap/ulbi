import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export enum ButtonVariant {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  variant,
  ...otherProps
}) => {
  return (
    <button
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...otherProps}
      type='button'
      className={classNames(cls.button, {}, [className, cls[variant]])}
    >
      {children}
    </button>
  );
};
