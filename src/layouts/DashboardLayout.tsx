import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  Container,
  Box,
  Button,
  Typography,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { networkData, supportedNetworkNames } from "../constants";
import { userNetworkLoaded } from "../store/actions";


import DashboardNavbar from "../components/DashboardNavbar";

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const userAddress = useSelector((addressSelector:any) => addressSelector.user.address === undefined ? undefined : addressSelector.user.address.toLowerCase());
  
  const dispatch = useDispatch();

  const [selectedNetwork, setSelectedNetwork]= useState(0);


  useEffect(() => {
    if (userAddress === undefined) {
      navigate("/account");
    }
  });

  const [
    userContextMenuEl,
    setUserContextMenuEl,
  ] = useState<null | HTMLElement>(null);

  const isUserContextMenuOpen = Boolean(userContextMenuEl);

  const handleUserMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserContextMenuEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserContextMenuEl(null);
  };


  const onLogoutHandler = () => {
    setUserContextMenuEl(null);
    localStorage.removeItem('userCrypto');
    navigate('/account');
  }

  const [
    accountsContextMenuEl,
    setAccountsContextMenuEl,
  ] = useState<null | HTMLElement>(null);

  const isAccountContextMenuOpen = Boolean(accountsContextMenuEl);

  const handleAccountMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAccountsContextMenuEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountsContextMenuEl(null);
  };

  const handleNetworkChange = (v:any) => {
    setSelectedNetwork(v);
    dispatch(userNetworkLoaded({
      name: supportedNetworkNames[v]
    }))
    handleAccountMenuClose();
  }

  return (
    <Container maxWidth="xl">
      <Box display="flex" alignItems="center" py={2} mb={12}>
        <Box flex="1">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              fontWeight="bold"
              variant="h5"
              component="div"
              color="text.primary"
              sx={{ textTransform: "uppercase" }}
            >
              Conceal{" "}
              <Typography
                component="span"
                variant="h5"
                fontWeight="bold"
                color="primary"
              >
                Protocol
              </Typography>
            </Typography>
          </Link>
        </Box>

        <Box display="flex" flex="1" justifyContent="center" gap={2}>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Typography
              color="text.primary"
              sx={[
                {
                  "&:hover": { color: "primary.main" },
                },
              ]}
            >
              Portfolio
            </Typography>
          </Link>

          <Link to="/home/send" style={{ textDecoration: "none" }}>
            <Typography
              color="text.primary"
              sx={[
                {
                  "&:hover": { color: "primary.main" },
                },
              ]}
            >
              Send & Request
            </Typography>
          </Link>

          <Link to="/home" style={{ textDecoration: "none" }}>
            <Typography
              color="text.primary"
              sx={[
                {
                  "&:hover": { color: "primary.main" },
                },
              ]}
            >
              Docs
            </Typography>
          </Link>
        </Box>

        <Box display="flex" flex="1" justifyContent="flex-end" gap={2}>
          <Box>
            <Button
              color="primary"
              sx={{ background: "rgba(255, 255, 64, 0.08)" }}
              onClick={handleAccountMenuClick}
            >
              <LanguageIcon />
              <Box component="span" ml={1}>
             { supportedNetworkNames[selectedNetwork] }
              </Box>
            </Button>

           
            <Menu
              anchorEl={accountsContextMenuEl}
              open={isAccountContextMenuOpen}
              onClose={handleAccountMenuClose}
              defaultValue={selectedNetwork}
            >
             {supportedNetworkNames.map((network:any) => (
                <MenuItem onClick={() => handleNetworkChange(supportedNetworkNames.indexOf(network))}>{network}</MenuItem>
             ))}    
            </Menu>
          </Box>

          <Box>
            <Button
              color="primary"
              sx={{ background: "rgba(255, 255, 64, 0.08)" }}
              onClick={handleUserMenuClick}
            >
              <PersonOutlineIcon />
              <Box component="span" ml={1}>
                { userAddress === undefined ? '' : userAddress.slice(0,5) + '...' + userAddress.slice(9,12) }
              </Box>
            </Button>

            <Menu
              anchorEl={userContextMenuEl}
              open={isUserContextMenuOpen}
              onClose={handleUserMenuClose}
            >
              <MenuItem onClick={handleUserMenuClose}>
                <PersonOutlineIcon />
                <Box component="span" ml={1}>
                  { userAddress }
                </Box>
              </MenuItem>
              <MenuItem onClick={onLogoutHandler}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box> 
      </Box>

      <Outlet />
    </Container>
  );
};

export default DashboardLayout;
