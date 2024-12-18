import React from "react";
import placeholder from "/img.jpeg";

const Post = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-3 p-4 w-4/5">
      <img
        className="w-56 h-44 max-w-xs object-cover"
        src={placeholder}
        alt="placeholder"
      />
      <div className="flex-col">
        <h2 className="text-2xl">Post Title</h2>
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
