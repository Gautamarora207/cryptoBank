import React, { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, TextField, Button, Box } from "@mui/material";

const AccountPage: React.FC = () => {
  const navigate = useNavigate();

  const onLoginHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/home");
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
        Enter your Poof private key* to enter your Poof account
      </Typography>

      <Box component="form" onSubmit={onLoginHandler} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Private Key"
          placeholder="Enter your private key"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Log In
        </Button>

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

        <Typography component="p" variant="body2" color="text-secondary">
          *Your key never leaves the browser and stays encrypted at rest. If
          this is your first time here, you are encouraged to create a new Poof
          wallet rather than use a private key from an existing wallet.
        </Typography>
      </Box>
    </Box>
  );
};

export default AccountPage;
