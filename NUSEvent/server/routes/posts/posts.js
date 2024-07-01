const express = require("express");
const { createPost } = require("../../controller/postController");
const postRouter = express.Router();

postRouter.get("/create-post", (req, res) => {
  res.send("this is a page to create post yeaaah XD");
});

postRouter.post("/create-post", createPost);

// postRouter.post("create-post", (req, res) => {
//   res.json({ message: "successfully posted" });
// });
//postRouter.get(/all-post, getAllPosts);

module.exports = postRouter;
