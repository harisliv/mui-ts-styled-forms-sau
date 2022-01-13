import { createTheme, ThemeProvider } from "@mui/material";
import * as React from "react";
import BasicGrid from "./components/BasicGrid";
import MaterialForm from "./components/MaterialForm";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DE1515",
    },
  },
  typography: {
    fontFamily: "Inter",
    fontWeightLight: 400,
    fontWeightRegular: 700,
    fontWeightMedium: 900,
  },
  spacing: 18,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BasicGrid>
        <MaterialForm />
      </BasicGrid>
    </ThemeProvider>
  );
}

export default App;
