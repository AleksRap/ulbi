import { FC, SVGProps } from 'react';
import { RoutePath } from 'shared/config';
import { AboutIcon, MainIcon, ProfileIcon } from 'shared/assets';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: FC<SVGProps<SVGElement>>;
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.MAIN,
    text: 'Главная',
    Icon: MainIcon,
  },
  {
    path: RoutePath.ABOUT,
    text: 'О сайте',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.PROFILE,
    text: 'Профиль',
    Icon: ProfileIcon,
  },
];
