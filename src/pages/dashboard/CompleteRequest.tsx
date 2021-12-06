import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import CloseIcon from "@mui/icons-material/Close";
  import SendReceiveSvg from "../../assets/images/hero.png";
  import { useDispatch, useSelector } from "react-redux";
  import { useSnackbar } from "notistack";
  import { CURRENCY_MAP } from "../../constants";
  import { networkChainIds, networkGasCurrencys, networkRPCUrls, supportedNetworkNames } from "../../constants";
  import { sendTrx } from "../../hooks/sendTrx";
import { userNetworkLoaded } from "../../store/actions";

  const Web3 = require('web3');
  
  const CompleteRequest: React.FC = () => {
    const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/21b3f11d70d8469c99acd11e95427c3f"));

    const query = new URLSearchParams(window.location.search);
  
    let isAddressError: boolean;
    
    const selectedCurrencyIndex:any = query.get('currencyIndex');
    const amount = query.get('amount');
  
    const { enqueueSnackbar } = useSnackbar();
  
    const receiverAddress = query.get('receiverAddress');
  
    isAddressError = !web3.utils.isAddress(receiverAddress);
    console.log(isAddressError);

    const dispatch = useDispatch();

    const networkIndex:any = query.get('networkIndex');

    let userNetwork = useSelector(
      (networkSelector:any) => 
        networkSelector.user.network.chainId != networkChainIds[networkIndex] && networkIndex != null ?  
        dispatch(userNetworkLoaded({
          name: supportedNetworkNames[networkIndex],
          chainId: networkChainIds[networkIndex],
          gasCurrency: networkGasCurrencys[networkIndex],
          rpcUrl: networkRPCUrls[networkIndex],
    })).network : networkSelector.user.network );
    
  
    let currentSupportedCurrencies = Object.keys(CURRENCY_MAP[userNetwork.chainId]);
    
    function processTrx() {
      // if(isAddressError || amount == null || receiverAddress == null) {
      //   enqueueSnackbar("Please enter a valid address", {
      //     variant: "error",
      //     anchorOrigin: { horizontal: "center", vertical: "top" },
      //   });
      // } else {
      //   try{
      //     sendTrx(privateKey, userNetwork, amount, userAddress, receiverAddress,enqueueSnackbar );
      //   } catch(e:any) {
      //     console.error(e.message);
      //   }
      // }
    }
    
  
    return (
      <>
        <Box>
          <Box mb={3}>
            <Typography variant="h5" component="div">
            Complete Request
            </Typography>
            <Typography variant="body2" component="div">
            Complete a crypto request.
            </Typography>
          </Box>
  
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Box>
                <Card variant="outlined" sx={{ borderRadius: 4, height: "100%" }}>
                  <Paper sx={{ height: "100%" }}>
                    <CardContent sx={{ padding: 3 }}>
                      <Box mb={2} display="flex" gap={2}>
                      <Typography variant="body2">{isAddressError && receiverAddress != '' ? 'Invalid address, please try again' : ''}</Typography> 
                      </Box>
  
                      <Box mb={2} display="flex" gap={2}>
                        <FormControl>
                          <InputLabel><Typography variant="body2">Currency</Typography></InputLabel>
                          <Select defaultValue={selectedCurrencyIndex} label="Currency">
                         
                            <MenuItem key={selectedCurrencyIndex} value={selectedCurrencyIndex}>{currentSupportedCurrencies[selectedCurrencyIndex]}</MenuItem>
                         
                          </Select>
                        </FormControl>
  
                        <FormControl sx={{ flexGrow: 1 }}>
                          <TextField
                            label="Amount"
                            variant="outlined"
                            type="number"
                            value={amount}
                            inputProps={{ inputMode: "numeric", min: 0 }}
                            InputLabelProps={{
                              style: { color: '#fff' },
                            }}
                          />
                        </FormControl>
                      </Box>
  
                      <Box>
                        <Button variant="contained"  onClick={() => processTrx()}>Connect Wallet</Button>
                      </Box>
                    </CardContent>
                  </Paper>
                </Card>
              </Box>
            </Grid>
  
            <Grid
              item
              xs={12}
              md={7}
              display={{ xs: "none", md: "flex" }}
              justifyContent="center"
            >
              <Box
                width="auto"
                height="350px"
                component="img"
                src={SendReceiveSvg}
              />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };
  
  export default CompleteRequest;
  