import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Container, Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const userAddress = useSelector((addressSelector:any) => addressSelector.user.address === undefined ? undefined : addressSelector.user.address.toLowerCase());
  console.log(userAddress);

  useEffect(() => {
    if(userAddress === undefined) {
      navigate('/account');
    }
  });

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
              Semilla{" "}
              <Typography
                component="span"
                variant="h5"
                fontWeight="bold"
                color="primary"
              >
                Labs
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
          <Link to="/home/loans" style={{ textDecoration: "none" }}>
            <Typography
              color="text.primary"
              sx={[
                {
                  "&:hover": { color: "primary.main" },
                },
              ]}
            >
              Loans
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
          <Button
            color="primary"
            sx={{ background: "rgba(239, 108, 0, 0.08)" }}
          >
            <LanguageIcon />
            <Box component="span" ml={1}>
              Celo
            </Box>
          </Button>
          <Button
            color="primary"
            sx={{ background: "rgba(239, 108, 0, 0.08)" }}
          >
            <PersonOutlineIcon />
            <Box component="span" ml={1}>
              {userAddress === undefined ? " ": userAddress.slice(0, 6) + "..." + userAddress.slice(8, 12)}
            </Box>
          </Button>
        </Box>
      </Box>

      <Outlet />
    </Container>
  );
};

export default DashboardLayout;
