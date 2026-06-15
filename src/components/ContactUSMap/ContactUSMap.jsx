import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";
import GoogleMap from "./GoogleMap";
import ContactForm from "./ContactForm";
import smallDrone from "./freepik--drone-1--inject-1-6.png";
import smallDrone5 from "./freepik--drone-1--inject-1-3.png";

const ContactUSMap = () => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <Container
        sx={{
          maxWidth: {
            sm: theme.values.tablet,
            md: theme.values.laptop,
            lg: theme.values.desktop,
            xl: "xl",
            position: "relative",
          },
        }}
      >
        <Box
          component="img"
          src={smallDrone}
          // className="smallDrone"
          sx={{
            position: "absolute",
            height: { xs: "70px", md: "85px" },
            zIndex: 100,
            right: {
              xs: "-0%",
              sm: "-5%",
              md: "-6%",
              lg: "-3%",
              xl: "0%",
            },
            top: { xs: "", lg: "0%", xl: "0%" },
            left: { xs: "100%" },
            display: {
              xs: "none",
              sm: "inline",
            },

            animation: "float 3s ease-in-out infinite",
          }}
        />
        <Box
          component="img"
          src={smallDrone5}
          className="smallDrone"
          sx={{
            position: "absolute",
            height: { xs: "70px", md: "85px" },
            zIndex: 100,
            left: { xs: "-0%", sm: "-10%", md: "-6%", lg: "-5%", xl: "-5%" },
            top: { xs: "66%", sm: "68%", lg: "65%" },
            animation: "float 3s ease-in-out infinite",
            display: {
              xs: "none",
              sm: "inline",
            },
          }}
        />
        {/* Map and Form Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: theme.spacing(4),
            marginTop: theme.spacing(4),
            width: "100%",
            mb: 10,
          }}
        >
          {/* Google Map */}
          <Box
            sx={{
              width: { xs: "100%", md: "49%" },
              height: { xs: "auto", md: "500px" }, // Auto height for small screens
              aspectRatio: { xs: "1 / 1", md: "auto" }, // Square aspect ratio for smaller screens
              border: "1px solid #000000",
              boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
              overflow: "hidden",
            }}
          >
            <GoogleMap />
          </Box>

          {/* Placeholder for Additional Content */}
          <Box
            sx={{
              width: { xs: "100%", md: "49%" },
              height: { xs: "auto", md: "500px" }, // Auto height for small screens
              aspectRatio: { xs: "1 / 1", md: "auto" }, // Square aspect ratio for smaller screens
              border: "1px solid #000000",
              boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
            }}
          >
            <ContactForm />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUSMap;
