import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

const ResponsiveCard = ({ image, title, description }) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: {
            xs: 256,
            md: 320,
          },
          width: 320,
          backgroundColor: "transparent",
          border: "1px solid #000000",
          boxShadow:
            "5px 5px 0px  rgba(0, 71, 174,1), -1px 0px 0px rgba(0, 71, 174,1)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflow: "hidden",
          maxHeight: 320,
          height: 320,
          paddingInline: 1.5,
          borderRadius: 0,
          // marginInline: index > 2 ? "auto" : undefined,
        }}
      >
        {/* Icon Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            marginTop: 6,
          }}
        >
          <CardMedia
            component="img"
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            sx={{
              height: 60,
              width: 60,
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Title and Description Section */}
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignitems: "center",
            justifyContent: "sapce-between",
            overflow: "hidden",
            marginTop: 1,
            padding: 0,
          }}
        >
          <Typography
            component="div"
            sx={{
              fontWeight: 800,
              color: "#000000",
              textAlign: "start",
              fontSize: {
                xs: "0.85rem",
                sm: "1rem",
                md: "0.9rem",
                lg: "1.1rem",
              },
              height: "30%",
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              height: "75%",
            }}
          >
            <Typography
              variant="body2"
              color="#000000"
              sx={{
                textAlign: "start",
                marginTop: 1,
                fontWeight: 500,
                fontSize: {
                  xs: "0.95rem",
                  lg: "1.01rem",
                },
                fontsize: "1.01rem",
              }}
            >
              {description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default ResponsiveCard;
