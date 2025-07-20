import React, { useState } from "react";
import { createMovie } from "../../services/movieService";
import { Box, Button, TextField, Typography } from "@mui/material";

const MovieForm: React.FC = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    director: "",
    year: "",
    rating: "",
    image: "",
    cast: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.rating) {
      alert("Rating is required");
      return;
    }

    try {
      const movie = {
        title: form.title,
        description: form.description,
        director: form.director,
        year: parseInt(form.year, 10),
        rating: form.rating,
        image: form.image,
        cast: form.cast.split(",").map((c) => c.trim()),
      };
      await createMovie(movie);
      alert("Movie created");
    } catch (error) {
      console.error(error);
      alert("Failed to create movie");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: 500, mx: "auto", mt: 4 }}
    >
      <Typography variant="h6" gutterBottom>
        Add Movie
      </Typography>
      <TextField
        fullWidth
        label="Title"
        name="title"
        value={form.title}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={form.description}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Director"
        name="director"
        value={form.director}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Year"
        name="year"
        value={form.year}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Rating"
        name="rating"
        value={form.rating}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Image URL"
        name="image"
        value={form.image}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Cast (comma-separated)"
        name="cast"
        value={form.cast}
        onChange={handleChange}
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default MovieForm;
