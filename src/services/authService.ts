import { api } from "./api";
import { AuthResponse, User } from "../types/api";

export const login = async (data: {
  email: string;
  password: string;
}): Promise<AuthResponse> => (await api.post("/auth/login", data)).data;

export const signup = async (
  data: Partial<User> & { password: string }
): Promise<AuthResponse> => (await api.post("/auth/signup", data)).data;

export const getProfile = async (): Promise<User> =>
  (await api.get("/auth/profile")).data;
