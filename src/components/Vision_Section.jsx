import { Box, Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "/src/css/vision_section.css";
import bigDrone from "/src/assets/Image PNG/freepik--drone-3--inject-1.png";
import smallDrone from "/src/assets/Image PNG/freepik--drone-1--inject-1-3.png";
import smallDrone2 from "/src/assets/Image PNG/freepik--drone-2--inject-1 copy.png";
import smallDrone3 from "/src/assets/Image PNG/freepik--drone-1--inject-1-6.png";

const VisionSection = ({
  vectorImage,
  title,
  description,
  backgroundimage,
  reverse = false,
  bigDroneImage = true,
  smallDroneImage = false,
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", overflowX: "hidden", marginY: 10 }}>
      {/* Inject the keyframes animation into the document */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

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
        {bigDroneImage ? (
          <Box
            component="img"
            src={bigDrone}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="bigDrone"
            sx={{
              position: "absolute",
              height: { xs: "110px", md: "140px", lg: "150px" },
              zIndex: 100,
              left: {
                xs: "-1%",
                sm: "-14%",
                md: "-8%",
                lg: "-5%",
                xl: "-1.5%",
              },
              top: { xs: "-1%", sm: "1%", md: "0%", lg: "1%", xl: "2%" },
              animation: "float 3s ease-in-out infinite",
            }}
          />
        ) : (
          <Box
            component="img"
            src={smallDrone3}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            // className="smallDrone"
            sx={{
              position: "absolute",
              height: { xs: "70px", md: "85px" },
              zIndex: 100,
              left: { xs: "-0%", sm: "-5%", md: "-5%", lg: "-3%", xl: "-1%" },
              top: { xs: "3%", sm: "0%" },
              // animation: "float 3s ease-in-out infinite",
            }}
          />
        )}

        {smallDroneImage ? (
          <Box
            component="img"
            src={smallDrone2}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            // className="smallDrone"
            sx={{
              position: "absolute",
              height: { xs: "60px",sm:'70px', md: "100px", lg: "115px" },
              zIndex: 100,
              right: { xs: "-0%", sm: "-5%", md: "-5%", lg: "-3%", xl: "-1%" },
              top: { xs: "3%", sm: "0%" },
              animation: "float 4s ease-in-out infinite",
            }}
          />
        ) : (
          <Box
            component="img"
            src={smallDrone}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            // className="smallDrone"
            sx={{
              position: "absolute",
              height: { xs: "70px", md: "85px" },
              zIndex: 100,
              right: { xs: "-0%", sm: "-5%", md: "-5%", lg: "-3%", xl: "-1%" },
              top: { xs: "1%", sm: "1%", md: "1%", lg: "1%", xl: "2%" },
              animation: "float 4s ease-in-out infinite",
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

          {/* Main Content Wrapper */}
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                lg: reverse ? "row-reverse" : "row",
              },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Left Image Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  lg: reverse ? "right" : "left",
                  xs: "center",
                },
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={vectorImage}
                alt="Vector Illustration"
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Right Section with Background and Description */}
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                height: "100%",
              }}
            >
              {/* Background Image */}
              <img
                src={backgroundimage}
                alt="Vision Section"
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                }}
                className="responsive-image"
              />

              {/* Overlay Description */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: { lg: "53%", md: "53%", sm: "52%", xs: "53%" },
                  transform: "translate(-50%, -50%)",
                  padding: { xs: "1rem", sm: "1.5rem" },
                  textAlign: "justify",
                  color: "text.primary",
                  width: { xs: "80%", sm: "90%" },
                  maxWidth: {
                    sm: "500px",
                    xs: "400px",
                    xl: "850px",
                  },
                  px: { xs: 3, sm: 8, md: 8, lg: 10 },
                  py: { xs: 10, sm: 10, lg: 10 },
                }}
              >
                <Typography
                  variant="body1"
                  className="description-text"
                  sx={{
                    fontSize: {
                      xs: "0.62rem",
                      sm: "1.01rem",
                      lg: "1.05rem",
                      xl: "1.24rem",
                    },
                    fontWeight: 500,
                    lineHeight: 1.6,
                    textAlign: "justify",
                  }}
                >
                  {description}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VisionSection;
