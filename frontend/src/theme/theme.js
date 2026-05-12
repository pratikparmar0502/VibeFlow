import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4f46e5",
    },
    background: {
      default: "#f8fafc",
      paper: "rgba(255, 255, 255, 0.8)",
    },
  },
  typography: {
    // Make sure to add the Inter font link in your index.html!
    fontFamily: '"Inter", "Plus Jakarta Sans", sans-serif',
    h6: {
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.03)",
          transition: "transform 0.2s ease-in-out",
        },
      },
    },
  },
});

export default theme;
