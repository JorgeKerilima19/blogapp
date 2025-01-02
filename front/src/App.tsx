import React from "react";
import Layout from "./Layout";

import { Routes, Route } from "react-router-dom";

import {
  NotFound,
  Homepage,
  Register,
  MainPage,
  LogIn,
  CreatePostPage,
  PostPage,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/register" index element={<Register />} />
        <Route path="/login" index element={<LogIn />} />
        <Route path="/main" index element={<MainPage />} />
        <Route path="/create-post" index element={<CreatePostPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Route>
      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
