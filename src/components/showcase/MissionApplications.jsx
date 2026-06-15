import { Box, Container, Typography } from "@mui/material";
import Reveal from "/src/components/motion/Reveal";
import FloatIn from "/src/components/motion/FloatIn";

import defense from "/src/assets/Image PNG/Drone surveillance-bro.png";
import surveillance from "/src/assets/Image PNG/Drone surveillance-cuate 1.png";
import racing from "/src/assets/Image PNG/Drone race-pana 1.png";
import amico from "/src/assets/Image PNG/drone-amico.png";
import bro from "/src/assets/Image PNG/drone-bro.png";
import mapping from "/src/assets/CardImage/mapping.png";
import farm from "/src/assets/CardImage/smart-farm.png";
import frame187 from "/src/assets/Image PNG/Frame 187.png";
import group55 from "/src/assets/Image PNG/Group 55.png";

const missions = [
  { image: defense, icon: frame187, tag: "Defense", title: "Persistent overwatch & ISR", body: "Long-endurance patrols with encrypted video, GPS-denied navigation and silent thrust profiles." },
  { image: surveillance, icon: group55, tag: "Surveillance", title: "Border & infrastructure watch", body: "Autonomous corridor patrols with anomaly detection and automatic incident handoff." },
  { image: mapping, icon: mapping, tag: "Mapping & Survey", title: "Survey-grade terrain capture", body: "RTK-precision photogrammetry and LiDAR for mining, civil and urban planning workflows." },
  { image: amico, icon: farm, tag: "Agriculture", title: "Precision spraying & scouting", body: "Multispectral imaging guides variable-rate spraying — less chemical, more yield." },
  { image: bro, icon: frame187, tag: "Logistics", title: "Last-mile aerial delivery", body: "Vertical take-off cargo carriers for medical, retail and remote-site resupply." },
  { image: racing, icon: group55, tag: "Sport & Cinema", title: "Cinematic and racing builds", body: "Ultra-light frames with broadcast-grade gimbals for live sport and film production." },
];

const MissionApplications = () => {
  return (
    <Box component="section" sx={{ background: "#0f2742", color: "#fff", py: { xs: 10, md: 16 } }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: { xs: 6, md: 10 } }}>
          <Reveal>
            <Typography sx={{ fontSize: 12, letterSpacing: "0.32em", color: "#aac4ff", textTransform: "uppercase", mb: 2 }}>
              Mission Applications
            </Typography>
          </Reveal>
          <Reveal delay={0.1}>
            <Typography className="vym-heading" component="h2" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.1 }}>
              One platform. Six theatres of operation.
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
          {missions.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.07}>
              <Box
                sx={{
                  height: "100%",
                  borderRadius: { xs: "24px", md: "32px" },
                  overflow: "hidden",
                  background: "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform .4s ease, box-shadow .4s ease",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: "0 40px 90px -30px rgba(92,118,221,0.7)" },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    aspectRatio: "16 / 11",
                    background:
                      "radial-gradient(circle at 50% 65%, rgba(92,118,221,0.35), transparent 65%)," +
                      "linear-gradient(180deg, #122c4c, #0a1828)",
                    display: "grid",
                    placeItems: "center",
                    overflow: "hidden",
                  }}
                >
                  <FloatIn>
                    <Box component="img" src={m.image} alt={m.title} sx={{ width: "75%", maxWidth: 360, filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }} />
                  </FloatIn>
                </Box>
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                    <Box component="img" src={m.icon} alt="" sx={{ width: 28, height: 28, objectFit: "contain" }} />
                    <Typography sx={{ fontSize: 12, letterSpacing: "0.28em", textTransform: "uppercase", color: "#aac4ff" }}>
                      {m.tag}
                    </Typography>
                  </Box>
                  <Typography className="vym-heading" sx={{ fontSize: { xs: "1.25rem", md: "1.4rem" }, fontWeight: 600, mb: 1.5 }}>
                    {m.title}
                  </Typography>
                  <Typography sx={{ color: "rgba(230,239,255,0.72)", fontSize: ".98rem", lineHeight: 1.65 }}>
                    {m.body}
                  </Typography>
                </Box>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MissionApplications;