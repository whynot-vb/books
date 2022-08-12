import {
  CREATE_BOOK_OK,
  CREATE_BOOK_FAILED,
  GET_BOOKS_OK,
  GET_BOOKS_FAILED,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  EDIT_BOOK,
  UPDATE_BOOK_OK,
  CHANGE_TITLE,
  CLEAR_TITLE,
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
  title: "",
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
    case UPDATE_BOOK_OK: {
      return {
        ...state,
        books: state.books.map((book) =>
          book._id === action.payload._id ? action.payload : book
        ),
        isEditing: false,
        bookToEdit: {},
      };
    }
    case CHANGE_TITLE: {
      return {
        ...state,
        title: action.payload.title,
      };
    }
    case CLEAR_TITLE: {
      return {
        ...state,
        title: "",
      };
    }
    default: {
      return state;
    }
  }
}
