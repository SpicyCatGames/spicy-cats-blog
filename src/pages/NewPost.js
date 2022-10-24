import { useState, useContext } from "react";
import Tiptap from "../components/Tiptap";
import { apiUrlContext, loggedInContext } from "../App";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const loggedIn = useContext(loggedInContext);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const LoggedInBody = () => (
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

  return loggedIn ? (
    LoggedInBody()
  ) : (
    <p>You need to log in to access this page</p>
  );
};

export default NewPost;
