import Navbar from "/src/components/Navbar";
import AttachImageFooter from "../components/Footer/AttachImageFooter";
import Footerimage from "/src/assets/Image PNG/Frame 188 copy.png";
import DroneSurvillance from "/src/assets/Image PNG/Drone surveillance-bro.png";
import DroneRace from "/src/assets/Image PNG/Drone race-pana 1.png";
import DroneAmico from "/src/assets/Image PNG/drone-amico.png";
import Dronebro from "/src/assets/Image PNG/drone-bro.png";
import BlogBanner from "../components/BlogSections/BlogBanner";
import BlogBanner_2 from "../components/BlogSections/BlogBanner_2";
import { Box, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import BlogGrid from "../components/BlogSections/BlogGrid";

const data1 = [
  {
    image: DroneRace,
    title: "International Drone Show 2025",
    description:
      "Join the International Drone Show 2025 on June 18-19 at HCA Airport, Odense, Denmark. Experience cutting-edge drone tech, live demos, and industry insights at Northern Europe's premier drone event.",
  },
  {
    image: DroneSurvillance,
    title: "Global Drone Industry",
    description:
      "The commercial drone sector continues to evolve rapidly, offering new opportunities and challenges across the globe. According to the recently published Global State of Drones 2024.",
  },
];

const data2 = [
  {
    image: Dronebro,
    title: "AVPL International to Establish Drone",
    description:
      "AVPL International, a prominent name in the Indian drone industry, is set to bolster the nation's drone manufacturing capabilities with the launch of a state-of-the-art facility in Bihar.",
  },
  {
    image: DroneAmico,
    title: "JSW Defence Partners",
    description:
      "Drone News Washington/Mumbai - JSW Defence Pvt. Ltd., part of the $24 billion JSW Group, has teamed up with U.S.-based defense technology leader Shield AI, Inc. to indigenize and manufacture the V-BAT unmanned aerial system (UAS)",
  },
];

const Blog = () => {
  const theme = useTheme();

  return (
    <>
      <Navbar />

      {/* Banner */}
      <BlogBanner />

      <Box
        sx={{
          width: "100%",
          overflowX: "hidden",
          height: "20vh",
          position: "absolute",
          backgroundColor: "#80B3ED",
        }}
      />

      {/* Blog Banner_2 */}
      <Box
        sx={{
          width: "100%",
          overflowX: "hidden",
          backgroundColor: theme.sectionbackgroundColor,
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
          <BlogBanner_2 contentDiv={<Box sx={{ height: "100%" }}></Box>} />
        </Container>
      </Box>

      {/* Grid - 1  */}
      <BlogGrid blogData={data1} />

      {/* Grid - 2  */}
      <BlogGrid blogData={data2} />

      {/* Footer */}
      <AttachImageFooter image={Footerimage} />
    </>
  );
};

export default Blog;
