import React, { useEffect, useState } from "react";
import { fetchMovies, deleteMovie } from "../../services/movieService";
import { Movie } from "../../types/api";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableContainer,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const MovieTable: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadData = async () => {
    const data = await fetchMovies();
    setMovies(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteMovie(id);
    loadData();
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell>{movie.title}</TableCell>
              <TableCell>{movie.director}</TableCell>
              <TableCell>{movie.year}</TableCell>
              <TableCell>{movie.rating}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleDelete(movie.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MovieTable;
