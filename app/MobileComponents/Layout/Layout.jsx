"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "../BottomHeader/Header";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import User from "@/app/Components/User";
const Layout = ({ children }) => {
  const pathname = usePathname();
  const unprotectedRoutes = ["/formtabs", "/signup", "/welcome"];
  const isProtected = !unprotectedRoutes.includes(pathname);
  const hideHeaderRoutes = ["/signup", "/welcome", "/formtabs"];
  const showHeader = !hideHeaderRoutes.includes(pathname);

  return (
    <>
      {isProtected ? (
        <ProtectedRoute>
          <User>
            <main className="mb-24">{children}</main>
          </User>
        </ProtectedRoute>
      ) : (
        <main className="mb-24">{children}</main>
      )}
      {showHeader && <Header />}
    </>
  );
};

export default Layout;
