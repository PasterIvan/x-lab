import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { ActionType, LinkType } from "../Menu";
import stylesLink from "../Menu.module.scss";

import styles from "./ChildLinks.module.scss";

type ChildLinksProps = {
  link: LinkType;
};

export const ChildLinks: React.FC<ChildLinksProps> = ({ link }) => {
  const setAction = ({ isActive }: ActionType): string =>
    isActive ? stylesLink.linkActive : stylesLink.link;
  const [open, setOpen] = useState(false);

  return (
    <div key={link.label}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className={open ? styles.linkOpen : styles.link}
        onClick={() => setOpen(!open)}
      >
        <img src={link.icon} alt="" />
        <div>{link.label}</div>
      </div>
      {open && (
        <div className={styles.links}>
          {link.children?.map((child) => (
            <NavLink key={child.link} to={child.link} className={setAction}>
              <img src={child.icon} alt="" />
              <div>{child.label}</div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
