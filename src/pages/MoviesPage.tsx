import React from "react";
import { Container, Typography, Divider, Stack } from "@mui/material";
import MovieTable from "../components/Movies/MovieTable";
import MovieForm from "../components/Movies/MovieForm";

const MoviesPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>
        Movies
      </Typography>
      <Divider />
      <Stack direction="column" spacing={4} sx={{ mt: 4 }}>
        <MovieForm />
        <MovieTable />
      </Stack>
    </Container>
  );
};

export default MoviesPage;
