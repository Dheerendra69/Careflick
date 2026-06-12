export const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:4000/api";

export const FORM_TYPES = {
  HEALTH: "health-assessment",
  INCIDENT: "incident-report",
};