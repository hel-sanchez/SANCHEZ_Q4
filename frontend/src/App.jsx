import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileScreen from "./screens/ProfileScreen";
import VerifyOTPScreen from "./screens/VerifyOTPScreen";
import SendPasswordScreen from "./screens/SendPasswordScreen";
import ConfirmPasswordChangeScreen from "./screens/ConfirmChangePassScreen";
import UpdatePasswordScreen from "./screens/UpdatePasswordScreen";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact/>
              <Route path='login/' element={<LoginScreen />} />
              <Route path='register/' element={<RegisterScreen />} />
              <Route path='profile/' element={<ProfileScreen />} />
              <Route path="/verify-otp" element={<VerifyOTPScreen />} />
              <Route path="/send-password-reset" element={<SendPasswordScreen />} />
              <Route path="/reset-password/:uid/:token" element={<ConfirmPasswordChangeScreen />} />
              <Route path="/change-password" element = {<UpdatePasswordScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
