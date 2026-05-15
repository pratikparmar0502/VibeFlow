import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: "auto", // Pushes footer to bottom of page
        borderTop: "1px solid",
        borderColor: "rgba(0, 0, 0, 0.06)",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)", // Modern frosted glass effect
      }}
    >
      <Container maxWidth="lg">
        {/* Copyright Section */}
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          © {currentYear}
          <Box component="span" sx={{ fontWeight: 800, color: "primary.main" }}>
            VibeFlow
          </Box>
          • Built in Surat for the developer community
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
