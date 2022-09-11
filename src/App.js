import Navbar from "./components/Navbar";
import { Login, Signup, Home, About } from "./pages";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

export const jwtContext = React.createContext();

function App() {
  const [jwt, setJwt] = useState("sometoken");

  return (
    <>
      <jwtContext.Provider value={jwt}>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </jwtContext.Provider>
    </>
  );
}

export default App;
