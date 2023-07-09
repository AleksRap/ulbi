import { FC, useState } from 'react';
import cn from 'classnames';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { AppLink, AppLinkVariant, Button, ButtonVariant } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config';
import { AboutIcon, MainIcon } from 'shared/assets';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isCollapsed, setCollapsed] = useState(true);

  const handlerToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid='sidebar'
      className={cn(cls.sidebar, isCollapsed && cls.isCollapsed, className)}
    >
      <Button
        variant={ButtonVariant.CLEAR}
        className={cls.btn}
        onClick={handlerToggle}
        data-testid='sidebar-toggle'
      >
        {t(isCollapsed ? 'Открыть' : 'Закрыть')}
      </Button>

      <div className={cls.items}>
        <AppLink
          variant={AppLinkVariant.SECONDARY}
          to={RoutePath.MAIN}
          className={cls.item}
        >
          <MainIcon className={cls.icon} />{' '}
          {!isCollapsed && <div className={cls.link}>{t('Главная')}</div>}
        </AppLink>

        <AppLink
          variant={AppLinkVariant.RED}
          to={RoutePath.ABOUT}
          className={cls.item}
        >
          <AboutIcon className={cls.icon} />{' '}
          {!isCollapsed && <div className={cls.link}>{t('О сайте')}</div>}
        </AppLink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
