import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const formService = {
  getForms: () => api.get("/forms"),

  getUserForms: (userId: string | number) =>
    api.get(`/forms/user/${userId}`),

  createForm: (data: any) =>
    api.post("/forms", data),

  deleteForm: (id: string) =>
    api.delete(`/forms/${id}`),
};