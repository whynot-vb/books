import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";

import { EDIT_BOOK } from "../redux/actionTypes";
import { displayAlert } from "../redux/actionCreators";

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
    { field: "title", headerName: "Title", width: 180 },
    { field: "publishDate", headerName: "Publish Date", width: 180 },
    { field: "category", headerName: "Category", width: 180 },
    {
      field: "issn",
      headerName: "ISSN",
      description: "This column is a issn id of the book and is not sortable",
      sortable: false,
      width: 180,
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
  const rows = books?.map((book) => {
    return {
      ...book,
      id: book?._id,
      publishDate: new Date(book?.publishDate).toLocaleDateString(),
    };
  });

  return (
    <div style={{ height: 540, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[10]}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.dark",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
      />
    </div>
  );
}
