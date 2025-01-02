import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostType } from "../types";

export const PostPage = () => {
  const { id } = useParams();

  const [postInfo, setPostInfo] = useState<PostType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => setPostInfo(postInfo));
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full py-4">
      {!postInfo || Object.keys(postInfo || {}).length === 0 ? (
        <div className="flex flex-col gap-4 max-w-[52rem] px-2">
          <h2 className="text-2xl underline underline-offset-4">
            {postInfo?.title}
          </h2>
          <img
            className="w-full max-w-[32rem] aspect-square object-cover"
            src={`http://localhost:4000/${postInfo?.cover}`}
            alt="Img-post"
          />
        </div>
      ) : (
        <h3 className="text-2xl">Post unavailable</h3>
      )}
    </div>
  );
};
