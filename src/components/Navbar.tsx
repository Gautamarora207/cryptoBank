import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <AppBar elevation={0} position="static" sx={{ mb: 8 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        disableGutters
      >
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              fontWeight="bold"
              variant="h5"
              component="div"
              color="text.primary"
              sx={{ textTransform: "uppercase" }}
            >
              Semilla{" "}
              <Typography
                component="span"
                variant="h5"
                fontWeight="bold"
                color="primary"
              >
                Labs
              </Typography>
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: { sm: "none" } }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              fontWeight="bold"
              variant="h5"
              component="div"
              color="text.primary"
              sx={{ textTransform: "uppercase" }}
            >
              S{" "}
              <Typography
                component="span"
                variant="h5"
                fontWeight="bold"
                color="primary"
              >
                L
              </Typography>
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Link to="/lorem1" style={{ textDecoration: "none" }}>
            <Button>Lorem 1</Button>
          </Link>
          <Button sx={{ display: { xs: "none", sm: "block" } }}>Discord</Button>
          <Link to="/lorem2" style={{ textDecoration: "none" }}>
            <Button>Lorem 2</Button>
          </Link>
          <Link to="/account" style={{ textDecoration: "none" }}>
            <Button color="primary" variant="contained" disableElevation>
              <Typography fontWeight="bold">Launch App</Typography>
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
