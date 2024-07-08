import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker, DateRangePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { zhCN } from "date-fns/locale";

function FlexibleDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [multipleDates, setMultipleDates] = useState([null]);
  const [isMultiple, setIsMultiple] = useState(false);
  const removeDatePicker = (index) => {
    const newMultipleDates = multipleDates.filter((_, i) => i !== index);
    setMultipleDates(newMultipleDates);
  };

  const handleMultipleDatesChange = (index, newDate) => {
    const newMultipleDates = [...multipleDates];
    newMultipleDates[index] = newDate;
    setMultipleDates(newMultipleDates);
  };

  const addDatePicker = () => {
    setMultipleDates([...multipleDates, null]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={zhCN}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <DatePicker
          required
          label="Select Single Date"
          value={selectedDate}
          onChange={(newDate) => {
            setSelectedDate(newDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isMultiple}
              onChange={(event) => setIsMultiple(event.target.checked)}
            />
          }
          label="Select Multiple Dates"
        />
        {isMultiple &&
          multipleDates.map((date, index) => (
            <Box
              fullWidth
              width="100%"
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 1,
              }}
            >
              <DatePicker
                label={`Date ${index + 1}`}
                value={date}
                onChange={(newDate) =>
                  handleMultipleDatesChange(index, newDate)
                }
                renderInput={(params) => <TextField {...params} />}
              />
              <IconButton onClick={() => removeDatePicker(index)}>
                <CloseIcon />
              </IconButton>
            </Box>
          ))}
        {isMultiple && (
          <Button onClick={addDatePicker}>Add Another Date</Button>
        )}
      </Box>
    </LocalizationProvider>
  );
}

export default FlexibleDatePicker;
