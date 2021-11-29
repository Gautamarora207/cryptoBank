import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

import MainInfoCard from "./MainInfoCard";

const HomeSectionTwo: React.FC = () => {
  return (
    <Box mb={20}>
      <Typography textAlign="center" variant="h4">
        Lorem, ipsum.
      </Typography>
      <Typography textAlign="center" variant="body2" color="primary">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Typography>
      <Grid container mt={4} spacing={10} justifyContent="center">
        <Grid item sm={6} md={4}>
          <MainInfoCard
            title="Lorem"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos
            distinctio sapiente quo libero deserunt cumque pariatur minus
            beatae recusandae ad porro quod, asperiores quisquam magni quia
            doloribus veritatis. Vitae."
            image="https://via.placeholder.com/200"
          />
        </Grid>
        <Grid item sm={6} md={4}>
          <MainInfoCard
            title="Lorem"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos
            distinctio sapiente quo libero deserunt cumque pariatur minus
            beatae recusandae ad porro quod, asperiores quisquam magni quia
            doloribus veritatis. Vitae."
            image="https://via.placeholder.com/200"
          />
        </Grid>
        <Grid item sm={6} md={4}>
          <MainInfoCard
            title="Lorem"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos
            distinctio sapiente quo libero deserunt cumque pariatur minus
            beatae recusandae ad porro quod, asperiores quisquam magni quia
            doloribus veritatis. Vitae."
            image="https://via.placeholder.com/200"
          />
        </Grid>
      </Grid>
      <Box textAlign="center" mt={6}>
        <Button variant="outlined">Learn More</Button>
      </Box>
    </Box>
  );
};

export default HomeSectionTwo;
