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
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar elevation={0} position="static">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            disableGutters
          >
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Typography
                fontWeight="bold"
                variant="h5"
                component="div"
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
            </Box>
            <Box sx={{ display: { sm: "none" } }}>
              <Typography
                fontWeight="bold"
                variant="h5"
                component="div"
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
            </Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Button sx={{ display: { xs: "none", sm: "block" } }}>
                How it works
              </Button>
              <Button>Discord</Button>
              <Button>Docs</Button>
              <Button color="primary" variant="contained" disableElevation>
                <Typography fontWeight="bold">Launch App</Typography>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          display="flex"
          mt={12}
          mb={26}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Box
            order={{ xs: 2, md: 1 }}
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
            <Typography variant="body1" component="div" mb={6}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              consequuntur quod ab dolorum nemo tempore, quisquam quibusdam
              necessitatibus, officia inventore
            </Typography>
            <Button color="primary" variant="contained" disableElevation>
              <Typography fontWeight="bold">Launch App</Typography>
            </Button>
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
              src={HeroSvg}
            />
          </Box>
        </Box>

        <Box mb={26}>
          <Typography textAlign="center" variant="h4">
            Lorem, ipsum.
          </Typography>
          <Typography textAlign="center" variant="body1" color="primary">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Typography>
          <Grid container mt={4} spacing={6}>
            <Grid item sm={6} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
              >
                <img src="https://via.placeholder.com/200" alt="lorem" />
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
                    Lorem
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe ut nemo iste, corrupti eius laboriosam autem
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item sm={6} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
              >
                <img src="https://via.placeholder.com/200" alt="lorem" />
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
                    Lorem
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe ut nemo iste, corrupti eius laboriosam autem
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item sm={6} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
              >
                <img src="https://via.placeholder.com/200" alt="lorem" />
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
                    Lorem
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe ut nemo iste, corrupti eius laboriosam autem
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item sm={6} md={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
              >
                <img src="https://via.placeholder.com/200" alt="lorem" />
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
                    Lorem
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe ut nemo iste, corrupti eius laboriosam autem
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box mb={20}>
          <Typography textAlign="center" variant="h4">
            Lorem, ipsum.
          </Typography>
          <Typography textAlign="center" variant="body1" color="primary">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Typography>
          <Grid container mt={4} spacing={10} justifyContent="center">
            <Grid item sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
              >
                <img src="https://via.placeholder.com/200" alt="lorem" />
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
                    Lorem
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    eos distinctio sapiente quo libero deserunt cumque pariatur
                    minus beatae recusandae ad porro quod, asperiores quisquam
                    magni quia doloribus veritatis. Vitae.
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
              >
                <img src="https://via.placeholder.com/200" alt="lorem" />
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
                    Lorem
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    eos distinctio sapiente quo libero deserunt cumque pariatur
                    minus beatae recusandae ad porro quod, asperiores quisquam
                    magni quia doloribus veritatis. Vitae.
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid item sm={6} md={4}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
              >
                <img src="https://via.placeholder.com/200" alt="lorem" />
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
                    Lorem
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    eos distinctio sapiente quo libero deserunt cumque pariatur
                    minus beatae recusandae ad porro quod, asperiores quisquam
                    magni quia doloribus veritatis. Vitae.
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" mt={6}>
            <Button variant="outlined">Learn More</Button>
          </Box>
        </Box>

        <Box
          py={{ xs: 4, md: 8 }}
          px={{ xs: 6, md: 16 }}
          mb={16}
          display="flex"
          justifyContent="space-between"
          flexDirection={{ xs: "column", sm: "row" }}
          gap={{ xs: 2, md: 0 }}
          sx={{
            backgroundColor: "#e4fdf0",
            borderRadius: "8px",
          }}
        >
          <Box sx={{ flexBasis: "350px" }} flex={{ xs: 1 }}>
            <Typography variant="h4" mb={4} component="div" color="secondary">
              Lorem, ipsum dolor.
            </Typography>
            <Typography
              variant="body1"
              mb={4}
              component="div"
              color="secondary"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              accusantium facere doloribus illum odio voluptas natus dolores
              labore ipsam tempore.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              sx={{ borderRadius: 25 }}
            >
              Join Discord
            </Button>
          </Box>
          <Box
            display="flex"
            justifyContent={{ xs: "center", sm: "flex-end" }}
            alignItems="center"
            flex={{ xs: 1 }}
          >
            <Box height="250px" width="250px">
              <img
                width="100%"
                height="auto"
                src="https://via.placeholder.com/250"
                alt="lorem"
              />
            </Box>
          </Box>
        </Box>

        <Box
          component="footer"
          py={12}
          sx={{
            display: "grid",
            gridTemplateAreas: {
              xs: `
                "copyright copyright"
                "product social"
              `,
              sm: `"copyright product social"`,
              md: `"copyright copyright product social"`,
            },
            gap: { xs: 4, md: 24 },
          }}
        >
          <Box gridArea="copyright">
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
          <Box gridArea="product">
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
          <Box gridArea="social">
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
        </Box>
      </Container>
    </>
  );
}

export default App;
