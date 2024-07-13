import * as React from "react";
import axios from "axios"; //to fetch data from backend server
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar, { avatarClasses } from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { grey, lightBlue, red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Container } from "@mui/material";
import mao from "../../images/bichimao1.jpg";
import CheckedIcon from "./checkedIcon";

export default function Post({
  postedBy,
  title,
  description,
  dates,
  images,
  timestamp,
}) {
  function toFormattedTimestamp(timestamp) {
    return new Date(timestamp).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  function toFormattedDate(date) {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  const hasValidImages =
    Array.isArray(images) && images.length > 0 && images[0] !== "no image";
  const imageUrl = hasValidImages ? images[0] : null;
  console.log("Image URL:", imageUrl); //debugger

  return (
    <Box sx={{ marginBottom: 2, width: "100%" }}>
      <Card
        sx={{
          borderRadius: 2,
          // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: red[500],
                padding: 0,
                marginRight: 0,
                width: 24,
                height: 24,
                fontSize: 10,
              }}
              aria-label="recipe"
            >
              R
            </Avatar>
          }
          sx={{
            padding: 1, // Reduce padding to make the header section smaller
            paddingTop: 1,
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 1.5,
            "& .MuiCardHeader-content": {
              marginLeft: 0, // Adjust margin between Avatar and content
              maxWidth: "calc(100% - 32px)",
            },
          }}
          titleTypographyProps={{
            variant: "subtitle2",
            marginLeft: "0",
            sx: {
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "calc(100% - 32px)",
            },
          }} // Use h6 or smaller variant
          subheaderTypographyProps={{ variant: "caption", marginLeft: "0" }} // Adjust subheader size if needed
          title={postedBy}
          // subheader={
          //   dates && dates.length > 0
          //     ? new Date(dates[0]).toLocaleDateString()
          //     : "No dates available"
          // }
          subheader={
            timestamp
              ? toFormattedTimestamp(timestamp)
              : "No timestamp available"
          }
          // title="Shrimp and Chorizo Paella" //organiser or postedBy
          // subheader="September 14, 2016" //date
        />
        {imageUrl ? (
          <CardMedia
            component="img"
            height="20%"
            image={imageUrl}
            alt="OH NO WHERE'S MY BICHI MAO?"
          />
        ) : (
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        )}
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Date:
            {dates && dates.length > 0
              ? toFormattedDate(dates[0])
              : "No dates available"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <CheckedIcon />
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
