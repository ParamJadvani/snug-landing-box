import { Box, Container, Stack, Typography } from "@mui/material";
import Reveal from "/src/components/motion/Reveal";
import FloatIn from "/src/components/motion/FloatIn";

import drone2 from "/src/assets/Image PNG/freepik--drone-2--inject-1.png";
import drone2b from "/src/assets/Image PNG/freepik--drone-2--inject-1 copy.png";
import drone3 from "/src/assets/Image PNG/freepik--drone-3--inject-1.png";
import drone3b from "/src/assets/Image PNG/freepik--drone-3--inject-1 copy.png";

const features = [
  {
    image: drone2,
    eyebrow: "Aerodynamic Frame",
    title: "A monocoque shell shaped by airflow.",
    body: "CFD-tuned composite chassis reduces drag by 23%, while internal channels route heat away from the avionics core for sustained high-load missions.",
    bullets: ["Carbon-Kevlar composite", "Internal cable routing", "Modular payload bay"],
  },
  {
    image: drone3,
    eyebrow: "Flight Controller",
    title: "Triple-redundant autopilot stack.",
    body: "Three independent IMUs cross-verify attitude 1,000× per second. If one disagrees, the swarm continues — no aborted missions, no compromised data.",
    bullets: ["1 kHz attitude loop", "Hot-swappable IMUs", "Failsafe RTH in 0.4 s"],
    reverse: true,
  },
  {
    image: drone2b,
    eyebrow: "Vision System",
    title: "Sees what pilots miss.",
    body: "A six-camera stereo array fuses with onboard LiDAR for centimetre-accurate obstacle avoidance, day or night, in dust, rain or fog.",
    bullets: ["6× stereo cameras", "Solid-state LiDAR", "Edge-inference NPU"],
  },
  {
    image: drone3b,
    eyebrow: "Swarm Software",
    title: "One pilot. Many wings.",
    body: "Mission planner coordinates up to 64 aircraft in synchronised flight — for shows, surveys or persistent overwatch — all from a single ruggedised tablet.",
    bullets: ["Up to 64 units", "Mesh comms", "Offline mission cache"],
    reverse: true,
  },
];

const FeatureBreakdown = () => {
  return (
    <Box component="section" sx={{ background: "#0a1828", color: "#fff", py: { xs: 10, md: 16 } }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", maxWidth: 780, mx: "auto", mb: { xs: 8, md: 12 } }}>
          <Reveal>
            <Typography sx={{ fontSize: 12, letterSpacing: "0.32em", color: "#aac4ff", textTransform: "uppercase", mb: 2 }}>
              Aerodynamic Breakdown
            </Typography>
          </Reveal>
          <Reveal delay={0.1}>
            <Typography className="vym-heading" component="h2" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.1 }}>
              Every component, deliberately engineered.
            </Typography>
          </Reveal>
        </Box>

        <Stack spacing={{ xs: 10, md: 16 }}>
          {features.map((f, i) => (
            <Box
              key={f.title}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: { xs: 5, md: 10 },
                alignItems: "center",
              }}
            >
              <FloatIn
                delay={0.05}
                style={{ order: f.reverse ? 2 : 1 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: { xs: "28px", md: "40px" },
                    p: { xs: 3, md: 5 },
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(92,118,221,0.25), transparent 65%)," +
                      "linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                    border: "1px solid rgba(255,255,255,0.08)",
                    overflow: "hidden",
                    aspectRatio: "5 / 4",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={f.image}
                    alt={f.title}
                    sx={{
                      width: { xs: "82%", md: "85%" },
                      filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.55))",
                    }}
                  />
                </Box>
              </FloatIn>

              <Box sx={{ order: f.reverse ? 1 : 2 }}>
                <Reveal delay={0.05}>
                  <Typography sx={{ fontSize: 12, letterSpacing: "0.3em", color: "#5C76DD", textTransform: "uppercase", mb: 2 }}>
                    {f.eyebrow}
                  </Typography>
                </Reveal>
                <Reveal delay={0.15}>
                  <Typography className="vym-heading" component="h3" sx={{ fontWeight: 700, fontSize: { xs: "1.8rem", md: "2.4rem" }, lineHeight: 1.15, mb: 2.5 }}>
                    {f.title}
                  </Typography>
                </Reveal>
                <Reveal delay={0.25}>
                  <Typography sx={{ color: "rgba(230,239,255,0.75)", fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.75, mb: 3 }}>
                    {f.body}
                  </Typography>
                </Reveal>
                <Stack direction="row" spacing={1.2} flexWrap="wrap" rowGap={1.2}>
                  {f.bullets.map((b, bi) => (
                    <Reveal key={b} delay={0.3 + bi * 0.06}>
                      <Box
                        sx={{
                          px: 2,
                          py: 0.8,
                          borderRadius: 999,
                          fontSize: 13,
                          color: "#cfd9ff",
                          border: "1px solid rgba(255,255,255,0.12)",
                          background: "rgba(255,255,255,0.04)",
                        }}
                      >
                        {b}
                      </Box>
                    </Reveal>
                  ))}
                </Stack>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default FeatureBreakdown;