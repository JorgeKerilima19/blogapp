import React from "react";
import placeholder from "/img.jpeg";
import { PostType } from "../../types";

const Post = ({ key, post }: { key: number; post: PostType }) => {
  return (
    <div className="flex sm:flex-row flex-col gap-3 p-4 w-4/5">
      <img
        className="w-56 h-44 max-w-xs object-cover"
        src={`${post.cover ? post.cover : placeholder}`}
        alt="placeholder"
      />
      <div className="flex-col">
        <h2 className="text-2xl">{post.title}</h2>
        <div>
          <h3 className="text-sm">Author Posst</h3>
          <h3 className="text-xs">Sept 24</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          cum, facilis rerum error doloremque accusantium.
        </p>
      </div>
    </div>
  );
};

export default Post;
