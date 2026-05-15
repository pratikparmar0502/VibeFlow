import { Box, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "#f4f7ff",
        background: "linear-gradient(180deg, #f0f4ff 0%, #f8fafc 100%)",
      }}
    >
      <Navbar />

      {/* Main Wrapper */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Centering everything
          flexGrow: 1,
          px: { xs: 1, md: 4 },
          py: 3,
        }}
      >
        {/* Constrained Container to prevent "Infinity Width" on big monitors */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            maxWidth: "1400px", // Total width of your app content
            gap: 3,
          }}
        >
          {/* FIXED SIDEBAR: It won't shrink or grow weirdly anymore */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: isDesktop ? "300px" : "80px", // Exactly the width you want
              flexShrink: 0, // Prevents sidebar from being squashed
              position: "sticky",
              top: "100px",
              height: "fit-content",
            }}
          >
            <Sidebar isMini={!isDesktop} />
          </Box>

          {/* DYNAMIC CONTENT AREA: This will fill the rest of the 1400px */}
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
