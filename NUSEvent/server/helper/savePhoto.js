//encode photo into base 64 string
//use for small size stuff like icons
const savePhoto = (post, photoEncoded, photoType) => {
  if (photoEncoded != null) {
    post.Photo = new Buffer.from(photoEncoded, "base64");
    post.PhotoType = photoType;
  }
};

module.exports = { savePhoto };
