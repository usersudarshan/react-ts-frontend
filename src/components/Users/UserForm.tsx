import React, { useState } from "react";
import { updateUser } from "../../services/userService";
import { Box, Button, TextField, Typography } from "@mui/material";

interface Props {
  userId: string;
}

const UserForm: React.FC<Props> = ({ userId }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUser(userId, form);
    alert("User updated");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: 400, mx: "auto", mt: 6 }}
    >
      <Typography variant="h6">Edit User</Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        margin="normal"
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Update
      </Button>
    </Box>
  );
};

export default UserForm;
