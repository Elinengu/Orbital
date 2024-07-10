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
import { json } from "react-router-dom";

const CreatePost = () => {
  /*frontend to backend integration*/
  const [PostedBy, setPostedBy] = React.useState("");
  const [Title, setTitle] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [Images, setImages] = React.useState("");

  const postDetails = () => {
    const data = new FormData();
    data.append("file", "images");
    data.append("upload_preset", "NUSEvent");
    data.append("could_name", "nusevent");
    fetch(
      "CLOUDINARY_URL=cloudinary://935293876958359:AHaMIT4pt6LnZVheBzV3pDRWlLQ@nusevent/images/upload",
      {
        method: "post",
        body: data,
      }
    )
      .then((res) => {
        res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const postData = () => {
    fetch("http://localhost:5000/create-post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ PostedBy, Title, Description }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  /*frontend design*/

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
          // onSubmit: (event) => {
          //   event.preventDefault();
          //   const formData = new FormData(event.currentTarget);
          //   const formJson = Object.fromEntries(formData.entries());
          //   const email = formJson.email;
          //   console.log(email);
          onSubmit: () => {
            postData();
            postDetails();
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
              id="postedBy"
              name="PostedBy" //input field
              label="Host Organisation"
              type="text"
              fullWidth
              variant="standard"
              value={PostedBy}
              onChange={(e) => setPostedBy(e.target.value)}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="title"
              name="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* <FlexibleDatePicker />
            <FileUploadButton Images={Images} setImages={setImages} /> */}
            <TextField
              required
              label="Description"
              placeholder="put your description here"
              multiline
              minRows={4}
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>{" "}
          {/*OnSubmit is attached directly to paper component */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default CreatePost;
