import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import image from "/src/assets/Image PNG/Drone surveillance-cuate 1.png";
import "/src/css/banner.css";

const BlogBanner_2 = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "100%",
        paddingBottom: 1,
      }}
    >
      <Container
        sx={{
          maxWidth: {
            sm: theme.values.tablet,
            md: theme.values.laptop,
            lg: theme.values.desktop,
            xl: "xl",
          },
          position: "relative",
          padding: "0px",
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.sectionbackgroundColor,
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            maxWidth: "100%",
            border: "1px solid #000000",
            boxShadow:
              "5px 5px 0px rgba(0, 71, 174,1), -1px 0px 0px rgba(0, 71, 174,1)",
            position: "relative",
          }}
        >
          {/* Left Image Section */}
          <Box
            sx={{
              flex: "1 1 auto",
              display: "flex",
              justifyContent: "center", // Center image horizontally
              alignItems: "center", // Center image vertically
              width: "100%", // Ensure it takes full width in the container
              // maxHeight: isLargeScreen ? "400px" : "300px", // Adjust based on screen size
              overflow: "hidden", // Prevent the image from overflowing the container
            }}
          >
            <Box
              component="img"
              src={image}
              alt="Banner"
              sx={{
                objectFit: "cover", // Ensure the image scales appropriately
                width: {
                  lg: "100%",
                  md: "450px",
                  xs: "100%",
                },
                height: "100%",
              }}
            />
          </Box>

          {/* Right Content Section */}
          <Box
            sx={{
              flex: "1 1 auto",
              textAlign: "left",
              padding: { xs: "20px", lg: "0 20px" }, // Adjust padding for mobile
              width: "100%", // Ensure it takes full width
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                fontSize: isSmallScreen
                  ? "1.5rem"
                  : isLargeScreen
                  ? "2.5rem"
                  : "2rem",
                marginBottom: 2,
                color: "#0047AE",
              }}
            >
              Namo Didi: Inspiring Journey of a Woman Leader
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: isSmallScreen ? "1rem" : "1.25rem",
                lineHeight: 1.6,
                color: "#333",
                marginBottom: 3,
              }}
            >
              Discover the incredible story of Namo Didi, a woman whose journey
              inspires resilience, empowerment, and leadership. From humble
              beginnings to making a remarkable impact on her community, she is
              a beacon of hope and strength. In this video, hear her share her
              challenges, triumphs, and the values that drive her.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontSize: "14px",
                  backgroundColor: "#0047AE",
                  padding: "10px 30px",
                  textTransform: "none",
                  borderRadius: "0px",
                  fontWeight: 700,
                  border: "2px solid #5C76DD",
                  marginBottom: "10px",
                }}
                onClick={() =>
                  window.open(
                    "https://youtu.be/AACpY8apGec?si=8d9h-v_v_4fN3Oi5",
                    "_blank"
                  )
                }
              >
                Know More
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogBanner_2;
