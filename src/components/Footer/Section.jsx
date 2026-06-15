import { Box, Typography, useTheme } from "@mui/material";

const Section = ({ title, content, isContact, padding = false }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mb: 3,
        paddingLeft: {
          lg: padding ? padding : undefined,
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: theme.palette.common.white,
          fontWeight: 700,
          fontSize: { xs: "18px", sm: "20px" },
          mb: 2,
          letterSpacing: 1.2,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 1.5,
          "& p, & a": {
            fontSize: { xs: "14px", sm: "16px" },
            lineHeight: 1.5,
          },
        }}
      >
        {isContact
          ? content.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  justifyContent: { md: "center", xs: "start", lg: "start" },
                  alignItems: "center",
                  gap: 1.5,
                  "& svg": {
                    color: theme.palette.common.white,
                    fontSize: { xs: "20px", sm: "24px" },
                  },
                }}
              >
                {item.icon}
                <Typography>{item.text}</Typography>
              </Box>
            ))
          : content}
      </Box>
    </Box>
  );
};

export default Section;
