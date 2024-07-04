import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar";
//the page that displays all the posts
//following the tut from CODERSNEVERQUIT

const Home = () => {
  return (
    <div className="home">
      <div className="home-navbar">
        <Navbar />
      </div>
      <div className="home-gallery">
        <div className="gallery">
          <img
            className="item"
            src="https://pbs.twimg.com/media/EfT6E7lUMAAJYKd?format=jpg&name=large"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
