/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { setAuthToken } from "../../services/api";
import { Box, Button, TextField, Typography } from "@mui/material";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      if (res.token) {
        setAuthToken(res.token);
        localStorage.setItem("token", res.token);
        alert("Login successful");
        navigate("/"); // ✅ Redirect to Home Page
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: 300, mx: "auto", mt: 6 }}
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        label="Email"
        type="email"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
