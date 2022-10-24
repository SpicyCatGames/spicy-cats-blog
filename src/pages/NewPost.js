import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Tiptap from "../components/Tiptap/Tiptap";
import { apiUrlContext, loggedInContext } from "../App";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const loggedIn = useContext(loggedInContext);
  const apiUrl = useContext(apiUrlContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const post = {
      Body: body,
      Title: title,
      Tags: "",
      Category: "",
    };

    submitPost(post);
  };

  const submitPost = async (post) => {
    const res = await fetch(`${apiUrl}api/Posts/createpost`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify(post),
    });
    if (res.ok) {
      navigate("/");
    } else {
      const data = await res.text();
      setError(data);
    }
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
      <Tiptap onBodyChange={setBody} />
      <input type="submit" value="Submit post" />
      <br />
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
