import { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
  Alert,
} from "@mui/material";
import { useForm } from "@formspree/react";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutline from "@mui/icons-material/ErrorOutlined";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xeooqrpk");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const success = state.succeeded;
  const visibleError =
    error || (state.errors ? "Something went wrong! Please try again." : "");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError("");
  };

  // Auto-dismiss logic for error
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 5000); // Hide error after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        gutterBottom
        sx={{
          color: "#0047AE",
          fontSize: { xs: "1.8rem", sm: "2.2rem" },
        }}
      >
        Send a Message
      </Typography>

      {/* Success Message */}
      {success && (
        <Alert
          severity="success"
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#0047AE",
            color: "white",
            borderRadius: "0px",
            boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
          }}
          icon={
            <CheckCircleOutline
              sx={{
                color: "white",
                fontSize: "30px",
                mr: 2,
              }}
            />
          }
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color="inherit"
            gutterBottom
          >
            Thank you!
          </Typography>
          <Typography variant="body2" color="inherit">
            Your message has been successfully sent.
          </Typography>
        </Alert>
      )}

      {/* Error Message */}
      {visibleError && (
        <Alert
          severity="error"
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#FDECEA",
            color: "#B71C1C",
            border: "1px solid #F5C2C0",
            borderRadius: "0px",
            boxShadow: "5px 5px 0px rgba(244, 67, 54, 0.5)",
          }}
          icon={
            <ErrorOutline
              sx={{
                color: "#D32F2F",
                fontSize: "30px",
                mr: 2,
              }}
            />
          }
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color="#D32F2F"
            gutterBottom
          >
            Oops!
          </Typography>
          <Typography variant="body2" color="#B71C1C">
            {visibleError}
          </Typography>
        </Alert>
      )}

      {/* Form */}
      {!success && (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            padding: { xs: 2, sm: 3 },
          }}
        >
          <Grid container spacing={2}>
            {/* Name Field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="name"
                placeholder="Name"
                variant="outlined"
                value={formData.name}
                onChange={handleInputChange}
                InputProps={{
                  sx: {
                    border: "1px solid #000000",
                    boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
                    background: "white",
                    borderRadius: "0px",
                  },
                }}
              />
            </Grid>

            {/* Email Field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="email"
                placeholder="E-Mail"
                variant="outlined"
                value={formData.email}
                onChange={handleInputChange}
                InputProps={{
                  sx: {
                    border: "1px solid #000000",
                    boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
                    background: "white",
                    borderRadius: "0px",
                  },
                }}
              />
            </Grid>

            {/* Message Field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="message"
                placeholder="Message"
                variant="outlined"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                InputProps={{
                  sx: {
                    border: "1px solid #000000",
                    boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
                    background: "white",
                    borderRadius: "0px",
                  },
                }}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 3,
              borderRadius: "0px",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              disabled={state.submitting}
              sx={{
                width: "50%",
                backgroundColor: "#0047AE",
                color: "white",
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",
                borderRadius: "0px",
                boxShadow:
                  "0px 5px 0px #003a8c, 0px 8px 15px rgba(0, 71, 174, 0.2)",
                "&:hover": {
                  backgroundColor: "#003a8c",
                  boxShadow:
                    "0px 3px 0px #002b6d, 0px 5px 10px rgba(0, 58, 140, 0.3)",
                },
                transition: "all 0.2s ease",
              }}
            >
              {state.submitting ? "Submitting..." : "Submit"}
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default ContactForm;
