import {
  Box,
  Button,
  Card,
  CardContent,
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
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import GetAppIcon from "@mui/icons-material/GetApp";
import UploadIcon from "@mui/icons-material/Upload";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, connect, useDispatch } from "react-redux";
import { networkSelector } from '../../store/selectors';
import { useTokenBalance } from "../../hooks/useTokenBalance";
import { CURRENCY_MAP, networkChainIds, networkGasCurrencys, supportedNetworkNames } from "../../constants";
import { userNetworkLoaded } from "../../store/actions";


const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const userAddress = useSelector((addressSelector:any) => addressSelector.user.address);

  const [address, setAddress] = useState(userAddress === undefined ? "" : userAddress);
  const [balance, setBalance ] = useState(0);

  let balances = [];

  

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

  const wallets = [
    {
      title: "Valora",
      description:
        "Connect to valora, a mobile payments app that works worldwide",
      image: "https://via.placeholder.com/50",
    },
    {
      title: "Install Celo Extension Wallet",
      description: "Use a wallet from the celo chrom extension",
      image: "https://via.placeholder.com/50",
    },
    {
      title: "Ledger",
      description: "Sync with your ledger hardware wallet",
      image: "https://via.placeholder.com/50",
    },
    {
      title: "Install MetaMask",
      description: "Use the metamask chrome extension",
      image: "https://via.placeholder.com/50",
    },
  ];

  const dispatch = useDispatch();

  let userNetwork = useSelector(
    (networkSelector:any) => 
      networkSelector.user.network === undefined ?  
      dispatch(userNetworkLoaded({
        name: supportedNetworkNames[0],
        chainId: networkChainIds[0],
        gasCurrency: networkGasCurrencys[0],
  })).network : networkSelector.user.network );
  

  // for(let i = 0; i < CURRENCY_MAP[userNetwork.chainId].length)
  
  useTokenBalance(
    CURRENCY_MAP[userNetwork.chainId][userNetwork.gasCurrency.toLowerCase()],
    userNetwork.gasCurrency.toLowerCase(),
    address
  ).then((v) => setBalance(v));


  useEffect(() => {
  }, [userNetwork]);

  const [isConnectWalletModalOpen, setIsConnectWalletModalOpen] = useState(
    userAddress === undefined ? false : true
  );

  const handleConnectWalletModalClose = () => {
    setIsConnectWalletModalOpen(false);
  };

  return (
    <>
      <Box mb={12}>
        <Typography variant="h6" component="div" mb={3}>
          Your Wallet
        </Typography>
        <Grid container spacing={4} mb={4}>
          <Grid xs={12} sm={6} lg={4} item>
            <Card variant="outlined" sx={{ borderRadius: 4, height: "100%" }}>
              <Paper sx={{ height: "100%" }}>
                <CardContent sx={{ padding: 3 }}>
                  <Typography mb={1} variant="body2" sx={{ color: "#aaa" }}>
                    Wallet Balance
                  </Typography>
                  <Typography mb={2} variant="h4" component="div">
                    {userNetwork.gasCurrency+" " +balance} 
                  </Typography>
                  <Link to="/home/deposit" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      disableElevation
                      size="small"
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <GetAppIcon fontSize="small" />
                      Deposit
                    </Button>
                  </Link>
                </CardContent>
              </Paper>
            </Card>
          </Grid>

          <Grid xs={12} sm={6} lg={4} item>
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
        </Grid>

        <Grid container spacing={4} mb={4}>
          <Grid xs={12} sm={6} lg={4} item>
            <Link to="/home/send" style={{ textDecoration: "none" }}>
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
                      background: "rgba(255, 255, 64, 0.08)",
                    },
                  },
                ]}
              >
                <CardContent sx={{ padding: 3, display: "flex", gap: 2 }}>
                  <Box>
                    <IconButton
                      color="primary"
                      sx={{ background: "rgba(255, 255, 64, 0.08)" }}
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
            </Link>
          </Grid>

          <Grid xs={12} sm={6} lg={4} item>
            <Link to="/home/request" style={{ textDecoration: "none" }}>
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
                      background: "rgba(255, 255, 64, 0.08)",
                    },
                  },
                ]}
              >
                <CardContent sx={{ padding: 3, display: "flex", gap: 2 }}>
                  <Box>
                    <IconButton
                      color="primary"
                      sx={{ background: "rgba(255, 255, 64, 0.08)" }}
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
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <TableContainer
              sx={{ borderRadius: 4, height: "25%", minHeight:"150px" }}
              component={Paper}
              variant="outlined"
            >
              <Table size="medium">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="left">Assets</TableCell>
                    <TableCell align="left">Balance</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow
                      key={0}
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
                        <Box>{userNetwork.gasCurrency}</Box>
                        {/* <Box>{`${item.percentage}%`}</Box> */}
                      </TableCell>
                      <TableCell align="left">
                        <Box>{balance}</Box>
                        {/* <Box>{`$${item.balanceAmount}`}</Box> */}
                      </TableCell>
                      <TableCell align="right">
                        <IconButton
                          color="primary"
                          sx={[
                            {
                              background: "rgba(255, 255, 64, 0.08)",
                              mr: 1,
                            },
                            {
                              "&:hover": {
                                background: "rgba(255, 255, 255, 0.02)",
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
                              background: "rgba(255, 255, 64, 0.08)",
                            },
                            {
                              "&:hover": {
                                background: "rgba(255, 255, 255, 0.2)",
                              },
                            },
                          ]}
                        >
                          <UploadIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  {/* {assetBalances.map((item, index) => (
                
                  ))} */}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={12} md={4}>
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

      <Dialog
        onClose={handleConnectWalletModalClose}
        open={isConnectWalletModalOpen}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>
          Connect a wallet{" "}
          <IconButton
            aria-label="close"
            onClick={handleConnectWalletModalClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          {wallets.map((wallet, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              gap={2}
              px={1}
              py={1}
              sx={[
                { cursor: "pointer", borderRadius: 2 },
                {
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.08)",
                  },
                },
              ]}
            >
              <img src={wallet.image} alt={wallet.title} />
              <Box>
                <Typography fontWeight="bold">{wallet.title}</Typography>
                <Typography variant="body2">{wallet.description}</Typography>
              </Box>
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
};

function mapStateToProps(state:any) {
  return {
    network: networkSelector(state)
  }
}

export default connect(mapStateToProps)(DashboardPage);
