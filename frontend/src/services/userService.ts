import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const userService = {
  getUsers: () =>
    api.get("/users"),

  getUser: (id: string | number) =>
    api.get(`/users/${id}`),

  createUser: (data: any) =>
    api.post("/users", data),

  updateUser: (
    id: string | number,
    data: any
  ) =>
    api.put(`/users/${id}`, data),

  deleteUser: (id: string | number) =>
    api.delete(`/users/${id}`),
};