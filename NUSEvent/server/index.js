const express = require("express");
const app = express();
const port = 5000;
const connectDB = require("./db.js");
// const cloudinary = require("./config/cloudinary.js");

require("./models/post");
app.use(express.json()); //middleware to take the incoming request and pass it to json
app.use(require("./routes/posts/posts"));

connectDB();

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
