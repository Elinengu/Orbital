import React from "react";
import { Avatar, CardHeader } from "@mui/material";
import { toFormattedDate } from "../../../helperFunction/helper";

export default function PostDetailAvatar({ postedBy, timestamp }) {
  return (
    <CardHeader
      avatar={
        <Avatar
          sx={{
            padding: 0,
            marginRight: 0,
            width: 24,
            height: 24,
            fontSize: 10,
          }}
        >
          {postedBy ? postedBy.charAt(0) : "R"}
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
      }}
      subheaderTypographyProps={{ variant: "caption", marginLeft: "0" }} // Adjust subheader size if needed
      title={postedBy}
      subheader={
        timestamp ? toFormattedDate(timestamp) : "No timestamp available"
      }
    />
  );
}
