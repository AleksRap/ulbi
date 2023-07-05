import { FC } from 'react';
import cn from 'classnames';
import cls from './PageLoader.module.scss';
import { Loader } from 'shared/ui';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={cn(cls.pageLoader, className)}>
      <Loader />
    </div>
  );
};
