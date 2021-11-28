import { ChainId, images, SupportedProviders } from "@celo-tools/use-contractkit";
import { defaultScreens } from "@celo-tools/use-contractkit/lib/screens";
import {
  Box,
  Typography,
  Grid,
  Card,
  Paper,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SendReceiveSvg from "../../assets/images/hero.png";
import { CURRENCY_MAP } from "../../constants";
import { useDeposit } from "../../hooks/writeContract";
import { getNotes } from "../../utils/notes";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";


const DepositPage: React.FC = () => {
  const userAddress = useSelector((addressSelector:any) => addressSelector.user.address);

  const [selectedCurrencyIndex, setCurrencyIndex ] = useState(0);
  const [amount, setAmount ] = useState("0");
  const [notes, setNotes] = useState([]);

  const privateKey :any = localStorage.getItem("userPrivateKey");

  let userNetwork = useSelector((networkSelector:any) => networkSelector.user.network );

  let currentSupportedCurrencies = Object.keys(CURRENCY_MAP[userNetwork.chainId]);
 

  function getNotesForDeposit() {
    

    if(userNetwork.chainId == ChainId.Mainnet) {
      const notes:any = getNotes(amount,currentSupportedCurrencies[selectedCurrencyIndex], userNetwork.chainId);
      setNotes(notes.notes);    
      console.log(notes.notes);
    } else {
      console.log('other networks');
    }
    doDeposit();
  }

  async function doDeposit() {
    deposit(privateKey).then((v) => console.log(v));
  }

  const [txHash, deposit, depositLoading] = useDeposit(
    notes.map((note: { noteString: any; }) => note.noteString)
  );


  const [isConnectWalletModalOpen, setIsConnectWalletModalOpen] = useState(
    false
  );

  const handleConnectWalletModalClose = () => {
    setIsConnectWalletModalOpen(false);
  };

  return (
    <Box>
      <Box mb={3}>
        <Typography variant="h5" component="div">
          Deposit
        </Typography>
        <Typography variant="body2" component="div">
          Deposit funds into your private savings account
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Box>
            <Card variant="outlined" sx={{ borderRadius: 4, height: "100%" }}>
              <Paper sx={{ height: "100%" }}>
                <CardContent sx={{ padding: 3 }}>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel>Currency</InputLabel>
                    <Select onChange={(v:any) => {
                      setCurrencyIndex(v.target.value);
                    }} defaultValue={0} label="Currency">
                    {currentSupportedCurrencies.map((item, index) => (
                      <MenuItem key={index} value={index}>{item}</MenuItem>
                    ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                      label="Amount"
                      variant="outlined"
                      type="number"
                      onChange={(v) => {setAmount(v.target.value)}}
                      inputProps={{ inputMode: "numeric", min: 0 }}
                    />
                  </FormControl>

                  <Box>
                    <Button onClick={getNotesForDeposit} variant="contained">Connect Wallet</Button>
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
          {Object.values(SupportedProviders).map((wallet:any, index) => (
         
            <Box
              key={index}
              display="flex"
              alignItems="center"
              gap={2}
              px={1}
              py={1}
              onClick={() => {
                let _a:any = {
                  onSubmit : ()=>{}
                };
                // const comp:any = defaultScreens[wallet](_a);
                // console.log(comp);
              }}
              sx={[
                { cursor: "pointer", borderRadius: 2 },
                {
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.08)",
                  },
                },
              ]}
            >
              {/* <img src={wallet.image} alt={wallet.title} /> */}
              <Box>
                <Typography fontWeight="bold">{wallet}</Typography>
                <Typography variant="body2">{}</Typography>
              </Box>
              {Object.values(images)[index]}
              {/* <img src={Object.values(images)[index]} alt={wallet} /> */}
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DepositPage;
