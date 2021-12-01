import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import ERC20 from "../../abis/ERC20.json";
import SendReceiveSvg from "../../assets/images/hero.png";
import { useSelector } from "react-redux";
import { AbiItem, isAddress } from "web3-utils";
import { CURRENCY_MAP } from "../../constants";
import { sendTrx } from "../../hooks/sendTrx";

const SendPage: React.FC = () => {
  const [
    isTransactionSettingsModalOpen,
    setIsTransactionSettingsModalOpen,
  ] = useState(false);

  const handleTransactionSettingsModalClose = () => {
    setIsTransactionSettingsModalOpen(false);
  };

  const userAddress = useSelector((addressSelector:any) => addressSelector.user.address);

  const [selectedCurrencyIndex, setCurrencyIndex ] = useState(0);
  const [amount, setAmount ] = useState("0");
  const [notes, setNotes] = useState([]);

  const [receiverAddress, setReceiverAddress] = useState("0x5050d1f28B0c4ACD15710C176f6ACDDc01B2ba27");

  const privateKey :any = localStorage.getItem("userPrivateKey");
  
  let userNetwork = useSelector((networkSelector:any) => networkSelector.user.network );

  let currentSupportedCurrencies = Object.keys(CURRENCY_MAP[userNetwork.chainId]);
  
  sendTrx(privateKey ,"10", userAddress, receiverAddress);

  return (
    <>
      <Box>
        <Box mb={3}>
          <Typography variant="h5" component="div">
            Send
          </Typography>
          <Typography variant="body2" component="div">
            Send crypto privately to any user.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box>
              <Card variant="outlined" sx={{ borderRadius: 4, height: "100%" }}>
                <Paper sx={{ height: "100%" }}>
                  <CardContent sx={{ padding: 3 }}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <TextField
                        label="Recipient address"
                        variant="outlined"
                        placeholder="Enter wallet address or .nom"
                        InputLabelProps={{
                          style: { color: '#fff' },
                        }}
                      />
                    </FormControl>

                    <Box mb={2} display="flex" gap={2}>
                      <FormControl>
                        <InputLabel><Typography variant="body2">Currency</Typography></InputLabel>
                        <Select  onChange={(v:any) => {
                            setCurrencyIndex(v.target.value);
                          }} defaultValue={0} label="Currency">
                        {currentSupportedCurrencies.map((item, index) => (
                          <MenuItem key={index} value={index}>{item}</MenuItem>
                        ))}
                        </Select>
                      </FormControl>

                      <FormControl sx={{ flexGrow: 1 }}>
                        <TextField
                          label="Amount"
                          variant="outlined"
                          type="number"
                          onChange={(v:any) => {setAmount(v.target.value)}}
                          inputProps={{ inputMode: "numeric", min: 0 }}
                          InputLabelProps={{
                            style: { color: '#fff' },
                          }}
                        />
                      </FormControl>
                    </Box>

                    <Box mb={2}>
                      <Button
                        size="small"
                        color="primary"
                        sx={{ background: "rgba(255, 255, 64, 0.08)" }}
                        onClick={() => setIsTransactionSettingsModalOpen(true)}
                      >
                        <SettingsIcon sx={{ mr: 1 }} /> Show transaction
                        settings
                      </Button>
                    </Box>

                    <Box>
                      <Button variant="contained">Send</Button>
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

      <Dialog
        onClose={handleTransactionSettingsModalClose}
        open={isTransactionSettingsModalOpen}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          Transaction settings{" "}
          <IconButton
            aria-label="close"
            onClick={handleTransactionSettingsModalClose}
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

        <DialogContent>
          <Box mt={1} mb={2}>
            <FormControl fullWidth>
              <InputLabel>Relayer</InputLabel>
              <Select defaultValue="1" label="Relayer">
                <MenuItem value="1">https://test.com</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button
            variant="outlined"
            onClick={handleTransactionSettingsModalClose}
          >
            Save
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SendPage;
