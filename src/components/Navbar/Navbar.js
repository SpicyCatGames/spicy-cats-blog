import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { loggedInContext } from "../../App";
import { useContext } from "react";
import "./navbar.css";

const Navbar = () => {
  const loggedIn = useContext(loggedInContext);

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
          ""
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
