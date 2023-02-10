import React, {FC} from 'react';
import {AppRoutes, RoutePath} from "shared/config";
import {classNames} from "shared/lib";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkVariant} from "shared/ui/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>

      <div className={cls.links}>
        <AppLink variant={AppLinkVariant.SECONDARY} to={RoutePath[AppRoutes.MAIN]}>Главная</AppLink>
        <AppLink variant={AppLinkVariant.RED} to={RoutePath[AppRoutes.ABOUT]}>О сайте</AppLink>
      </div>
    </div>
  );
};
