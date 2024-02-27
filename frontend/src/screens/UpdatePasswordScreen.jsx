import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdatePassword } from '../actions/userActions';
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormContainer from '../components/FormContainer';

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await dispatch(userUpdatePassword(oldPassword, password, password2));
      setSuccessMessage('Password updated successfully');
      setErrorMessage('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <FormContainer>
      <>
        <Avatar sx={{ m: 1, bgcolor: 'inherit' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h6" sx={{ color: 'white' }}>
          Update Password
        </Typography>
        {successMessage && (
          <p className="success-message" style={{ color: 'green' }}>
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="error-message" style={{ color: 'red' }}>
            {errorMessage}
          </p>
        )}
        <Box
          component="form"
          onSubmit={submitHandler}
          sx={{ mt: 1, width: '100%', maxWidth: 400 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="oldPassword"
            label="Old Password"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderColor: 'white !important',
                backgroundColor: '#424242 !important',
              },
              '& label.Mui-focused': {
                color: 'white !important',
              },
              '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white !important',
              },
              '& input': {
                color: 'white !important',
              },
              '& .MuiInputLabel-root': {
                color: 'white !important',
              },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'white !important',
                },
              '& .MuiOutlinedInput-root:active': {
                color: 'white !important',
                borderColor: 'white !important',
              },
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="New Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderColor: 'white !important',
                backgroundColor: '#424242 !important',
              },
              '& label.Mui-focused': {
                color: 'white !important',
              },
              '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white !important',
              },
              '& input': {
                color: 'white !important',
              },
              '& .MuiInputLabel-root': {
                color: 'white !important',
              },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'white !important',
                },
              '& .MuiOutlinedInput-root:active': {
                color: 'white !important',
                borderColor: 'white !important',
              },
            }}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="password2"
            label="Confirm Password"
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderColor: 'white !important',
                backgroundColor: '#424242 !important',
              },
              '& label.Mui-focused': {
                color: 'white !important',
              },
              '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white !important',
              },
              '& input': {
                color: 'white !important',
              },
              '& .MuiInputLabel-root': {
                color: 'white !important',
              },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'white !important',
                },
              '& .MuiOutlinedInput-root:active': {
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
              mb: 2,
              color: 'inherit',
              borderColor: 'white !important',
            }}
          >
            Update Password
          </Button>
        </Box>
      </>
    </FormContainer>
  );
};

export default UpdatePassword;
