import Navbar from "/src/components/Navbar";
import Banner from "/src/components/Banner";
import { Box, Typography, useMediaQuery } from "@mui/material";
import cu from "/src/assets/BannerImage/Contactus.png";
import { FaLocationDot } from "react-icons/fa6";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import { useTheme } from "@emotion/react";
import ContactUSMap from "../components/ContactUSMap/ContactUSMap";
import AttachImageFooter from "../components/Footer/AttachImageFooter";
import Footerimage from "/src/assets/Image PNG/Group 55.png";
import smallDrone4 from "../assets/Image PNG/freepik--drone-3--inject-1.png";

const ContactUS = () => {
  const theme = useTheme();
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <Banner
        image={cu}
        contentDiv={
          <Box
            sx={{
              textAlign: "start",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Box
              component="img"
              src={smallDrone4}
              className="smallDroneDroneBanner"
              sx={{
                position: "absolute",
                height: { xs: "70px", md: "85px" },
                zIndex: 100,
                left: {
                  xs: "-1.5%",
                  sm: "-7%",
                  md: "-5%",
                  lg: "-5%",
                  xl: "-4%",
                },
                top: { xs: "2%", sm: "56%", md: "53%", lg: "1%", xl: "5%" },
                animation: "float 4s ease-in-out infinite",
              }}
            />
            {/* Title */}
            <Typography
              variant={isXL ? "h3" : isSmall ? "h5" : "h4"}
              sx={{
                fontWeight: "900",
                fontsize: {
                  xs: theme.fontsize.xs,
                  sm: theme.fontsize.sm,
                  md: theme.fontsize.md,
                  lg: theme.fontsize.lg,
                  xl: theme.fontsize.xl,
                },
                color: theme.headerTextColor,
                marginBottom: { xs: 2, sm: 3 },
                textAlign: "start",
                width: "100%",
                textTransform: "Uppercase",
              }}
            >
              CONTACT US
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                lineHeight: { xs: 1.4, sm: 1.6, md: 1.8 },
                marginBottom: { xs: 2, sm: 3 },
                textAlign: { xs: "justify", md: "start" },
                maxWidth: "100%",
              }}
            >
              We at Vymanika Aerospace are always here to help! Whether you have
              questions, need assistance, or want to collaborate, feel free to
              reach out to us.
            </Typography>

            {/* Contact Info */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "justify", md: "flex-start" },
                gap: { xs: 2, sm: 3 },
                width: "100%",
                maxWidth: "100%",
              }}
            >
              {/* Phone */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.5, sm: 2 },
                  justifyContent: "start",
                  width: "100%",
                }}
              >
                <Phone
                  sx={{
                    fontSize: {
                      xs: "1.2rem",
                      sm: "1.5rem",
                    },
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    textAlign: "start",
                    flex: 1,
                  }}
                >
                  +91 89053 65128
                </Typography>
              </Box>

              {/* Email */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.5, sm: 2 },
                  justifyContent: "start",
                  width: "100%",
                }}
              >
                <Email sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1.2rem" },
                    textAlign: "justify",
                    width: "100%",
                  }}
                >
                  Vymanikaaerospace@gmail.com
                </Typography>
              </Box>

              {/* Address */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.5, sm: 2 },
                  justifyContent: { xs: "start", md: "start" },
                  width: "100%",
                }}
              >
                <FaLocationDot style={{ fontSize: "1.2rem" }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    textAlign: { xs: "justify", md: "start" },
                    width: "100%",
                  }}
                >
                  204, Royal Business Hub, Variyav Road, Surat
                </Typography>
              </Box>
            </Box>
          </Box>
        }
      />

      {/* Contact US Map */}

      <ContactUSMap />

      {/* Footer */}
      <AttachImageFooter image={Footerimage} />
    </>
  );
};

export default ContactUS;
