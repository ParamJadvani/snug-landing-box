import { Link } from "react-router-dom";
import Home from "@mui/icons-material/Home";
import Info from "@mui/icons-material/Info";
import BuildCircle from "@mui/icons-material/BuildCircle";
import School from "@mui/icons-material/School";
import Email from "@mui/icons-material/Email";
import Article from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import logo from "/src/assets/LOGO.png";
import { preloadRoute } from "/src/utils/routePreload";

const Navbar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const warmRoute = (path) => () => preloadRoute(path);

  const menuItems = [
    { to: "/", label: "Home", icon: <Home /> },
    { to: "/aboutus", label: "About Us", icon: <Info /> },
    { to: "/services", label: "Services", icon: <BuildCircle /> },
    { to: "/training", label: "Training", icon: <School /> },
    { to: "/contact", label: "Contact Us", icon: <Email /> },
    { to: "/blog", label: "Blog", icon: <Article /> },
  ];

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -15 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const linkStyles = {
    textDecoration: "none",
    color: "white",
    fontSize: "1rem",
    fontWeight: 600,
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    display: "inline-block",
    position: "relative",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
  };

  return (
    <LazyMotion features={domAnimation}>
      <AppBar
        position="relative"
        sx={{
          maxWidth: "100vw",
          backgroundColor: theme.navFooterBackgroundColor,
          color: theme.textColor,
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
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Animated Logo */}
            <m.div initial="hidden" animate="visible" variants={logoVariants}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <img
                  src={logo}
                  alt="Logo"
                  style={{ height: "40px", transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform =
                      "scale(1.3) rotate(20deg)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1) rotate(0deg)")
                  }
                />
              </Link>
            </m.div>

            {/* Desktop Menu */}
            {isDesktop ? (
              <Box sx={{ display: "flex", gap: 3 }}>
                {menuItems.map((item, index) => (
                  <m.div
                    key={item.to}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    variants={textVariants}
                    whileHover={{
                      scale: 1.2,
                      color: "#00A8FF",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Link
                      to={item.to}
                      style={linkStyles}
                      onFocus={warmRoute(item.to)}
                      onMouseEnter={(e) => {
                        preloadRoute(item.to);
                        e.currentTarget.style.boxShadow =
                          "0px 5px 15px rgba(0, 71, 174, 0.8)";
                        e.currentTarget.style.transform = "translateY(-5px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {item.label}
                    </Link>
                  </m.div>
                ))}
              </Box>
            ) : (
              // Mobile Menu - Drawer
              <>
                <IconButton
                  sx={{ color: "white" }}
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                  PaperProps={{
                    sx: {
                      width: 250,
                      backgroundColor: "#172831",
                      color: "white",
                    },
                  }}
                >
                  <Box sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                    <IconButton
                      sx={{ alignSelf: "flex-end", color: "white" }}
                      onClick={toggleDrawer(false)}
                    >
                      <CloseIcon />
                    </IconButton>
                    <List>
                      {menuItems.map((item, index) => (
                        <m.div
                          key={item.to}
                          initial="hidden"
                          animate="visible"
                          custom={index}
                          variants={textVariants}
                        >
                          <ListItem
                            button
                            component={Link}
                            to={item.to}
                            onFocus={warmRoute(item.to)}
                            onMouseEnter={warmRoute(item.to)}
                            onClick={toggleDrawer(false)}
                            sx={{
                              justifyContent: "space-between",
                              textAlign: "left",
                              color: "white",
                            }}
                          >
                            <ListItemIcon sx={{ color: "white" }}>
                              {item.icon}
                            </ListItemIcon>
                            <Typography sx={{ width: "100%" }}>
                              {item.label}
                            </Typography>
                          </ListItem>
                        </m.div>
                      ))}
                    </List>
                  </Box>
                </Drawer>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </LazyMotion>
  );
};

export default Navbar;
