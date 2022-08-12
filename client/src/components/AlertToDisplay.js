import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function AlertToDisplay() {
  //alertType
  const alertType = useSelector((state) => state.books.alertType);
  const alertText = useSelector((state) => state.books.alertText);
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={alertType}>{alertText}</Alert>
    </Stack>
  );
}
