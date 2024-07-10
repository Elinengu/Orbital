import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { zhCN } from "date-fns/locale";

function FlexibleDatePicker({ dates, setDates }) {
  const [isMultiple, setIsMultiple] = useState(false);

  const removeDatePicker = (index) => {
    const newDates = dates.filter((_, i) => i !== index);
    setDates(newDates);
  };

  const sortAndRemoveDuplicates = (dates) => {
    const uniqueDates = Array.from(
      new Set(dates.filter((date) => date !== null))
    ); // Remove nulls and duplicates(use Set)
    uniqueDates.sort((a, b) => new Date(a) - new Date(b)); // Sort dates
    return uniqueDates;
  };

  const handleDatesChange = (index, newDate) => {
    const newDates = [...dates];
    newDates[index] = newDate;
    setDates(sortAndRemoveDuplicates(newDates));
  };

  const addDatePicker = () => {
    setDates([...dates, null]);
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
          value={dates[0]}
          onChange={(newDate) => {
            handleDatesChange(0, newDate);
          }}
          slotProps={{ textField: { variant: "outlined" } }}
        />
        <FormControlLabel
          control={
            // <Checkbox
            //   checked={isMultiple}
            //   onChange={(event) => setIsMultiple(event.target.checked)}
            // />
            <Checkbox
              checked={isMultiple}
              onChange={(event) => {
                setIsMultiple(event.target.checked);
                if (!event.target.checked) {
                  setDates([dates[0]]); // Reset to single date
                } else {
                  setDates([...dates, null]); // Initialize second date picker
                }
              }}
            />
          }
          label="Select Multiple Dates"
        />
        {isMultiple &&
          dates.map((date, index) =>
            index !== 0 ? (
              <Box
                width="100%"
                key={index + 1}
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
                  onChange={(newDate) => handleDatesChange(index, newDate)}
                  slotProps={{ textField: { variant: "outlined" } }}
                />
                <IconButton onClick={() => removeDatePicker(index)}>
                  <CloseIcon />
                </IconButton>
              </Box>
            ) : null
          )}
        {isMultiple && (
          <Button onClick={addDatePicker}>Add Another Date</Button>
        )}
      </Box>
    </LocalizationProvider>
  );
}

export default FlexibleDatePicker;
