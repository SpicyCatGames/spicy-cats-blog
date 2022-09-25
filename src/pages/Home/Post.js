import "./homestyles.css";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiUrlContext } from "../../App";

// https://localhost:44362/api/Posts/Post/bd70975f-e895-4f35-a256-9a6789bb5d6b

const Post = () => {
  // get the id parameter from URL
  let { id } = useParams();

  return (
    <div className="home">
      <div className="home-container">{id}</div>
    </div>
  );
};

export default Post;
