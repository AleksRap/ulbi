import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
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
      className={classNames(cls.sidebar, { [cls.isCollapsed]: isCollapsed }, [className])}
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
