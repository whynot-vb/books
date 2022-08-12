import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch, useSelector } from "react-redux";

import { displayAlert, createBook, updateBook } from "../redux/actionCreators";

import "./components.css";

export default function PopupForm() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const isEditing = useSelector((state) => state.books.isEditing);
  const bookToEdit = useSelector((state) => state.books.bookToEdit);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [bookData, setBookData] = React.useState({
    title: "",
    issn: "",
    category: "",
    publishDate: null,
  });

  const clearValues = () => {
    setBookData({
      title: "",
      issn: "",
      category: "",
      publishDate: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !bookData.title ||
      !bookData.issn ||
      !bookData.category ||
      !bookData.publishDate
    ) {
      dispatch(
        displayAlert("error", "You must provide all the required values")
      );
    }
    if (!isEditing) {
      dispatch(createBook({ ...bookData }));
    } else if (isEditing) {
      dispatch(updateBook(bookToEdit?._id, { ...bookData }));
    }

    clearValues();
    setOpen(false);
  };

  React.useEffect(() => {
    if (isEditing && bookToEdit) {
      setBookData(bookToEdit);
    }
  }, [isEditing, bookToEdit]);

  return (
    <div className="popup-container">
      <Button
        className="popup-button"
        variant="contained"
        onClick={handleClickOpen}
        size="large"
      >
        {isEditing && bookToEdit ? "EDIT BOOK HERE" : "ADD NEW"}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {isEditing && bookToEdit ? "Update Book" : "New book"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Enter book details</DialogContentText>
          <Paper
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "90%" },
              width: "100%",
              marginTop: "20px",
              marginBottom: "20px",
              overflow: "hidden",
            }}
            noValidate
            autoComplete="on"
            onSubmit={handleSubmit}
          >
            <TextField
              autoFocus
              margin="dense"
              label="Title"
              type="text"
              name="title"
              value={bookData.title}
              fullWidth
              variant="standard"
              onChange={(event) => {
                setBookData({ ...bookData, title: event.target.value });
              }}
            />
            <TextField
              margin="dense"
              label="Issn"
              type="text"
              name="issn"
              value={bookData.issn}
              fullWidth
              variant="standard"
              onChange={(event) => {
                setBookData({ ...bookData, issn: event.target.value });
              }}
            />
            <div className="select-category">
              <InputLabel id="category">Category</InputLabel>
              <Select
                labelId="category"
                className="book-category"
                label="Book category"
                name="category"
                value={bookData.category}
                onChange={(event) => {
                  setBookData({ ...bookData, category: event.target.value });
                }}
              >
                <MenuItem value="scifi"> Sci Fi </MenuItem>
                <MenuItem value="criminal">Criminal</MenuItem>
                <MenuItem value="romance">Romance </MenuItem>
              </Select>
            </div>
            <div className="date-picker">
              <LocalizationProvider
                className="localization-provider"
                dateAdapter={AdapterDateFns}
                style={{ marginTop: "10px" }}
              >
                <DatePicker
                  label="Date when the book was published"
                  name="publishDate"
                  value={bookData.publishDate}
                  onChange={(newValue) =>
                    setBookData({ ...bookData, publishDate: newValue })
                  }
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <Button
              variant="contained"
              type="submit"
              style={{ marginLeft: "32%", marginTop: "10px" }}
            >
              {isEditing && bookToEdit ? "Update A Book" : "Add A Book"}
            </Button>
          </Paper>
        </DialogContent>
      </Dialog>
    </div>
  );
}
