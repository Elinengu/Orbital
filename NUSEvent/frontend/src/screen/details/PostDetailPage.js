import React, { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  createTheme,
  ThemeProvider,
  Container,
} from "@mui/material";
import { displayImages } from "./PostDetailComponent/displayImages";
import { useParams } from "react-router-dom";
import PostDetailAvatar from "./PostDetailComponent/PostDetailAvatar";
import Detail from "./PostDetailComponent/Detail.js";

const PostDetailPage = () => {
  const { id } = useParams(); //extract the parameter from URL
  const [post, setPost] = useState(null); //data here should be json Object
  const [error, setError] = useState(null);
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 550,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

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
      .then(({ post }) => {
        //remember to destructure it from the object, or use data.post
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

  if (!post) {
    //waiting for the data
    return <div>Loading...</div>;
  }

  const images = post.images;

  function hasValidImages(images) {
    return (
      Array.isArray(images) && images.length > 0 && images[0] !== "no image"
    );
  }

  return (
    // <div>
    //   {hasValidImages(images) && <img src={images[0]} alt="Post Images"></img>}
    // </div>
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          px: { xs: 2, sm: 2, md: 12 },
          paddingBottom: 20,
          paddingTop: 6,
          marginBottom: 20,
        }}
      >
        {/*to manage the page padding & margin*/}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
        >
          {/*horizontally divide the page */}
          {/*stack containing images & detail(date, event title)*/}
          <Stack
            // margin={0}
            // paddingBottom={0}
            // paddingTop={6}
            // marginTop={0}
            // marginBottom={0}
            spacing={0.25}
            display="flex"
            alignItems="flex-start"
            alignContent="center"
            justifyContent="space-evenly"
            //   height="100vh"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              //   px: { xs: 2, sm: 2, md: 12 },
            }}
          >
            {/*placeholder*/}
            {hasValidImages(images) && (
              <Box
                margin={0}
                padding={0}
                sx={{
                  maxWidth: {
                    xs: "100%",
                    sm: "80%",
                    md: "65%",
                  },
                }}
                component="img"
                src={images[0]}
                alt="Post Images"
              ></Box>
            )}

            <Box display="flex" flexDirection="column">
              <PostDetailAvatar
                postedBy={post.postedBy}
                timestamp={post.timestamp}
              />
              <Detail title={post.title} date={post.date} />
            </Box>
          </Stack>

          {/*wrap the stack & captions */}
          <Typography variant="caption">description_placeholder</Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vulputate sapien sed libero volutpat, at vehicula est sagittis. Cras
            egestas nisi sed ligula pulvinar, quis sollicitudin odio fermentum.
            Vivamus a arcu nec est fringilla facilisis. Morbi porttitor metus
            eget est bibendum, nec facilisis odio vestibulum. Fusce venenatis,
            tortor ut ullamcorper facilisis, libero odio tristique mauris, id
            sodales felis turpis sit amet dui. Duis dapibus interdum augue, eget
            elementum turpis dignissim non. Nam ut ultricies lectus. Aenean
            vitae est urna. Nulla facilisi. Nullam at erat sed magna cursus
            consequat ut ut nisi. Integer suscipit eros non nunc facilisis, quis
            consequat urna dictum. Donec nec nisi at enim bibendum ultricies.
            Praesent consequat urna a dolor sollicitudin, ut luctus nisi
            accumsan. Mauris luctus, magna a bibendum aliquet, sapien lacus
            faucibus risus, sed aliquet purus justo ac libero. Nam vel magna id
            orci suscipit sollicitudin ac sed elit. Integer sodales leo eu odio
            tincidunt, at condimentum dolor ultrices. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Sed vel orci ut justo sagittis varius. Nam eget felis in
            leo scelerisque vehicula. Donec volutpat interdum ex, nec tincidunt
            ligula. Suspendisse id libero justo. Curabitur sed arcu nec magna
            feugiat commodo. Ut fringilla, purus a iaculis finibus, eros nulla
            facilisis mi, eget pellentesque dui elit eu justo. Nunc eget velit
            nec justo vulputate ullamcorper id in felis. Integer facilisis
            volutpat arcu, sit amet luctus risus fermentum eu. Cras malesuada,
            felis a fermentum lacinia, ligula arcu tincidunt nulla, et bibendum
            risus lectus non ligula. Sed id convallis lorem, et lacinia libero.
            Cras malesuada turpis nec nisl dictum, nec consectetur dolor
            consequat. Suspendisse potenti. Suspendisse potenti. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nam fringilla suscipit tortor, in cursus neque eleifend sit
            amet. Nam eget mauris non libero posuere dignissim. Vestibulum
            ultricies, nisl at venenatis tincidunt, ipsum justo convallis orci,
            at suscipit ligula nisi at mi. Maecenas vitae convallis purus.
            Nullam a enim id arcu malesuada dapibus. Pellentesque dignissim enim
            at nisl varius, a feugiat est bibendum. Sed auctor felis et nibh
            scelerisque, et posuere felis aliquet. Sed eget sollicitudin justo.
            Proin interdum est ut felis facilisis, nec vehicula lacus tincidunt.
            Nullam nec felis id nisl tincidunt lacinia. Nulla sed est a libero
            porttitor sagittis vel vel lorem. Nam eu convallis metus. Aliquam
            erat volutpat. Nullam et libero euismod, condimentum libero nec,
            elementum purus.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default PostDetailPage;
