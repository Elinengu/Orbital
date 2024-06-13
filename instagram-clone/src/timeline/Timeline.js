import React from "react";
import "./Timeline.css";
import Sugestions from "./Sugestions";

function Timeline() {
  return (
    <div className="timeline">
      {/*separate this 80% into left & right*/}
      <div className="timeline__left">Timeline</div>
      <div className="timeline__right">
        <Sugestions />
      </div>
    </div>
  );
}

export default Timeline;
