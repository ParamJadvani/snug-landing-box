import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";

const BlogGrid = ({ blogData = [] }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden",
        marginTop: 10,
        paddingBottom: 1,
      }}
    >
      <Container
        sx={{
          maxWidth: {
            sm: theme.values.tablet,
            md: theme.values.laptop,
            lg: theme.values.desktop - 35,
            xl: 1500,
          },
          display: "flex",
          flexDirection: {
            xs: "column", // Stack vertically on small screens
            md: "row", // Row on medium screens and up
            lg: "row", // Row on large screens
          },
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 2, // Adds spacing between the cards
        }}
      >
        {blogData.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "100%",
              backgroundColor: "transparent",
              border: "1px solid black",
              boxShadow:
                "5px 5px 0px rgba(0, 71, 174,1), -1px 0px 0px rgba(0, 71, 174,1)",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
              height: {
                xs: "auto", // Flexible height on small screens
                md: "450px", // Fixed height on medium screens
                xl: "600px", // Larger height on xl screens
              },
              borderRadius: "1px solid black",
            }}
          >
            {/* Image Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", // Centering the image
                alignItems: "center",
                width: "100%",
                height: {
                  xs: "100%", // Default height for image
                  xl: "100%", // Increase image height on xl screens
                },
                overflow: "hidden",
                objectFit: "cover",
              }}
            >
              <CardMedia
                component="img"
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                sx={{
                  objectFit: "contain", // Ensures the image covers the area
                  width: "100%", // Fill the width of the container
                  height: "100%", // Fill the height of the container
                  imageRendering: "auto", // Avoids blurry images
                }}
              />
            </Box>

            {/* Title and Description Section */}
            <CardContent
              sx={{
                flexGrow: { xs: 1, xl: undefined },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                padding: 2,
                height: "100%", // Ensure the height is flexible
              }}
            >
              {/* Title */}
              <Typography
                component="div"
                sx={{
                  fontWeight: 800,
                  color: theme.headerTextColor,
                  textAlign: "start",
                  fontSize: {
                    xs: "0.85rem", // Responsive font sizes
                    sm: "1rem",
                    md: "1.1rem",
                    lg: "1.2rem",
                    xl: "1.6rem", // Larger font size on xl screens
                  },
                  paddingBottom: 1,
                  marginBottom: 1, // Space below the title
                }}
              >
                {item.title}
              </Typography>

              {/* Description */}
              <Box
                sx={{
                  flexGrow: 1, // Makes this section flexible
                  overflow: "hidden",
                  marginBottom: 1, // Space below the description
                }}
              >
                <Typography
                  variant="body2"
                  color="#000000"
                  sx={{
                    textAlign: "start",
                    marginTop: 1,
                    fontWeight: 500,
                    fontSize: {
                      xs: "0.95rem",
                      sm: "1rem",
                      lg: "1.1rem",
                      xl: "1.42rem", // Larger font size on xl screens
                    },
                  }}
                >
                  {item.description}
                </Typography>
              </Box>

              {/* Button Section */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column", // Stack vertically to ensure alignment
                  alignItems: "flex-end", // Align the button to the start
                  width: "100%",
                  marginTop: "auto",
                }}
              >
                <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.headerTextColor,
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "0.95rem",
                    "&:hover": {
                      backgroundColor: theme.headerTextColor,
                      color: "#ffffff",
                    },
                  }}
                  onClick={() =>
                    window.open(
                      "https://botsanddrones.in/news/f/international-drone-show-2025-june-18-19-in-odense-denmark",
                      "_blank"
                    )
                  }
                >
                  Know More
                  <Box
                    sx={{
                      width: "22px",
                      height: "22px",
                      backgroundColor: theme.headerTextColor,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "7px",
                        height: "7px",
                        borderRight: "2px solid white",
                        borderBottom: "2px solid white",
                        transform: "rotate(-45deg)",
                        marginRight: "1.5px",
                      }}
                    ></Box>
                  </Box>
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default BlogGrid;
