/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../services/authService";
import { Box, Button, TextField, Typography, MenuItem } from "@mui/material";

const SignupForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await signup(form);
      if (res.token) {
        localStorage.setItem("token", res.token);
        alert("Signup successful");
        navigate("/"); // ✅ Redirect to Home Page
      }
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: 400, mx: "auto", mt: 6 }}
    >
      <Typography variant="h5" gutterBottom>
        Signup
      </Typography>
      <TextField
        label="Name"
        name="name"
        fullWidth
        margin="normal"
        value={form.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        fullWidth
        margin="normal"
        value={form.email}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        margin="normal"
        value={form.password}
        onChange={handleChange}
      />
      <TextField
        select
        label="Role"
        name="role"
        value={form.role}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="user">User</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
      </TextField>
      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
        Signup
      </Button>
    </Box>
  );
};

export default SignupForm;
