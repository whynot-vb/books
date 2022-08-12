import {
  CREATE_BOOK_OK,
  CREATE_BOOK_FAILED,
  GET_BOOKS_OK,
  GET_BOOKS_FAILED,
  EDIT_BOOK,
  SET_UPDATE_BOOK,
  PREPARE_TO_UPDATE,
  UPDATE_BOOK_OK,
  UPDATE_BOOK_FAILED,
  DISPLAY_ALERT,
  CLEAR_ALERT,
} from "../actionTypes";
import * as api from "../../api";

export const displayAlert = (alertType, alertText) => async (dispatch) => {
  dispatch({ type: DISPLAY_ALERT, payload: { alertType, alertText } });
  setTimeout(() => {
    dispatch({ type: CLEAR_ALERT });
  }, 3000);
};

export const getAllBooks = () => async (dispatch) => {
  try {
    const { data } = await api.getAllBooks();
    dispatch({
      type: GET_BOOKS_OK,
      payload: {
        books: data.books,
        totalBooks: data.totalBooks,
      },
    });
  } catch (error) {
    dispatch({ type: GET_BOOKS_FAILED });
  }
};

export const createBook = (book) => async (dispatch) => {
  try {
    const { data } = await api.createBook(book);
    await dispatch({
      type: CREATE_BOOK_OK,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: CREATE_BOOK_FAILED });
  }
};
