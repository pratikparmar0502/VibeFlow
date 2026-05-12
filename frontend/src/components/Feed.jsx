import {
  Box,
  Paper,
  TextField,
  Button,
  Avatar,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { Image, EmojiEmotions, VideoCall } from "@mui/icons-material";

const Feed = () => {
  // We will add logic here later to handle the post text!

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* 1. CREATE POST CARD */}
      <Paper sx={{ p: 2, borderRadius: 4 }} elevation={1}>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: "#7c3aed" }}>Y</Avatar>{" "}
          {/* "Y" for You/User */}
          <TextField
            fullWidth
            multiline
            rows={2}
            placeholder="What's on your mind?"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{ fontSize: "1.1rem" }}
          />
        </Stack>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            pt: 1,
            borderTop: "1px solid #eee",
          }}
        >
          <Stack direction="row" spacing={1}>
            <IconButton color="primary">
              <Image />
            </IconButton>
            <IconButton color="secondary">
              <VideoCall />
            </IconButton>
            <IconButton sx={{ color: "#ffb100" }}>
              <EmojiEmotions />
            </IconButton>
          </Stack>
          <Button
            variant="contained"
            sx={{
              borderRadius: 5,
              px: 4,
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            Post
          </Button>
        </Box>
      </Paper>

      {/* 2. FEED POSTS (Example of a single post) */}
      <Paper sx={{ p: 2, borderRadius: 4 }} elevation={1}>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Avatar src="https://i.pravatar.cc/150?u=1" />
          <Box>
            <Typography variant="subtitle1" fontWeight={700}>
              John Doe
            </Typography>
            <Typography variant="caption" color="text.secondary">
              2 hours ago
            </Typography>
          </Box>
        </Stack>

        <Typography variant="body1">
          Coding VibeFlow today! The Material UI grid system is so powerful. 🚀
          #ReactJS #WebDev
        </Typography>

        {/* You can add an image here later */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
          sx={{
            width: "100%",
            borderRadius: 3,
            mt: 2,
            maxHeight: "400px",
            objectFit: "cover",
          }}
        />
      </Paper>
    </Box>
  );
};

export default Feed;
