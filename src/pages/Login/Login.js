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
          <label id="UserName">Username: </label>
          <input className="login-name-box" htmlFor="UserName" />
        </div>
        <div>
          <label id="Password">Password: </label>
          <input className="login-pass-box" htmlFor="Password" />
        </div>
        <input className="login-button" type="submit" value="Sign in" />
      </form>
    </div>
  );
}
