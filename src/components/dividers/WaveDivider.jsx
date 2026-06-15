import { Box } from "@mui/material";

const WaveDivider = ({ from = "#0a1828", to = "#0f2742", flip = false, height = 120 }) => {
  return (
    <Box
      sx={{
        width: "100%",
        lineHeight: 0,
        display: "block",
        transform: flip ? "scaleY(-1)" : "none",
        backgroundColor: from,
      }}
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        style={{ width: "100%", height, display: "block" }}
      >
        <path
          d="M0,96 C240,160 420,16 720,64 C1020,112 1200,144 1440,80 L1440,160 L0,160 Z"
          fill={to}
        />
        <path
          d="M0,120 C260,60 540,170 820,110 C1080,55 1260,130 1440,110 L1440,160 L0,160 Z"
          fill={to}
          opacity="0.55"
        />
      </svg>
    </Box>
  );
};

export default WaveDivider;