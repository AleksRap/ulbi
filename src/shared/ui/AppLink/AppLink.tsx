import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = ({
  children,
  className,
  variant = AppLinkVariant.PRIMARY,
  ...otherProps
}) => {
  return (
    <Link
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
      className={cn(cls.appLink, className, cls[variant])}
    >
      {children}
    </Link>
  );
};
