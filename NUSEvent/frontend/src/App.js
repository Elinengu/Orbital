import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screen/home/Home_dynamicVer";
import CreatePost from "./screen/CreatePost";

// import Profile from "./screen/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create-post" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
