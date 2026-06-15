import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Reveal from "/src/components/motion/Reveal";
import FloatIn from "/src/components/motion/FloatIn";
import heroBg from "/src/assets/BannerImage/Home.png";
import cloud from "/src/assets/Image PNG/freepik--Cloud--inject-73.png";
import heroDrone from "/src/assets/Image PNG/freepik--drone-1--inject-1.png";

const HeroShowcase = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "92vh", md: "100vh" },
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 20% 10%, rgba(92,118,221,0.35), transparent 55%)," +
          "radial-gradient(ellipse at 80% 90%, rgba(0,71,174,0.45), transparent 60%)," +
          "linear-gradient(180deg, #0a1828 0%, #0f2742 100%)",
        color: "#fff",
        pt: { xs: 12, md: 16 },
        pb: { xs: 10, md: 14 },
      }}
    >
      <Box
        component="img"
        src={heroBg}
        alt=""
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.18,
          filter: "blur(2px) saturate(120%)",
          pointerEvents: "none",
        }}
      />
      <motion.img
        src={cloud}
        alt=""
        aria-hidden
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 0.5 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "12%",
          left: "-4%",
          width: "32%",
          minWidth: 220,
          filter: "blur(1px)",
          pointerEvents: "none",
        }}
      />
      <motion.img
        src={cloud}
        alt=""
        aria-hidden
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 0.35 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
        style={{
          position: "absolute",
          bottom: "8%",
          right: "-6%",
          width: "36%",
          minWidth: 240,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
            gap: { xs: 6, md: 8 },
            alignItems: "center",
          }}
        >
          <Stack spacing={{ xs: 3, md: 4 }}>
            <Reveal delay={0.05}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                  px: 2.2,
                  py: 1,
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  width: "fit-content",
                  fontSize: 13,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#aac4ff",
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#5C76DD",
                    boxShadow: "0 0 14px #5C76DD",
                  }}
                />
                Vymanika Aerospace · UAV Showcase
              </Box>
            </Reveal>

            <Reveal delay={0.15}>
              <Typography
                className="vym-heading"
                component="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "clamp(2.4rem, 9vw, 3.2rem)", md: "clamp(3rem, 5.4vw, 5.2rem)" },
                  lineHeight: 1.02,
                  color: "#ffffff",
                }}
              >
                Engineered to <Box component="span" sx={{ background: "linear-gradient(120deg,#5C76DD,#9fc3ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>defy gravity</Box>,
                designed to deliver.
              </Typography>
            </Reveal>

            <Reveal delay={0.28}>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.18rem" },
                  maxWidth: 620,
                  color: "rgba(230,239,255,0.78)",
                  lineHeight: 1.7,
                }}
              >
                A new generation of autonomous aerial platforms — built for defense,
                mapping, logistics and beyond. Precision avionics. Silent propulsion.
                Mission-grade telemetry.
              </Typography>
            </Reveal>

            <Reveal delay={0.4}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.6,
                    borderRadius: 999,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#fff",
                    background: "linear-gradient(135deg,#0047AE,#5C76DD)",
                    boxShadow: "0 18px 50px -18px rgba(92,118,221,0.9)",
                    "&:hover": {
                      background: "linear-gradient(135deg,#0852c6,#7290f0)",
                      boxShadow: "0 22px 60px -16px rgba(92,118,221,1)",
                    },
                  }}
                >
                  Explore the Fleet
                </Button>
                <Button
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.6,
                    borderRadius: 999,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#e6efff",
                    border: "1px solid rgba(255,255,255,0.24)",
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(10px)",
                    "&:hover": { background: "rgba(255,255,255,0.1)" },
                  }}
                >
                  Request a Demo
                </Button>
              </Stack>
            </Reveal>

            <Reveal delay={0.55}>
              <Stack
                direction="row"
                spacing={{ xs: 3, md: 5 }}
                sx={{ pt: 2, flexWrap: "wrap", rowGap: 2 }}
              >
                {[
                  ["42 min", "Endurance"],
                  ["120 km/h", "Top speed"],
                  ["18 km", "Datalink"],
                ].map(([v, l]) => (
                  <Box key={l}>
                    <Typography className="vym-heading" sx={{ fontSize: "1.6rem", fontWeight: 700, color: "#fff" }}>
                      {v}
                    </Typography>
                    <Typography sx={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(170,196,255,0.75)" }}>
                      {l}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Reveal>
          </Stack>

          <FloatIn delay={0.3}>
            <Box
              sx={{
                position: "relative",
                borderRadius: { xs: "32px", md: "40px" },
                overflow: "hidden",
                background:
                  "radial-gradient(circle at 50% 60%, rgba(92,118,221,0.35), transparent 65%)",
                p: { xs: 3, md: 5 },
                aspectRatio: "1 / 1",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Box
                component="img"
                src={heroDrone}
                alt="Vymanika UAV hero unit"
                sx={{
                  width: { xs: "85%", md: "90%" },
                  maxWidth: 560,
                  filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.55))",
                }}
              />
            </Box>
          </FloatIn>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroShowcase;