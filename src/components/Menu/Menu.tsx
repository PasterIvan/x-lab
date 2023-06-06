import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import ic_calendar from "../../img/ic_calendar.svg";
import ic_exit from "../../img/ic_exit.svg";
import ic_home from "../../img/ic_home.svg";
import ic_pin from "../../img/ic_pin.svg";
import ic_search from "../../img/ic_search.svg";
import ic_settings from "../../img/ic_settings.svg";
import ic_settings_fin from "../../img/ic_settings_fin.svg";
import ic_settings_profile from "../../img/ic_settings_profile.svg";
import ic_table from "../../img/ic_table.svg";
import ic_widgets from "../../img/ic_widgets.svg";

import { ChildLinks } from "./ChildLinks/ChildLinks";
import styles from "./Menu.module.scss";

export type ActionType = Record<string, boolean>;

export type ChildType = {
  link: string;
  label: string;
  icon: string;
};

export type LinkType = {
  link?: string;
  label: string;
  icon: string;
  children?: ChildType[];
};

const links: LinkType[] = [
  { link: "/", label: "Главная", icon: ic_home },
  { link: "/address", label: "Поиск адресов", icon: ic_search },
  { link: "/table", label: "Таблицы", icon: ic_table },
  { link: "/calendar", label: "Календарь", icon: ic_calendar },
  { link: "/map", label: "Карты", icon: ic_pin },
  { link: "/widgets", label: "Виджеты", icon: ic_widgets },
  {
    label: "Настройки",
    icon: ic_settings,
    children: [
      {
        link: "/settings/profile",
        label: "Настройки профиля",
        icon: ic_settings_profile,
      },
      {
        link: "/settings/fin",
        label: "Управление финансами",
        icon: ic_settings_fin,
      },
    ],
  },
  { link: "/exit", label: "Выход", icon: ic_exit },
];

export const Menu: React.FC = () => {
  const setAction = ({ isActive }: ActionType): string =>
    isActive ? styles.linkActive : styles.link;
  const [open, setOpen] = useState(false);
  const items = links.map((link) => {
    return link.link ? (
      <NavLink key={link.link} to={link.link} className={setAction}>
        <img src={link.icon} alt="" />
        <div>{link.label}</div>
      </NavLink>
    ) : (
      <ChildLinks link={link} />
    );
  });

  return (
    <>
      <div className={styles.menuButton} onClick={() => setOpen(!open)}>
        Меню
      </div>
      <div className={styles.menuContainer} style={{ left: open ? "0px" : "" }}>
        <div className={styles.menu}>Меню</div>
        <div className={styles.links}>{items}</div>
      </div>
    </>
  );
};
