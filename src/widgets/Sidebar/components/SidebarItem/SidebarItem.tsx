import { memo, FC } from 'react';
import cn from 'classnames';
import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkVariant } from 'shared/ui';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
  item: SidebarItemType;
  isCollapsed: boolean;
  className?: string;
}

const SidebarItemMemo: FC<SidebarItemProps> = ({ item, isCollapsed = false, className }) => {
  const { t } = useTranslation();

  return (
    <AppLink
      variant={AppLinkVariant.SECONDARY}
      to={item.path}
      className={cn(cls.item, className)}
    >
      <item.Icon className={cls.icon} />{' '}
      {!isCollapsed && <div className={cls.link}>{t(item.text)}</div>}
    </AppLink>
  );
};

export const SidebarItem = memo(SidebarItemMemo);
