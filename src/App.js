import Navbar from "./components/Navbar/Navbar";
import CheckLogin from "./components/Utils/CheckLogin";
import { Login, Signup, Home, Post, About, PageNotFound } from "./pages";
import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NewPost from "./pages/NewPost";

export const jwtContext = React.createContext();
export const apiUrlContext = React.createContext();
export const loggedInContext = React.createContext();

function App() {
  const [jwt, setJwt] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  let navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    CheckLogin({ apiURL: apiUrl, setJWT: setJwt, setLoggedin: setLoggedIn });
    let baseURL = window.location.protocol + "//" + window.location.host + "/";
    let returnURL = sessionStorage.getItem("404url");
    if (returnURL && returnURL.length > 0 && returnURL.startsWith(baseURL)) {
      sessionStorage.removeItem("404url");
      returnURL = returnURL.replace(baseURL, "/");
      navigate(returnURL);
    }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <jwtContext.Provider value={jwt}>
        <apiUrlContext.Provider value={apiUrl}>
          <loggedInContext.Provider value={loggedIn}>
            <div className="container">
              <Navbar setLoggedIn={setLoggedIn} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Post />} />
                <Route
                  path="/login"
                  element={<Login setJwt={setJwt} setLoggedIn={setLoggedIn} />}
                />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/new-post" element={<NewPost />} />
                {/* <Route path="/my-posts" element={<MyPosts />} /> */}
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
