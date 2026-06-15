// src/components/SocialIcons.js
import { Box, IconButton, useTheme } from "@mui/material";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const SocialIcons = () => {
  const theme = useTheme(); // Access theme for consistent styling

  // Define hover colors for each icon
  const hoverColors = {
    twitter: "#1DA1F2", // Twitter blue
    linkedin: "#0077b5", // LinkedIn blue
    instagram: "#E1306C", // Instagram pink
    facebook: "#1877F2", // Facebook blue
    youtube: "#FF0000", // YouTube red
  };

  // Social links and their associated hover colors and icons
  const socialLinks = [
    {
      href: "https://x.com/vymanika_aero",
      icon: FaTwitterSquare,
      hoverColor: hoverColors.twitter,
    },
    {
      href: "https://www.linkedin.com/company/vymanika-next-gen-aerospace-technologies/",
      icon: FaLinkedin,
      hoverColor: hoverColors.linkedin,
    },
    {
      href: "https://www.instagram.com/vymanika_aerospace/",
      icon: FaInstagramSquare,
      hoverColor: hoverColors.instagram,
    },
    {
      href: "https://www.facebook.com/profile.php?id=100093604593799&mibextid=ZbWKwL",
      icon: FaFacebookSquare,
      hoverColor: hoverColors.facebook,
    },
    {
      href: "https://www.youtube.com/@vymanikaaerospace",
      icon: FaYoutubeSquare,
      hoverColor: hoverColors.youtube,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: 2, // Gap between icons
        marginTop: 2,
      }}
    >
      {socialLinks.map(({ href, icon: Icon, hoverColor }) => (
        <IconButton
          key={href}
          component="a"
          href={href}
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer" // Security best practice
          sx={{
            color: theme.palette.common.white,
            "&:hover": {
              color: hoverColor,
            },
          }}
        >
          <Icon size={22} />
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialIcons;
