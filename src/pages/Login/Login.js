import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtContext, apiUrlContext, loggedInContext } from "../../App";
import "../loginregstyles.css";

const Login = ({ setJwt, setLoggedIn }) => {
  const jwt = useContext(jwtContext);
  const loggedIn = useContext(loggedInContext);
  const apiUrl = useContext(apiUrlContext);

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const loginInfo = {
      username: name,
      password: pass,
      role: "string",
    };

    login(loginInfo);
  };

  const login = async (loginInfo) => {
    const res = await fetch(`${apiUrl}api/Auth/login`, {
      method: "POST",
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });
    if (res.ok) {
      const data = await res.text();
      setJwt(`bearer ${data}`);
      alert(data);
      setError("");
      setName("");
      setPass("");
      setLoggedIn(true);
      clearTimeout(this.timeoutID);
      logoutCountdown();
    } else {
      const data = await res.text();
      setError(data);
    }
  };

  const logoutCountdown = () => {
    this.timeoutID = setTimeout(() => {
      setLoggedIn(false);
    }, 900000);
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
