import React from "react";
import SecondHeader from "./layout-parts/SecondHeader";
import Footer from "./layout-parts/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
const Layout = ({ children }) => {
  return (
    <>
      <SecondHeader />
      <Outlet />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
