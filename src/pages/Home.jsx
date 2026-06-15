import Navbar from "/src/components/Navbar";
import Banner from "/src/components/Banner";
import bannerimage from "/src/assets/BannerImage/Home.png";
import { Button } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import OMV from "/src/assets/SectionImage/Business Plan-bro.png";
import jadu from "/src/assets/Vector.png";
import jadu2 from "/src/assets/Vector2.png";
import vsrp from "/src/assets/SectionImage/Vision statement-rafiki.png";
import Vision_Section from "/src/components/Vision_Section";
import drone_delivery from "/src/assets/CardImage/drone-delivery.png";
import support from "/src/assets/CardImage/support.png";
import drone from "/src/assets/CardImage/drone.png";
import GridCard from "/src/components/Card/GridCard/GridCard";
import SliderCard from "/src/components/Card/SliderCard/SliderCard";
import certificate from "/src/assets/CardImage/winner.png";
import mapping from "/src/assets/CardImage/mapping.png";
import pilot from "/src/assets/CardImage/pilot.png";
import smallDrone from "/src/assets/Image PNG/freepik--drone-1--inject-1-3.png";
import blackBigDrone from "/src/assets/Image PNG/freepik--drone-2--inject-1.png";

import "/src/css/vision_section.css";
import DroneBanner from "../components/DroneBanner";
import ContactUsInput from "../components/ContactUsInput";
import AttachImageFooter from "../components/Footer/AttachImageFooter";
import Footerimage from "/src/assets/Image PNG/Frame 188 copy.png";

const servicesData = [
  {
    image: drone_delivery,
    title: "Drone Show",
    description:
      "Drone Shows are synchronized aerial displays using drones to create visuals, replacing traditional fireworks for entertainment and awareness.",
  },
  {
    image: support,
    title: "Surveying & Mapping",
    description:
      "Drone surveying provides accurate data faster mapping, improved safety, and 3D models, revolutionizing land and construction surveying processes.",
  },
  {
    image: drone,
    title: "Agriculture Spraying",
    description:
      "Agriculture drones ensure efficient crop spraying, reducing pesticide use, improving precision, saving time, and covering larger areas effectively.",
  },
];

const trainingData = [
  {
    image: certificate,
    title: "DGCA Certified Remote Pilot Certificate (RPC)",
    description:
      "Get certified by DGCA with hands-on training to become a licensed drone operator. Learn safety protocols, legal requirements, and technical skills to excel in UAV operations.",
  },
  {
    image: pilot,
    title: "Photography & Videography",
    description:
      "Capture breathtaking aerial visuals for events, films, or real estate promotions.",
  },
  {
    image: mapping,
    title: "Fertilizer/Pesticide Application in Agriculture",
    description:
      "Specialized training to use drones for efficient and precise agricultural spraying, ensuring better crop yields and reduced waste.",
  },
];

