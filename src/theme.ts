import { createTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import i18n from "./i18n";

const theme = createTheme({
  direction: i18n.dir(),
  palette: {
    primary: {
      main: "#1F7BF4",
      light: alpha("#1F7BF4", 0.5),
      dark: alpha("#1F7BF4", 0.7),
    },
    background: {
      default: "#F3F6F9",
    },
  },
  shape: {
    borderRadius: 11,
  },
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#1F7BF4",
          color: "#FFFFFF",
          borderRadius: "11px",
          "& .MuiTableCell-root": {
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          borderRadius: "11px",
          "&:nth-of-type(odd)": {
            backgroundColor: alpha("#1F7BF4", 0.1),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha("#77747438", 0.1),
          borderRadius: "11px",
          "& .MuiInputLabel-root": {
            display: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
        },
      },
    },
  },
});

export default theme;
