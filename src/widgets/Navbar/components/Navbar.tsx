import { FC } from 'react';
import cn from 'classnames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={cn(cls.navbar, className)}>
      <div className={cls.links}>/</div>
    </div>
  );
};
