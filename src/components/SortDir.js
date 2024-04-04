import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function SortDir({ sortDirection, handleSortDirectionChange }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="sort-direction-label">Sort direction</InputLabel>
      <Select
        labelId="sort-direction-label"
        id="direction-label"
        label="Sort direction"
        value={sortDirection}
        onChange={handleSortDirectionChange}
      >
        <MenuItem value="asc">Ascending</MenuItem>
        <MenuItem value="desc">Descending</MenuItem>
      </Select>
    </FormControl>
  );
}
