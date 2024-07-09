import React, { useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid,
  Paper,
  Card,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/system";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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
const FileUploadButton = () => {
  const [draggingIndex, setDraggingIndex] = useState(null);

  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    setImages([...images, ...newImages]);
  };

  const handleDragStart = (item) => {
    setDraggingIndex(item.source.index);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return; // If no valid destination, return

    const items = Array.from(images); //(starting index, amount of removed elements, inserted element)
    const [reorderedItem] = items.splice(result.source.index, 1); // Remove the dragged item from the array
    items.splice(result.destination.index, 0, reorderedItem);

    setImages(items);
    setDraggingIndex(null);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleReplaceImage = (index, file) => {
    const newImages = [...images];
    newImages[index] = {
      file,
      previewUrl: URL.createObjectURL(file),
    };
    setImages(newImages);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignContent="space-evenly"
      wrap="wrap"
    >
      {/* <Grid item xs={12} md={8}> */}
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          // alignItems: "center",
          gap: "8px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        {/* Upload Button */}
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          Upload Images
          <VisuallyHiddenInput
            type="file"
            multiple
            onChange={handleFileChange}
          />
        </Button>

        {/* Image List and Drag-and-Drop Context */}
        <List>
          <DragDropContext
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <Droppable droppableId="drop" type="group">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {/* Render Uploaded Images */}
                  {images.map((image, index) => (
                    <Draggable
                      key={index}
                      draggableId={`item-${index}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style, // else animation dissapear
                            background:
                              draggingIndex === index
                                ? "#f4f4f4"
                                : "transparent",
                          }}
                        >
                          {/* Individual Image Item */}
                          <ListItem
                            disableGutters
                            secondaryAction={
                              <Button onClick={() => handleRemoveImage(index)}>
                                Remove
                              </Button>
                            }
                          >
                            <ListItemAvatar>
                              <Avatar
                                variant="rounded"
                                src={image.previewUrl}
                                alt="Preview"
                              />
                            </ListItemAvatar>

                            {/* Replace Button */}
                            <Button
                              component="label"
                              variant="contained"
                              size="small"
                              startIcon={<CloudUploadIcon />}
                            >
                              Replace
                              <VisuallyHiddenInput
                                type="file"
                                onChange={(e) =>
                                  handleReplaceImage(index, e.target.files[0])
                                }
                              />
                            </Button>
                          </ListItem>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </List>
      </Grid>
    </Grid>
    // </Grid>
  );
};

export default FileUploadButton;
