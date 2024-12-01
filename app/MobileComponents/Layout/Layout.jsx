"use client";
import React from "react";
import Header from "../BottomHeader/Header";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import User from "@/app/Components/User";

const Layout = ({ children }) => {
  return (
    <>
    <ProtectedRoute>
         <User>
          <main className="mb-24">{children}</main>
         </User>

    </ProtectedRoute>
      <Header />
    </>
  );
};

export default Layout;
