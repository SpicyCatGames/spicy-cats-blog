const Logout = async ({ apiURL, setLoggedin }) => {
  // check login status here at start using refreshtoken
  const res = await fetch(`${apiURL}api/Auth/logout`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    setLoggedin(false);
  } else {
  }
};

export default Logout;
