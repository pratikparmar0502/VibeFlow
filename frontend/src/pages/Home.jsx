import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <Box
      component="main"
      sx={{
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
      }}
    >
      {/* MAIN LAYOUT WRAPPER */}
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          maxWidth: "1400px",
          mx: "auto",
          px: { xs: 1, sm: 2, md: 3 },
          gap: 3,
        }}
      >
        {/* LEFT SIDEBAR */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            width: 280,
            height: "100vh",
            overflowY: "auto",
            position: "sticky",
            top: 0,
            py: 2,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Sidebar />
        </Box>

        {/* FEED (CENTER) */}
        <Box
          sx={{
            flex: 1,
            maxWidth: 700,
            width: "100%",
            height: "100vh",
            overflowY: "auto",
            py: 2,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <Feed />
        </Box>

        {/* RIGHT SIDEBAR */}
        <Box
          sx={{
            display: { xs: "none", lg: "block" },
            width: 300,
            height: "100vh",
            overflowY: "auto",
            py: 2,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <RightSidebar />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
