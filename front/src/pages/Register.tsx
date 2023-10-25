import React, { useState } from "react";

export const Register = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <section className="min-h-screen grid place-items-center">
      <form
        action=""
        className="grid place-items-center gap-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl">Register</h2>
        <input
          className={
            "py-1 px-2 border-2 border-gray-400 focus:border-black transition duration-300"
          }
          type="text"
          value={userName}
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
          Sign Up
        </button>
      </form>
    </section>
  );
};