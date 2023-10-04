import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import cls from './Text.module.scss';

export enum TextVariant {
  primary = 'primary',
  error = 'error',
}

interface TextProps {
  variant?: TextVariant;
  className?: string;
}

export const Text: FC<PropsWithChildren<TextProps>> = ({
  variant = TextVariant.primary,
  className,
  children,
}) => {
  return <span className={cn(cls.text, cls[variant], className)}>{children}</span>;
};
