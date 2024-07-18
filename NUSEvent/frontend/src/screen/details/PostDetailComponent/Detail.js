import React from "react";
import { toFormattedDate } from "../../../helperFunction/helper";
import { Stack, Typography } from "@mui/material";

function Detail({ title, date }) {
  return (
    <Stack padding={0} margin={0}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="h7">Date: {toFormattedDate(date)}</Typography>
    </Stack>
    // <div>
    //   <h6>{title}</h6>
    //   <h6>{toFormattedDate(date)}</h6>
    // </div>
  );
}

export default Detail;
