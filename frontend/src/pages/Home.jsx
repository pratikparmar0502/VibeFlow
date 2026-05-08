import { Container } from "@mui/material";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Home = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <>
      <Container sx={{ mt: 10 }}>
        <h1>Welcome to VibeFlow {user.name}</h1>
        <p>
          Your ultimate social media experience. Connect, share, and vibe with
          friends!
        </p>
      </Container>
    </>
  );
};

export default Home;
