import { Box, Divider, Grid, Typography, Container } from "@mui/material";
import logo from "../../assets/LOGO.png";
import SocialIcons from "./SocialIcons";
import Section from "./Section";
import { Link } from "react-router-dom";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import LocationOn from "@mui/icons-material/LocationOn";
import { useTheme } from "@emotion/react";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      position="relative"
      sx={{
        maxWidth: "100vw",
        backgroundColor: theme.navFooterBackgroundColor,
        color: theme.textColor,
        overflowX: "hidden",
        marginTop: -2,
      }}
    >
      <Container
        sx={{
          maxWidth: {
            sm: theme.values.tablet,
            md: theme.values.laptop,
            lg: theme.values.desktop,
            xl: "xl",
          },
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: "center",
            textAlign: { xs: "start", lg: "left", md: "center" },
            marginTop: {
              xs: "4%",
              sm: "3%",
              md: "3%",
              lg: "3%",
            },
          }}
        >
          {/* Logo and Social Icons */}
          <Grid item xs={12} lg={3} sx={{ textAlign: "start" }}>
            <Box
              component="img"
              src={logo}
              alt="Vymanika Aerospace Logo"
              loading="lazy"
              decoding="async"
              sx={{
                width: { xs: "100px", sm: "150px" },
                height: "auto",
                mx: { xs: "auto", md: "0" },
                mb: 2,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                lineHeight: 1.5,
                mb: 2,
                letterSpacing: 1.2,
              }}
            >
              Soaring Beyond Limits, Crafting the Future of Aviation - Vymanika
              Aerospace
            </Typography>
            <SocialIcons />
          </Grid>

          {/* Pages Links */}
          <Grid item xs={12} md={6} lg={3}>
            <Section
  title={
    <span
      style={{
        display: "inline-block",
        fontWeight: "bold",
        fontSize: "24px",
        color: "white",
        animation: "3s linear infinite",
      }}
    >
      Pages
    </span>
  }
  padding={8}
  content={
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1.5,
      }}
    >
      {["About Us", "Services", "Training", "Blog"].map((page, idx) => (
        <Link
          key={idx}
          to={`/${page.toLowerCase().replace(/\s+/g, "")}`}
          style={{
            color: theme.palette.common.white,
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: 500,
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.target.style.color = theme.headerTextColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.color = theme.palette.common.white)
          }
        >
          {page}
        </Link>
      ))}
    </Box>
  }
/>



          </Grid>

          {/* Services */}
          <Grid item xs={12} md={6} lg={3}>
            <Section
              title={
                <span
                  style={{
                    display: "inline-block",
                    fontWeight: "bold",
                    fontSize: "24px",
                    color: "white",
                    animation: "3s linear infinite",
                  }}
                >
                  Our Services
                </span>
              }
              content={[
                "Drone Show",
                "Surveying & Mapping",
                "Agriculture Spraying",
                "Wind Turbine Inspection",
              ].map((service, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    fontSize: { xs: "14px", sm: "16px" },
                    color: theme.palette.common.white,
                    lineHeight: 1.5,
                    "&:hover": {
                      color: theme.headerTextColor,
                      cursor: "pointer",
                    },
                  }}
                >
                  {service}
                </Typography>
              ))}
            />
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} lg={3}>
            <Section
              title={
                <span
                  style={{
                    display: "inline-block",
                    fontWeight: "bold",
                    fontSize: "24px",
                    color: "white",
                    animation: "3s linear infinite",
                  }}
                >
                  Contact Info
                </span>
              }
              
              
              isContact={true}
              content={[
                { icon: <Phone />, text: "+91 89053 65128" },
                { icon: <Email />, text: "Vymanikaaerospace@gmail.com" },
                {
                  icon: <LocationOn />,
                  text: "204, Royal Business Hub, Variyav Road, Surat",
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Divider */}
      <Divider sx={{ borderColor: theme.palette.common.white, my: 4 }} />

      <Container maxWidth="xl">
        {/* Footer Bottom */}
        <Box sx={{ textAlign: "center", py: 2 }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              color: theme.palette.common.white,
            }}
          >
            Copyright Vymanika Aerospace @2024 All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
