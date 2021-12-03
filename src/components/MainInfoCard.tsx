import React from "react";
import { Button, Typography, Box } from "@mui/material";

const MainInfoCard: React.FC<{
  title: string;
  content: string;
  image: string;
}> = ({ title, content, image }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <img src={image} alt={title} />

      <Button
        variant="outlined"
        color="primary"
        disableElevation
        component="div"
        fullWidth
        sx={{
          display: "block",
          px: 2,
          py: 3,
          textTransform: "capitalize",
        }}
      >
        <Typography
          variant="h6"
          color="primary"
          mb={1}
          sx={{ textTransform: "uppercase" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {content}
        </Typography>
      </Button>
    </Box>
  );
};

export default MainInfoCard;
