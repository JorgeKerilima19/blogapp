import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostType } from "../types";

export const PostPage = () => {
  const { id } = useParams();

  const [postInfo, setPostInfo] = useState<PostType>();

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => setPostInfo(postInfo));
    });
  }, []);
  console.log(postInfo);

  return <div>PostPage</div>;
};
