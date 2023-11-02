import React, { useEffect, useContext } from "react";

import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

export const Navbar = () => {
  const { logged } = useContext(AppContext);

  const handleLogOut = async () => {
    //log out
    console.log("Logged Out");
  };

  useEffect(() => {
    fetch("http://localhost:4000/profile", { credentials: "include" })
      .then((response) => response.json())
      .then((cookies) => {
        console.log("Received cookies: ", cookies);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  return (
    <nav className="flex justify-between">
      <Link to={"/"}>
        <img src="" alt="logo" />
      </Link>
      <ul className="flex gap-5">
        {logged ? (
          <>
            <Link to={"/create-post"}>Create Post</Link>
            <button onClick={handleLogOut}>Log out</button>
          </>
        ) : (
          <>
            <Link to={"/register"}>Register</Link>
            <Link to={"/login"}>Log In</Link>
          </>
        )}
      </ul>
    </nav>
  );
};
