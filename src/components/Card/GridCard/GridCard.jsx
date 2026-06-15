import { useTheme } from "@emotion/react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ResponsiveCard from "./ResponsiveCard";
import blueBigDrone from "/src/assets/Image PNG/freepik--drone-3--inject-1-1.png";

import "/src/css/vision_section.css";

const GridCard = ({
  data = [],
  title = "",
  leftImage = (
    <Box
      component="img"
      src={blueBigDrone}
      alt="Big Drone"
      className="bigDrone"
      sx={{
        position: "absolute",
        height: { xs: "110px", md: "130px", lg: "150px" },
        zIndex: 100,
        left: {
          xs: "-1%",
          sm: "-14%",
          md: "-7%",
          lg: "-7%",
          xl: "-5.5%",
        },
        display: {
          xs: "none",
          sm: "inline",
        },
        top: { xs: "-1%", sm: "1%", md: "1.5%", lg: "1%", xl: "4%" },
        animation: "float 3s ease-in-out infinite",
      }}
    />
  ),
  rightImage,
  onclickEvent = "#",
}) => {
  const theme = useTheme();
  return (
    <div>
      <Box sx={{ width: "100%", marginY: 10 }}>
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
          {leftImage}
          {rightImage}
          <Box>
            {/* Title Section */}
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: 900,
                fontStyle: "capitalize",
                color: theme.headerTextColor,
                fontSize: {
                  xs: theme.fontsize.xs,
                  sm: theme.fontsize.sm,
                  md: theme.fontsize.md,
                  lg: theme.fontsize.lg,
                  xl: theme.fontsize.xl,
                },
                marginBottom: { xs: "0.5rem", lg: "2.5rem" },
                width: "100%",
              }}
            >
              {title.toUpperCase()}
            </Typography>
            <Grid container rowSpacing={3}>
              {data.map(({ image, title, description }, index) => {
                const positionInRow = index % 3; // Position of the item in the row (0, 1, 2 for first, middle, last)
                const justifyContent =
                  positionInRow === 0
                    ? "flex-start" // First item in the row
                    : positionInRow === 1
                    ? "center" // Middle item in the row
                    : "flex-end"; // Last item in the row

                return (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: {
                        xs: "center", // Center-align on smaller screens
                        lg: justifyContent, // Use calculated alignment for larger screens
                      },
                      alignItems: "center",
                    }}
                  >
                    <ResponsiveCard
                      image={image}
                      title={title}
                      description={description}
                    />
                  </Grid>
                );
              })}
            </Grid>

            {data.length === 3 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { md: "end", xs: "end" },
                  marginTop: "10px",
                  width: { lg: "100%", sm: "80%", md: "70%" },
                }}
              >
                <Button
                  onClick={onclickEvent}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.headerTextColor,
                    textTransform: "none",
                    fontWeight: "bold",
                    position: { md: "absolute", xs: "relative" },
                    fontSize: "1rem",
                    right: { md: "1%" },
                    "&:hover": {
                      backgroundColor: theme.headerTextColor,
                      color: "#ffffff",
                    },
                  }}
                >
                  Know More
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
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
                        width: "7.5px",
                        height: "7.5px",
                        borderRight: "2px solid white",
                        borderBottom: "2px solid white",
                        transform: "rotate(-45deg)",
                        marginRight: "1.5px",
                      }}
                    ></Box>
                  </Box>
                </Button>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default GridCard;
