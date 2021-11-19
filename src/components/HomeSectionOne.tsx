import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import MainInfoCard from "./MainInfoCard";

const HomeSectionOne: React.FC = () => {
  return (
    <Box mb={26}>
      <Typography textAlign="center" variant="h4">
        Lorem, ipsum.
      </Typography>
      <Typography textAlign="center" variant="body1" color="primary">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </Typography>
      <Grid container mt={4} spacing={6}>
        <Grid item sm={6} md={3}>
          <MainInfoCard
            title="Lorem"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                ut nemo iste, corrupti eius laboriosam autem"
            image="https://via.placeholder.com/200"
          />
        </Grid>
        <Grid item sm={6} md={3}>
          <MainInfoCard
            title="Lorem"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                ut nemo iste, corrupti eius laboriosam autem"
            image="https://via.placeholder.com/200"
          />
        </Grid>
        <Grid item sm={6} md={3}>
          <MainInfoCard
            title="Lorem"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                ut nemo iste, corrupti eius laboriosam autem"
            image="https://via.placeholder.com/200"
          />
        </Grid>
        <Grid item sm={6} md={3}>
          <MainInfoCard
            title="Lorem"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                ut nemo iste, corrupti eius laboriosam autem"
            image="https://via.placeholder.com/200"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeSectionOne;
