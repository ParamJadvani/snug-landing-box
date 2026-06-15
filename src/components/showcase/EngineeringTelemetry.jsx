import { Box, Container, Stack, Typography } from "@mui/material";
import Reveal from "/src/components/motion/Reveal";
import FloatIn from "/src/components/motion/FloatIn";

import shot1 from "/src/assets/Screenshot 2024-12-07 184837.png";
import shot2 from "/src/assets/Screenshot 2024-12-07 184909.png";
import certification from "/src/assets/SectionImage/Certification-bro.png";
import review from "/src/assets/SectionImage/Online Review-rafiki.png";
import progress from "/src/assets/SectionImage/Progress overview-bro.png";
import stamp from "/src/assets/SectionImage/Stamp collecting-bro.png";
import droneCuate from "/src/assets/SectionImage/drone-cuate.png";

const trustItems = [
  { img: certification, label: "DGCA Certified" },
  { img: stamp, label: "Type Approved" },
  { img: review, label: "Field Validated" },
  { img: progress, label: "Continuous Iteration" },
];

const EngineeringTelemetry = () => {
  return (
    <Box component="section" sx={{ background: "#0a1828", color: "#fff", py: { xs: 10, md: 16 } }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "0.95fr 1.05fr" },
            gap: { xs: 6, md: 10 },
            alignItems: "center",
          }}
        >
          <Box>
            <Reveal>
              <Typography sx={{ fontSize: 12, letterSpacing: "0.32em", color: "#aac4ff", textTransform: "uppercase", mb: 2 }}>
                Engineering Telemetry
              </Typography>
            </Reveal>
            <Reveal delay={0.1}>
              <Typography className="vym-heading" component="h2" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.1, mb: 3 }}>
                A ground station built by pilots, for pilots.
              </Typography>
            </Reveal>
            <Reveal delay={0.2}>
              <Typography sx={{ color: "rgba(230,239,255,0.78)", fontSize: { xs: "1rem", md: "1.1rem" }, lineHeight: 1.75, mb: 4 }}>
                Live flight telemetry, mission timelines, and post-flight analytics
                streamed in real-time. Every parameter from battery temperature to
                attitude drift is logged and replayable.
              </Typography>
            </Reveal>

            <Stack direction="row" spacing={2} flexWrap="wrap" rowGap={2}>
              {trustItems.map((t, i) => (
                <Reveal key={t.label} delay={0.25 + i * 0.07}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      px: 2,
                      py: 1.2,
                      borderRadius: 999,
                      border: "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <Box component="img" src={t.img} alt="" sx={{ width: 32, height: 32, objectFit: "contain" }} />
                    <Typography sx={{ fontSize: 13, color: "#cfd9ff", letterSpacing: "0.05em" }}>
                      {t.label}
                    </Typography>
                  </Box>
                </Reveal>
              ))}
            </Stack>
          </Box>

          <Box sx={{ position: "relative", minHeight: { xs: 360, md: 520 } }}>
            <FloatIn delay={0.1}>
              <Box
                sx={{
                  borderRadius: { xs: "24px", md: "32px" },
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "linear-gradient(160deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                  boxShadow: "0 50px 100px -40px rgba(0,0,0,0.7)",
                  p: { xs: 1.5, md: 2 },
                }}
              >
                <Box
                  component="img"
                  src={shot1}
                  alt="Vymanika mission control overview"
                  sx={{ width: "100%", height: "auto", display: "block", borderRadius: { xs: "18px", md: "24px" } }}
                />
              </Box>
            </FloatIn>
            <FloatIn delay={0.25}>
              <Box
                sx={{
                  position: { xs: "static", md: "absolute" },
                  right: { md: -20 },
                  bottom: { md: -40 },
                  width: { xs: "100%", md: "62%" },
                  mt: { xs: 3, md: 0 },
                  borderRadius: { xs: "24px", md: "28px" },
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "linear-gradient(160deg, rgba(92,118,221,0.18), rgba(0,71,174,0.05))",
                  boxShadow: "0 50px 100px -40px rgba(0,0,0,0.7)",
                  p: { xs: 1.5, md: 2 },
                }}
              >
                <Box
                  component="img"
                  src={shot2}
                  alt="Vymanika telemetry detail"
                  sx={{ width: "100%", height: "auto", display: "block", borderRadius: { xs: "18px", md: "22px" } }}
                />
              </Box>
            </FloatIn>
            <Box
              component="img"
              src={droneCuate}
              alt=""
              aria-hidden
              sx={{
                position: "absolute",
                left: -40,
                top: -60,
                width: 160,
                opacity: 0.18,
                display: { xs: "none", md: "block" },
                pointerEvents: "none",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EngineeringTelemetry;