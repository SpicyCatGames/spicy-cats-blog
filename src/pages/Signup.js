import "./loginregstyles.css";
import { useContext, useState } from "react";
import { apiUrlContext, loggedInContext } from "../App";

const Signup = () => {
  const loggedIn = useContext(loggedInContext);
  const apiUrl = useContext(apiUrlContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [signupSuccessful, setSignupSuccessful] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const signupInfo = {
      username: name,
      password: password,
    };

    signUp(signupInfo);
  };

  const signUp = async (signupInfo) => {
    const res = await fetch(`${apiUrl}api/Auth/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupInfo),
    });
    if (res.ok) {
      setSignupSuccessful(true);
    } else {
      const data = await res.text();
      setError(data);
    }
  };

  const NotLoggedInBody = () => (
    <>
      <h3>Create New Account</h3>

      <form onSubmit={onSubmit}>
        <div>
          <p style={errorStyle}>{error.length > 0 ? `${error}` : ""}</p>
          <label htmlFor="UserName">Username: </label>
          <input
            id="UserName"
            className="signup-name-box"
            placeholder="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Password">Password: </label>
          <input
            id="Password"
            className="signup-pass-box"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input className="signup-button" type="submit" value="Sign Up" />
      </form>
    </>
  );

  return (
    <div className="signup-container">
      {!signupSuccessful ? (
        loggedIn ? (
          <h3>You are already logged in!</h3>
        ) : (
          // call component like this to prevent re-render of only component which would cause it to lose focus
          // calling it this way means the *parent* re-renders every time a state in the component chnages
          NotLoggedInBody()
        )
      ) : (
        <h3>Sign up successful!</h3>
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

export default Signup;
