import React from "react";
import ThirdHeader from "./layout-parts/ThirdHeader";
import Footer from "./layout-parts/Footer";
import { Outlet } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <>
      <ThirdHeader />
      <Outlet />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
