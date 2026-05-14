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
} from "lucide-react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isMini = false, onMenuClick }) => {
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
      <List sx={{ p: 0 }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={() => onMenuClick?.()}
                sx={{
                  py: 1.5,
                  px: isMini ? 0 : 2,
                  justifyContent: isMini ? "center" : "flex-start",
                  borderRadius: 3,
                  color: isActive ? "primary.main" : "text.secondary",
                  bgcolor: isActive ? "rgba(79, 70, 229, 0.08)" : "transparent",
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: isMini ? 0 : 40, color: "inherit" }}
                >
                  <Icon size={22} />
                </ListItemIcon>
                {!isMini && (
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: isActive ? 700 : 500,
                    }}
                  />
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Button
        variant="contained"
        fullWidth
        startIcon={!isMini && <Plus size={20} />}
        sx={{
          borderRadius: 3,
          py: 1.5,
          fontWeight: 700,
          textTransform: "none",
        }}
      >
        {isMini ? <Plus size={24} /> : "New Post"}
      </Button>
    </Box>
  );
};

export default Sidebar;
