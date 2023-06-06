import React from "react";

import { NavLink } from "react-router-dom";

import ic_calendar from "../../img/ic_calendar.svg";
import ic_exit from "../../img/ic_exit.svg";
import ic_home from "../../img/ic_home.svg";
import ic_pin from "../../img/ic_pin.svg";
import ic_search from "../../img/ic_search.svg";
import ic_settings from "../../img/ic_settings.svg";
import ic_table from "../../img/ic_table.svg";
import ic_widgets from "../../img/ic_widgets.svg";

import styles from "./Menu.module.scss";

type ActionType = Record<string, boolean>;

const links = [
  { link: "/", label: "Главная", icon: ic_home },
  { link: "/address", label: "Поиск адресов", icon: ic_search },
  { link: "/table", label: "Таблицы", icon: ic_table },
  { link: "/calendar", label: "Календарь", icon: ic_calendar },
  { link: "/map", label: "Карты", icon: ic_pin },
  { link: "/widgets", label: "Виджеты", icon: ic_widgets },
  { link: "/settings", label: "Настройки", icon: ic_settings },
  { link: "/exit", label: "Выход", icon: ic_exit },
];

export const Menu: React.FC = () => {
  const setAction = ({ isActive }: ActionType): string =>
    isActive ? styles.linkActive : styles.link;

  const items = links.map((link) => (
    <NavLink key={link.link} to={link.link} className={setAction}>
      <img src={link.icon} alt="" />
      <div>{link.label}</div>
    </NavLink>
  ));

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>Меню</div>
      <div className={styles.links}>{items}</div>
    </div>
  );
};
