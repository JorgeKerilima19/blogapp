import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

import "./style.css";

const Layout = () => {
  return (
    <>
      <header className="bg-slate-600 text-white px-5 h-12 grid items-center">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </>
  );
};

export default Layout;
