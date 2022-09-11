import { useContext } from "react";
import { jwtContext } from "../../App";
import "./loginstyles.css";

export default function Login() {
  const jwt = useContext(jwtContext);
  return (
    <div className="login-container">
      <h3>Login</h3>
      <form>
        <div>
          <label htmlFor="UserName">Username: </label>
          <input
            id="UserName"
            className="login-name-box"
            placeholder="username"
          />
        </div>
        <div>
          <label htmlFor="Password">Password: </label>
          <input
            id="Password"
            className="login-pass-box"
            type="password"
            placeholder="password"
          />
        </div>
        <input className="login-button" type="submit" value="Sign in" />
      </form>
      <p>
        Don't have an account? <a href="./">Sign Up</a>
      </p>
    </div>
  );
}
