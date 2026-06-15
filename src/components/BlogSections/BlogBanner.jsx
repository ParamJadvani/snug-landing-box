import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import image from "/src/assets/Image PNG/Group.png";
import cloud from "/src/assets/Image PNG/freepik--Cloud--inject-73.png";

const BlogBanner = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ width: "100%", overflowX: "hidden", backgroundColor: "#80B3ED" }}
    >
      <Container
        sx={{
          maxWidth: {
            sm: theme.values.tablet,
            md: theme.values.laptop,
            lg: theme.values.desktop,
            xl: "xl",
            position: "relative",
          },
        }}
      >
        <Box
          component="img"
          src={cloud}
          sx={{
            position: "absolute",
            left: {
              lg: "-22%",
              xl: "-18%",
              md: "-20%",
              sm: "-40%",
              xs: "-20%",
            },
            width: {
              sm: "auto",
              xs: "100px",
            },
            top: {
              xs: "20%",
            },
          }}
        />
        <Box
          component="img"
          src={cloud}
          sx={{
            position: "absolute",
            right: {
              lg: "-20%",
              md: "-22%",
              sm: "-40%",
              xs: "-30%",
            },
            width: {
              sm: "auto",
              xs: "200px",
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={image}
            sx={{
              width: {
                xs: "80%", // For small screens, make the image 80% of the container
                sm: "90%", // For larger tablets, make it 90% of the container
                md: "auto",
              },
              objectFit: "contain", // Ensures the image maintains its aspect ratio
            }}
          />
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              color: theme.sectionbackgroundColor,
              fontWeight: 700,
              position: "absolute",
              top: "48%",
              fontSize: {
                xs: "5rem", // Smallest screen size
                sm: "7rem", // For tablet and up
                md: "6rem", // For larger screens like laptops
                lg: "7rem", // For desktops and up
                xl: "8rem", // For extra-large screens
              },
              textAlign: "center", // Ensures the text is centered on all screen sizes
              width: "100%",
            }}
          >
            Blogs
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogBanner;
