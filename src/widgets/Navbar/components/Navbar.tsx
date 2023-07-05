import { FC } from 'react';
import { AppRoutes, RoutePath } from 'shared/config';
import cn from 'classnames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkVariant } from 'shared/ui';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(cls.navbar, className)}>
      <div className={cls.links}>
        <AppLink
          variant={AppLinkVariant.SECONDARY}
          to={RoutePath[AppRoutes.MAIN]}
        >
          {t('Главная')}
        </AppLink>
        <AppLink
          variant={AppLinkVariant.RED}
          to={RoutePath[AppRoutes.ABOUT]}
        >
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};
