import React, { useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

export const Navbar = () => {
  const { logged } = useContext(AppContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", { credentials: "include" })
      .then((response) => response.json())
      .then((cookies) => {
        console.log("Received cookies: ", cookies);
        // Do something with the cookies, update state, or handle them as needed
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, [logged]);
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
