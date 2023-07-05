import { FC, useState } from 'react';
import cn from 'classnames';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher, LangSwitcher } from 'features';
import { Button, ButtonVariant } from 'shared/ui';
import { useTranslation } from 'react-i18next';

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
        {isCollapsed ? t('Открыть') : t('Закрыть')}
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
