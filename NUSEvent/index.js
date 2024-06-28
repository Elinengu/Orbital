const express = require("express");
const app = express();
const port = 5000;
const connectDB = require("./db.js");

app.use(express.json());

connectDB();

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
