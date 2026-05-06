import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router";

const Navbar = () => {
  //   const navPages = [
  //     { label: "Home", path: "/Home" },
  //     { label: "Login", path: "/About Us" },
  //     { label: "Sign Up", path: "/Contact Us" },
  //   ];

  return (
    <AppBar position="sticky" color="primary" elevation={3}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          VibeFlow
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            to="/login"
            sx={{ fontWeight: "medium" }}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/signup"
            sx={{ fontWeight: "bold", borderRadius: "8px" }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
