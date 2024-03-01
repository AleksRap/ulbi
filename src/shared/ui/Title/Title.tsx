import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import cls from './Title.module.scss';

interface TitleProps {
  className?: string;
}

export const Title: FC<PropsWithChildren<TitleProps>> = ({ className, children }) => {
  return <span className={cn(cls.title, className)}>{children}</span>;
};
