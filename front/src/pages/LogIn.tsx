import React, { FormEvent, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "../context/AppContext";

export const LogIn = () => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { logged, setLogged } = useContext(AppContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.status === 200) {
      alert("User Found");
    } else {
      alert("User Not found");
    }
    if (response.ok) {
      setLogged(true);
    }
  };
  if (logged) {
    return <Navigate to={"/main"} />;
  }
  return (
    <section className="min-h-screen grid place-items-center">
      <form
        action=""
        className="grid place-items-center gap-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl">Log in</h2>
        <input
          className={
            "py-1 px-2 border-2 border-gray-400 focus:border-black transition duration-300"
          }
          type="text"
          value={username}
          placeholder="type smth"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          className={
            "py-1 px-2 border-2 border-gray-400 focus:border-black transition duration-300"
          }
          type="password"
          value={password}
          placeholder="type smth"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="py-2 px-5 bg-gray-500">
          Log In
        </button>
      </form>
    </section>
  );
};
