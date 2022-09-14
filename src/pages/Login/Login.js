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
  let [timeoutID, setTimeoutID] = useState(-1);

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
      if (!(timeoutID === -1)) {
        clearTimeout(this.timeoutID);
        setTimeoutID(-1);
      }

      logoutCountdown();
    } else {
      const data = await res.text();
      setError(data);
    }
  };

  const logoutCountdown = () => {
    let id = setTimeout(() => {
      setLoggedIn(false);
    }, 900000);
    setTimeoutID(id);
  };

  useEffect(() => {
    if (!loggedIn) {
      if (!(timeoutID === -1)) {
        clearTimeout(this.timeoutID);
        setTimeoutID(-1);
        setJwt("");
        // send request to api to remove refresh token from cookies
      }
    }
  }, [loggedIn]);

  return (
    <div className="login-container">
      {!loggedIn ? (
        <>
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
        </>
      ) : (
        <>
          <h3>You are already logged in</h3>
        </>
      )}
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
