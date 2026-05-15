import { Box } from "@mui/material";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

const Home = () => {
  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      {/* FEED: Takes up the left/center space */}
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { lg: "700px", xl: "800px" }, // Limits feed width for readability
          mx: "auto", // Centers the feed in its available space
        }}
      >
        <Feed />
      </Box>

      {/* RIGHT SIDEBAR: Fills the right space on Desktop */}
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          width: "350px", // Fixed width to match the left sidebar feel
          flexShrink: 0,
          position: "sticky",
          top: "100px",
          height: "fit-content",
        }}
      >
        <RightSidebar />
      </Box>
    </Box>
  );
};

export default Home;
