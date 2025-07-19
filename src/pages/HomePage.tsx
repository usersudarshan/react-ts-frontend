import React from "react";
import { Container, Typography, Box } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Movie Manager
        </Typography>
        <Typography variant="body1">
          This is a simple full-stack application to manage users and movies,
          integrated with a secure authentication backend.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
