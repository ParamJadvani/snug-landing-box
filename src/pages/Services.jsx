import Navbar from "/src/components/Navbar";
import Services_banner from "/src/assets/BannerImage/Service.png";
import Banner from "/src/components/Banner";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import drone_delivery from "/src/assets/CardImage/drone-delivery.png";
import support from "/src/assets/CardImage/support.png";
import drone from "/src/assets/CardImage/drone.png";
import pilot from "/src/assets/CardImage/pilot.png";
import solar_energy from "/src/assets/CardImage/solar-energy.png";
import electric_factory from "/src/assets/CardImage/electric-factory.png";
import renewable_energy from "/src/assets/CardImage/renewable-energy.png";
import racing_game from "/src/assets/CardImage/racing-game.png";
import GridCard from "/src/components/Card/GridCard/GridCard";
import smallDrone2 from "/src/assets/Image PNG/freepik--drone-3--inject-1-1 copy.png";
import DroneBanner from "../components/DroneBanner";
import AttachImageFooter from "../components/Footer/AttachImageFooter";
import Footerimage from "/src/assets/Image PNG/Frame 187.png";

const servicesData = [
  {
    title: "Agriculture Spraying",
    description:
      "Achieve precise crop spraying with our UAVs, improving yield and reducing waste.",
    image: drone,
  },
  {
    title: "Surveying & Mapping",
    description:
      "Obtain accurate terrain data and maps for construction, agriculture, and urban planning.",
    image: support,
  },
  {
    title: "Photography & Videography",
    description:
      "Capture breathtaking aerial visuals for events, films, or real estate promotions.",
    image: pilot,
  },
  {
    title: "Solar Panel Cleaning & Inspection",
    description:
      "Maintain energy efficiency with drones equipped for thorough solar panel cleaning and diagnostics.",
    image: solar_energy,
  },
  {
    title: "Powerline Inspection",
    description:
      "Ensure uninterrupted power supply with detailed inspections of powerlines, detecting faults efficiently.",
    image: electric_factory,
  },
  {
    title: "Wind Turbine Inspection",
    description:
      "Perform safe, high-precision turbine inspections, reducing downtime and risks.",
    image: renewable_energy,
  },
  {
    title: "Highway Monitoring & Traffic Management",
    description:
      "Monitor traffic and road conditions for improved management and safety.",
    image: racing_game,
  },
  {
    title: "Drone Shows",
    description:
      "Create mesmerizing aerial displays for events, showcasing creativity through synchronized drone performances.",
    image: drone_delivery,
  },
];

const Services = () => {
  const theme = useTheme();
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Navbar />
      {/* About Banner with Content */}
      <Banner
        image={Services_banner}
        contentDiv={
          <Box>
            {/* Title Section */}
            <Typography
              variant={isXL ? "h3" : isSmall ? "h5" : "h4"}
              sx={{
                fontWeight: 900,
                textAlign: "start",
                fontsize: {
                  xs: theme.fontsize.xs,
                  sm: theme.fontsize.sm,
                  md: theme.fontsize.md,
                  lg: theme.fontsize.lg,
                  xl: theme.fontsize.xl,
                },
                textTransform: "Capitalized",
                marginBottom: { xs: 2, sm: 3, md: 4 },

                color: theme.headerTextColor,
              }}
            >
              Overview of Services
            </Typography>

            {/* Body Description */}
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
                fontWeight: 400,
                textAlign: "justify",
                fontSize: {
                  xs: "0.89rem",
                  sm: "1.1rem",
                  md: "1.1rem",
                  lg: "1.2rem",
                  xl: "1.4rem",
                },
                lineHeight: { xs: 1.5, sm: 1.6, md: 1.8 },
                letterSpacing: { xs: "0.2px", sm: "0.5px" },
              }}
            >
              At Vymanika Aerospace, we specialize in delivering cutting-edge
              UAV solutions tailored to diverse industries. Our state-of-the-art
              drones and services are designed to enhance efficiency, safety,
              and accuracy across a wide range of applications. Whether you need
              precise agricultural spraying or advanced infrastructure
              inspections, our expertise ensures that your operational goals are
              met with unparalleled quality and reliability.
            </Typography>
          </Box>
        }
      />

      {/* GridCard Section */}
      <GridCard
        data={servicesData}
        title="Our Services"
        rightImage={
          <Box
            component="img"
            src={smallDrone2}
            className="smallDrone"
            sx={{
              position: "absolute",
              height: { xs: "70px", md: "85px" },
              zIndex: 100,
              right: { xs: "-0%", sm: "-5%", md: "-7%", lg: "3%", xl: "10%" },
              top: { xs: "0%", sm: "50%", lg: "80%", xl: "80%" },
              animation: "float 3s ease-in-out infinite",
            }}
          />
        }
      />

      {/* Drone Banner */}
      <DroneBanner />

      {/* Footer */}
      <AttachImageFooter image={Footerimage} />
    </>
  );
};

export default Services;
