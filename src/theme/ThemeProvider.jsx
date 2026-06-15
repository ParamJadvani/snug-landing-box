import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";

const theme = createTheme({
  sectionbackgroundColor: "#D4E8FF",
  navFooterBackgroundColor: "#172831",
  headerTextColor: "#0047AE",
  boxBorderColor: "#263266",
  textColor: "#FFFFFF",

  values: {
    tablet: 550,
    laptop: 850,
    desktop: 1150,
  },
  fontsize: {
    xs: "1rem",
    sm: "1.5rem",
    md: "1.7rem",
    lg: "1.9rem",
    xl: "2.4rem",
  },
});

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
