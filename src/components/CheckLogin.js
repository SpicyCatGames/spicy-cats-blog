const CheckLogin = async ({ apiURL, setJWT, setLoggedin }) => {
  // check login status here at start using refreshtoken
  const res = await fetch(`${apiURL}api/Auth/refresh-token`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    setJWT(`bearer ${data}`);
    setLoggedin(true);
  } else {
    const data = await res.text();
  }
};

export default CheckLogin;
