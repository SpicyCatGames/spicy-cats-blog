import { useContext } from "react";
import { jwtContext } from "../App";

export default function Login() {
  const jwt = useContext(jwtContext);
  return <div>Login</div>;
}
