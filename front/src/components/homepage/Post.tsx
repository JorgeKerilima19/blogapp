import React from "react";
import placeholder from "/img.jpeg";
import { PostType } from "../../types";
import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ post }: { key: number; post: PostType }) => {
  return (
    <Link
      to={`/post/${post._id}`}
      className="flex sm:flex-row flex-col gap-3 p-4"
    >
      <img
        className="w-60 h-44 object-cover"
        src={`http://localhost:4000/${post.cover ? post.cover : placeholder}`}
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
    </Link>
  );
};

export default Post;
