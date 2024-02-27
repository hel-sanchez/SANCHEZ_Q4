import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOTP } from '../actions/userActions';
import { Avatar, Button, TextField, Grid, Box, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';

const VerifyOTPScreen = ({ history }) => {
  const [otp, setOTP] = useState('');
  const dispatch = useDispatch();

  const otpVerify = useSelector((state) => state.verifyOTP);
  const { loading, error, success } = otpVerify;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(verifyOTP({ otp }));
  };

  return (
    <FormContainer>
      <>
        <Avatar sx={{ m: 1, bgcolor: 'inherit' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
          Verify OTP
        </Typography>
        <Box component="form" onSubmit={submitHandler} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="otp"
            label="Enter OTP"
            name="otp"
            autoComplete="otp"
            autoFocus
            type="text"
            onChange={(e) => setOTP(e.target.value)}
            value={otp}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderColor: 'white !important',
                backgroundColor: '#424242 !important',
              },
              "& label.Mui-focused": {
                color: 'white !important',
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: 'white !important',
              },
              "& input": {
                color: 'white !important',
                borderColor: 'white !important',
              },
              "& .MuiInputLabel-root": {
                color: 'white !important',
                borderColor: 'white !important',
              },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: 'white !important',
              },
              "& .MuiOutlinedInput-root:active": {
                color: 'white !important',
                borderColor: 'white !important',
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{
              mt: 3,
              color: 'inherit',
              borderColor: 'white !important',
            }}
          >
            Verify OTP
          </Button>
        </Box>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {success && (
          <p>
            OTP Verified Successfully! Go back to{' '}
            <Link to="/login" style={{ color: 'inherit', textDecoration: 'underline' }}>
              Sign In
            </Link>
            .
          </p>
        )}
      </>
    </FormContainer>
  );
};

export default VerifyOTPScreen;
