import "./homestyles.css";
import BackgroundImage from "./fine.png";

const Home = () => {
  const bgImg = {
    backgroundImage: `url(${BackgroundImage})`,
  };

  return (
    <div className="home">
      <div className="home-main-img" style={bgImg}>
        <span className="home-title">SpicyCat's Blog</span>
      </div>
      <div className="home-container">
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
