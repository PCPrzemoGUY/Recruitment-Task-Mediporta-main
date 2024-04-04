import React from "react";
import TextField from "@mui/material/TextField";

export default function RowsNumberInput({ value = "", onChange }) {
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    if (!isNaN(newValue)) {
      // Check if the input is a valid number
      onChange(newValue);
    }
  };

  return (
    <TextField
      sx={{ m: 1, minWidth: 30, maxWidth: 100 }}
      type="number"
      label="Table rows"
      value={value}
      onChange={handleInputChange}
      variant="outlined"
      inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: 1, max: 100 }}
    />
  );
}
