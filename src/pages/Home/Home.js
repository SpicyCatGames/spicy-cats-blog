import { useState, useContext, useEffect } from "react";
import "./homestyles.css";
import BackgroundImage from "./fine.png";
import { apiUrlContext } from "../../App";
import { Link } from "react-router-dom";

const pageSizeOptions = [
  { value: "3", label: "3" },
  { value: "5", label: "5" },
  { value: "10", label: "10" },
];

// https://localhost:44362/api/Posts/getposts?pageNum=1&postsPerPage=10&category=a

const Home = () => {
  let pSize = sessionStorage.getItem("pageSize");
  if (pSize === null || (typeof pSize === "string" && pSize.length === 0)) {
    pSize = "3";
  }

  const apiUrl = useContext(apiUrlContext);
  const [pageSize, setPageSize] = useState(pSize);
  const [pageNum, setPageNum] = useState("1"); //eslint-disable-line no-unused-vars
  const [category, setCategory] = useState(""); //eslint-disable-line no-unused-vars
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  const imageUrl = `${apiUrl}api/Posts/Image?image=`;

  useEffect(() => {
    // if we have a url in sessionstorage from github 404 page,
    // we will be almost instantly navigated to that
    // so there is no need to fetch posts
    if (!sessionStorage.getItem("404url")) {
      fetchPosts();
    }
  }, [pageSize]); //eslint-disable-line react-hooks/exhaustive-deps

  const fetchPosts = async () => {
    try {
      const res = await fetch(
        `${apiUrl}api/Posts/getposts?pageNum=${pageNum}&postsPerPage=${pageSize}&category=${category}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
        setIsLoaded(true);
      } else {
        setError("Posts Could not be loaded");
        setIsLoaded(true);
      }
    } catch (error) {
      setError(
        "Either your connection is bad or server is in updating, please wait 5-10 minutes."
      );
      setIsLoaded(true);
    }
  };

  const handlePageSizeChange = (e) => {
    if (!(e.target.value === pageSize)) {
      sessionStorage.setItem("pageSize", e.target.value);
      setPageSize(e.target.value);
    }
  };

  const bgImg = {
    backgroundImage: `url(${BackgroundImage})`,
  };

  return (
    <div className="home">
      <div className="home-main-img" style={bgImg}>
        <span className="home-title">SpicyCat's Blog</span>
      </div>
      <div className="home-container">
        Posts per Page:
        <select onChange={handlePageSizeChange} defaultValue={pageSize}>
          {pageSizeOptions.map((option) => (
            <option key={option.value}>{option.label}</option>
          ))}
        </select>
        {/* page numbers */}
        {isLoaded === false ? (
          <p>Loading posts</p>
        ) : error !== "" ? (
          <p>{error}</p>
        ) : (
          posts.map((post) => (
            <Link
              to={`./post/${post.id}`}
              className="home-post"
              key={post.id}
              data-post-id={post.id}
            >
              <img src={`${imageUrl}${post.imageUrl}`} width="500" alt="" />
              <span className="home-post-title">{post.title}</span>
            </Link>
          ))
        )}
        {/* page numbers */}
      </div>
    </div>
  );
};

export default Home;
