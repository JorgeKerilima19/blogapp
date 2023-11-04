import React from "react";

export const CreatePostPage = () => {
  return (
    <section className="pt-20 grid gap-10 place-items-center">
      <h2 className="text-2xl font-bold">Create a new post</h2>
      <form className="min-h-screen flex flex-col gap-5 items-center w-4/5">
        <label
          className="md:min-w-[50%] min-w-[18rem] flex gap-5 justify-between flex-col md:flex-row"
          htmlFor="post-title"
        >
          Title
          <input
            id="post-title"
            className="min-w-[15rem] border px-2 py-1"
            placeholder="title"
          />
        </label>
        <label
          className="md:min-w-[50%] min-w-[18rem] flex gap-5 justify-between flex-col md:flex-row"
          htmlFor="post-overview"
        >
          Overview
          <textarea
            id="post-overview"
            className="min-w-[15rem] border px-2 py-1 min-h-[10rem] resize-none"
            placeholder="overview"
          />
        </label>
        <label
          htmlFor="post-file"
          className="px-5 border-2 py-1 border-white bg-red-700 hover:bg-slate-50 text-white hover:text-red-700 hover:border-red-700 transition transition-300"
        >
          Upload a file
        </label>
        <input id="post-file" type="file" />
      </form>
    </section>
  );
};
