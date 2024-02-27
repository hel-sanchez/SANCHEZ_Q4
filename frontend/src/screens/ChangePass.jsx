// ChangePassScreen.jsx

import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";

function ChangePassScreen() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const userLogin = useSelector((state) => state.userLogin.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogin) {
      navigate("/");
    }
  }, [userLogin, navigate]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === userLogin.password) {
      setMessage("New password should be different from the current password");
      return;
    }
    setMessage("Password changed successfully");
  };

  return (
    <FormContainer>
      <>
        <Avatar sx={{ m: 1, bgcolor: "inherit" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: "white" }}>
          Change Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
            type="password"
            id="password"
            autoComplete="new-password"
            onChange={handlePasswordChange}
            value={password}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "white !important",
                backgroundColor: "#424242 !important",
              },
              "& label.Mui-focused": {
                color: "white !important",
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white !important",
              },
              "& input": {
                color: "white !important",
                borderColor: "white !important",
              },
              "& .MuiInputLabel-root": {
                color: "white !important",
                borderColor: "white !important",
              },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "white !important",
                },
              "& .MuiOutlinedInput-root:active": {
                color: "white !important",
                borderColor: "white !important",
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="confirm-password"
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "white !important",
                backgroundColor: "#424242 !important",
              },
              "& label.Mui-focused": {
                color: "white !important",
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white !important",
              },
              "& input": {
                color: "white !important",
                borderColor: "white !important",
              },
              "& .MuiInputLabel-root": {
                color: "white !important",
                borderColor: "white !important",
              },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "white !important",
                },
              "& .MuiOutlinedInput-root:active": {
                color: "white !important",
                borderColor: "white !important",
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{
              mt: 3,
              color: "inherit",
              borderColor: "white !important",
            }}
          >
            Change Password
          </Button>
        </Box>
        <p style={{ color: "white" }}>{message}</p>
        <Grid container justifyContent="flex-end">
          <Grid item>
            {userLogin && (
              <Typography component={Link} to="/login" sx={{ color: "white" }}>
                Back to Sign In
              </Typography>
            )}
          </Grid>
        </Grid>
      </>
    </FormContainer>
  );
}

export default ChangePassScreen;
