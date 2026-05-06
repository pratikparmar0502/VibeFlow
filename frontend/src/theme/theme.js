import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // Left-side sidebar and accent colors
    primary: {
      main: "#1976d2", // A vibrant, social blue
      light: "#e3f2fd", // Very light background blue
    },
    // Used for active buttons/accent details
    secondary: {
      main: "#ff5722", // A modern orange/coral
    },
    // Background and text colors (Dashboard background)
    background: {
      default: "#f4f6f8", // Light grey background
      paper: "#ffffff", // Pure white for cards/boxes
    },
    text: {
      primary: "#263238", // Dark text
      secondary: "#757575", // Lighter text for mutual friends/dates
    },
  },
  typography: {
    fontFamily: "system-ui",
    h1: { fontWeight: 700, color: "#263238" },
    h2: { fontWeight: 700, color: "#263238" },
    h6: { fontWeight: 600, color: "#263238" },
    subtitle1: { color: "#757575" },
  },
  // Custom global overrides for specific system-uicomponents
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Keeps text capitalization as-is (e.g., 'Confirm' not 'CONFIRM')
          borderRadius: 8, // Modern rounded corners for buttons
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: "#1976d2",
          "&:hover": {
            backgroundColor: "#115293",
          },
        },
      },
    },
    // Used extensively for profile pictures and post images
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 48,
          height: 48,
        },
      },
    },
    // For sidebar links/mutual friends listings
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#263238",
        },
      },
    },
  },
});

export default theme;
