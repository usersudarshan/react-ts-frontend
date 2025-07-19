import { api } from "./api";
import { Movie } from "../types/api";

export const fetchMovies = async (): Promise<Movie[]> =>
  (await api.get("/api/movies")).data.data;

export const createMovie = async (movie: Partial<Movie>): Promise<Movie> =>
  (await api.post("/api/movies", movie)).data.movie;

export const updateMovie = async (
  id: string,
  data: Partial<Movie>
): Promise<Movie> => (await api.put(`/api/movies/${id}`, data)).data.movie;

export const deleteMovie = async (id: string): Promise<Movie> =>
  (await api.delete(`/api/movies/${id}`)).data.movie;
