import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";


import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import LoremTwoPage from "./pages/LoremTwoPage";
import LoremOnePage from "./pages/LoremOnePage";
import SendPage from "./pages/dashboard/SendPage";
import AccountPage from "./pages/account/AccountPage";
import DashboardLayout from "./layouts/DashboardLayout";
import ReceivePage from "./pages/dashboard/ReceivePage";
import SendReciveLayout from "./layouts/SendReciveLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AccountCreatePage from "./pages/account/AccountCreatePage";

import "./App.css";
import store from "./store/configureStore";

const App: React.FC = () => {
  return (
    <>
     
    <Provider store={store}>
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

        <Route path="/home" element={<DashboardLayout />}>
          <Route path="/home" element={<DashboardPage />} />
          <Route path="/home/send" element={<SendReciveLayout />}>
            <Route path="/home/send" element={<SendPage />} />
          </Route>
          <Route path="/home/request" element={<SendReciveLayout />}>
            <Route path="/home/request" element={<ReceivePage />} />
          </Route>
        </Route>
      </Routes>
      </Provider>
    </>
  );
};

export default App;
