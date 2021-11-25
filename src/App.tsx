import React from "react";
import SignIn from "./components/signin/SignIn";
import { CssBaseline } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const App = () => (
  <>
    <CssBaseline />
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SignIn />
    </LocalizationProvider>
  </>
);

export default App;
