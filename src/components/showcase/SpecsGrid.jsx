import { Box, Container, Typography } from "@mui/material";
import Reveal from "/src/components/motion/Reveal";
import FloatIn from "/src/components/motion/FloatIn";

import iconDrone from "/src/assets/CardImage/drone.png";
import iconDrone1 from "/src/assets/CardImage/drone (1).png";
import iconDelivery from "/src/assets/CardImage/drone-delivery.png";
import iconFactory from "/src/assets/CardImage/electric-factory.png";
import iconRenew from "/src/assets/CardImage/renewable-energy.png";
import iconSolar from "/src/assets/CardImage/solar-energy.png";

import thumb1 from "/src/assets/Image PNG/freepik--drone-1--inject-1-1.png";
import thumb3 from "/src/assets/Image PNG/freepik--drone-1--inject-1-3.png";
import thumb4 from "/src/assets/Image PNG/freepik--drone-1--inject-1-4.png";
import thumb5 from "/src/assets/Image PNG/freepik--drone-1--inject-1-5.png";
import thumb6 from "/src/assets/Image PNG/freepik--drone-1--inject-1-6.png";
import thumbGroup from "/src/assets/Image PNG/Group.png";

const specs = [
  { icon: iconDrone, art: thumb1, value: "42 min", label: "Flight Endurance", caption: "Single-charge mission window with full payload." },
  { icon: iconDrone1, art: thumb3, value: "120 km/h", label: "Top Speed", caption: "Aerodynamic carbon shell, vectored thrust." },
  { icon: iconDelivery, art: thumb4, value: "18 km", label: "Datalink Range", caption: "Encrypted dual-band C2 with mesh fallback." },
  { icon: iconFactory, art: thumb5, value: "6.5 kg", label: "Max Payload", caption: "Modular bay for optics, LiDAR or delivery." },
  { icon: iconRenew, art: thumb6, value: "5,800 m", label: "Service Ceiling", caption: "High-altitude stability with sealed motors." },
  { icon: iconSolar, art: thumbGroup, value: "± 2 cm", label: "RTK Precision", caption: "Survey-grade GNSS with multi-constellation lock." },
];

const SpecsGrid = () => {
  return (
    <Box component="section" sx={{ background: "#0f2742", color: "#fff", py: { xs: 10, md: 16 } }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: { xs: 6, md: 10 } }}>
          <Reveal>
            <Typography sx={{ fontSize: 12, letterSpacing: "0.32em", color: "#aac4ff", textTransform: "uppercase", mb: 2 }}>
              Core Technical Specs
            </Typography>
          </Reveal>
          <Reveal delay={0.1}>
            <Typography className="vym-heading" component="h2" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.1 }}>
              Telemetry that speaks for itself.
            </Typography>
          </Reveal>
          <Reveal delay={0.2}>
            <Typography sx={{ mt: 2, color: "rgba(230,239,255,0.72)", fontSize: { xs: "1rem", md: "1.1rem" } }}>
              Six engineered systems, one airframe. Every figure measured in our test bay.
            </Typography>
          </Reveal>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 4 },
          }}
        >
          {specs.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  borderRadius: { xs: "24px", md: "32px" },
                  p: { xs: 3, md: 4 },
                  background: "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(14px)",
                  boxShadow: "0 30px 80px -40px rgba(92,118,221,0.55)",
                  overflow: "hidden",
                  transition: "transform .4s ease, box-shadow .4s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 40px 90px -30px rgba(92,118,221,0.75)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={s.art}
                  alt=""
                  aria-hidden
                  sx={{
                    position: "absolute",
                    right: -30,
                    top: -20,
                    width: 180,
                    opacity: 0.18,
                    pointerEvents: "none",
                  }}
                />
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, rgba(92,118,221,0.35), rgba(0,71,174,0.25))",
                    display: "grid",
                    placeItems: "center",
                    mb: 3,
                  }}
                >
                  <Box component="img" src={s.icon} alt="" sx={{ width: 32, height: 32, objectFit: "contain" }} />
                </Box>
                <Typography className="vym-heading" sx={{ fontSize: { xs: "2.2rem", md: "2.6rem" }, fontWeight: 700, lineHeight: 1 }}>
                  {s.value}
                </Typography>
                <Typography sx={{ mt: 1.5, fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase", color: "#aac4ff" }}>
                  {s.label}
                </Typography>
                <Typography sx={{ mt: 2, color: "rgba(230,239,255,0.72)", fontSize: ".98rem", lineHeight: 1.65 }}>
                  {s.caption}
                </Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SpecsGrid;