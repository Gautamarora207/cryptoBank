import React from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
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
import DepositPage from "./pages/dashboard/DepositPage";
import SendReciveLayout from "./layouts/SendReciveLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AccountCreatePage from "./pages/account/AccountCreatePage";
import Modal from "react-modal";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "./App.css";

import themeOptions from "./config/themeOptions";
import { useConcealThemeContext } from "./context/ConcealTheme";
import store from "./store/configureStore";
import CompleteRequest from "./pages/dashboard/CompleteRequest";

const App: React.FC = () => {
  const {
    state: { isDarkMode },
  } = useConcealThemeContext();

  React.useEffect(() => {
    Modal.setAppElement("body");
  });

  const theme = createTheme({
    ...themeOptions,
    palette: {
      ...themeOptions.palette,
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />

        <Routes>

        <Route path="/" element={<DashboardLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/send" element={<SendReciveLayout />}>
              <Route path="/send" element={<SendPage />} />
            </Route>
            <Route path="/request" element={<SendReciveLayout />}>
              <Route path="/request" element={<ReceivePage />} />
            </Route>
            <Route path="/deposit" element={<DepositPage />} />
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
            <Route path="/home/deposit" element={<DepositPage />} />
          </Route>

          <Route path="/complete-request" element={<DashboardLayout />}>
            <Route path="/complete-request" element={<CompleteRequest />} />
          </Route>
        </Routes>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
