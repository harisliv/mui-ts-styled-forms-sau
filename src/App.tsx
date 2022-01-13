import { createTheme, ThemeProvider } from "@mui/material";
import * as React from "react";
import BasicGrid from "./components/BasicGrid";
import MaterialForm from "./components/MaterialForm";
import { CssBaseline, GlobalStyles } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#DE1515",
    },
    neutral: {
      main: '#EDEDED',
      contrastText: '#000000',
    },
    background: {
      default: "#000",
    },
  },
  typography: {
    fontFamily: ["Inter", "Playfair Display"].join(','),
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
  },
  spacing: 18,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#f9f9f9" },
        }}
      />
      <BasicGrid>
        <MaterialForm />
      </BasicGrid>
    </ThemeProvider>
  );
}

export default App;
