import React, { useState, useEffect } from "react";
import { Box, Button, Container } from "@mui/material";
import { displayImages } from "./displayImages";
import { useParams } from "react-router-dom";

const PostDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null); //data here should be json Object
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/post/${id}`, {
      //check the syntax when will parameter
      headers: {
        accept: "application/json ",
      },
    })
      .then((res) => {
        console.log("Received response:");
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        return res.json();
      })
      .then((post) => {
        console.log(post);
        setPost(post);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, [id]); //rerun when id changes

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function toFormattedDate(date) {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  function hasValidImages(images) {
    return (
      Array.isArray(images) && images.length > 0 && images[0] !== "no image"
    );
  }
  // const imageUrl = hasValidImages(post.images) ? post.images[0] : null;
  return (
    <Box sx={{ marginBottom: 2, width: "100%" }}>
      <displayImage images={post.images} idx={0} />
    </Box>
  );
};

export default PostDetailPage;
