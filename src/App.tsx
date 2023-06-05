import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Head } from "./components/Header/Head";
import { Menu } from "./components/Menu/Menu";

export const App: React.FC = () => {
  return (
    <div>
      {/* <Loading */}
      {/*    visible={load} */}
      {/*    overlayBlur={2} */}
      {/*    className={classes.loader} */}
      {/* /> */}
      <Head />
      <Menu />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="address" element={<div>address</div>} />
        {/* <Route path="404" element={<div />} /> */}
        {/* <Route path="*" element={<Navigate to="/404" />} /> */}
      </Routes>
    </div>
  );
};
