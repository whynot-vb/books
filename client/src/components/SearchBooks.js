import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBooks() {
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
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Books by Name"
        inputProps={{ "aria-label": "search books by name" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <AiOutlineSearch />
      </IconButton>
    </Paper>
  );
}
