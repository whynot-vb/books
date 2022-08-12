import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "./components/DataTable";
import HeaderBar from "./components/HeaderBar";
import PopupForm from "./components/PopupForm";
import SearchBooks from "./components/SearchBooks";
import AlertToDisplay from "./components/AlertToDisplay";

import { getAllBooks } from "./redux/actionCreators";

function App() {
  const book = useSelector((state) => state.books.book);
  const showAlert = useSelector((state) => state.books.showAlert);
  const title = useSelector((state) => state.books.title);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch, book, title]);
  return (
    <>
      <HeaderBar />
      {showAlert && <AlertToDisplay />}
      <PopupForm />
      <SearchBooks />
      <DataTable />
    </>
  );
}

export default App;
