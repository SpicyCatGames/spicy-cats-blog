import Navbar from "./components/Navbar/Navbar";
import { Login, Signup, Home, About } from "./pages";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

export const jwtContext = React.createContext();
export const apiUrlContext = React.createContext();

function App() {
  const [jwt, setJwt] = useState("sometoken");
  const apiUrl = "https://localhost:7190/";

  return (
    <>
      <jwtContext.Provider value={jwt}>
        <apiUrlContext.Provider value={apiUrl}>
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login setJwt={setJwt} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </apiUrlContext.Provider>
      </jwtContext.Provider>
    </>
  );
}

export default App;
