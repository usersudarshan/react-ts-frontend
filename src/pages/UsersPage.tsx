import React from "react";
import { Container, Typography, Divider } from "@mui/material";
import UserTable from "../components/Users/UserTable";

const UsersPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <UserTable />
    </Container>
  );
};

export default UsersPage;
