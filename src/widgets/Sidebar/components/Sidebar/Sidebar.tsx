import { FC, useState, memo } from 'react';
import cn from 'classnames';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from 'features/LangSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { Button, ButtonVariant } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { sidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

const SidebarMemo: FC<SidebarProps> = ({ className }) => {
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

      <div className={cls.items}>
        {sidebarItemsList.map((item) => (
          <SidebarItem
            item={item}
            isCollapsed={isCollapsed}
            key={item.path}
          />
        ))}
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export const Sidebar = memo(SidebarMemo);
