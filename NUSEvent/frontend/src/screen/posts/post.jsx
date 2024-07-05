import * as React from "react";
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
import { Box, Container } from "@mui/material";
import mao from "../../images/bichimao1.jpg";
import CheckedIcon from "./checkedIcon";
import { styled } from "@mui/system";

const label = { inputProps: { "aria-label": "add to bookmarked" } };

export default function Post() {
  return (
    <Box>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: red[500],
                padding: 0,
                marginRight: 0,
              }}
              aria-label="recipe"
            >
              R
            </Avatar>
          }
          sx={{
            padding: 1, // Reduce padding to make the header section smaller
            "& .MuiCardHeader-content": {
              marginLeft: 1, // Adjust margin between Avatar and content
            },
          }}
          titleTypographyProps={{ variant: "body2", marginLeft: "0" }} // Use h6 or smaller variant
          subheaderTypographyProps={{ variant: "overline", marginLeft: "0" }} // Adjust subheader size if needed
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"

          // title="Shrimp and Chorizo Paella" //organiser or postedBy
          // subheader="September 14, 2016" //date
        />
        <CardMedia
          component="img"
          height="20%"
          img
          src={mao}
          alt="OH NO WHERE'S MY BICHI MAO?"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
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
