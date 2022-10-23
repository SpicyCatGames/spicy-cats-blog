import { useState } from "react";
import Tiptap from "../components/Tiptap";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="post-title">
        <input
          type="text"
          id="post-title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <Tiptap />
      <span>Image upload will be added later</span>
      <br />
      <span>Descrription field will be added later</span>
      <br />
      <span>Tag field will be added later</span>
      <br />
      <span>Category field will be added later</span>
      <br />
    </form>
  );
};

export default NewPost;
