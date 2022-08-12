import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "./components/DataTable";
import HeaderBar from "./components/HeaderBar";
import PopupForm from "./components/PopupForm";
import SearchBooks from "./components/SearchBooks";

import { getAllBooks } from "./redux/actionCreators";

function App() {
  const book = useSelector((state) => state.books.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch, book]);
  return (
    <>
      <HeaderBar />
      <PopupForm />
      <SearchBooks />
      <DataTable />
    </>
  );
}

export default App;
