import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Menu, Psychology } from "@mui/icons-material";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "white",
        color: "text.primary",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          minHeight: { xs: "60px", md: "70px" },
        }}
      >
        {/* LOGO */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "primary.main",
            gap: 1,
          }}
        >
          <Psychology sx={{ fontSize: 35 }} />
          <Typography variant="h6" fontWeight={800}>
            VibeFlow
          </Typography>
        </Box>

        {/* DESKTOP AUTH */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {!user ? (
            <>
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                sx={{ borderRadius: 2 }}
              >
                Log In
              </Button>
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                sx={{ borderRadius: 2 }}
              >
                Sign Up
              </Button>
            </>
          ) : (
            <Button onClick={logout} color="error">
              Logout
            </Button>
          )}
        </Box>

        {/* MOBILE MENU ICON */}
        <IconButton
          onClick={() => setIsDrawerOpen(true)}
          sx={{ display: { md: "none" } }}
        >
          <Menu />
        </IconButton>
      </Toolbar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        sx={{ backgroundColor: "background.paper" }}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 280,
            p: 3,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Psychology color="primary" sx={{ fontSize: 35 }} />
            <Typography variant="h6" fontWeight={800} color="primary">
              VibeFlow
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />

          <Box sx={{ flexGrow: 1 }}>
            <Sidebar onMenuClick={() => setIsDrawerOpen(false)} />
          </Box>

          {/* MOBILE AUTH (Always visible at the bottom of drawer if not logged in) */}
          {!user && (
            <Box
              sx={{ pt: 2, display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Divider sx={{ mb: 2 }} />
              <Button
                fullWidth
                variant="outlined"
                component={Link}
                to="/login"
                sx={{ borderRadius: 2, py: 1 }}
                onClick={() => setIsDrawerOpen(false)}
              >
                Log In
              </Button>
              <Button
                fullWidth
                variant="contained"
                component={Link}
                to="/signup"
                sx={{ borderRadius: 2, py: 1 }}
                onClick={() => setIsDrawerOpen(false)}
              >
                Sign Up
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
