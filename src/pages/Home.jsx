import { Box } from "@mui/material";
import Navbar from "/src/components/Navbar";
import HeroShowcase from "/src/components/showcase/HeroShowcase";
import WaveDivider from "/src/components/dividers/WaveDivider";
import SpecsGrid from "/src/components/showcase/SpecsGrid";
import FeatureBreakdown from "/src/components/showcase/FeatureBreakdown";
import EngineeringTelemetry from "/src/components/showcase/EngineeringTelemetry";
import MissionApplications from "/src/components/showcase/MissionApplications";
import PilotCredentials from "/src/components/showcase/PilotCredentials";
import Vision_Section from "/src/components/Vision_Section";
import GridCard from "/src/components/Card/GridCard/GridCard";
import SliderCard from "/src/components/Card/SliderCard/SliderCard";
import DroneBanner from "/src/components/DroneBanner";
import ContactUsInput from "/src/components/ContactUsInput";
import AttachImageFooter from "/src/components/Footer/AttachImageFooter";
import Footer from "/src/components/Footer/Footer";
import Reveal from "/src/components/motion/Reveal";

import OMV from "/src/assets/SectionImage/Business Plan-bro.png";
import vsrp from "/src/assets/SectionImage/Vision statement-rafiki.png";
import jadu from "/src/assets/Vector.png";
import jadu2 from "/src/assets/Vector2.png";
import Footerimage from "/src/assets/Image PNG/Frame 188 copy.png";

import drone_delivery from "/src/assets/CardImage/drone-delivery.png";
import support from "/src/assets/CardImage/support.png";
import drone from "/src/assets/CardImage/drone.png";
import certificate from "/src/assets/CardImage/winner.png";
import mapping from "/src/assets/CardImage/mapping.png";
import pilot from "/src/assets/CardImage/pilot.png";
import smallDrone from "/src/assets/Image PNG/freepik--drone-1--inject-1-3.png";
import blackBigDrone from "/src/assets/Image PNG/freepik--drone-2--inject-1.png";

import { useNavigate } from "react-router-dom";

import "/src/css/vision_section.css";

const servicesData = [
  { image: drone_delivery, title: "Drone Show", description: "Synchronized aerial displays replacing traditional fireworks for entertainment and awareness." },
  { image: support, title: "Surveying & Mapping", description: "Accurate data, faster mapping, improved safety and 3D models — revolutionising land and construction surveying." },
  { image: drone, title: "Agriculture Spraying", description: "Efficient crop spraying that reduces pesticide use, improves precision and covers larger areas faster." },
];

const trainingData = [
  { image: certificate, title: "DGCA Certified RPC", description: "Hands-on training to become a licensed drone operator: safety protocols, legal requirements and technical skills." },
  { image: pilot, title: "Photography & Videography", description: "Capture breathtaking aerial visuals for events, films and real-estate promotions." },
  { image: mapping, title: "Agri Spray Certification", description: "Specialised training for efficient and precise agricultural drone spraying." },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: "#0a1828", overflowX: "hidden" }}>
      <Navbar />

      <HeroShowcase />
      <WaveDivider from="#0a1828" to="#0f2742" />

      <SpecsGrid />
      <WaveDivider from="#0f2742" to="#0a1828" />

      <FeatureBreakdown />
      <WaveDivider from="#0a1828" to="#0f2742" />

      <EngineeringTelemetry />
      <WaveDivider from="#0a1828" to="#0f2742" />

      <MissionApplications />
      <WaveDivider from="#0f2742" to="#0a1828" />

      <PilotCredentials />

      {/* Existing brand sections preserved, framed by reveal animations */}
      <Box sx={{ background: "#d4e8ff", color: "#0a1828" }}>
        <Reveal>
          <Vision_Section
            title="Our Mission"
            vectorImage={OMV}
            backgroundimage={jadu}
            description="Vymanika Aerospace's mission is to advance the aerospace industry with innovative UAVs and components — high-performance, reliable solutions for diverse industries, driving the future of unmanned aviation."
          />
        </Reveal>
        <Reveal>
          <Vision_Section
            title="Our Vision"
            vectorImage={vsrp}
            backgroundimage={jadu2}
            description="A future where unmanned aerial vehicles seamlessly enhance industries and daily life — leading UAV innovation, setting new standards and unlocking transformative possibilities."
            reverse={true}
            bigDroneImage={false}
          />
        </Reveal>

        <Reveal>
          <GridCard
            data={servicesData}
            title="Our Services"
            onclickEvent={() => navigate("/services")}
            leftImage={
              <Box
                component="img"
                src={smallDrone}
                sx={{
                  position: "absolute",
                  height: { xs: "70px", md: "85px" },
                  zIndex: 100,
                  left: { xs: "0%", sm: "-5%", md: "-5%", lg: "-3%", xl: "-1%" },
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
                  right: { xs: "0%", sm: "-5%", md: "-5%", lg: "-3%", xl: "0%" },
                  top: { xs: "0%", sm: "0%", lg: "6.5%", xl: "2%" },
                  animation: "float 3s ease-in-out infinite",
                }}
              />
            }
          />
        </Reveal>

        <Reveal>
          <SliderCard />
        </Reveal>

        <Reveal>
          <GridCard
            data={trainingData}
            title="Training & Courses"
            onclickEvent={() => navigate("/training")}
          />
        </Reveal>
      </Box>

      <Reveal>
        <DroneBanner />
      </Reveal>
      <Reveal>
        <ContactUsInput />
      </Reveal>
      <AttachImageFooter image={Footerimage} />
      <Footer />
    </Box>
  );
};

export default Home;