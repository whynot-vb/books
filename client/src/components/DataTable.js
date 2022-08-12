import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

import { EDIT_BOOK } from "../redux/actionTypes";
import { displayAlert } from "../redux/actionCreators";

const renderDetailsButton = (cellValues) => {
  return (
    <strong>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={(_event) => {
          console.log(cellValues.row);
        }}
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
    sortable: false,
    width: 130,
    renderCell: renderDetailsButton,
    disableClickEventBubbling: true,
  },
];

export default function DataTable() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const renderDetailsButton = (cellValues) => {
    return (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={(_event) => {
            console.log(cellValues.row);
            dispatch({ type: EDIT_BOOK, payload: cellValues.row });
            dispatch(
              displayAlert("success", "Click Edit Book button to update a book")
            );
          }}
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
      sortable: false,
      width: 130,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true,
    },
  ];
  const rows = books.map((book) => {
    return {
      ...book,
      id: book._id,
    };
  });

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
