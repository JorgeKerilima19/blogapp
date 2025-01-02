import React, { useEffect, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

import logo from "/logo.png";

export const Navbar = () => {
  const { logged, setLogged } = useContext(AppContext);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    const isloggedOut = await fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });

    if (isloggedOut) {
      setLogged((logged) => !logged);
      alert("Succesfully logged out");
      navigate("/login");
    }
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
    <nav className="flex justify-between items-center">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="h-10 w-10" />
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
