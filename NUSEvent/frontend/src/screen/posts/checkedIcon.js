import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { grey } from "@mui/material/colors";

export default function CheckedIcon() {
  return (
    <div>
      <Checkbox
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon sx={{ color: grey[900] }} />}
      />
    </div>
  );
}
