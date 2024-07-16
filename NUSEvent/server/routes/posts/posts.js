const express = require("express");
const {
  createPost,
  getAllPosts,
  getSinglePost,
} = require("../../controller/postController");
const postRouter = express.Router();

//to add the login feature, add middleware here later
postRouter.get("/create-post", (req, res) => {
  res.send("this is a page to create post yeaaah XD");
});

postRouter.post("/create-post", createPost);

postRouter.get("/", getAllPosts);

postRouter.get("/post/:id", getSinglePost);

// postRouter.post("create-post", (req, res) => {
//   res.json({ message: "successfully posted" });
// });
//postRouter.get(/all-post, getAllPosts);

module.exports = postRouter;
