import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtContext, apiUrlContext } from "../../App";
import "../loginregstyles.css";

const Login = ({ setJwt }) => {
  const jwt = useContext(jwtContext);
  const apiUrl = useContext(apiUrlContext);

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    // setError("Some dum error");
  }, []);

  return (
    <div className="login-container">
      <h3>Login</h3>
      <form onSubmit={onSubmit}>
        <div>
          <p style={errorStyle}>{error.length > 0 ? `${error}` : ""}</p>
          <label htmlFor="UserName">Username: </label>
          <input
            id="UserName"
            className="login-name-box"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Password">Password: </label>
          <input
            id="Password"
            className="login-pass-box"
            type="password"
            placeholder="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <input className="login-button" type="submit" value="Sign in" />
      </form>
      <p>
        Don't have an account? <Link to="../signup">Sign Up</Link>
      </p>
    </div>
  );
};

const errorStyle = {
  color: "black",
  textShadow: "red 0 0 2px",
  margin: "0",
  padding: "0",
};

export default Login;
