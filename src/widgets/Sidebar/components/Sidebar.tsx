import React, {FC, useState} from 'react';
import { classNames } from "shared/lib/classNames";
import cls from './Sidebar.module.scss';
import {ThemeSwitcher} from "features/ThemeSwitcher";
import {LangSwitcher} from "features/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isCollapsed, setCollapsed] = useState(true);

  const handlerToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(cls.sidebar, {[cls.isCollapsed]: isCollapsed}, [className])}>
      <button className={cls.btn} onClick={handlerToggle}>toggle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>

    </div>
  );
};
