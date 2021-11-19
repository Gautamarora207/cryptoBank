import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import LoremTwoPage from "./pages/LoremTwoPage";
import LoremOnePage from "./pages/LoremOnePage";
import AccountPage from "./pages/account/AccountPage";
import AccountCreatePage from "./pages/account/AccountCreatePage";

import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/lorem1" element={<LoremOnePage />} />
          <Route path="/lorem2" element={<LoremTwoPage />} />
        </Route>

        <Route path="/account" element={<AuthLayout />}>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/create" element={<AccountCreatePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
