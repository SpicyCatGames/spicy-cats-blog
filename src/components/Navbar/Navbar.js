import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { loggedInContext, apiUrlContext } from "../../App";
import { useContext } from "react";
import Logout from "../Utils/Logout";
import "./navbar.css";

const Navbar = ({ setLoggedIn }) => {
  const loggedIn = useContext(loggedInContext);
  const apiURL = useContext(apiUrlContext);

  const logOut = () => {
    Logout({ apiURL: apiURL, setLoggedin: setLoggedIn });
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav-site-title">
        SpicyCat's Blog
      </Link>
      <div>
        {!loggedIn ? (
          <>
            <CustomLink to="/login">
              <p className="nav-text">Log In</p>
            </CustomLink>
            <CustomLink to="/signup">
              <p className="nav-text">Sign Up</p>
            </CustomLink>
          </>
        ) : (
          <>
            <CustomLink to="/new-post">
              <p className="nav-text">New Post</p>
            </CustomLink>
            <CustomLink to="/my-posts">
              <p className="nav-text">My Posts</p>
            </CustomLink>
            <CustomLink to="/" onClick={logOut}>
              <p className="nav-text">Log Out</p>
            </CustomLink>
          </>
        )}
        <CustomLink to="/about">
          <p className="nav-text">About</p>
        </CustomLink>
      </div>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  // end true matches whole thing not part of url
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <div className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default Navbar;
