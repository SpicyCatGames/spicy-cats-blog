import Navbar from "./components/Navbar/Navbar";
import { Login, Signup, Home, About, PageNotFound } from "./pages";
import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const jwtContext = React.createContext();
export const apiUrlContext = React.createContext();
export const loggedInContext = React.createContext();

function App() {
  const [jwt, setJwt] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  let navigate = useNavigate();
  const apiUrl = "https://sadmandiu.somee.com/";

  useEffect(() => {
    let baseURL = "https://spicycatgames.github.io/";
    let returnURL = sessionStorage.getItem("404url");
    if (returnURL && returnURL.length > 0 && returnURL.startsWith(baseURL)) {
      sessionStorage.removeItem("404url");
      returnURL = returnURL.replace(baseURL, "/");
      navigate(returnURL);
    }
  }, []);

  return (
    <>
      <jwtContext.Provider value={jwt}>
        <apiUrlContext.Provider value={apiUrl}>
          <loggedInContext.Provider value={loggedIn}>
            <div className="container">
              <Navbar setLoggedIn={setLoggedIn} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/login"
                  element={<Login setJwt={setJwt} setLoggedIn={setLoggedIn} />}
                />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </div>
          </loggedInContext.Provider>
        </apiUrlContext.Provider>
      </jwtContext.Provider>
    </>
  );
}

export default App;
