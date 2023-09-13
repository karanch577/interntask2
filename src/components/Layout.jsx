import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="w-full max-w-[425px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
