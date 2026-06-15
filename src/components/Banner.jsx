import { Box, Container, useMediaQuery } from "@mui/material";
import "/src/css/banner.css";
import cloud from "/src/assets/Image PNG/freepik--Cloud--inject-73.png";
import { useTheme } from "@emotion/react";

const Banner = ({
  image,
  contentDiv,
  reverse = false,
  bigImage = false,
}) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const bannerClass = bigImage
    ? isLargeScreen
      ? "banner-image-big"
      : "banner-image"
    : "banner-image";
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
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
        {/* Top Cloud Boxes */}

        <Box
          sx={{
            width: "100%",
            overflow: "inherit",
          }}
        >
          {/* First Top Cloud Box */}
          <Box
            component="img"
            src={cloud}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            sx={{
              width: { xs: "23%", sm: "22%", md: "20%" },
              height: "auto",
              position: "absolute",
              left: { xs: "-5%", sm: "-6%", md: "-8%" },
              top: { xs: "5%", sm: "3%", md: "4%" },
              animation: "float 8s ease-in-out infinite",
            }}
          />

          {/* Second Top Cloud Box */}
          <Box
            component="img"
            src={cloud}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            sx={{
              width: { xs: "10%", sm: "9%", md: "8%" },
              height: "auto",
              position: "absolute",
              left: { xs: "40%", sm: "46%", md: "50%" },
              top: { xs: "3%", sm: "6.5%", md: "7%" },
              animation: "float 10s ease-in-out infinite",
            }}
          />

          {/* Third Top Cloud Box */}
          <Box
            component="img"
            src={cloud}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            sx={{
              width: { xs: "32%", sm: "30%", md: "28%" },
              height: "auto",
              position: "absolute",
              left: { xs: "70%", sm: "80%", md: "82%" },
              top: { xs: "7%", sm: "10%", md: "8%" },
              animation: "float 12s ease-in-out infinite",
            }}
          />
        </Box>

        <style>
          {`
            @keyframes float {
              0% {
                  transform: translateY(0);
                  }
              50% {
                transform: translateY(-20px); /* Increase the floating range */
              }
              100% {
                transform: translateY(0);
              }
            }
          `}
        </style>

        {/* Main Banner Content */}
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
            // marginTop: margin ? 30 : 0,
          }}
        >
          {/* Image */}
          <Box
            component="img"
            src={image}
            alt="Vymanika Aerospace banner"
            decoding="async"
            fetchPriority="high"
            className={bannerClass}
            zIndex="123"
            sx={{
              objectFit: "contain",
            }}
          />

          {/* Content */}
          <Box sx={{ zIndex: 120 }}>{contentDiv}</Box>
        </Box>

        {/* Bottom Cloud Boxes */}
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          {/* First Bottom Cloud Box */}
          <Box
            component="img"
            src={cloud}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            sx={{
              display: { lg: "inline-block", xs: "none" },
              width: { xs: "30%", sm: "24%", md: "23%" },
              height: "auto",
              position: "absolute",
              left: { xs: "-4%", sm: "-11%", md: "-10%" },
              bottom: { xs: "-5.5%", sm: "-4%", md: "-8%", lg: "1%" },
              animation: "float 6s ease-in-out infinite",
              "@keyframes float": {
                "0%": {
                  transform: "translateY(0)",
                },
                "50%": {
                  transform: "translateY(-10px)",
                },
                "100%": {
                  transform: "translateY(0)",
                },
              },
            }}
          />

          {/* Second Bottom Cloud Box */}
          <Box
            component="img"
            src={cloud}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            sx={{
              display: { lg: "inline-block", xs: "none" },
              width: { xs: "37%", sm: "36%", md: "30%" },
              height: "auto",
              position: "absolute",
              left: { xs: "70%", sm: "80%", md: "80%" },
              bottom: { xs: "-5.5%", sm: "-1%", md: "-2%", lg: "1%" },
              animation: "float 6s ease-in-out infinite",
              "@keyframes float": {
                "0%": {
                  transform: "translateY(0)",
                },
                "50%": {
                  transform: "translateY(-10px)",
                },
                "100%": {
                  transform: "translateY(0)",
                },
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
