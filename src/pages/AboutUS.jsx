import Navbar from "/src/components/Navbar";
import Banner from "/src/components/Banner";
import AboutUs_Banner from "/src/assets/BannerImage/Aboutus.png";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import OMV from "/src/assets/SectionImage/Business Plan-bro.png";
import jadu from "/src/assets/Vector.png";
import jadu2 from "/src/assets/Vector2.png";
import vsrp from "/src/assets/SectionImage/Vision statement-rafiki.png";
import Vision_Section from "/src/components/Vision_Section";
import Banner_2 from "../components/Banner_2";
import scb from "../assets/SectionImage/Stamp collecting-bro.png";
import pob from "../assets/SectionImage/Progress overview-bro.png";
import AttachImageFooter from "../components/Footer/AttachImageFooter";
import Footerimage from "/src/assets/Image PNG/Frame 187.png";

const AboutUS = () => {
  const theme = useTheme();
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Navbar />
      <Banner
        reverse={true}
        image={AboutUs_Banner}
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
                color: theme.headerTextColor,
                textTransform: "Capitalized",
              }}
            >
              About Vymanika Aerospace
            </Typography>
            {/* Body Description */}
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
                color: "#000000",
                fontWeight: 400,
                textAlign: "justify",
                fontSize: { xs: "1rem", sm: "1.1rem" },
              }}
            >
              Vymanika Aerospace is a pioneering startup redefining the
              aerospace industry through innovation and expertise in unmanned
              aerial vehicles (UAVs). Our mission is to revolutionize UAV
              technology by designing and integrating cutting-edge components
              tailored for commercial and defense applications. As a
              forward-thinking company, we are committed to advancing UAV
              capabilities and meeting the ever-evolving demands of modern
              aviation and robotics.
            </Typography>
          </Box>
        }
      />

      <Banner_2
        title="OUR HISTORY AND KEY MILESTONES"
        image={scb}
        contentDiv={
          <Box
            sx={{
              paddingX: { xs: 2, sm: 4 },
              paddingY: { xs: 2, sm: 4 },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" },
                lineHeight: 1.6,
                color: "#000000",
                fontWeight: 400,
              }}
            >
              Since our inception, Vymanika Aerospace has been dedicated to
              excellence in UAV development. With each breakthrough, we have
              strengthened our position as a trusted innovator in the aerospace
              sector, delivering reliable and high-performance solutions to
              diverse industries.
            </Typography>
          </Box>
        }
      />

      {/* Vision Section */}
      <Vision_Section
        title="Our Mission"
        vectorImage={OMV}
        backgroundimage={jadu}
        bigDroneImage={false}
        description="Vymanika Aerospace's mission is to advance the aerospace industry with innovative unmanned aerial vehicles (UAVs) and components. We are dedicated to delivering high-performance, reliable solutions that enhance UAV capabilities, meet diverse industry needs, and drive the future of unmanned aviation for a safer, more connected world."
      />
      <Vision_Section
        title="Our Vision"
        vectorImage={vsrp}
        backgroundimage={jadu2}
        bigDroneImage={false}
        smallDroneImage={true}
        description="Vymanika Aerospace envisions a future where unmanned aerial vehicles seamlessly enhance industries and daily life. We aim to lead in UAV innovation, setting new standards and unlocking transformative possibilities in aerospace technology. Our goal is to create a more efficient, connected world through advanced unmanned aviation solutions."
        reverse={true}
      />

      {/* Banner_2 */}
      <Banner_2
        reverse={true}
        title="INNOVATION FOCUS"
        image={pob}
        contentDiv={
          <Box
            sx={{
              paddingX: { xs: 2, sm: 4 },
              paddingY: { xs: 2, sm: 4 },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" },
                lineHeight: 1.6,
                color: "#000000",
                fontWeight: 400,
              }}
            >
              Vymanika Aerospace&apos;s mission is to advance the aerospace
              industry with innovative unmanned aerial vehicles (UAVs) and
              components. We are dedicated to delivering high-performance,
              reliable solutions that enhance UAV capabilities, meet diverse
              industry needs, and drive the future of unmanned aviation for a
              safer, more connected world.
            </Typography>
          </Box>
        }
      />

      {/* Footer */}
      <AttachImageFooter image={Footerimage} />
    </>
  );
};

export default AboutUS;
