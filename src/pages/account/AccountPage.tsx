import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const Web3 = require('web3');


const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [privateKey, setPrivateKey] = useState("");
  const [password, setPassword] = useState("");
  const [openPasswordDialog, setOpen] = useState(false);
  const [loginWithPassword, setLoginWithPassword] = useState(true);
  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const encryptPrivateKey = () => {
    const keystoreJsonV3 = web3.eth.accounts.encrypt(privateKey, password);
    console.log(keystoreJsonV3);
    
    navigate("/");
  }

  const onLoginHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const account =  web3.eth.accounts.privateKeyToAccount('0x'+privateKey);
    console.log(account);
    handleClickOpen();
    // navigate("/home");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      px={{ xs: 2, sm: 4, md: 6, lg: 12 }}
      height="100%"
    >
      <Typography component="h1" variant="h5">
        Log In
      </Typography>

      <Typography component="p" variant="body1" color="text-secondary">
       {!loginWithPassword ? "Enter your Morphose private key* to enter your Morphose account" : "Enter your password to unlock your Morphose wallet" } 
      </Typography>

      <Box component="form" onSubmit={onLoginHandler} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label={loginWithPassword ? "Password" : "Private Key"}
          value={privateKey}
          onChange={(v) => {
            loginWithPassword ? setPassword(v.target.value) : setPrivateKey(v.target.value);
          }}
          placeholder={loginWithPassword ? "Enter password" : "Enter your private key"} 
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Log In
        </Button>
          {
            loginWithPassword ? 
            <Button
            fullWidth
            onClick={
              () => { setLoginWithPassword(false);}
            }
           
            variant="outlined"
            sx={{ mt: 1, mb: 1 }}
          >
            Log Out
          </Button> : <div></div>
          }
        

        <Box
          my={3}
          textAlign="center"
          sx={{
            position: "relative",
            height: 10,
            borderBottom: ".1px solid #ccc",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "background.paper",
              top: -8,
              py: 0.5,
              px: 1,
              display: "inline-block",
            }}
          >
            Or
          </Box>
        </Box>

        <Link to="/account/create" style={{ textDecoration: "none" }}>
          <Button
            component="div"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
          >
            Create A Wallet
          </Button>
        </Link>
        {loginWithPassword ? <div></div> : 
      <Typography component="p" variant="body2" color="text-secondary">
         *Your key never leaves the browser and stays encrypted at rest. If
          this is your first time here, you are encouraged to create a new Poof
          wallet rather than use a private key from an existing wallet.
        </Typography>
        }
        
      </Box>
      <Dialog open={openPasswordDialog} onClose={handleClose}>
        <DialogTitle>Enter account password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a password to encrypt and save your private key to local
            storage.
          </DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            label="Password"
            type="password"
            onChange={(v) => {
              setPassword(v.target.value);
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={encryptPrivateKey} variant="contained">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
    
  );
};

export default AccountPage;
