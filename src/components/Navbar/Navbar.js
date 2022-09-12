import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-site-title">
        SpicyCat's Blog
      </Link>
      <ul>
        <CustomLink to="/login">
          <p className="nav-text">Log In</p>
        </CustomLink>
        <CustomLink to="/signup">
          <p className="nav-text">Sign Up</p>
        </CustomLink>
        <CustomLink to="/about">
          <p className="nav-text">About</p>
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  // end true matches whole thing not part of url
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
