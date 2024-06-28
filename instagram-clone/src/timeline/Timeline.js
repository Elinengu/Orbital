import React, { useState } from "react";
import "./Timeline.css";
import Sugestions from "./Sugestions";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "Eline",
      postImage:
        "data:image/png;base64,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",
      likes: 12,
      timestamp: "2d",
    },

    {
      user: "sirotan",
      postImage:
        "data:image/jpeg;base64,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",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "pikachu",
      postImage:
        "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-sun-pokemon-moon/6/6d/Partnercappikachu.jpg",
      likes: 56,
      timestamp: "12h",
    },
  ]);
  return (
    <div className="timeline">
      {/*separate this 80% into left & right*/}
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Sugestions />
      </div>
    </div>
  );
}

export default Timeline;
