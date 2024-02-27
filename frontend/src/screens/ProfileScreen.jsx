import React, { useEffect, useRef } from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin.userInfo);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (userLogin === null) {
      navigate("/");
    }
  }, [userLogin]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Upload logic here:", file);
  };

  const handleProfileClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 8, color: "inherit" }}>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          marginTop: 8,
          backgroundColor: "inherit",
          color: "white",
        }}
      >
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <Avatar
              alt={userLogin ? userLogin.username : ""}
              src="/static/images/avatar/2.jpg"
              sx={{ width: 80, height: 80, cursor: "pointer" }}
              onClick={handleProfileClick}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept="image/*"
            />
          </Grid>
          <Grid item xs={12} container justifyContent="center">
            <Typography variant="h5" gutterBottom>
              {userLogin ? userLogin.username : null}
            </Typography>
          </Grid>
          <Grid item xs={12} container justifyContent="center">
            <Typography variant="body1">
              {userLogin ? userLogin.email : null}
            </Typography>
          </Grid>

          <Grid item xs={12} container justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/change-password"
              sx={{ marginTop: 2, backgroundColor: "inherit", borderColor: "white" }}
            >
              Change Password
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProfileScreen;
