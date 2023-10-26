import React from "react";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <Link to={"/"}>
        <img src="" alt="logo" />
      </Link>
      <ul className="flex gap-5">
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Log In</Link>
      </ul>
    </nav>
  );
};
