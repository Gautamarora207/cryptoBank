import {
  Grid,
  Box,
  Card,
  Paper,
  CardContent,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Dialog,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";

import SendReceiveSvg from "../../assets/images/hero.png";

const ReceivePage: React.FC = () => {
  const [isGenerateLinkModalOpen, setIsGenerateLinkModalOpen] = useState(false);

  const handleGenerateLinkModalClose = () => {
    setIsGenerateLinkModalOpen(false);
  };

  return (
    <>
      <Box>
        <Box mb={3}>
          <Typography variant="h5" component="div">
            Request
          </Typography>
          <Typography variant="body2" component="div">
            Generate a private crypto request link
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
                      <Button
                        variant="contained"
                        onClick={() => setIsGenerateLinkModalOpen(true)}
                      >
                        Generate Link
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

      <Dialog
        onClose={handleGenerateLinkModalClose}
        open={isGenerateLinkModalOpen}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <Box textAlign="center" mt={1} mb={2}>
            <CircularProgress
              sx={{ height: "150px !important", width: "150px !important" }}
            />
          </Box>
          <Typography variant="h6" component="div" textAlign="center">
            Please Wait
          </Typography>

          <Typography variant="body2" component="div" textAlign="center">
            This process takes usually approx. 2 minutes
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReceivePage;
