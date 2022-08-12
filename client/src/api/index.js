import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export const createBook = (newBook) => API.post("/books", newBook);
export const getAllBooks = (title) => API.get(`/books?title=${title}`);

export const updateBook = (id, updatedBook) =>
  API.patch(`/books/${id}`, updatedBook);
