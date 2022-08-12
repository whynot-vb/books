import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import { CHANGE_TITLE } from "../redux/actionTypes";

export default function SearchBooks() {
  const dispatch = useDispatch();
  const titl = useSelector((state) => state.books.title);
  const [filterData, setFilterData] = React.useState({
    title: "",
  });

  const handleChange = (e) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title } = filterData;
    dispatch({
      type: CHANGE_TITLE,
      payload: {
        title,
      },
    });
    setFilterData({ title: "" });
  };
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 300,
        margin: "20px auto",
      }}
      onSubmit={handleSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={
          titl.length === 0
            ? "Search Books by Name"
            : "Click Icon To Reset Search Filters"
        }
        inputProps={{ "aria-label": "search books by name" }}
        name="title"
        value={filterData.title}
        onChange={handleChange}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <AiOutlineSearch />
      </IconButton>
    </Paper>
  );
}
