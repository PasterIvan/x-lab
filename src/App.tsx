import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import { Address } from "./components/Address/Address";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Menu } from "./components/Menu/Menu";

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainContainer}>
        <Menu />
        <div className={styles.routes}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="address" element={<Address />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
