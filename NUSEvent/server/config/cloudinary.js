//sth could be pasted from cloudinary upload API
//only needed for backend proxy upload method
//if axios then no need but will expose the API key
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;
