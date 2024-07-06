import * as React from "react";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Link } from "react-router-dom";

export default function CreatePostButton() {
  return (
    <IconButton>
      <AddBoxOutlinedIcon component={Link} to="create-post" />
    </IconButton>
  );
}
