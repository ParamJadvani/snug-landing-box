import Footer from "./Footer";
import { Box } from "@mui/material";


const AttachImageFooter = ({ image }) => {
  return (
    <Box
      position="relative"
      sx={{
        maxWidth: "100vw",
        overflowX: "hidden",
        marginTop:{
            xs:5,
            sm:10
        }
      }}
    >
      <Box
        component="img"
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        width="100%"
      />
      <Footer />
    </Box>
  );
};

export default AttachImageFooter;
