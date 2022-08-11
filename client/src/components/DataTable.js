import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

const renderDetailsButton = (params) => {
  return (
    <strong>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={() => {}}
      >
        Edit Book
      </Button>
    </strong>
  );
};
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 130 },
  { field: "publishDate", headerName: "Publish Date", width: 130 },
  { field: "category", headerName: "Category", width: 130 },
  {
    field: "issn",
    headerName: "ISSN",
    description: "This column is a issn id of the book and is not sortable",
    sortable: false,
    width: 130,
  },
  {
    field: "editBook",
    headerName: "Edit Book",
    width: 130,
    renderCell: renderDetailsButton,
    disableClickEventBubbling: true,
  },
];

const rows = [
  { id: 1, title: "Snow", publishDate: "Jon", issn: 32, category: "scifi" },
  { id: 2, title: "Snow", publishDate: "Jon", issn: 31, category: "scifi" },
  { id: 3, title: "Snow", publishDate: "Jon", issn: 39, category: "scifi" },
  { id: 4, title: "Snow", publishDate: "Jon", issn: 54, category: "scifi" },
  { id: 5, title: "Snow", publishDate: "Jon", issn: 11, category: "scifi" },
  { id: 6, title: "Snow", publishDate: "Jon", issn: 56, category: "scifi" },
  { id: 7, title: "Snow", publishDate: "Jon", issn: 46, category: "scifi" },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}
