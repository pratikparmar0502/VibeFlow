import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";
import { MoreHorizontal } from "lucide-react";

const RightSidebar = () => {
  const trends = [
    { tag: "#BuildInPublic", posts: "12.4K posts" },
    { tag: "#MondayMotivation", posts: "8,734 posts" },
    { tag: "#WebDevelopment", posts: "15.7K posts" },
    { tag: "#Productivity", posts: "6,128 posts" },
    { tag: "#DesignInspo", posts: "4,985 posts" },
  ];

  const suggestions = [
    {
      name: "Liam Johnson",
      handle: "@liamj",
      img: "https://i.pravatar.cc/150?u=4",
    },
    {
      name: "Ava Martinez",
      handle: "@avamartinez",
      img: "https://i.pravatar.cc/150?u=5",
    },
    {
      name: "Noah Williams",
      handle: "@noahwilliams",
      img: "https://i.pravatar.cc/150?u=6",
    },
  ];

  // Common Paper style for that "Circle" UI look
  const sectionStyle = {
    p: 2.5,
    borderRadius: 6, // Very rounded corners
    bgcolor: "background.paper",
    border: "1px solid",
    borderColor: "rgba(0, 0, 0, 0.05)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.03)", // Soft shadow
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* TRENDING SECTION */}
      <Paper elevation={0} sx={sectionStyle}>
        <Stack direction="row" alignItems="center" sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, fontSize: "1.1rem" }}>
            Trending for you
          </Typography>
        </Stack>

        <List disablePadding>
          {trends.map((item) => (
            <ListItem
              key={item.tag}
              disablePadding
              secondaryAction={
                <IconButton edge="end" size="small">
                  <MoreHorizontal size={16} color="gray" />
                </IconButton>
              }
              sx={{ mb: 2, "&:last-child": { mb: 0 } }}
            >
              <ListItemText
                primary={item.tag}
                secondary={item.posts}
                primaryTypographyProps={{
                  fontWeight: "800",
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                }}
                secondaryTypographyProps={{
                  fontSize: "0.8rem",
                  color: "text.secondary",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* WHO TO FOLLOW */}
      <Paper elevation={0} sx={sectionStyle}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800, fontSize: "1.1rem" }}>
            Who to follow
          </Typography>
        </Stack>

        <Stack spacing={2.5}>
          {suggestions.map((user) => (
            <Box
              key={user.handle}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Avatar src={user.img} sx={{ width: 44, height: 44 }} />
                <Box sx={{ overflow: "hidden" }}>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 800, noWrap: true }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ display: "block" }}
                  >
                    {user.handle}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: 5,
                  textTransform: "none",
                  fontWeight: 700,
                  px: 2,
                  borderColor: "divider",
                  color: "text.primary",
                }}
              >
                Follow
              </Button>
            </Box>
          ))}
        </Stack>

        <Button
          fullWidth
          sx={{
            mt: 3,
            textTransform: "none",
            fontWeight: 700,
            justifyContent: "flex-start",
            color: "primary.main",
          }}
        >
          Show more
        </Button>
      </Paper>
    </Box>
  );
};

export default RightSidebar;
