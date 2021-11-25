import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import DashboardNavbar from "../components/DashboardNavbar";

const DashboardLayout: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <DashboardNavbar />

      <Outlet />
    </Container>
  );
};

export default DashboardLayout;