const Home = () => {
  const theme = useTheme();
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Banner
        image={bannerimage}
        bigImage={true}
        contentDiv={
          <Box>
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
                textAlign: "start",
                textTransform: "Capitalized",
                color: theme.headerTextColor,
              }}
            >
              Innovating the Future of UAV Technology
            </Typography>
            <Typography
              variant={isXL ? "h5" : isSmall ? "subtitle2" : "subtitle1"}
              sx={{
                marginTop: 2,
                fontStyle: "italic",
                fontWeight: 700,
                textAlign: "start",
              }}
            >
              “Shaping the Future of Aerospace with Cutting-Edge UAV Solutions”
            </Typography>
            <Typography
              variant={isXL ? "body1" : isSmall ? "body2" : "body1"}
              sx={{
                marginTop: 2,
                textAlign: "justify",
                fontSize: isXL ? "1.2rem" : "1rem",
              }}
            >
              At Vymanika Aerospace, we deliver innovative UAV technology,
              advancing aviation with unparalleled reliability and efficiency
              for commercial, defense, and beyond. Explore the limitless
              possibilities with us.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontSize: isXL ? "16px" : isSmall ? "12px" : "14px",
                  backgroundColor: "#0047AE",
                  padding: "10px 30px",
                  textTransform: "none",
                  borderRadius: "0px",
                  fontWeight: 700,
                  border: "2px solid #5C76DD",
                  position: "relative",
                  display: "inline-block",
                }}
                onClick={() => navigate("/aboutus")}
              >
                <div className="star-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 784.11 815.53"
                  >
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      fill="#5C76DD"
                    ></path>
                  </svg>
                </div>
                <div className="star-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 784.11 815.53"
                  >
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      fill="#5C76DD"
                    ></path>
                  </svg>
                </div>
                <div className="star-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 784.11 815.53"
                  >
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      fill="#5C76DD"
                    ></path>
                  </svg>
                </div>
                <div className="star-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 784.11 815.53"
                  >
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      fill="#5C76DD"
                    ></path>
                  </svg>
                </div>
                <div className="star-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 784.11 815.53"
                  >
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      fill="#5C76DD"
                    ></path>
                  </svg>
                </div>
                <div className="star-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 784.11 815.53"
                  >
                    <path
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      fill="#5C76DD"
                    ></path>
                  </svg>
                </div>
                Know More
              </Button>
              <style>
                {` :root{
                          --color: #5C76DD;
                        }

                        Button {
                          position: relative;
                          padding: 12px 35px;
                          background: var(--color);
                          font-size: 17px;
                          font-weight: 500;
                          color: #5C76DD;
                          border: 3px solid var(--color);
                          border-radius: 8px;
                          box-shadow: 0 0 0 #5C76DD;
                          transition: all .3s ease-in-out;
                          cursor: pointer;
                        }

                        .star-1 {
                          position: absolute;
                          top: 20%;
                          left: 20%;
                          width: 25px;
                          height: auto;
                          filter: drop-shadow(0 0 0 #5C76DD);
                          z-index: -5;
                          transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
                        }

                        .star-2 {
                          position: absolute;
                          top: 45%;
                          left: 45%;
                          width: 15px;
                          height: auto;
                          filter: drop-shadow(0 0 0 #5C76DD);
                          z-index: -5;
                          transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
                        }

                        .star-3 {
                          position: absolute;
                          top: 40%;
                          left: 40%;
                          width: 5px;
                          height: auto;
                          filter: drop-shadow(0 0 0 #5C76DD);
                          z-index: -5;
                          transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
                        }

                        .star-4 {
                          position: absolute;
                          top: 20%;
                          left: 40%;
                          width: 8px;
                          height: auto;
                          filter: drop-shadow(0 0 0 #5C76DD);
                          z-index: -5;
                          transition: all .8s cubic-bezier(0, 0.4, 0, 1.01);
                        }

                        .star-5 {
                          position: absolute;
                          top: 25%;
                          left: 45%;
                          width: 15px;
                          height: auto;
                          filter: drop-shadow(0 0 0 #5C76DD);
                          z-index: -5;
                          transition: all .6s cubic-bezier(0, 0.4, 0, 1.01);
                        }

                        .star-6 {
                          position: absolute;
                          top: 5%;
                          left: 50%;
                          width: 5px;
                          height: auto;
                          filter: drop-shadow(0 0 0 #5C76DD);
                          z-index: -5;
                          transition: all .8s ease;
                        }

                        Button:hover {
                          background: transparent;
                          color: var(--color);
                          box-shadow: 0 0 25px #5C76DD;
                        }

                        Button:hover .star-1 {
                          position: absolute;
                          top: -80%;
                          left: -30%;
                          width: 25px;
                          height: auto;
                          filter: drop-shadow(0 0 10px #5C76DD);
                          z-index: 2;
                        }

                        Button:hover .star-2 {
                          position: absolute;
                          top: -25%;
                          left: 10%;
                          width: 15px;
                          height: auto;
                          filter: drop-shadow(0 0 10px #5C76DD);
                          z-index: 2;
                        }

                        Button:hover .star-3 {
                          position: absolute;
                          top: 55%;
                          left: 25%;
                          width: 5px;
                          height: auto;
                          filter: drop-shadow(0 0 10px #5C76DD);
                          z-index: 2;
                        }

                        Button:hover .star-4 {
                          position: absolute;
                          top: 30%;
                          left: 80%;
                          width: 8px;
                          height: auto;
                          filter: drop-shadow(0 0 10px #5C76DD);
                          z-index: 2;
                        }

                        Button:hover .star-5 {
                          position: absolute;
                          top: 25%;
                          left: 115%;
                          width: 15px;
                          height: auto;
                          filter: drop-shadow(0 0 10px #5C76DD);
                          z-index: 2;
                        }

                        Button:hover .star-6 {
                          position: absolute;
                          top: 5%;
                          left: 60%;
                          width: 5px;
                          height: auto;
                          filter: drop-shadow(0 0 10px #5C76DD);
                          z-index: 2;
                        }

                        .fil0 {
                          fill: #FFFDEF;
                        }
                `}
              </style>
            </Box>
          </Box>
        }
      />

      {/* Vision Section */}
      <Vision_Section
        title="Our Mission"
        vectorImage={OMV}
        backgroundimage={jadu}
        description="Vymanika Aerospace's mission is to advance the aerospace industry with innovative unmanned aerial vehicles (UAVs) and components. We are dedicated to delivering high-performance, reliable solutions that enhance UAV capabilities, meet diverse industry needs, and drive the future of unmanned aviation for a safer, more connected world."
      />
      <Vision_Section
        title="Our Vision"
        vectorImage={vsrp}
        backgroundimage={jadu2}
        description="Vymanika Aerospace envisions a future where unmanned aerial vehicles seamlessly enhance industries and daily life. We aim to lead in UAV innovation, setting new standards and unlocking transformative possibilities in aerospace technology. Our goal is to create a more efficient, connected world through advanced unmanned aviation solutions."
        reverse={true}
        bigDroneImage={false}
      />

      {/* "Our Services" Section */}
      <GridCard
        data={servicesData}
        title="Our Services"
        onclickEvent={() => navigate("/services")}
        leftImage={
          <Box
            component="img"
            src={smallDrone}
            className="smallDrone"
            sx={{
              position: "absolute",
              height: { xs: "70px", md: "85px" },
              zIndex: 100,
              left: { xs: "-0%", sm: "-5%", md: "-5%", lg: "-3%", xl: "-1%" },
              top: { xs: "1%", sm: "3%", lg: "0%" },
              animation: "float 3s ease-in-out infinite",
            }}
          />
        }
        rightImage={
          <Box
            component="img"
            src={blackBigDrone}
            sx={{
              position: "absolute",
              height: { xs: "60px", sm: "70px", md: "90px", lg: "100px" },
              zIndex: 100,
              right: {
                xs: "-0%",
                sm: "-5%",
                md: "-5%",
                lg: "-3%",
                xl: "0%",
              },
              top: { xs: "-0%", sm: "0%", lg: "6.5%", xl: "2%" },
              animation: "float 3s ease-in-out infinite",
            }}
          />
        }
      />

      {/* Testimonial Card */}
      <SliderCard />

      {/* "Training & Courses" Section */}
      <GridCard
        data={trainingData}
        title="Training & Courses"
        onclickEvent={() => navigate("/training")}
        rightImage={
          <Box
            component="img"
            src={smallDrone}
            className="smallDrone"
            sx={{
              position: "absolute",
              height: { xs: "70px", md: "85px" },
              zIndex: 100,
              right: { xs: "-0%", sm: "-5%", md: "-5%", lg: "-3%", xl: "-1%" },
              top: { xs: "50%", lg: "0%" },
              display: {
                xs: "none",
                sm: "inline",
              },

              animation: "float 3s ease-in-out infinite",
            }}
          />
        }
      />

      {/* Drone Banner */}
      <DroneBanner />

      {/* Contact Us */}
      <ContactUsInput />

      {/* Footer */}
      <AttachImageFooter image={Footerimage} />
    </>
  );
};

export default Home;
