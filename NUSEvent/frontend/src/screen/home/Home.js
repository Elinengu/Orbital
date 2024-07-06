import React from "react";
// import "./Home.css";
// import Navbar from "../../components/Navbar";
import Post from "../posts/post";
import { Grid } from "@mui/material";
//the page that displays all the posts
//following the tut from CODERSNEVERQUIT
//the Navbar/ accidentally put in App.js later rmb to move it back here

const Home = () => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={0}
      paddingTop={5}
      paddingBottom={5}
      paddingLeft={15}
      paddingRight={15}
      spacing={2}
    >
      {/*a page is divided into 12 columns*/}
      {/* <Grid item xs={12} sm={6} md={3}> */}
      {[...Array(6)].map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Post />
        </Grid>
      ))}
      {/* </Grid> */}
    </Grid>
    // <div className="home">
    //   <div className="home-gallery">
    //     <div className="gallery">
    //       {[...Array(6)].map((_, index) => (
    //         <div className="item-container" key={index}>
    //           <Post />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="home-gallery">
    //     <div className="gallery">
    //       {[...Array(6)].map((_, index) => (
    //         <div className="item-container" key={index}>
    //           <img
    //             className="item"
    //             src="https://pbs.twimg.com/media/EfT6E7lUMAAJYKd?format=jpg&name=large"
    //           ></img>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="gallery">
    //       <div className="item-container">
    //         <img
    //           className="item"
    //           src="https://pbs.twimg.com/media/EfT6E7lUMAAJYKd?format=jpg&name=large"
    //         ></img>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
