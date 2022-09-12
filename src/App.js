import Navbar from "./components/Navbar/Navbar";
import { Login, Signup, Home, About } from "./pages";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

export const jwtContext = React.createContext();
export const apiUrlContext = React.createContext();
export const loggedInContext = React.createContext();

function App() {
  const [jwt, setJwt] = useState("sometoken");
  const [loggedIn, setLoggedIn] = useState(false);
  const apiUrl = "https://localhost:7190/";

  return (
    <>
      <jwtContext.Provider value={jwt}>
        <apiUrlContext.Provider value={apiUrl}>
          <loggedInContext.Provider value={loggedIn}>
            <div className="container">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/login"
                  element={<Login setJwt={setJwt} setLoggedIn={setLoggedIn} />}
                />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </loggedInContext.Provider>
        </apiUrlContext.Provider>
      </jwtContext.Provider>
    </>
  );
}

export default App;
