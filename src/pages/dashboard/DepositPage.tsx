import { ChainId } from "@celo-tools/use-contractkit";
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
} from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SendReceiveSvg from "../../assets/images/hero.png";
import { CURRENCY_MAP } from "../../constants";
import { doDeposit } from "../../hooks/doDeposit";
import { useDeposit } from "../../hooks/writeContract";
import { getNotes } from "../../utils/notes";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import Loader from "react-loader-spinner";

const injected = new InjectedConnector({
  supportedChainIds: [3, 4], // Change according to supported Network Ids
});

const DepositPage: React.FC = () => {
  const userAddress = useSelector(
    (addressSelector: any) => addressSelector.user.address
  );
  const [activatingConnector, setActivatingConnector] = useState();

  const { account, activate, connector, library } = useWeb3React();

  const [selectedCurrencyIndex, setCurrencyIndex] = useState(0);
  const [amount, setAmount] = useState("0");
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const privateKey: any = localStorage.getItem("userPrivateKey");

  let userNetwork = useSelector(
    (networkSelector: any) => networkSelector.user.network
  );

  let currentSupportedCurrencies = Object.keys(
    CURRENCY_MAP[userNetwork.chainId]
  );
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  async function getNotesForDeposit() {
    if (userNetwork.chainId == ChainId.Mainnet) {
      const notes: any = getNotes(
        amount,
        currentSupportedCurrencies[selectedCurrencyIndex],
        userNetwork.chainId
      );
      setNotes(notes.notes);
      initiateDeposit();
    } else {
      try {
        // @ts-ignore
        setActivatingConnector(injected);
        activate(injected);
        await doDeposit(
          {
            ...userNetwork,
            rpcUrl:
              "https://rinkeby.infura.io/v3/21b3f11d70d8469c99acd11e95427c3f",
          },
          amount.toString(),
          userAddress,
          enqueueSnackbar,
          setIsLoading
        );
      } catch (e: any) {
        enqueueSnackbar(e.message, {
          variant: "error",
          anchorOrigin: { horizontal: "center", vertical: "top" },
        });
      }
    }
  }

  async function initiateDeposit() {
    if (userNetwork.chainId == ChainId.Mainnet) {
      try {
        deposit(privateKey).then((v) => console.log(v));
      } catch (e) {
        console.error(e);
      }
    } else {
    }
  }

  const [txHash, deposit, depositLoading] = useDeposit(
    notes.map((note: { noteString: any }) => note.noteString)
  );
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
                    <InputLabel>
                      {" "}
                      <Typography variant="body2">Currency</Typography>
                    </InputLabel>
                    <Select
                      onChange={(v: any) => {
                        setCurrencyIndex(v.target.value);
                      }}
                      defaultValue={0}
                      label="Currency"
                    >
                      {currentSupportedCurrencies.map((item, index) => (
                        <MenuItem key={index} value={index}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                      label="Amount"
                      variant="outlined"
                      type="number"
                      onChange={(v: any) => {
                        setAmount(v.target.value);
                      }}
                      inputProps={{ inputMode: "numeric", min: 0 }}
                      InputLabelProps={{
                        style: { color: "#fff" },
                      }}
                    />
                  </FormControl>

                  <Box>
                    <Button
                      onClick={getNotesForDeposit}
                      variant="contained"
                      disabled={isLoading}
                    >
                      {" "}
                      {isLoading ? (
                        <Loader
                          type="ThreeDots"
                          color="#000000"
                          height={10}
                          width={20}
                        />
                      ) : (
                        "Connect Wallet"
                      )}
                    </Button>
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
  );
};

export default DepositPage;
