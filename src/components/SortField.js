import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function SortField({ sortField, handleSortFieldChange }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="sort-field-label">Sort field</InputLabel>
      <Select
        labelId="sort-field-label"
        id="field-label"
        label="Sort field"
        value={sortField}
        onChange={handleSortFieldChange}
      >
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="count">Count</MenuItem>
      </Select>
    </FormControl>
  );
}
