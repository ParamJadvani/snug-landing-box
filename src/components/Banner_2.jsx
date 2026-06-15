import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import smallDrone3 from "/src/assets/Image PNG/freepik--drone-1--inject-1-6.png";
import "/src/css/vision_section.css";

const Banner_2 = ({
  image,
  reverse = false,
  contentDiv,
  title = false,
  isDrone = true,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", overflowX: "hidden", mt: 7 }}>
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
        {isDrone && (
          <Box
            component="img"
            src={smallDrone3}
            // className="smallDrone"
            sx={{
              position: "absolute",
              height: { xs: "70px", md: "85px" },
              zIndex: 100,
              left: { sm: "-5%", md: "-1%", lg: "-5%", xl: "-1%" },
              top: { sm: "67%", md: "6%", lg: "27%", xl: "30%" },
              display: {
                xs: "none",
                sm: "inline",
              },
              animation: "float 3s ease-in-out infinite",
            }}
          />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* Title Section */}
          {title && (
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
                marginBottom: { xs: "0.5rem", lg: "2.7rem" },
                width: "100%",
              }}
            >
              {title.toUpperCase()}
            </Typography>
          )}

          {/* Banner Content */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: {
                xs: "column",
                lg: reverse ? "row" : "row-reverse",
              },
              alignItems: "center",
              height: "100%",
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={image}
              alt="Banner"
              className="banner-image"
              zIndex="123"
            />

            {/* Content */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "justify",
                fontWeight: "bold",
                width: {
                  lg: "50%",
                  xs: "100%",
                },
              }}
            >
              {contentDiv}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner_2;
