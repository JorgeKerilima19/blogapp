import React from "react";
import placeholder from "/img.jpeg";
import { PostType } from "../../types";
import { formatISO9075 } from "date-fns";

const Post = ({ post }: { key: number; post: PostType }) => {
  return (
    <div className="flex sm:flex-row flex-col gap-3 p-4 w-4/5">
      <img
        className="w-56 h-44 max-w-xs object-cover"
        src={`${post.cover ? post.cover : placeholder}`}
        alt="placeholder"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl">{post.title}</h2>
        <div className="flex gap-4">
          <h3 className="text-sm">{post.author.username}</h3>
          <time className="text-xs">
            {formatISO9075(new Date(post.createdAt))}
          </time>
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
