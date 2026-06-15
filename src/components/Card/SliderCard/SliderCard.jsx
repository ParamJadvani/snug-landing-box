import { Box, Container, Typography } from "@mui/material";
import TestimonialCard from "./TestimonialCard";
import image from "/src/assets/SectionImage/Online Review-rafiki.png";
import { useTheme } from "@emotion/react";
import smallDrone from "/src/assets/Image PNG/freepik--drone-1--inject-1-3.png";
import smallDrone2 from "/src/assets/Image PNG/freepik--drone-1--inject-1-4.png";
import "/src/css/vision_section.css";

const SliderCard = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        marginY: { lg: 10, xs: 0 },
        marginBottom: {
          xs: "-20%",
          sm: 5,
        },
      }}
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
          src={smallDrone}
          sx={{
            position: "absolute",
            height: { xs: "80px", md: "90px" },
            zIndex: 100,
            left: { xs: "-0%", sm: "-5%", md: "-5%", lg: "-2%", xl: "-1%" },
            top: { xs: "3%", sm: "2.5%", lg: "0%" },
            animation: "float 3s ease-in-out infinite",
          }}
        />

        <Box
          component="img"
          src={smallDrone2}
          // className="smallDrone"
          sx={{
            position: "absolute",
            height: { xs: "70px", md: "85px" },
            zIndex: 100,
            right: { xs: "-0%", sm: "-5%", md: "-5%", lg: "-3%", xl: "-1%" },
            top: { xs: "3%", sm: "2.5%", lg: "0%" },
            animation: "float 3s ease-in-out infinite",
          }}
        />
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
              marginBottom: { xs: "0.5rem", lg: "2.2rem" },
              width: "100%",
            }}
          >
            {"Client Testimonial".toUpperCase()}
          </Typography>
          {/* Main Banner Content */}
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "space-around",
              },
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              alignItems: "center",
              height: "100%",
            }}
          >
            {/* Image */}
            <Box
              sx={{
                width: { xs: "100%", lg: "50%" },
                height: { md: "auto", xs: "100%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={image}
                alt="Banner"
                sx={{
                  maxWidth: {
                    lg: "80%",
                    md: "70%",
                    sm: "90%",
                    xs: "100%",
                  },
                  objectFit: "contain",
                  height: "auto",
                }}
              />
            </Box>

            {/* Content */}
            <Box>
              <TestimonialCard />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SliderCard;
