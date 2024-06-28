const express = require("express");
const { createPost } = require("../../controller/postController");
const postRouter = express.Router();

postRouter.post("/create-post", createPost);
//postRouter.get(/all-post, getAllPosts);

module.exports = { postRouter };
