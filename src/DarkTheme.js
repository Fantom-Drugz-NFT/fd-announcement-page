import { createTheme } from "@mui/material";

const DarkTheme = createTheme({
  palette: {
    type: "dark",
    mode: "dark",
    primary: {
      main: "#ff008d",
    },
    secondary: {
      main: "#ffb400",
    },
    success: {
      main: "#19ff21",
    },
    error: {
      main: "#ff070b",
    },
    warning: {
      main: "#ffe800",
    },
    info: {
      main: "#00f5ff",
    },
    background: {
      default: "#0e0e0e",
      paper: "#191919",
    },
  },
  props: {
    MuiButton: {
      size: "small",
    },
    MuiButtonGroup: {
      size: "small",
    },
    MuiCheckbox: {
      size: "small",
    },
    MuiFab: {
      size: "small",
    },
    MuiFormControl: {
      margin: "dense",
      size: "small",
    },
    MuiFormHelperText: {
      margin: "dense",
    },
    MuiIconButton: {
      size: "small",
    },
    MuiInputBase: {
      margin: "dense",
    },
    MuiInputLabel: {
      margin: "dense",
    },
    MuiRadio: {
      size: "small",
    },
    MuiSwitch: {
      size: "small",
    },
    MuiTextField: {
      margin: "dense",
      size: "small",
    },
  },
  overrides: {
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
          transform: "translateX(16px)",
          color: "#fff",
          "& + $track": {
            opacity: 1,
            border: "none",
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: "1px solid #bdbdbd",
        backgroundColor: "#fafafa",
        opacity: 1,
        transition:
          "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    },
  },
  spacing: 8,
  typography: {
    h1: {
      fontSize: "6.6rem",
      fontFamily: "Rajdhani",
      fontWeight: 900,
    },
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    fontFamily: "Rajdhani",
    h2: {
      fontWeight: 900,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default DarkTheme;
