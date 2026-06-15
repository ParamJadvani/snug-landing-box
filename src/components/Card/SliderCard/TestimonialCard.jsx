import { useState } from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { CSSTransition } from "react-transition-group";
import "/src/css/TestimonialCard.css";
// Random quotes array
const quotes = [
  {
    text: "Reliable drones and training enhanced our surveying efficiency significantly!",
    author: "Mahendrasinh Gohel",
    rating: 4,
  },
  {
    text: "Vymanika Aerospace has transformed our spraying process.",
    author: "Rahul Singh Rathore",
    rating: 5,
  },
  {
    text: "Highly efficient and cost-effective solution.",
    author: "Ankita Arora",
    rating: 4,
  },
];

const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inProp, setInProp] = useState(true);
  const [direction, setDirection] = useState("forward"); // Track direction

  const handleNext = () => {
    setDirection("forward");
    setInProp(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setInProp(true);
    }, 300); // Match this duration with the CSS animation duration
  };

  const handlePrev = () => {
    setDirection("backward");
    setInProp(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
      );
      setInProp(true);
    }, 300);
  };

  const { text, author, rating } = quotes[currentIndex];

  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: {
          xs: 256,
          sm: 320,
        },
        width: "100%",
        marginInline: "auto",
        marginTop: 4,
        mb: {
          lg: 4,
        },
      }}
    >
      {/* Card */}
      <Card
        sx={{
          marginInline: "auto",
          backgroundColor: "transparent",
          border: "1px solid #000000",
          boxShadow:
            "5px 5px 0px rgba(0, 71, 174,1), -1px 0px 0px rgba(0, 71, 174,1)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          maxHeight: 320,
          height: 320,
          paddingInline: 1.5,
        }}
      >
        {/* Animated Content */}
        <CSSTransition
          in={inProp}
          timeout={300}
          classNames={
            direction === "forward" ? "quote-forward" : "quote-backward"
          }
          unmountOnExit
        >
          <CardContent>
            {/* Testimonial Text */}
            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                fontStyle: "italic",
                color: "#333",
                textAlign: "start",
              }}
            >
              {`"${text}"`}
            </Typography>

            {/* Author */}
            <Typography
              variant="body2"
              sx={{
                textAlign: "right",
                fontWeight: 600,
                marginTop: 2,
                color: "#333",
              }}
            >
              - {author}
            </Typography>

            {/* Star Rating */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              {[...Array(5)].map((_, index) =>
                index < rating ? (
                  <Star
                    key={index}
                    sx={{ color: "#FFD700", fontSize: "1.5rem" }}
                  />
                ) : (
                  <StarBorder
                    key={index}
                    sx={{ color: "#FFD700", fontSize: "1.5rem" }}
                  />
                )
              )}
            </Box>
          </CardContent>
        </CSSTransition>
      </Card>

      {/* Navigation Buttons */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "-3.5rem",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          paddingY: 13,
          gap: 1,
          "@media (max-width: 600px)": {
            position: "static",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            marginTop: 5,
            paddingX: 3,
          },
        }}
      >
        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: "transparent",
            border: "1px solid #0047AE",
            color: "#0047AE",
            "&:hover": {
              backgroundColor: "#0047AE",
              color: "white",
            },
          }}
        >
          <ArrowForward sx={{ fontSize: "1.5rem" }} />
        </IconButton>

        <IconButton
          onClick={handlePrev}
          sx={{
            backgroundColor: "transparent",
            color: "#0047AE",
            border: "1px solid #0047AE",
            "&:hover": {
              backgroundColor: "#0047AE",
              color: "white",
            },
          }}
        >
          <ArrowBack sx={{ fontSize: "1.5rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
