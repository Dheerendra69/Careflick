import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2, "Name is required"),

  email: z
    .string()
    .email("Invalid email address"),

  phone: z
    .string()
    .min(10, "Phone number is required"),
});

export type UserFormData =
  z.infer<typeof userSchema>;