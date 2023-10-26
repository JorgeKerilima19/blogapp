import React from "react";
import Layout from "./Layout";

import { Routes, Route } from "react-router-dom";

import { NotFound, Homepage, Register, MainPage, LogIn } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/register" index element={<Register />} />
        <Route path="/login" index element={<LogIn />} />
        <Route path="/main" index element={<MainPage />} />
      </Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
