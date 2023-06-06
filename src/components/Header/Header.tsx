import React from "react";

import logo from "../../img/ic_logo.svg";
import person from "../../img/ic_person.svg";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <span>Wrench CRM</span>
      </div>
      <div className={styles.user}>
        <img src={person} alt="logo" />
        <span>Имя Фамилия</span>
      </div>
    </div>
  );
};
