import React, { useState, FormEvent } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";

export const CreatePostPage = () => {
  const [header, setHeader] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [files, setFiles] = useState<File | any>();

  const [redirect, setRedirect] = useState<boolean>(false);

  const createNewPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.set("header", header);
    data.set("summary", summary);
    data.set("content", content);
    data.set("files", files);

    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      setRedirect(true);
      alert("Post Succesful, going to Homepage");
    }
  };
  
  if (redirect) {
    return <Navigate to={"/main"} />;
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],

      [{ color: [] }, { background: [] }],
    ],
  };
  return (
    <section className="pt-20 grid gap-10 place-items-center">
      <h2 className="text-2xl font-bold">Create a new post</h2>
      <form
        className="min-h-screen flex flex-col gap-5 items-center w-4/5"
        onSubmit={createNewPost}
      >
        <label
          className="md:min-w-[50%] min-w-[18rem] flex gap-5 justify-between flex-col md:flex-row"
          htmlFor="post-title"
        >
          Title
          <input
            id="post-title"
            className="min-w-[15rem] border px-2 py-1"
            placeholder="title"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
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
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </label>
        <label
          htmlFor="post-file"
          className="px-5 border-2 py-1 border-white bg-red-700 hover:bg-slate-50 text-white hover:text-red-700 hover:border-red-700 transition transition-300"
        >
          Upload a file
        </label>
        <input
          id="post-file"
          type="file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const input = e.target as HTMLInputElement;
            const selectedFile = input.files?.[0];
            setFiles(selectedFile);
          }}
        />
        <ReactQuill
          modules={modules}
          value={content}
          onChange={(newValue) => setContent(newValue)}
        />
        <button
          className="px-5 border-2 py-1 border-white bg-red-700 hover:bg-slate-50 text-white hover:text-red-700 hover:border-red-700 transition transition-300"
          type="submit"
        >
          Create Post
        </button>
      </form>
    </section>
  );
};
