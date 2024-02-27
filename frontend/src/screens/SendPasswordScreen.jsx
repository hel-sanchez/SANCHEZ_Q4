import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userChangePasswordEmail } from "../actions/userActions";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormContainer from "../components/FormContainer";

const SendPasswordChangeRequestScreen = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const userSendChangePassword = useSelector(
    (state) => state.userSendChangePassword
  );
  const { loading, error } = userSendChangePassword;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userChangePasswordEmail(email));
  };

  return (
    <FormContainer>
      <>
        <Avatar sx={{ m: 1, bgcolor: "inherit" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: "white" }}>
          Send Password Change Request
        </Typography>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <Box
          component="form"
          onSubmit={submitHandler}
          sx={{ mt: 1, width: "100%", maxWidth: 400 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: "white !important",
                backgroundColor: "#424242 !important",
              },
              "& label.Mui-focused": {
                color: "white !important", // Change label color when focused
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white !important", // Change border color when focused
              },
              "& input": {
                color: "white !important", // Change input text color
              },
              "& .MuiInputLabel-root": {
                color: "white !important", // Change label color
              },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "white !important", // Change border color on hover
                },
              "& .MuiOutlinedInput-root:active": {
                color: "white !important",
                borderColor: "white !important",
              },
              "& .input": {
                color: "white !important",
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
            {loading ? "Sending..." : "Send Request"}
          </Button>
        </Box>
        <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
          <Grid item>
            <Typography component={Link} to="/login" sx={{ color: "white" }}>
              Back to Sign In
            </Typography>
          </Grid>
        </Grid>
      </>
    </FormContainer>
  );
};

export default SendPasswordChangeRequestScreen;
