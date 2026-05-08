import { Container } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Container
        sx={{ mt: 5, mb: 3, textAlign: "center", color: "text.secondary" }}
      >
        <p>&copy; {new Date().getFullYear()} VibeFlow. All rights reserved.</p>
      </Container>
    </>
  );
};

export default Footer;
