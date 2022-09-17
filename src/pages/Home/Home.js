import { useState } from "react";
import "./homestyles.css";
import BackgroundImage from "./fine.png";

const pageSizeOptions = [
  { value: "3", label: "3" },
  { value: "5", label: "5" },
  { value: "10", label: "10" },
];

const Home = () => {
  const [pageSize, setPageSize] = useState("3");

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
        <a href="./" className="home-post">
          <img src="/placeholders/comp.jpg" width="500" alt="" />
          <span className="home-post-title">Post Title</span>
        </a>
        {/* page numbers */}
      </div>
    </div>
  );
};

export default Home;
