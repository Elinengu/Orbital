import axios from "axios";

//upload files sequentially in aync function(?)
//return urls in arrays
export async function UploadFilesSequentially(filesToUpload) {
  const urls = [];

  try {
    for (const file of filesToUpload) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "NUSEvent");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/nusevent/image/upload",
        data
      );
      urls.push(response.data.secure_url);
      console.log("Upload successful:", response.data);
    }
  } catch (error) {
    console.error("Error uploading files:", error);
  }

  return urls;
}

// // Usage
// const filesToUpload = [file1, file2, file3]; // Example file objects
// uploadFilesSequentially(filesToUpload).then((urls) => {
//   console.log(urls); // Array of URLs in the correct order
// });

//return response array from Cloudinary
export async function UploadFilesConcurrently(filesToUpload) {
  const uploadPromises = filesToUpload.map((file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "NUSEvent"); // Add your Cloudinary upload preset

    return axios
      .post("https://api.cloudinary.com/v1_1/nusevent/image/upload", data)
      .catch((error) => {
        console.error("Error uploading files:", error);
      });
  });

  return Promise.all(uploadPromises); //handle the sequence
}

// // Usage
// const filesToUpload = [file1, file2, file3]; // Example file objects
// handleUploadFilesConcurrently(filesToUpload).then((responses) => {
//   const urls = responses.map((response) => response.data.secure_url);
//   console.log(urls); // Array of URLs in the correct order
// });
