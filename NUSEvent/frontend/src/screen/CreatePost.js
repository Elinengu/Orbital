import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton, Stack } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FlexibleDatePicker from "../components/FlexibleDatePicker";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FileUploadButton from "../components/FileUploadButton";

const CreatePost = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen}>
        <AddBoxOutlinedIcon />
      </IconButton>
      {/*
       the important structure here is:
       <Dialog>
       - <DialogTitle>
       --<DialogContent>
           <Stack>
       ---<DialogContentText>
       ---<DialogAction>
       */}

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        //maxWidth
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle style={{ textAlign: "center" }}>
          Create new post
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <Stack spacing={2} margin={2}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="title"
              label="Title"
              type="title"
              fullWidth
              variant="standard"
            />
            <FlexibleDatePicker />
            <FileUploadButton />
            <TextField
              required
              label="Description"
              placeholder="put your description here"
              multiline
              minRows={4}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default CreatePost;
