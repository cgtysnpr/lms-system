import React from "react";
import Header from "./layout-parts/Header";
import ThirdHeader from "./layout-parts/ThirdHeader";
import Footer from "./layout-parts/Footer";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Page from "react-page-loading";
const Layout = ({ children }) => {
  const { user } = useAuth();
  if (typeof user === "undefined") {
    return (
      <div>
        <Page loader={"bar"} color={"#A9A9A9"} size={10}></Page>
      </div>
    );
  }
  return (
    <>
      {user ? <ThirdHeader user={user} /> : <Header />}

      <Outlet />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
