import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  Container,
  Box,
  Button,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

const DashboardLayout: React.FC = () => {
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
                Celo
              </Box>
            </Button>

            <Menu
              anchorEl={accountsContextMenuEl}
              open={isAccountContextMenuOpen}
              onClose={handleAccountMenuClose}
            >
              <MenuItem onClick={handleAccountMenuClose}>Celo</MenuItem>
              <MenuItem onClick={handleAccountMenuClose}>Fantom</MenuItem>
              <MenuItem onClick={handleAccountMenuClose}>Avalanche</MenuItem>
              <MenuItem onClick={handleAccountMenuClose}>Polygon</MenuItem>
              <MenuItem onClick={handleAccountMenuClose}>Ethereum</MenuItem>
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
                0xc64b..8b4c7
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
                  0xc64bd05b4146..bf1607af8b4c7
                </Box>
              </MenuItem>
              <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>

      <Outlet />
    </Container>
  );
};

export default DashboardLayout;
