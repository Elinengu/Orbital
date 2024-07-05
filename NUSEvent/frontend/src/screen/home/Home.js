import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar";
//the page that displays all the posts
//following the tut from CODERSNEVERQUIT
//the Navbar/ accidentally put in App.js later rmb to move it back here

const Home = () => {
  return (
    <div className="home">
      <div className="home-gallery">
        <div className="gallery">
          <div className="item-container">
            <img
              className="item"
              src="https://pbs.twimg.com/media/EfT6E7lUMAAJYKd?format=jpg&name=large"
            ></img>
          </div>
          <div className="item-container">
            <img
              className="item"
              src="https://pbs.twimg.com/media/EfT6E7lUMAAJYKd?format=jpg&name=large"
            ></img>
          </div>
          <div className="item-container">
            <img
              className="item"
              src="https://pbs.twimg.com/media/EfT6E7lUMAAJYKd?format=jpg&name=large"
            ></img>
          </div>
          <div className="item-container">
            <img
              className="item"
              src="https://pbs.twimg.com/media/EfT6E7lUMAAJYKd?format=jpg&name=large"
            ></img>
          </div>
          <div className="item-container">
            <img
              className="item"
              src="https://pbs.twimg.com/media/EfT6E7lUMAAJYKd?format=jpg&name=large"
            ></img>
          </div>
          <div className="item-container">
            <img
              className="item"
              src="https://pbs.twimg.com/media/EfT6E7lUMAAJYKd?format=jpg&name=large"
            ></img>
          </div>
          <div className="item-container">
            <img
              className="item"
              src="https://pbs.twimg.com/media/EfT6E7lUMAAJYKd?format=jpg&name=large"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
