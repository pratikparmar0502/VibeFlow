import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f5f3ff 0%, #f9fafb 100%)",
      }}
    >
      <Container maxWidth="xl" sx={{ maxWidth: "1450px !important" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { md: 2, lg: 4 },
            pt: { xs: 2, md: 3 },
          }}
        >
          {/* LEFT SIDEBAR: Adaptive Width */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: { md: 80, lg: 280 }, // Mini on Tablet, Full on Desktop
              position: "sticky",
              top: 24,
              transition: "width 0.3s ease", // Smooth transition
            }}
          >
            <Sidebar isMini={!useMediaQuery(theme.breakpoints.up("lg"))} />
          </Box>

          {/* FEED */}
          <Box sx={{ flex: 1, maxWidth: 700, minWidth: 0 }}>
            <Feed />
          </Box>

          {/* RIGHT SIDEBAR */}
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              width: 320,
              position: "sticky",
              top: 24,
            }}
          >
            <RightSidebar />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
