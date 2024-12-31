import React, { useEffect, useState } from "react";
import Post from "../components/homepage/Post";
import { PostType } from "../types";

export const MainPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const response = fetch("http://localhost:4000/post").then((res) => {
      res.json().then((posts) => setPosts(posts));
    });
  }, []);

  return (
    <div>
      <h2>MainPage</h2>
      <div>
        {posts?.length > 0 &&
          posts?.map((el: PostType, i: number) => <Post key={i} post={el} />)}
      </div>
    </div>
  );
};
