import React, { useContext, useState } from "react";
import { TagsContext } from "./TagsContext";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import RowsNumberInput from "./RowsNumberInput";
import SortField from "./SortField";
import SortDir from "./SortDir";

const TagsList = () => {
  const { tags, loading, error } = useContext(TagsContext);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortField, setSortField] = useState("count");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleItemsPerPageChange = (newValue) => {
    setItemsPerPage(newValue);
  };

  const handleSortFieldChange = (event) => {
    setSortField(event.target.value);
  };

  const handleSortDirectionChange = (event) => {
    setSortDirection(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const sortedTags = tags.slice().sort((a, b) => {
    let comparison = 0;
    if (sortField === "name") {
      comparison = a.name.localeCompare(b.name);
    } else if (sortField === "count") {
      comparison = a.count - b.count;
    }
    return sortDirection === "asc" ? comparison : -comparison;
  });

  return (
    <Container maxWidth="sm">
      <div id="table-attributes">
        <RowsNumberInput
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        />
        <SortField
          handleSortFieldChange={handleSortFieldChange}
          sortField={sortField}
        />

        <SortDir
          sortDirection={sortDirection}
          handleSortDirectionChange={handleSortDirectionChange}
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tag name</TableCell>
                <TableCell>Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedTags.slice(0, itemsPerPage).map((tag) => (
                <TableRow key={tag.name}>
                  <TableCell>{tag.name}</TableCell>
                  <TableCell>{tag.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
};

export default TagsList;
