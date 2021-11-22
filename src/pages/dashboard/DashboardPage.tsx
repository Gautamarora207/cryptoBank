import React from "react";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GetAppIcon from "@mui/icons-material/GetApp";
import IosShareIcon from "@mui/icons-material/IosShare";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CardHeader,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const DashboardPage: React.FC = () => {
  const assetBalances = [
    {
      name: "CELO",
      percentage: "0",
      balance: "0",
      balanceAmount: "0",
      creditAvailable: "0",
      apr: "0.00002",
    },
    {
      name: "cUSD",
      percentage: "0",
      balance: "0",
      balanceAmount: "0",
      creditAvailable: "0",
      apr: "1.4449",
    },
    {
      name: "cEUR",
      percentage: "0",
      balance: "0",
      balanceAmount: "0",
      creditAvailable: "0",
      apr: "0.42996",
    },
    {
      name: "CELO",
      percentage: "0",
      balance: "0",
      balanceAmount: "0",
      creditAvailable: "0",
      apr: "0.00002",
    },
    {
      name: "cUSD",
      percentage: "0",
      balance: "0",
      balanceAmount: "0",
      creditAvailable: "0",
      apr: "1.4449",
    },
    {
      name: "cEUR",
      percentage: "0",
      balance: "0",
      balanceAmount: "0",
      creditAvailable: "0",
      apr: "0.42996",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box display="flex" alignItems="center" py={2} mb={12}>
        <Box flex="1">
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

        <Box display="flex" flex="1" justifyContent="center" gap={2}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Typography
              color="text.primary"
              sx={[
                {
                  "&:hover": { color: "primary.main" },
                },
              ]}
            >
              Portfolio
            </Typography>
          </Link>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Typography
              color="text.primary"
              sx={[
                {
                  "&:hover": { color: "primary.main" },
                },
              ]}
            >
              Send & Request
            </Typography>
          </Link>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Typography
              color="text.primary"
              sx={[
                {
                  "&:hover": { color: "primary.main" },
                },
              ]}
            >
              Loans
            </Typography>
          </Link>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Typography
              color="text.primary"
              sx={[
                {
                  "&:hover": { color: "primary.main" },
                },
              ]}
            >
              Docs
            </Typography>
          </Link>
        </Box>

        <Box display="flex" flex="1" justifyContent="flex-end" gap={2}>
          <Button
            color="primary"
            sx={{ background: "rgba(239, 108, 0, 0.08)" }}
          >
            <LanguageIcon />
            <Box component="span" ml={1}>
              Celo
            </Box>
          </Button>
          <Button
            color="primary"
            sx={{ background: "rgba(239, 108, 0, 0.08)" }}
          >
            <PersonOutlineIcon />
            <Box component="span" ml={1}>
              0xc64b..8b4c7
            </Box>
          </Button>
        </Box>
      </Box>

      <Box mb={12}>
        <Typography variant="h6" component="div" mb={3}>
          Your Wallet
        </Typography>
        <Grid container rowSpacing={4} columnSpacing={4}>
          <Grid md={4} item>
            <Card variant="outlined" sx={{ borderRadius: 4, height: "100%" }}>
              <Paper sx={{ height: "100%" }}>
                <CardContent sx={{ padding: 3 }}>
                  <Typography mb={1} variant="body2" sx={{ color: "#aaa" }}>
                    Wallet Balance
                  </Typography>
                  <Typography mb={2} variant="h4" component="div">
                    $0
                  </Typography>
                  <Button
                    variant="contained"
                    disableElevation
                    size="small"
                    sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                  >
                    <GetAppIcon fontSize="small" />
                    Deposit
                  </Button>
                </CardContent>
              </Paper>
            </Card>
          </Grid>

          <Grid md={4} item>
            <Card variant="outlined" sx={{ borderRadius: 4, height: "100%" }}>
              <Paper sx={{ height: "100%" }}>
                <CardContent sx={{ padding: 3 }}>
                  <Typography mb={1} variant="body2" sx={{ color: "#aaa" }}>
                    Stats
                  </Typography>
                  <Typography
                    mb={2}
                    variant="h4"
                    color="success.main"
                    component="div"
                  >
                    TVL $1,604,377.15
                  </Typography>
                </CardContent>
              </Paper>
            </Card>
          </Grid>

          <Grid md={4} item>
            <Card variant="outlined" sx={{ borderRadius: 4, height: "100%" }}>
              <Paper sx={{ height: "100%" }}>
                <CardContent sx={{ padding: 3 }}>
                  <Typography mb={1} variant="body2" sx={{ color: "#aaa" }}>
                    Loans
                  </Typography>
                  <Typography mb={2} variant="h4" component="div">
                    $0
                  </Typography>
                  <Box display="flex" gap={2}>
                    <Button
                      disableElevation
                      size="small"
                      variant="contained"
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <IosShareIcon fontSize="small" />
                      Repay
                    </Button>
                    Available Credit: $0
                  </Box>
                </CardContent>
              </Paper>
            </Card>
          </Grid>

          <Grid md={4} item>
            <Card
              variant="outlined"
              sx={[
                {
                  borderRadius: 4,
                  height: "100%",
                  cursor: "pointer",
                },
                {
                  "&:hover": {
                    background: "rgba(239, 108, 0, 0.08)",
                  },
                },
              ]}
            >
              <CardContent sx={{ padding: 3, display: "flex", gap: 2 }}>
                <Box>
                  <IconButton
                    color="primary"
                    sx={{ background: "rgba(239, 108, 0, 0.08)" }}
                  >
                    <UploadIcon fontSize="large" />
                  </IconButton>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography fontWeight="bold">Send</Typography>
                  <Typography variant="body2">
                    Send crypto to privately to any celo user
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid md={4} item>
            <Card
              variant="outlined"
              sx={[
                {
                  borderRadius: 4,
                  height: "100%",
                  cursor: "pointer",
                },
                {
                  "&:hover": {
                    background: "rgba(239, 108, 0, 0.08)",
                  },
                },
              ]}
            >
              <CardContent sx={{ padding: 3, display: "flex", gap: 2 }}>
                <Box>
                  <IconButton
                    color="primary"
                    sx={{ background: "rgba(239, 108, 0, 0.08)" }}
                  >
                    <RequestPageIcon fontSize="large" />
                  </IconButton>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography fontWeight="bold">Request Payment</Typography>
                  <Typography variant="body2">
                    Generate a private crypto request link
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid md={4} item>
            <Card
              variant="outlined"
              sx={[
                {
                  borderRadius: 4,
                  height: "100%",
                  cursor: "pointer",
                },
                {
                  "&:hover": {
                    background: "rgba(239, 108, 0, 0.08)",
                  },
                },
              ]}
            >
              <CardContent sx={{ padding: 3, display: "flex", gap: 2 }}>
                <Box>
                  <IconButton
                    color="primary"
                    sx={{ background: "rgba(239, 108, 0, 0.08)" }}
                  >
                    <AccountBalanceIcon fontSize="large" />
                  </IconButton>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography fontWeight="bold">Borrow</Typography>
                  <Typography variant="body2">
                    Use your crypto holdings as collateral
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={8}>
            <TableContainer
              sx={{ borderRadius: 4, height: "100%" }}
              component={Paper}
            >
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="left">Assets</TableCell>
                    <TableCell align="left">Balance</TableCell>
                    <TableCell align="left">Credit Available</TableCell>
                    <TableCell align="left">APR</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {assetBalances.map((item, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>
                        <IconButton
                          color="success"
                          sx={[
                            {
                              background: "rgba(102, 187, 106, 0.08)",
                            },
                            {
                              "&:hover": {
                                background: "rgba(255, 255, 255, 0.08)",
                              },
                            },
                          ]}
                        >
                          <MonetizationOnIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <Box>{item.name}</Box>
                        <Box>{`${item.percentage}%`}</Box>
                      </TableCell>
                      <TableCell align="left">
                        <Box>{item.balance}</Box>
                        <Box>{`$${item.balanceAmount}`}</Box>
                      </TableCell>
                      <TableCell align="left">{`$${item.creditAvailable}`}</TableCell>
                      <TableCell align="left">{`${item.apr}%`}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          color="primary"
                          sx={[
                            {
                              background: "rgba(239, 108, 0, 0.08)",
                              mr: 1,
                            },
                            {
                              "&:hover": {
                                background: "rgba(255, 255, 255, 0.08)",
                              },
                            },
                          ]}
                        >
                          <GetAppIcon />
                        </IconButton>
                        <IconButton
                          color="primary"
                          sx={[
                            {
                              background: "rgba(239, 108, 0, 0.08)",
                            },
                            {
                              "&:hover": {
                                background: "rgba(255, 255, 255, 0.08)",
                              },
                            },
                          ]}
                        >
                          <UploadIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item md={4}>
            <Card variant="outlined" sx={{ borderRadius: 4, height: "100%" }}>
              <CardHeader subheader="Transaction History" />
              <Paper sx={{ height: "100%" }}>
                <CardContent sx={{ padding: 3 }}>
                  <TableContainer>
                    <Table size="medium">
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell>Amount</TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>01/01/2021</TableCell>
                          <TableCell>$10</TableCell>
                          <TableCell align="right">
                            <IconButton
                              color="info"
                              sx={[
                                {
                                  background: "rgba(41, 182, 246, 0.08)",
                                },
                                {
                                  "&:hover": {
                                    background: "rgba(255, 255, 255, 0.08)",
                                  },
                                },
                              ]}
                            >
                              <OpenInNewIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>01/01/2021</TableCell>
                          <TableCell>$20</TableCell>
                          <TableCell align="right">
                            <IconButton
                              color="info"
                              sx={[
                                {
                                  background: "rgba(41, 182, 246, 0.08)",
                                },
                                {
                                  "&:hover": {
                                    background: "rgba(255, 255, 255, 0.08)",
                                  },
                                },
                              ]}
                            >
                              <OpenInNewIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>01/01/2021</TableCell>
                          <TableCell>$30</TableCell>
                          <TableCell align="right">
                            <IconButton
                              color="info"
                              sx={[
                                {
                                  background: "rgba(41, 182, 246, 0.08)",
                                },
                                {
                                  "&:hover": {
                                    background: "rgba(255, 255, 255, 0.08)",
                                  },
                                },
                              ]}
                            >
                              <OpenInNewIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>01/01/2021</TableCell>
                          <TableCell>$40</TableCell>
                          <TableCell align="right">
                            <IconButton
                              color="info"
                              sx={[
                                {
                                  background: "rgba(41, 182, 246, 0.08)",
                                },
                                {
                                  "&:hover": {
                                    background: "rgba(255, 255, 255, 0.08)",
                                  },
                                },
                              ]}
                            >
                              <OpenInNewIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>01/01/2021</TableCell>
                          <TableCell>$50</TableCell>
                          <TableCell align="right">
                            <IconButton
                              color="info"
                              sx={[
                                {
                                  background: "rgba(41, 182, 246, 0.08)",
                                },
                                {
                                  "&:hover": {
                                    background: "rgba(255, 255, 255, 0.08)",
                                  },
                                },
                              ]}
                            >
                              <OpenInNewIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                        {/* <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell>01/01/2021</TableCell>
                          <TableCell>$60</TableCell>
                          <TableCell align="right">
                            <IconButton
                              color="info"
                              sx={[
                                {
                                  background: "rgba(41, 182, 246, 0.08)",
                                },
                                {
                                  "&:hover": {
                                    background: "rgba(255, 255, 255, 0.08)",
                                  },
                                },
                              ]}
                            >
                              <OpenInNewIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow> */}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Paper>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default DashboardPage;
