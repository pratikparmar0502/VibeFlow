import {
  Home,
  Compass,
  Bell,
  Mail,
  Bookmark,
  Users,
  TrendingUp,
  User,
  Settings,
  Plus,
  MoreHorizontal,
} from "lucide-react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Box,
  Button,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { text: "Home", icon: Home, path: "/" },
    { text: "Explore", icon: Compass, path: "/explore" },
    { text: "Notifications", icon: Bell, path: "/notifications" },
    { text: "Messages", icon: Mail, path: "/messages" },
    { text: "Bookmarks", icon: Bookmark, path: "/bookmarks" },
    { text: "Communities", icon: Users, path: "/communities" },
    { text: "Trending", icon: TrendingUp, path: "/trending" },
    { text: "Profile", icon: User, path: "/profile" },
    { text: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {/* MAIN NAVIGATION */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 5, // Slightly more rounded for premium feel
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          overflow: "hidden",
        }}
      >
        <List sx={{ p: 1.5 }}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  sx={{
                    py: 1.4,
                    px: 2,
                    borderRadius: 4,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&.Mui-selected, &:hover": {
                      bgcolor: isActive
                        ? "rgba(79, 70, 229, 0.1)"
                        : "rgba(0, 0, 0, 0.03)",
                      color: "primary.main",
                      fontWeight: "800",
                    },
                    "& .MuiListItemIcon-root": {
                      color: "primary.main",
                    },
                    "&::before": {
                      // Animated dot indicator
                      content: '""',
                      position: "absolute",
                      left: 0,
                      width: 4,
                      height: isActive ? "20px" : "0px",
                      bgcolor: "primary.main",
                      borderRadius: "0 4px 4px 0",
                      transition: "height 0.3s ease",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 38,
                      color: isActive ? "primary.main" : "text.secondary",
                      transition: "color 0.3s ease",
                    }}
                  >
                    <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: "0.95rem",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "primary.main" : "text.primary",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Paper>

      {/* CREATE POST - Enhanced with Shadow */}
      <Button
        variant="contained"
        fullWidth
        startIcon={<Plus size={20} />}
        sx={{
          py: 1.6,
          borderRadius: 5,
          fontWeight: 800,
          fontSize: "0.95rem",
          textTransform: "none",
          boxShadow: "0 8px 16px -4px rgba(79, 70, 229, 0.3)",
          "&:hover": {
            boxShadow: "0 12px 20px -4px rgba(79, 70, 229, 0.4)",
            transform: "translateY(-1px)",
          },
          transition: "all 0.2s ease",
        }}
      >
        New Post
      </Button>

      {/* PROFILE CARD - More Interactive */}
      <Paper
        elevation={0}
        sx={{
          p: 1.5,
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid",
          borderColor: "divider",
          cursor: "pointer",
          transition: "all 0.2s ease",
          "&:hover": {
            bgcolor: "rgba(0, 0, 0, 0.02)",
            borderColor: "primary.light",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Avatar
            src="/profile-pic.jpg"
            sx={{
              width: 42,
              height: 42,
              border: "2px solid #fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          />
          <Box sx={{ overflow: "hidden" }}>
            <Typography variant="subtitle2" fontWeight={800} noWrap>
              VibeFlow User
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              noWrap
              sx={{ display: "block" }}
            >
              @vibeflow_pro
            </Typography>
          </Box>
        </Box>
        <IconButton size="small">
          <MoreHorizontal size={18} color="#64748b" />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Sidebar;
