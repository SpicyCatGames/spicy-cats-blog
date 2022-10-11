import "./loginregstyles.css";
import { useContext, useState } from "react";
import { apiUrlContext, loggedInContext } from "../App";

const Signup = () => {
  const loggedIn = useContext(loggedInContext);
  const apiUrl = useContext(apiUrlContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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
  };

  return (
    <div className="signup-container">
      {loggedIn ? (
        <h3>You are already logged in!</h3>
      ) : (
        <>
          <h3>Create New Account</h3>
          <form onSubmit={onSubmit}>
            <div>
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
      )}
    </div>
  );
};

export default Signup;
