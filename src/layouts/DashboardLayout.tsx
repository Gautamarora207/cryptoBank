import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";

import DashboardNavbar from "../components/DashboardNavbar";

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
      <DashboardNavbar />

      <Outlet />
    </Container>
  );
};

export default DashboardLayout;
