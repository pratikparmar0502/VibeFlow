import {
  Box,
  Typography,
  Grid,
  OutlinedInput,
  InputAdornment,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Search, TrendingUp } from "lucide-react";
import Feed from "../components/Feed";

const Explore = () => {
  const theme = useTheme();
  // Check screen sizes for fine-tuned responsiveness
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const trendingTopics = [
    {
      id: 1,
      category: "Technology",
      title: "The Future of MERN Stack in 2026",
      posts: "12.5K",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    },
    {
      id: 2,
      category: "Fitness",
      title: "Top 5 Superset Workouts for Muscle Gain",
      posts: "8.2K",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
    {
      id: 3,
      category: "Surat IT",
      title: "New Tech Park Opening in Adajan",
      posts: "5.1K",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
    {
      id: 4,
      category: "Programming",
      title: "Why Material UI is still king in 2026",
      posts: "15K",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
    {
      id: 5,
      category: "Technology",
      title: "The Future of MERN Stack in 2026",
      posts: "12.5K",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    },
    {
      id: 6,
      category: "Fitness",
      title: "Top 5 Superset Workouts for Muscle Gain",
      posts: "8.2K",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    },
  ];

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: { xs: 3, md: 5 } }}
    >
      {/* 1. SEARCH BAR - Added focus effects */}
      <Box sx={{ px: 2 }}>
        <OutlinedInput
          fullWidth
          placeholder="Search people, posts, or tags..."
          startAdornment={
            <InputAdornment position="start">
              <Search size={22} color={theme.palette.primary.main} />
            </InputAdornment>
          }
          sx={{
            bgcolor: "white",
            borderRadius: 4,
            transition: "all 0.3s ease",
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
            "&:hover": { boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.08)" },
            "&.Mui-focused": {
              boxShadow: "0px 8px 30px rgba(99, 102, 241, 0.15)",
              bgcolor: "#fff",
            },
            height: { xs: "55px", md: "65px" },
          }}
        />
      </Box>

      {/* 2. TRENDING SECTION */}
      <Box sx={{ px: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 3,
          }}
        >
          <TrendingUp size={28} color={theme.palette.primary.main} />
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ fontWeight: 800, letterSpacing: "-0.5px" }}
          >
            Trending for you
          </Typography>
        </Box>

        <Grid
          container
          spacing={isMobile ? 2 : 3}
          sx={{ justifyContent: "center" }}
        >
          {trendingTopics.map((topic) => (
            <Grid item xs={12} md={6} lg={6} key={topic.id}>
              <Card
                sx={{
                  borderRadius: 5,
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                {/* CardActionArea gives the nice "ripple" effect when clicked */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={topic.image}
                    alt={topic.title}
                    sx={{
                      height: { xs: 200, md: 220 }, // Fixed height
                      width: "100%",
                      objectFit: "cover", // This crops the image to fill the box perfectly
                      transition: "transform 0.5s ease",
                      "&:hover": { transform: "scale(1.08)" },
                    }}
                  />

                  {/* Content Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                      color: "white",
                      p: { xs: 2, md: 3 },
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                    }}
                  >
                    <Box>
                      <Chip
                        label={topic.category}
                        size="small"
                        sx={{
                          bgcolor: "primary.main",
                          color: "white",
                          fontWeight: 700,
                          fontSize: "0.7rem",
                          mb: 1,
                          height: "24px",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        lineHeight: 1.2,
                        fontSize: { xs: "1rem", md: "1.25rem" },
                      }}
                    >
                      {topic.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ opacity: 0.9, fontWeight: 500 }}
                    >
                      {topic.posts} interactions this week
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 6 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
            Recent Discoveries
          </Typography>

          <Feed isExplorePage={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default Explore;
