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
import React from "react";

import SendReceiveSvg from "../../assets/images/hero.png";

const DepositPage: React.FC = () => {
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
                    <Select defaultValue="cUSD" label="Currency">
                      <MenuItem value="CELO">CELO</MenuItem>
                      <MenuItem value="cUSD">cUSD</MenuItem>
                      <MenuItem value="cEUR">cEUR</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth sx={{ mb: 2 }}>
                    <TextField
                      label="Amount"
                      variant="outlined"
                      type="number"
                      inputProps={{ inputMode: "numeric", min: 0 }}
                    />
                  </FormControl>

                  <Box>
                    <Button variant="contained">Connect Wallet</Button>
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
