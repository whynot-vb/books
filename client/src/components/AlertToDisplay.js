import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";

export default function AlertToDisplay() {
  //alertType
  let alertType;
  let alertText;
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity={alertType}>{alertText}</Alert>
    </Stack>
  );
}
