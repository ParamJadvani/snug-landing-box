import { Box, Typography, useMediaQuery } from "@mui/material";
import Navbar from "/src/components/Navbar";
import cap from "/src/assets/BannerImage/Training.png";
import Banner from "/src/components/Banner";
import { useTheme } from "@emotion/react";
import certificate from "/src/assets/CardImage/winner.png";
import mapping from "/src/assets/CardImage/mapping.png";
import drone_1 from "/src/assets/CardImage/drone (1).png";
import samrtFarm from "/src/assets/CardImage/smart-farm.png";
import pilot from "/src/assets/CardImage/pilot.png";
import GridCard from "/src/components/Card/GridCard/GridCard";
import smallDrone from "/src/assets/Image PNG/freepik--drone-1--inject-1-3.png";
import smallDrone2 from "/src/assets/Image PNG/freepik--drone-3--inject-1-1 copy.png";
import Banner_2 from "../components/Banner_2";
import cb from "../assets/SectionImage/Certification-bro.png";
import AttachImageFooter from "../components/Footer/AttachImageFooter";
import Footerimage from "/src/assets/Image PNG/Group 55.png";

const trainingData = [
  {
    title: "DGCA Certified Remote Pilot Certificate (RPC)",
    description:
      "Get certified by DGCA with hands-on training to become a licensed drone operator. Learn safety protocols, legal requirements, and technical skills to excel in UAV operations.",
    image: certificate,
  },
  {
    title: "Fertilizer/Pesticide Application in Agriculture",
    description:
      "Specialized training to use drones for efficient and precise agricultural spraying, ensuring better crop yields and reduced waste.",
    image: mapping,
  },
  {
    title: "Aerial Mapping and Land Surveying",
    description:
      "Master drone-based surveying techniques for accurate land analysis and mapping, crucial for construction, agriculture, and environmental projects.",
    image: drone_1,
  },
  {
    title: "Drone Technician",
    description:
      "Drone technician training, teaches, fixes, builds, and flying basics. Short courses hands-on tasks, and certification boosts skills fast.",
    image: samrtFarm,
  },
  {
    title: "Photography & Videography",
    description:
      "Develop advanced skills in drone-based photography and videography to create stunning visuals for events, real estate, and media production.",
    image: pilot,
  },
];

const Training = () => {
  const theme = useTheme();
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <Banner
        reverse={true}
        image={cap}
        contentDiv={
          <Box>
            {/* Title Section */}
            <Typography
              variant={isXL ? "h3" : isSmall ? "h5" : "h4"}
              sx={{
                fontWeight: 900,
                fontsize: {
                  xs: theme.fontsize.xs,
                  sm: theme.fontsize.sm,
                  md: theme.fontsize.md,
                  lg: theme.fontsize.lg,
                  xl: theme.fontsize.xl,
                },
                marginBottom: { xs: 2, sm: 3, md: 4 },
                textAlign: "start",
                textTransform: "Capitalized",
                color: theme.headerTextColor,
              }}
            >
              Training Programs Overview
            </Typography>

            {/* Body Description */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: {
                  xs: "0.89rem",
                  sm: "1rem",
                  md: "1.04rem",
                  lg: "1.2rem",
                  xl: "1.49rem",
                },
                textAlign: "justify",
                maxWidth: { xs: "100%", lg: "80%" },
                marginTop: { xs: 2, sm: 3 },
              }}
            >
              Vymanika Aerospace offers comprehensive drone training programs
              designed to equip participants with the skills and certifications
              required for excelling in the UAV industry. From mastering
              agricultural spraying techniques to creating stunning aerial
              photography, our courses cater to both beginners and experienced
              professionals.
            </Typography>
          </Box>
        }
      />

      {/* GridCard Section */}
      <GridCard
        data={trainingData}
        title="Course Categories"
        rightImage={
          <Box
            component="img"
            src={smallDrone2}
            // className="smallDrone"
            sx={{
              position: "absolute",
              height: { xs: "50px", md: "90px", xl: "100px" },
              zIndex: 100,
              right: {
                xs: "-0%",
                md: "13%",
                lg: "-7%",
                xl: "6%",
              },
              top: { xs: "1%", sm: "50%", md: "80%", lg: "70%" },
              animation: "float 3s ease-in-out infinite",
            }}
          />
        }
      />

      {/* Certification */}
      <Banner_2
        image={cb}
        isDrone={false}
        contentDiv={
          <Box sx={{ paddingBottom: 4 }}>
            <Box
              sx={{
                paddingX: { xs: 2, sm: 4 },
                paddingY: { xs: 2, sm: 4 },
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  marginBottom: 3,
                  textAlign: "center",
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                  lineHeight: 1.6,
                  color: theme.headerTextColor,
                  fontWeight: 800,
                }}
              >
                CERTIFICATION
              </Typography>
              <Box
                component="img"
                src={smallDrone}
                className="smallDroneDroneBanner"
                sx={{
                  position: "absolute",
                  height: { xs: "70px", md: "85px" },
                  zIndex: 100,
                  left: {
                    xs: "-0%",
                    sm: "-5%",
                    md: "-5%",
                    lg: "-2%",
                    xl: "-1%",
                  },
                  top: { xs: "32%", sm: "50%", md: "50%", lg: "10%" },
                  animation: "float 4s ease-in-out infinite",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" },
                  lineHeight: 1.6,
                  color: "#000000",
                  fontWeight: 800,
                  textAlign: "center",
                }}
              >
                Participants receive industry-recognized certifications upon
                successful completion of their training, including
                DGCA-certified Remote Pilot Certificates.
              </Typography>
            </Box>
          </Box>
        }
      />

      {/* Footer */}

      {/* Footer */}
      <AttachImageFooter image={Footerimage} />
    </>
  );
};

export default Training;
