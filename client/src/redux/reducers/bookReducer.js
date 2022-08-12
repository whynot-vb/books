import {
  CREATE_BOOK_OK,
  CREATE_BOOK_FAILED,
  GET_BOOKS_OK,
  GET_BOOKS_FAILED,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  EDIT_BOOK,
} from "../actionTypes";

const initialState = {
  showAlert: false,
  alertText: "",
  alertType: "",
  isUpdating: false,
  book: {},
  books: [],
  totalBooks: 0,
  isEditing: false,
  bookToEdit: {},
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_ALERT: {
      return {
        ...state,
        showAlert: true,
        alertType: action.payload.alertType,
        alertText: action.payload.alertText,
      };
    }
    case CLEAR_ALERT: {
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };
    }
    case CREATE_BOOK_OK: {
      return {
        ...state,
        book: action.payload.book,
      };
    }
    case CREATE_BOOK_FAILED: {
      return {
        ...state,
        showAlert: true,
        alertType: "error",
        alertText: "Failed to create book at this time. Try again later.",
      };
    }
    case GET_BOOKS_OK: {
      return {
        ...state,
        books: action.payload.books,
        totalBooks: action.payload.totalBooks,
      };
    }
    case GET_BOOKS_FAILED: {
      return {
        ...state,
        showAlert: true,
        alertType: "error",
        alertText: "Failed to get books at this time. Try again later.",
      };
    }
    case EDIT_BOOK: {
      return {
        ...state,
        isEditing: true,
        bookToEdit: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
