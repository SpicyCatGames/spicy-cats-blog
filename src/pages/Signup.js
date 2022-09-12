import { useContext } from "react";
import { jwtContext } from "../App";
import "./loginregstyles.css";

export default function Signup() {
  const jwt = useContext(jwtContext);
  return (
    <div className="signup-container">
      <h3>Create New Account</h3>
      <form>
        <div>
          <label htmlFor="UserName">Username: </label>
          <input
            id="UserName"
            className="signup-name-box"
            placeholder="username"
          />
        </div>
        <div>
          <label htmlFor="Password">Password: </label>
          <input
            id="Password"
            className="signup-pass-box"
            type="password"
            placeholder="password"
          />
        </div>
        <input className="signup-button" type="submit" value="Sign Up" />
      </form>
    </div>
  );
}
