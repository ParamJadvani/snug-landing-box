import { Box, Container, Typography } from "@mui/material";
import Reveal from "/src/components/motion/Reveal";

import pilot from "/src/assets/CardImage/pilot.png";
import support from "/src/assets/CardImage/support.png";
import winner from "/src/assets/CardImage/winner.png";
import racing from "/src/assets/CardImage/racing-game.png";

const items = [
  { img: pilot, title: "Certified Pilots", body: "DGCA RPC-trained instructors with thousands of logged hours." },
  { img: winner, title: "Award-Winning Builds", body: "National-level recognition for design, performance and safety." },
  { img: racing, title: "Pro-Sport Tested", body: "Race-grade frames validated under extreme G-loading." },
  { img: support, title: "24/7 Mission Support", body: "Live operations desk for fleet customers worldwide." },
];

const PilotCredentials = () => {
  return (
    <Box component="section" sx={{ background: "#0a1828", color: "#fff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: { xs: 6, md: 8 } }}>
          <Reveal>
            <Typography sx={{ fontSize: 12, letterSpacing: "0.32em", color: "#aac4ff", textTransform: "uppercase", mb: 2 }}>
              Pilot Experience
            </Typography>
          </Reveal>
          <Reveal delay={0.1}>
            <Typography className="vym-heading" component="h2" sx={{ fontWeight: 700, fontSize: { xs: "1.8rem", md: "2.4rem" } }}>
              Backed by people who actually fly.
            </Typography>
          </Reveal>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <Box
                sx={{
                  borderRadius: { xs: "20px", md: "28px" },
                  p: { xs: 2.5, md: 3.5 },
                  background: "linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    mx: "auto",
                    mb: 2.5,
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, rgba(92,118,221,0.3), rgba(0,71,174,0.18))",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Box component="img" src={it.img} alt="" sx={{ width: 36, height: 36, objectFit: "contain" }} />
                </Box>
                <Typography className="vym-heading" sx={{ fontSize: { xs: "1rem", md: "1.15rem" }, fontWeight: 600, mb: 1 }}>
                  {it.title}
                </Typography>
                <Typography sx={{ color: "rgba(230,239,255,0.7)", fontSize: ".92rem", lineHeight: 1.6 }}>
                  {it.body}
                </Typography>
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PilotCredentials;