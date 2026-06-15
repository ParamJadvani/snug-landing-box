import image from "/src/assets/SectionImage/drone-cuate.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import smallDrone from "/src/assets/Image PNG/freepik--drone-1--inject-1-3.png";
import "/src/css/vision_section.css";

const DroneBanner = () => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%" }}>
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
          className="smallDroneDroneBanner"
          sx={{
            position: "absolute",
            height: { xs: "70px", md: "85px" },
            zIndex: 100,
            left: { xs: "-0%", sm: "-5%", md: "-5%", lg: "-2%", xl: "-1%" },
            top: { xs: "32%", sm: "50%", md: "50%", lg: "10%" },
            animation: "float 4s ease-in-out infinite",
          }}
        />
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
            {"Service Categories".toUpperCase()}
          </Typography>
          {/* Main Banner Content */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: {
                xs: "column",
                lg: "row-reverse",
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
            <Box>
              <Grid
                container
                sx={{
                  width: {
                    lg: "80%",
                    xs: "100%",
                  },
                }}
              >
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    {/* UAV Design & Manufacturing */}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          color: theme.palette.text.primary,
                          marginBottom: 2,
                        }}
                      >
                        1. DGCA Type-Certified Drone Selling
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          width: {
                            xs: "80%",
                            sm: "100%",
                          },
                        }}
                      >
                        DGCA-certified drones meet safety and quality standards,
                        making them eligible for lawful operations. Selling
                        certified drones ensures compliance with Indian
                        regulations, fostering reliability and market trust
                      </Typography>
                    </Box>

                    {/* UAV Components */}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          color: theme.palette.text.primary,
                          marginBottom: 2,
                        }}
                      >
                        2. Drone Maintenance and Repair
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                          lineHeight: 1.6,
                          fontSize: { xs: "0.9rem", sm: "1rem" },
                          width: {
                            xs: "100%",
                            sm: "80%",
                          },
                        }}
                      >
                        Regular maintenance ensures drones operate safely and
                        efficiently. Key tasks include cleaning, inspecting
                        parts, replacing damaged components, and updating
                        software to enhance performance and lifespan.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DroneBanner;
