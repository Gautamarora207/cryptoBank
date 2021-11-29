import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Box } from "@mui/material";

import HeroImg from "../assets/images/hero.png";

const HomeHero: React.FC = () => {
  return (
    <Box display="flex" mb={26} flexDirection={{ xs: "column", sm: "row" }}>
      <Box
        order={{ xs: 2, sm: 1 }}
        flex={{ xs: 1 }}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" component="div" mb={6}>
          Lorem
          <Typography variant="h2" component="span" color="primary">
            {" ipsum dolor "}
          </Typography>
          sit amet
        </Typography>

        <Typography variant="body2" component="div" mb={6}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          consequuntur quod ab dolorum nemo tempore, quisquam quibusdam
          necessitatibus, officia inventore
        </Typography>
        <Link to="/account" style={{ textDecoration: "none" }}>
          <Button color="primary" variant="contained" disableElevation>
            <Typography fontWeight="bold">Launch App</Typography>
          </Button>
        </Link>
      </Box>

      <Box
        order={{ xs: 1, md: 2 }}
        flex={{ xs: 1 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box
          width="100%"
          height="auto"
          component="img"
          alt="Now they see it, now they don’t"
          src={HeroImg}
        />
      </Box>
    </Box>
  );
};

export default HomeHero;
