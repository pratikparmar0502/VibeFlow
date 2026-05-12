import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link, useLocation } from "react-router";
import {
  Home,
  People,
  VideoCall,
  Search,
  Menu,
  Psychology,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const { user, logout } = useContext(AuthContext);

  const menuItems = [
    { label: "Home", icon: <Home />, path: "/" },
    { label: "Friends", icon: <People />, path: "/friends" },
    { label: "Videos", icon: <VideoCall />, path: "/videos" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        // --- GLASSMORPHISM EFFECT ---
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        color: "text.primary",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        boxShadow: "none",
        py: "7px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 1, md: 3 },
        }}
      >
        {/* LEFT: Logo & Search */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flex: 1 }}>
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
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                display: "flex",
              }}
            >
              VibeFlow
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#f3f4f6",
              borderRadius: "12px",
              px: 2,
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              width: "280px",
              height: "40px",
            }}
          >
            <Search sx={{ color: "gray", fontSize: 20 }} />
            <InputBase
              placeholder="Search VibeFlow..."
              sx={{ ml: 1, flex: 1, fontSize: "14px" }}
            />
          </Box>
        </Box>

        {/* CENTER: Navigation (Desktop) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {menuItems.map((item) => (
            <IconButton
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                color:
                  location.pathname === item.path ? "primary.main" : "inherit",
                backgroundColor:
                  location.pathname === item.path
                    ? "rgba(25, 118, 210, 0.08)"
                    : "transparent",
                borderRadius: "12px",
                transition: "0.3s",
                "&:hover": { backgroundColor: "#f0f2f5" },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>

        {/* RIGHT: Auth & Mobile Menu */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 1.5,
            flex: 1,
          }}
        >
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1.5 }}>
            {!user ? (
              <>
                <Button
                  component={Link}
                  to="/login"
                  variant="outlined"
                  sx={{
                    fontWeight: 600,
                    borderRadius: "10px",
                  }}
                >
                  Log In
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  sx={{
                    borderRadius: "10px",
                    textTransform: "none",
                    boxShadow: "none",
                  }}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                <Typography sx={{ alignSelf: "center", fontWeight: 600 }}>
                  Hi, {user.name}
                </Typography>
                <Button
                  onClick={logout}
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: "10px", textTransform: "none" }}
                >
                  Logout
                </Button>
              </>
            )}
          </Box>

          <IconButton
            onClick={() => setIsDrawerOpen(true)}
            sx={{ display: { md: "none" } }}
          >
            <Menu />
          </IconButton>
        </Box>
      </Toolbar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 200, p: 2 }}>
          <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <Psychology color="primary" />
            <Typography variant="h6" sx={{ fontWeight: "700" }}>
              VibeFlow
            </Typography>
          </Box>
          <Divider />
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <ListItemIcon
                    sx={{
                      color:
                        location.pathname === item.path
                          ? "primary.main"
                          : "inherit",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: location.pathname === item.path ? 700 : 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            {!user ? (
              <>
                <Button
                  fullWidth
                  variant="outlined"
                  component={Link}
                  to="/login"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Log In
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  component={Link}
                  to="/signup"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                <Button
                  fullWidth
                  variant="contained"
                  component={Link}
                  to="/login"
                  onClick={logout}
                >
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
