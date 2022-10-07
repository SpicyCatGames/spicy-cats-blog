import "./poststyles.css";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiUrlContext } from "../../App";

// https://localhost:44362/api/Posts/Post/bd70975f-e895-4f35-a256-9a6789bb5d6b

const Post = () => {
  const apiUrl = useContext(apiUrlContext);
  const imageUrl = `${apiUrl}api/Posts/Image?image=`;

  // get the id parameter from URL
  let { id } = useParams();

  const [post, setPost] = useState({
    id: { id },
    title: "loading",
    body: "",
    imageUrl: "error",
    description: "",
    tags: "",
    category: "",
    author: "",
    created: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchPost();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const fetchPost = async () => {
    const res = await fetch(`${apiUrl}api/Posts/Post/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      setPost(data);
      setIsLoaded(true);
    } else {
      setPost({
        ...Post,
        title: `error ${res.status}`,
        body: "post could not be loaded",
      });
      setIsLoaded(true);
    }
  };

  return (
    <div className="post-container">
      <div className="post-contents">
        <img
          src={isLoaded ? `${imageUrl}${post.imageUrl}` : "/"}
          width="500"
          alt=""
          className="post-cover-img"
        />
        <span className="post-title">{post.title}</span>
        <div className="post-body">{post.body}</div>
      </div>
    </div>
  );
};

export default Post;
