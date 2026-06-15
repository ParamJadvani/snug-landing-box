import { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  IconButton,
  TextField,
  Typography,
  Snackbar,
} from "@mui/material";
import { IoPaperPlaneOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";

const ContactUsInput = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // Function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSend = () => {
    if (!email) {
      setError("Email field cannot be empty!");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address!");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        { user_email: email }, // Pass email in the template
        "your_user_id" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSuccess(true);
          setEmail(""); // Clear input field
        },
        (error) => {
          console.error("Failed to send email:", error);
          setError("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: theme.spacing(3, 2),
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              color: "#0047AE",
              fontWeight: 900,
              fontStyle: "capitalize",
              mb: theme.spacing(3),
              fontSize: { xs: "1.5rem", sm: "2rem", lg: "2.5rem" },
            }}
          >
            {"contact us".toUpperCase()}
          </Typography>

          <Box
            sx={{
              marginInline: "auto",
              border: "1px solid #000000",
              boxShadow:
                "5px 5px 0px rgba(0, 71, 174, 1), -1px 0px 0px rgba(0, 71, 174, 1)",
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              paddingInline: 1.5,
              backgroundColor: "white",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  backgroundColor: "white",
                  fontSize: "1rem",
                },
                input: {
                  padding: {
                    xs: "8px",
                    sm: "10px",
                  },
                },
              }}
            />

            <IconButton
              size="small"
              onClick={handleSend}
              sx={{
                color: "rgba(0, 71, 174, 1)",
                padding: {
                  xs: "0px",
                  sm: "10px",
                },
                marginLeft: { xs: 0, sm: 1 },
              }}
            >
              <IoPaperPlaneOutline
                style={{
                  fontSize: "20px",
                }}
                size={window.innerWidth < 600 ? 19 : 30}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Snackbar for Error */}
      <Snackbar
        open={Boolean(error)}
        onClose={() => setError(false)}
        autoHideDuration={3000}
        message={error}
      />

      {/* Snackbar for Success */}
      <Snackbar
        open={success}
        onClose={() => setSuccess(false)}
        autoHideDuration={3000}
        message="Congratulations email sent successfully!"
      />
    </div>
  );
};

export default ContactUsInput;
