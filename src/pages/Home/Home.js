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
  const apiUrl = useContext(apiUrlContext);
  const [pageSize, setPageSize] = useState("3");
  const [pageNum, setPageNum] = useState("1"); //eslint-disable-line no-unused-vars
  const [category, setCategory] = useState(""); //eslint-disable-line no-unused-vars
  const [posts, setPosts] = useState([]);

  const imageUrl = `${apiUrl}api/Posts/Image?image=`;

  useEffect(() => {
    fetchPosts();
  }, [pageSize]); //eslint-disable-line react-hooks/exhaustive-deps

  const fetchPosts = async () => {
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
    } else {
      //
    }
  };

  const handlePageSizeChange = (e) => {
    if (!(e.target.value === pageSize)) {
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
        <select onChange={handlePageSizeChange}>
          {pageSizeOptions.map((option) => (
            <option key={option.value}>{option.label}</option>
          ))}
        </select>
        {/* page numbers */}
        {posts.map((post) => (
          <Link
            to={`./post/${post.id}`}
            className="home-post"
            key={post.id}
            data-post-id={post.id}
          >
            <img src={`${imageUrl}${post.imageUrl}`} width="500" alt="" />
            <span className="home-post-title">{post.title}</span>
          </Link>
        ))}
        {/* page numbers */}
      </div>
    </div>
  );
};

export default Home;
