import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userConfirmChangePassword } from "../actions/userActions";
import { useParams, Link } from "react-router-dom";
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormContainer from "../components/FormContainer";

const ConfirmPasswordChangeScreen = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();
  const { uid, token } = useParams();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(userConfirmChangePassword(password, password2, uid, token));
      setSuccessMessage("Password changed successfully");
    } catch (error) {}
  };

  return (
    <FormContainer>
      <>
        <Avatar sx={{ m: 1, bgcolor: "inherit" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: "white" }}>
          Confirm Password Change
        </Typography>
        {successMessage ? (
          <>
            <Typography variant="body1" sx={{ color: "green" }}>
              {successMessage}
            </Typography>
            <p>
              OTP Verified Successfully! Go back to{" "}
              <Link
                to="/login"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                Sign In
              </Link>
              .
            </p>
          </>
        ) : (
          <Box
            component="form"
            onSubmit={submitHandler}
            sx={{ mt: 1, width: "100%", maxWidth: 400 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="New Password"
              name="password"
              type="password"
              autoComplete="new-password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
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
                },
                "& .MuiInputLabel-root": {
                  color: "white !important",
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
              id="password2"
              label="Confirm Password"
              name="password2"
              type="password"
              autoComplete="confirm-password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              variant="outlined"
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
                },
                "& .MuiInputLabel-root": {
                  color: "white !important",
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
                mb: 2,
                color: "inherit",
                borderColor: "white !important",
              }}
            >
              Confirm
            </Button>
          </Box>
        )}
      </>
    </FormContainer>
  );
};

export default ConfirmPasswordChangeScreen;
