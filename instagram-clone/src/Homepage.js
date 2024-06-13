import React from "react";
import "./Homepage.css";
import Sidenav from "./navigation/Sidenav"; //import component on react
import Timeline from "./timeline/Timeline";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        {/*use the imported component*/}
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
