import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button,
  Avatar,
} from "@mui/material";

const RightSidebar = () => {
  const trends = [
    "#ReactJS",
    "#FullStack",
    "#SuratIT",
    "#CircleApp",
    "#WebDev",
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* TRENDING SECTION */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontSize: "1rem" }}>
          Trends for you
        </Typography>
        <List disablePadding>
          {trends.map((trend) => (
            <ListItem key={trend} disablePadding sx={{ mb: 1.5 }}>
              <ListItemText
                primary={trend}
                secondary="1.2k Posts"
                primaryTypographyProps={{
                  fontWeight: 700,
                  color: "primary.main",
                  cursor: "pointer",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* WHO TO FOLLOW */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, fontSize: "1rem" }}>
          Who to follow
        </Typography>
        {[1, 2].map((user) => (
          <Box
            key={user}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Avatar sx={{ width: 32, height: 32 }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  User {user}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  @user_{user}
                </Typography>
              </Box>
            </Box>
            <Button size="small" variant="outlined" sx={{ borderRadius: 5 }}>
              Follow
            </Button>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default RightSidebar;
