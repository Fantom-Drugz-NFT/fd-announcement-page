import { useRef } from "react";
import { Grid, CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// STATIC IMPORTS
import DarkTheme from "../src/DarkTheme";
import "./styles/style.css";

// COMPONENTS
import Home from "./components/Home";
import Footer from "./components/Footer";
import Community from "./components/Community";

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />

      <Home />
      <Community />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
