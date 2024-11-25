"use client";

import React from "react";
import Header from "../BottomHeader/Header";

const Layout = ({ children }) => {
  return (
    <>
      <main className="mb-24">{children}</main>
      <Header />
    </>
  );
};

export default Layout;
