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

import SendReceiveSvg from "../../assets/images/hero.png";

const SendPage: React.FC = () => {
  const [
    isTransactionSettingsModalOpen,
    setIsTransactionSettingsModalOpen,
  ] = useState(false);

  const handleTransactionSettingsModalClose = () => {
    setIsTransactionSettingsModalOpen(false);
  };

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

        <Grid container>
          <Grid item md={5}>
            <Box>
              <Card variant="outlined" sx={{ borderRadius: 4, height: "100%" }}>
                <Paper sx={{ height: "100%" }}>
                  <CardContent sx={{ padding: 3 }}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <TextField
                        label="Recipient address"
                        variant="outlined"
                        placeholder="Enter wallet address or .nom"
                      />
                    </FormControl>

                    <Box mb={2} display="flex" gap={2}>
                      <FormControl>
                        <InputLabel>Currency</InputLabel>
                        <Select defaultValue="cUSD" label="Currency">
                          <MenuItem value="CELO">CELO</MenuItem>
                          <MenuItem value="cUSD">cUSD</MenuItem>
                          <MenuItem value="cEUR">cEUR</MenuItem>
                        </Select>
                      </FormControl>

                      <FormControl sx={{ flexGrow: 1 }}>
                        <TextField
                          label="Amount"
                          variant="outlined"
                          type="number"
                          inputProps={{ inputMode: "numeric", min: 0 }}
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

          <Grid item md={7} display="flex" justifyContent="center">
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
