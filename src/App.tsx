import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import "./App.css";
import HeroSvg from "./assets/images/hero.svg";

function App() {
  return (
    <>
      <CssBaseline />
      <Grid
        container
        justifyContent="center"
        component="main"
        sx={{ height: "100vh" }}
      >
        {/* component={Paper} elevation={6} square */}
        <Grid item xs={12} sm={8} md={8}>
          <AppBar elevation={0} position="static">
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              disableGutters
            >
              <Box>
                <Typography
                  fontWeight="bold"
                  variant="h5"
                  component="div"
                  sx={{ textTransform: "uppercase" }}
                >
                  Semilla Labs
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Button>How it works</Button>
                <Button>Discord</Button>
                <Button>Docs</Button>
                <Button color="primary" variant="contained" disableElevation>
                  <Typography fontWeight="bold">Login</Typography>
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
          <Grid container mt={12} mb={24}>
            <Grid
              item
              sm={12}
              md={4}
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
              <Typography variant="body1" component="div" mb={6}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                consequuntur quod ab dolorum nemo tempore, quisquam quibusdam
                necessitatibus, officia inventore
              </Typography>
              <Button color="primary" variant="contained" disableElevation>
                <Typography fontWeight="bold">Launch App</Typography>
              </Button>
            </Grid>
            <Grid
              item
              sm={12}
              md={8}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Box
                component="img"
                sx={{ fill: "primary.main" }}
                alt="Now they see it, now they don’t"
                src={HeroSvg}
              />
            </Grid>
          </Grid>
          <Grid mb={24}>
            <Typography textAlign="center" variant="h4">
              Lorem, ipsum.
            </Typography>
            <Typography textAlign="center" variant="body1" color="primary">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Grid container mt={4} columnSpacing={6}>
              <Grid item md={3}>
                <Card variant="outlined" sx={{ borderColor: "primary.main" }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" mb={1}>
                      Lorem
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe ut nemo iste, corrupti eius laboriosam autem
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card variant="outlined" sx={{ borderColor: "primary.main" }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" mb={1}>
                      Lorem
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe ut nemo iste, corrupti eius laboriosam autem
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card variant="outlined" sx={{ borderColor: "primary.main" }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" mb={1}>
                      Lorem
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe ut nemo iste, corrupti eius laboriosam autem
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card variant="outlined" sx={{ borderColor: "primary.main" }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" mb={1}>
                      Lorem
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe ut nemo iste, corrupti eius laboriosam autem
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid mb={24}>
            <Typography textAlign="center" variant="h4">
              Lorem, ipsum.
            </Typography>
            <Typography textAlign="center" variant="body1" color="primary">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </Typography>
            <Grid container mt={4} columnSpacing={6}>
              <Grid item md={3}>
                <Card variant="outlined" sx={{ borderColor: "primary.main" }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" mb={1}>
                      Lorem
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe ut nemo iste, corrupti eius laboriosam autem
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card variant="outlined" sx={{ borderColor: "primary.main" }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" mb={1}>
                      Lorem
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe ut nemo iste, corrupti eius laboriosam autem
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card variant="outlined" sx={{ borderColor: "primary.main" }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" mb={1}>
                      Lorem
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe ut nemo iste, corrupti eius laboriosam autem
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3}>
                <Card variant="outlined" sx={{ borderColor: "primary.main" }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" mb={1}>
                      Lorem
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe ut nemo iste, corrupti eius laboriosam autem
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box textAlign="center" mt={6}>
              <Button variant="outlined">Learn More</Button>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          xs={12}
          component="footer"
          // component={Paper}
          // elevation={6}
          // square
          py={8}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={8}
            container
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              gap: "12rem",
            }}
          >
            <Box>
              <Typography fontWeight="bold" mb={4}>
                Lorem
              </Typography>
              <Typography variant="body2" mb={4}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                neque fuga id inventore maxime asperiores nisi.
              </Typography>
              <Typography variant="body2">
                Copyright &copy; Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight="bold" mb={4}>
                Product
              </Typography>
              <Box mb={0.5}>
                <Link href="#" underline="none">
                  Lorem 1
                </Link>
              </Box>
              <Box mb={0.5}>
                <Link href="#" underline="none">
                  Lorem 2
                </Link>
              </Box>
              <Box mb={0.5}>
                <Link href="#" underline="none">
                  Lorem 3
                </Link>
              </Box>
              <Box mb={0.5}>
                <Link href="#" underline="none">
                  Lorem 4
                </Link>
              </Box>
              <Box mb={0.5}>
                <Link href="#" underline="none">
                  Lorem 5
                </Link>
              </Box>
              <Box>
                <Link href="#" underline="none">
                  Lorem 6
                </Link>
              </Box>
            </Box>
            <Box>
              <Typography fontWeight="bold" mb={4}>
                Social
              </Typography>
              <Box mb={0.5}>
                <Link href="#" underline="none">
                  Discord
                </Link>
              </Box>
              <Box mb={0.5}>
                <Link href="#" underline="none">
                  Telegram
                </Link>
              </Box>
              <Box mb={0.5}>
                <Link href="#" underline="none">
                  Reddit
                </Link>
              </Box>
              <Box mb={0.5}>
                <Link href="#" underline="none">
                  Twitter
                </Link>
              </Box>
              <Box>
                <Link href="#" underline="none">
                  Medium
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
