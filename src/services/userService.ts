import { api } from "./api";
import { User } from "../types/api";

export const fetchUsers = async (): Promise<User[]> =>
  (await api.get("/auth/users")).data.data;

export const updateUser = async (
  id: string,
  data: Partial<User>
): Promise<User> => (await api.put(`/auth/update/${id}`, data)).data.user;

export const deleteUser = async (id: string): Promise<void> =>
  (await api.delete(`/auth/delete/${id}`)).data;
