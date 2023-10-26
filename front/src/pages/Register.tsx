import React, { useState } from "react";

export const Register = () => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration successfull");
    } else {
      alert("Something went wrong");
    }
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
          Sign Up
        </button>
      </form>
    </section>
  );
};
